const mongoose = require('mongoose')

const carSchema=mongoose.Schema({
    year:{
        type:String
    },
    maker:{
        type:String
    },
    model:{
        type:String
    },
    style:{
        type:String
    }
    
});

const Car = mongoose.model('Car', carSchema)
module.exports = Car
