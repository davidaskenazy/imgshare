/*const mongoose = require("mongoose");

const{database} = require("./keys");

mongoose.connect(database.URI, {
    useNewUrlParser : true
})
    .then(db => console.log ("DB in connected"))
    .catch(err => console.error(err));*/



    const mongoose = require('mongoose'); 
const db = 'mongodb+srv://david:<password>@cluster0-re3gq.mongodb.net/test?retryWrites=true'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
    
    
    
    