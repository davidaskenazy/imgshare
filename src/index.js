const express = require("express");
const config = require("./server/config");
const app = config(express());
//db
require("./database");
//starting the server



app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"));
});