import express  from 'express';
import Roach    from 'roachjs';

var router = express.Router();

var db = new Roach({
    uri: 'http://localhost:5432',
    http: require('http')
});

db.put("todo_sequence", new Buffer(0), (err) => {});

router.get('/', (req, res) => {
    db.scan("todos.0", "todos.9999999", 100, (err, rows) => {
        var todos = rows.map(row => {
            var key  = row.key.toBuffer().toString();
            var body = row.value.bytes.toBuffer().toString();
            var id = key.split('.')[1];

            return { _id: id, body: body };
        });

        res.json(todos);
    });
});

router.post('/', (req, res) => {
    var body = new Buffer( req.body.body, 'utf-8' );

    db.prepare();

    db.increment('todo_sequence', 1, (err, newValue) => {
        var id = newValue.toString();

        db.put("todos." + id, body, (err) => {
            res.json({ _id: id, body: body.toString() });
        });
    });

    db.flush();
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;

    db.prepare();
    db.delete('todos.' + id, (err) => {
        res.json({ todo: id });
    });
    db.flush();
});

export default router;
