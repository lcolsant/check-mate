const { taskController } = require('../controllers');


const router = require('express').Router()

router
  .get('/', taskController.index)
  .post('/', taskController.create)
  .put('/:task_id', taskController.update)
  .delete('/:task_id', taskController.destroy)

module.exports = router;