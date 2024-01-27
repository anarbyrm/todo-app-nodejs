const express = require('express');
const router = express.Router();

const taskControllers = require('../controllers/tasks');

router.get('/', taskControllers.getAllTasks);
router.post('/', taskControllers.createTask);
router.get('/:taskId', taskControllers.getTask);
router.post('/:taskId/done', taskControllers.changeTaskStatus);
router.post('/:taskId/edit', taskControllers.updateTask);
router.post('/:taskId/delete', taskControllers.deleteTask);

module.exports = router;
