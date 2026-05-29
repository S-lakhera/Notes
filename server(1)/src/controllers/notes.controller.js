import { fetchAllNotesService, fetchNoteByIdService, noteCreationService, updateNoteService } from "../services/notes.service.js"

// Create new Note controller
export const creatNoteController = async (req, res) => {
    try {
        let note = await noteCreationService(req.body)

        res.status(201).json({
            success: true,
            message: "Note created successfully.",
            note
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const getAllNotesController = async (req, res) => {
    try {
        let notes = await fetchAllNotesService();

        return res.status(200).json({
            success: true,
            message: "Notes Fetched successfully",
            notes
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

export const getNoteByIdController = async (req, res) => {
    try {
        let { id } = req.params;
        if (!id) {
            return res.status(404).json({
                message: "Id not found",
                success: false,
            })
        }
        let note = await fetchNoteByIdService(id)

        return res.status(200).json({
            message: "Note fetched successfully",
            success: true,
            note
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}
export const updateNoteController = async (req, res) => {
    try {
        let { id } = req.params;
        if (!id) {
            return res.status(404).json({
                message: "Id not found",
                success: false,
            })
        }
        let note = await updateNoteService(id, req.body)

        return res.status(200).json({
            message: "Note fetched successfully",
            success: true,
            note
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}