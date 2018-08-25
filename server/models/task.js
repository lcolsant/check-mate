const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({

    task:{
      type:String,
      required:[true,'You must provide a task'],
      trim: true,  
    },

    priority:{
        type:Number,
        required:[true, 'You must provide a priority'],
        trim: true,
    },

    status:{
        type:String,
        default:"not done",
        required:[true, 'You must provide a status'],
        trim: true,
    },
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('Task', taskSchema);