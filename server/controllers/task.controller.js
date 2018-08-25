const Task = require('mongoose').model('Task');

module.exports = {

    //get all tasks
    index(request, response){
        Task.find({})
            .then(tasks => response.json(tasks))
            .catch(console.log)
    },

    //create a task
    create(request, response){
        Task.create(request.body)
            .then(task => response.json(task))
            .catch(error => {
                response
                    .status(500)
                    .json(
                        Object.keys(error.errors).map(key => error.errors[key])
                    );
            })
    },

    //update a task
    update(request, response){
        Task.findByIdAndUpdate(request.params.task_id, request.body, {new:true})
            .then(task => response.json(task))
            .catch(console.log)

    },

    //delete a task
    destroy(request, response){
        Task.findByIdAndRemove(request.params.task_id)
            .then(task => response.json(task))
            .catch(console.log)
    },
}