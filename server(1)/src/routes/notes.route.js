import express from "express"
import { creatNoteController, getAllNotesController } from "../controllers/notes.controller.js";
const router = express.Router();


/**
 * @route   POST /api/notes
 * @desc    Create a new note
 * @aceess  Public
 */
router.post("/",creatNoteController)


/**
 * @route   GET /api/notes
 * @desc    Fetch all notes from database
 * @aceess  Public
 */
router.get("/",getAllNotesController)

export default router