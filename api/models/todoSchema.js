import mongoose from 'mongoose';

var schema = mongoose.Schema;

var todoSchema = new schema({
    body: String
});

var Todo = mongoose.model('Todo', todoSchema);

export default Todo;
