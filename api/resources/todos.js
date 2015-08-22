import express  from 'express';
import mongoose from 'mongoose';
import Todo     from '../models/todoSchema';

var router = express.Router();

router.get('/', (req, res) => {
    Todo.find({}).exec()
        .then(todos => {
            res.json(todos);
        });
});

router.get('/:id', (req, res) => {
    Todo.find({'_id': req.params.id}).exec()
        .then(todo => res.json(todo));
});

router.delete('/:id', (req, res) => {
    Todo.remove({_id: req.params.id})
        .then(todo => res.json({ todo: req.params.id }) )
        .catch(err => res.send(err));
});

router.post('/', (req,res) => {
    var newTodo = new Todo(req.body);
    newTodo.save(err => {
        if( err )
            res.send(err);

        res.json(newTodo.toObject());
    });
}); 

export default router;
