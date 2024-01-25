const fs = require('fs');
const path = require('path');

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