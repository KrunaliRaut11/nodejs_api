const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema({
    Name :{
        type:String,
        
    },

    Image: {
        type: String,
        
    },

    Summary: {
        type: String,
        
    }
})

const Movies = new mongoose.model('movies', moviesSchema);

module.exports = Movies;