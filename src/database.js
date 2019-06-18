/*const mongoose = require("mongoose");

const{database} = require("./keys");

mongoose.connect(database.URI, {
    useNewUrlParser : true
})
    .then(db => console.log ("DB in connected"))
    .catch(err => console.error(err));
*/

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://davidaskenazy:123456a@cluster0-syir3.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
    
    