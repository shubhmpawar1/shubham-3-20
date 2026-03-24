import { Error_Interface } from "@config/interfaces/error.interface"
import { edit_video_note_function_params, edit_video_note_function_return } from "./edit-video-note.interface"
import { Transaction } from "sequelize"
import { VideoNote } from "@src/models/video-note.model"

let edit_video_note_function = async (data: edit_video_note_function_params, transaction: Transaction): Promise<edit_video_note_function_return | Error_Interface> => {
    try {

        if (!data.user?.id) return { code: 401, message: 'Unauthorized' }

        const note = await VideoNote.findOne({
            where: { id: data.note_id, user_id: data.user.id },
            transaction
        })

        if (!note) return { code: 404, message: 'Note not found' }

        await note.update({ note: data.note }, { transaction })

        return {
            code: 200,
            message: 'Note updated successfully',
            data: note
        }

    } catch (error: any) {
        console.log('Edit Video Note Error: ', error)
        return { code: 400, message: error.message || 'Error in Edit Video Note Function' }
    }
}

export default edit_video_note_function