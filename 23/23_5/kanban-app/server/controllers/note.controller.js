import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  const newNote = new Note({
    task: note.task
  });

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    Lane.findOne({ id: laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNote(req, res) {
  Note.findOne({ id: req.params.noteId}).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }
    const noteObjectId = note._id;
    note.remove(() => {
      Lane.findOne( {id: req.params.laneId})
        .then(lane => {
          lane.notes.pull(noteObjectId);
          lane.save()
            .then(() => {
              res.status(200).end();
            })
            .catch(err => {
              res.status(500).send(err);
            });
        });
    });
  });
}

export function updateNote(req, res) {
  Note.findOneAndUpdate( {id: req.body.id}, {$set:{task: req.body.task}}, {new: true}, (err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
}