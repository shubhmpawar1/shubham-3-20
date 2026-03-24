import { Error_Interface } from "@config/interfaces/error.interface"
import { video_feedback_function_params, video_feedback_function_return } from "./video-feedback.interface"
import { Transaction } from "sequelize"
import { VideoFeedback } from "@src/models/video-feedback.model"

let video_feedback_function = async (data: video_feedback_function_params, transaction: Transaction): Promise<video_feedback_function_return | Error_Interface> => {
    try {
        // 1. video_id ya session_id mein se kam se kam ek zaroori hai
        if (!data.video_id && !data.session_id) {
            return { code: 400, message: 'Please provide either video_id or session_id' };
        }
        // 2. User check karo
        if (!data.user?.id) {
            return { code: 401, message: 'Unauthorized' };
        }

        // 3. Feedback save karo
        await VideoFeedback.create({
            user_id: data.user.id,
            video_id: data.video_id || null,
            session_id: data.session_id || null,
            rating: data.rating,
            adjustments: data.adjustments ?? [],
        }, { transaction });

        return {
            code: 201,
            message: 'Feedback submitted successfully'
        }

    } catch (error: any) {
        return { code: 400, message: error.message || 'Error submitting feedback' }
    }
}

export default video_feedback_function