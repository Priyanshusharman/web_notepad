const mongoose = require('mongoose');
const dburl = 'mongodb://0.0.0.0:27017/inootbook';

const coonectToMongoose = () => {
    mongoose.connect(dburl)
        .then(console.log("Connected"))
}
module.exports = coonectToMongoose;