const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema({
    Name:{
        type: String,
        require:true
        
    },

    Image: {
        type: String,
        require: true
        
    },

    Summary: {
        type: String,
        require: true
        
    }
})

const Movies = new mongoose.model('Movies', moviesSchema);

module.exports = Movies;