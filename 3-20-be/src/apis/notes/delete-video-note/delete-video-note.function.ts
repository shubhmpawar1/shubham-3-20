import { Error_Interface } from "@config/interfaces/error.interface"
import { delete_video_note_function_params, delete_video_note_function_return } from "./delete-video-note.interface"
import { Transaction } from "sequelize"
import { VideoNote } from "@src/models/video-note.model"

let delete_video_note_function = async (data: delete_video_note_function_params, transaction: Transaction): Promise<delete_video_note_function_return | Error_Interface> => {
    try {
        if (!data.user?.id) return { code: 401, message: 'Unauthorized' }

        const note = await VideoNote.findOne({
            where: { id: data.note_id, user_id: data.user.id },
            transaction
        })

        if (!note) return { code: 404, message: 'Note not found' }

        await note.destroy({ transaction })

        return {
            code: 200,
            message: 'Note deleted successfully',
        }

    } catch (error: any) {
        console.log('Delete Video Note Error: ', error)
        return { code: 400, message: error.message || 'Error in Delete Video Note Function' }
    }
}

export default delete_video_note_function