import { noteCreationService } from "../services/notes.service.js"

// Create new Note controller
export let creatNoteController = async (req, res) => {
    try {
        let response = await noteCreationService(req.body)
        console.log(response);
        
        res.status(201).json({
            success:true,
            message:"User created successfully."
        })
    } catch (err) {
        res.status(501).json({
            message: err.message,
            success : false,
        })
    }
}

