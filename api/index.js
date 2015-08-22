export default (app) => {
    app.use('/api/todos', require('./resources/todos'));
};
