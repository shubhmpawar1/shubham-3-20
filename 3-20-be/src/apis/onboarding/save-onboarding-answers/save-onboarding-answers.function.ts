import { Error_Interface } from "@config/interfaces/error.interface"
import { save_onboarding_answers_function_params, save_onboarding_answers_function_return } from "./save-onboarding-answers.interface"
import { Transaction } from "sequelize"
import { UserOnboardingAnswer } from "@src/models/user-onboarding-answer.model"
import { User } from "@src/models/user.model"
import { Session } from "@src/models/session.model"
import { OnboardingQuestion } from "@src/models/onboarding-question.model"
import { OnboardingAnswer } from "@src/models/onboarding-answer.model"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);


let save_onboarding_answers_function = async (data: save_onboarding_answers_function_params, transaction: Transaction): Promise<save_onboarding_answers_function_return | Error_Interface> => {
    try {
        // 1. User exist karta hai?
        const user = await User.findOne({
            where: { id: data.user_id },
            transaction
        });
        if (!user) return { code: 400, message: 'User not found' };

        // 2. Pehle se answers save hai?
        const existingAnswers = await UserOnboardingAnswer.findOne({
            where: { user_id: data.user_id },
            transaction
        });
        if (existingAnswers) return { code: 400, message: 'Onboarding answers already saved' };

        // 3. Answers save karo
        await UserOnboardingAnswer.create({
            user_id: data.user_id,
            answers: data.answers
        }, { transaction });

        // 4. Questions + Answers readable format me fetch karo
        const questions = await OnboardingQuestion.findAll({
            include: [{
                model: OnboardingAnswer,
                as: 'answers'
            }],
            transaction
        });

        // 5. User ke answers readable format me banao
        let userAnswersText = '';
        for (const question of questions as any[]) {
            const questionAnswerIds = data.answers[question.id] || [];
            if (questionAnswerIds.length === 0) continue;

            const selectedAnswers = question.answers
                .filter((ans: any) => questionAnswerIds.includes(ans.id))
                .map((ans: any) => ans.answer_text);

            userAnswersText += `Q: ${question.question}\nA: ${selectedAnswers.join(', ')}\n\n`;
        }

        // 6. Saare sessions fetch karo
        const sessions = await Session.findAll({ transaction });
        const sessionsText = (sessions as any[]).map(s =>
            `ID: ${s.id} | Title: ${s.title} | Description: ${s.description} | Tags: ${(s.tags || []).join(', ')}`
        ).join('\n');

        // 7. Gemini ko bhejo
        const prompt = `
You are a session recommendation engine for elderly users doing physiotherapy and movement sessions.

Based on the user's onboarding answers below, recommend the MOST relevant video sessions from the available list.

User's Onboarding Answers:
${userAnswersText}

Available Sessions:
${sessionsText}

Rules:
- Recommend MAXIMUM 4 sessions only
- Order them from most relevant to least relevant
- Consider user's pain areas, health conditions, energy levels and preferences
- Return ONLY a JSON array of session IDs. Example: [3, 1, 5, 2]
- Do not include any explanation, just the JSON array.
`;

        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const aiResponse = await model.generateContent(prompt);
        const aiText = aiResponse.response.text().trim();

        // 8. AI response parse karo — markdown backticks remove karo
        const cleanText = aiText.replace(/```json|```/g, '').trim();
        const recommendedIds: number[] = JSON.parse(cleanText);

        // 9. Recommended sessions fetch karo
        const recommendedSessions = await Session.findAll({
            where: { id: recommendedIds },
            transaction
        });

        // Order maintain karo jo AI ne diya
        const orderedSessions = recommendedIds.map(id =>
            (recommendedSessions as any[]).find(s => s.id === id)
        ).filter(Boolean);

        return {
            code: 201,
            message: 'Onboarding answers saved successfully',
            data: {
                suggested_sessions: orderedSessions
            }
        };
    } catch (error: any) {
        console.log('Save Onboarding Answers Error: ', error);
        return { code: 400, message: error.message || 'Error in Save Onboarding Answers Function' }
    }
}

export default save_onboarding_answers_function