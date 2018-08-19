import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new note
router.route('/notes').post(NoteController.addNote);

// Delete the note from the line
router.route('/notes/:laneId/:noteId').delete(NoteController.deleteNote);

// Edit note
router.route('/notes').put(NoteController.updateNote);


export default router;
