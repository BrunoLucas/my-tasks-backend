const express = require('express')

module.exports = function(server) {

    const router = express.Router()

    server.use('/api', router)

    const taskService = require('../api/task/taskService')
    taskService.register(router, '/tasks')

    
     
}