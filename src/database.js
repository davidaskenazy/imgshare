/*const mongoose = require("mongoose");

const{database} = require("./keys");

mongoose.connect(database.URI, {
    useNewUrlParser : true
})
    .then(db => console.log ("DB in connected"))
    .catch(err => console.error(err));*/



    const mongoose = require('mongoose'); 
const db = 'mongodb+srv://davidaskenazy:W1941s1994!@cluster0-syir3.mongodb.net/test?retryWrites=true&w=majority'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
    
    
    
    