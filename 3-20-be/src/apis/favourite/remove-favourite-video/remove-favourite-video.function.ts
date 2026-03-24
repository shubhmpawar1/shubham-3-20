import { Error_Interface } from "@config/interfaces/error.interface"
import { remove_favourite_video_function_params, remove_favourite_video_function_return } from "./remove-favourite-video.interface"
import { Transaction } from "sequelize"
import { FavouriteVideo } from "@src/models/favourite-video.model"

let remove_favourite_video_function = async (data: remove_favourite_video_function_params, transaction: Transaction): Promise<remove_favourite_video_function_return | Error_Interface> => {
    try {
        // 1. User check
        if (!data.user?.id) {
            return { code: 401, message: 'Unauthorized' };
        }

        // 2. Favourite exist karta hai?
        const existing = await FavouriteVideo.findOne({
            where: { user_id: data.user.id, video_id: data.video_id },
            transaction
        });

        if (!existing) {
            return { code: 400, message: 'Video not found in favourites' };
        }

        // 3. Favourite remove karo
        await existing.destroy({ transaction });

        return {
            code: 200,
            message: 'Video removed from favourites'
        }

    } catch (error: any) {
        return { code: 400, message: error.message || 'Error removing favourite video' }
    }
}

export default remove_favourite_video_function
