const task = require('./task')

task.methods(['get', 'post', 'put', 'delete'])
task.updateOptions({new: true, runValidators: true})

module.exports = task