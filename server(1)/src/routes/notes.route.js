import express from "express"
import { creatNoteController } from "../controllers/notes.controller.js";
const router = express.Router();


/**
 * @route   POST /api/notes
 * @desc    Create a new note
 * @aceess  Public
 */
router.post("/",creatNoteController)

export default router