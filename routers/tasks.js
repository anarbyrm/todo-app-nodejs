const express = require('express');
const router = express.Router();

const taskControllers = require('../controllers/tasks');

router.get('/', taskControllers.getAllTasks);
router.post('/:taskId/done', taskControllers.changeTaskStatus);

module.exports = router;
