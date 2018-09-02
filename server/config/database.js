const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

//MongoDB localhost connection
// mongoose.connect('mongodb://localhost:27017/tasks');

//MongoDB hosted connnection
mongoose.connect('mongodb://lcolsant:admin1@ds239682.mlab.com:39682/checkmate-db1');

mongoose.connection.on('connected', ()=>console.log('Connected to MongoDB...'));

fs.readdirSync(modelsPath).forEach(file => {
    if(reg.test(file)){
        require(path.join(modelsPath, file));
    }
})