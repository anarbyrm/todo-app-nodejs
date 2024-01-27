const Task = require('../models/tasks');

exports.getAllTasks = (req, res, next) => {
    Task
    .findAll({
        order: [
            ['status', 'ASC'],
            ['createdAt', 'ASC']
        ]
    })
    .then(tasks => {
        res.render('tasks/list', {tasks, pageTitle: 'Tasks'});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.createTask = async (req, res, next) => {
    const title = req.body.title;
    Task
    .create({ title })
    .then(task => {
        res.redirect('/tasks');
    })
    .catch(err => {
        console.log(err);
    });

    // async/await example

    // try {
    //     await Task.create({ title });
    //     res.redirect('/tasks');
    // } catch (err) {
    //     console.log(err);
    // }
};

exports.updateTask = (req, res, next) => {
    
};

exports.deleteTask = (req, res, next) => {
    const taskId = req.params.taskId
    Task
    .findByPk(taskId)
    .then(task => {
        return task.destroy();
    })
    .then(() => {
        res.redirect("/tasks");
    })
    .catch(err => {
        console.log(err);
    })
};

exports.changeTaskStatus = (req, res, next) => {
    const taskId = req.params.taskId
    Task
        .findByPk(taskId)
        .then(task => {
            return task.update({ status: !task.status})
        })
        .then(task => {
            res.redirect('/tasks');
        })
        .catch(err => {
            console.log(err);
        });
};
