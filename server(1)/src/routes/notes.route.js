import express from "express"
import { creatNoteController, getAllNotesController, getNoteById } from "../controllers/notes.controller.js";
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

/**
 * @route   GET /api/notes/:id
 * @desc    Fetch one note from database
 * @aceess  Public
 */
router.get("/:id",getNoteById)

export default router