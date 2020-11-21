const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

//MongoDB localhost connection
//mongoose.connect('mongodb://localhost:27017/tasks');

//MongoDB hosted connnection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@checkmate-db1.vxetp.mongodb.net/checkmate-db1?retryWrites=true&w=majority`);

mongoose.connection.on('connected', ()=>console.log('Connected to MongoDB...'));

fs.readdirSync(modelsPath).forEach(file => {
    if(reg.test(file)){
        require(path.join(modelsPath, file));
    }
})