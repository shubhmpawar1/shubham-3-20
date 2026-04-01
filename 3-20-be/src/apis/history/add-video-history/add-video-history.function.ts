import { Error_Interface } from "@config/interfaces/error.interface"
import { add_video_history_function_params, add_video_history_function_return } from "./add-video-history.interface"
import { Transaction } from "sequelize"
import { UserVideoHistory } from "@src/models/user-video-history.model"
import { Video } from "@src/models/video.model"

let add_video_history_function = async (data: any, transaction: Transaction): Promise<add_video_history_function_return | Error_Interface> => {
    try {
        const user_id = data.user.id;

        // 1. Check if video exists
        const existingVideo = await Video.findOne({
            where: { id: data.video_id },
            transaction
        });

        if (!existingVideo) {
            return { code: 400, message: 'Video not found' };
        }

        // 2. Create the video history record
        const historyRecord = await UserVideoHistory.create({
            user_id: user_id,
            video_id: data.video_id,
            session_id: data.session_id ?? null,
            status: data.status ?? 'completed',
        }, { transaction });

        return {
            code: 200,
            message: 'Video history recorded successfully',
            data: { history: historyRecord.toJSON() }
        };

    } catch (error: any) {
        return { code: 400, message: error.message || 'Error in Add Video History Function' }
    }
}

export default add_video_history_function