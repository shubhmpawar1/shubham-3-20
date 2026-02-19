import { Error_Interface } from "@config/interfaces/error.interface"
import { get_onboarding_questions_function_params, get_onboarding_questions_function_return } from "./get-onboarding-questions.interface"
import { Transaction } from "sequelize"
import { OnboardingQuestion } from "@src/models/onboarding-question.model"
import { OnboardingAnswer } from "@src/models/onboarding-answer.model"

let get_onboarding_questions_function = async (data: get_onboarding_questions_function_params, transaction: Transaction): Promise<get_onboarding_questions_function_return | Error_Interface> => {
    try {
        const questions = await OnboardingQuestion.findAll({
            transaction,
            include: [{
                model: OnboardingAnswer,
                as: 'answers',
                attributes: ['id', 'answer_text', 'createdAt', 'updatedAt']
            }],
            attributes: ['id', 'question', 'createdAt', 'updatedAt']
        })

        return {
            code: 200,
            message: 'Onboarding Questions fetched Successfully',
            data: questions
        }
    } catch (error) {
        return {
            code: 500,
            message: 'Error fetching onboarding questions',
            error: error instanceof Error ? error.message : 'Unknown error'
        }
    }
}

export default get_onboarding_questions_function
