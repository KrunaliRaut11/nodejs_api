const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dbuser:dbuser@cluster0.8r1vm.mongodb.net/dbuser?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log("done");
}).catch((e) =>{
    console.log("not connected");
})
