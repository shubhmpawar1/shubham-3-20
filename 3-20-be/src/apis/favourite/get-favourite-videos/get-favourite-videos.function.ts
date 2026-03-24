import { Error_Interface } from "@config/interfaces/error.interface"
import { get_favourite_videos_function_params, get_favourite_videos_function_return } from "./get-favourite-videos.interface"
import { Transaction } from "sequelize"
import { FavouriteVideo } from "@src/models/favourite-video.model"
import { Video } from "@src/models/video.model"

let get_favourite_videos_function = async (data: get_favourite_videos_function_params, transaction: Transaction): Promise<get_favourite_videos_function_return | Error_Interface> => {
    try {
        // 1. User check
        if (!data.user?.id) {
            return { code: 401, message: 'Unauthorized' }
        }

        const page = data.page || 1
        const page_size = data.page_size || 10
        const sort_by = data.sort_by || 'createdAt'
        const sort_order = data.sort_order || 'DESC'
        const offset = (page - 1) * page_size

        // 2. Total count
        const total = await FavouriteVideo.count({
            where: { user_id: data.user.id },
            transaction
        })

        // 3. Favourite videos fetch karo with video details
        const favourites = await FavouriteVideo.findAll({
            where: { user_id: data.user.id },
            include: [
                {
                    model: Video,
                    as: 'video'
                }
            ],
            order: [[sort_by, sort_order]],
            limit: page_size,
            offset: offset,
            transaction
        })

        return {
            code: 200,
            message: 'Get Favourite Videos Successful',
            data: {
                videos: favourites,
                total,
                page,
                page_size,
                total_pages: Math.ceil(total / page_size)
            }
        }

    } catch (error: any) {
        console.log('Get Favourite Videos Error: ', error)
        return { code: 400, message: error.message || 'Error in Get Favourite Videos Function' }
    }
}

export default get_favourite_videos_function