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

    note:{
        type:String,
        trim: true,
    },

    owner_id:{
        type:String,
        required:true,
    },
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('Task', taskSchema);

