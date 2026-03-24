import { Error_Interface } from "@config/interfaces/error.interface"
import { add_favourite_video_function_params, add_favourite_video_function_return } from "./add-favourite-video.interface"
import { Transaction } from "sequelize"
import { FavouriteVideo } from "@src/models/favourite-video.model"

let add_favourite_video_function = async (data: add_favourite_video_function_params, transaction: Transaction): Promise<add_favourite_video_function_return | Error_Interface> => {
    try {
        // 1. User check
        if (!data.user?.id) {
            return { code: 401, message: 'Unauthorized' };
        }

        // 2. Already favourite hai?
        const existing = await FavouriteVideo.findOne({
            where: { user_id: data.user.id, video_id: data.video_id },
            transaction
        });

        if (existing) {
            return { code: 400, message: 'Video already in favourites' };
        }

        // 3. Favourite add karo
        await FavouriteVideo.create({
            user_id: data.user.id,
            video_id: data.video_id,
        }, { transaction });

        return {
            code: 201,
            message: 'Video added to favourites'
        }

    } catch (error: any) {
        return { code: 400, message: error.message || 'Error adding favourite video' }
    }
}

export default add_favourite_video_function
