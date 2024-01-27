const express = require('express');
const router = express.Router();

const taskControllers = require('../controllers/tasks');

router.get('/', taskControllers.getAllTasks);
router.post('/', taskControllers.createTask);
router.post('/:taskId/done', taskControllers.changeTaskStatus);
// router.post('/:taskId/update', taskControllers.updateTask);
// router.post('/:taskId/delete', taskControllers.deleteTask);

module.exports = router;
