const fs = require('fs');
const path = require('path');

const helpers = require('../utils/helpers');
const Task = require('../models/tasks');

exports.getAllTasks = (req, res, next) => {
    Task
    .findAll()
    .then(tasks => {
        console.log(tasks)
        res.render('tasks/list', {tasks, pageTitle: 'Tasks'});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.changeTaskStatus = (req, res, next) => {
    const taskId = req.params.taskId
    helpers.updateTaskStatus(taskId, () => {
        return res.redirect('/tasks');
    });
};
