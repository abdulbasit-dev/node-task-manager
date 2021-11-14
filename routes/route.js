const Router = require('express').Router();

const TaskController = require('../controllers/TaskController');

//task routes 
// Router.get('/tasks', TaskController.index);
// Router.get('/tasks/:id', TaskController.show);
// Router.post('/tasks', TaskController.store);
// Router.put('/tasks/:id', TaskController.update);
// Router.delete('/tasks/:id', TaskController.destroy);
Router.route('/task').get(TaskController.index).post(TaskController.store);
Router.route('/task/:id').get(TaskController.show).put(TaskController.update).delete(TaskController.destroy);

module.exports = Router;
