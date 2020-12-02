const express = require("express");
require("./db/mongodb");

const Movies = require("./models/movies");

const app = express();
const port = process.env.PORT || 7007;

//app.use(express.json());

app.post("/movies", (req, res) => {
    console.log(req.body);
    const user = new Movies(req.body);
    user.save().then(() =>{
        res.send(user);
    }).catch((e) => {
        res.send(e);
    })
})

app.listen(port, () => {
    console.log("done 5005");
}) 