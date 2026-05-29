import { fetchAllNotesService, noteCreationService } from "../services/notes.service.js"

// Create new Note controller
export const creatNoteController = async (req, res) => {
    try {
        let note = await noteCreationService(req.body)
        
        res.status(201).json({
            success:true,
            message:"Note created successfully.",
            note
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
            success : false,
        })
    }
}

export const getAllNotesController = async(req,res) => {
    try {
        let notes = await fetchAllNotesService();

        return res.status(200).json({
            success:true,
            message:"Notes Fetched successfully",
            notes
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
            success : false,
        })
    }
}