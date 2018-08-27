const taskRoute = require('./task.routes');
const authRoutes = require('./auth.routes');
const router = require('express').Router();
module.exports = router.use('/auth', authRoutes).use('/tasks', taskRoute)