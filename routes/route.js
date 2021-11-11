const Router = require('express').Router();

const TaskController = require('../controllers/TaskController');

//task routes 
Router.get('/tasks', TaskController.index);
Router.get('/tasks/:id', TaskController.show);
Router.post('/tasks', TaskController.store);
Router.put('/tasks/:id', TaskController.update);
Router.delete('/tasks/:id', TaskController.destroy);

module.exports = Router;
