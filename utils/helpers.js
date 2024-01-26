const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'tasks.json');
let tasks = [];

exports.getTaskById = (id, callback) => {
    fs.readFile(filePath, (err, data) => {
        tasks = JSON.parse(data);
        if (!err) {
            const task = tasks.find(p => p.id == id);
            callback(task);
        };
    });
};

exports.updateTaskStatus = (id, callback) => {
    this.getTaskById(id, (task) => {
        task.status = !task.status;
        tasks = tasks.filter(task => task.id != id)
        const newTasks = [...tasks, task].sort((a, b) => a.id - b.id);
        fs.writeFile(filePath, JSON.stringify(newTasks), (err, data) => {});
        callback();
    });
};
