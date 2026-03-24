import { Error_Interface } from "@config/interfaces/error.interface"
import { save_video_note_function_params, save_video_note_function_return } from "./save-video-note.interface"
import { Transaction } from "sequelize"
import { VideoNote } from "@src/models/video-note.model"

let save_video_note_function = async (data: save_video_note_function_params, transaction: Transaction): Promise<save_video_note_function_return | Error_Interface> => {
    try {
        if (!data.user?.id) return { code: 401, message: 'Unauthorized' }

        const note = await VideoNote.create({
            user_id: data.user.id,
            video_id: data.video_id,
            note: data.note,
        }, { transaction })

        return {
            code: 201,
            message: 'Note saved successfully',
            data: note
        }

    } catch (error: any) {
        console.log('Save Video Note Error: ', error)
        return { code: 400, message: error.message || 'Error in Save Video Note Function' }
    }
}

export default save_video_note_function