const fs = require('fs');
const path = require('path');

const helpers = require('../utils/helpers');

exports.getAllTasks = (req, res, next) => {
    const filePath = path.join(__dirname, '..', 'data', 'tasks.json');
    fs.readFile(filePath, (err, data) => {
        if (!err) {
            const tasks = JSON.parse(data);
            res.render('tasks/list', {tasks, pageTitle: 'Tasks'});
        } else {
            console.error(err);
        };
    });
};

exports.changeTaskStatus = (req, res, next) => {
    const taskId = req.params.taskId
    helpers.updateTaskStatus(taskId, () => {
        return res.redirect('/tasks');
    });
};
