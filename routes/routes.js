import express from "express"
import { createNote, deleteNote, getNotes, updateNote } from "../controllers/note.controller.js"

const router = express.Router()

router.post("/create", createNote)
router.get("/get-notes", getNotes)
router.put("/update/:id", updateNote)
router.delete("/delete/:id", deleteNote)

export default router