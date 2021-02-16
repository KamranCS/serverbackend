const carModel=require('../models/Car');
const mongoose = require('mongoose')

/* get the Make in a particular year */
exports.getcarMaker=async (req,res)=>{
    try{
        let year=req.query.year;
        let car=await carModel.find({year:year}).distinct('maker');
            res.send(car);
        
    } catch (error) {
        res.status(400).send(error)
    }
    
}

/* get the Model in a particular year and of a make */
exports.getcarModel=async (req,res)=>{
    try{
        let year=req.query.year;
        let make=req.query.make;
        let car=await carModel.find({year:year,maker:make}).distinct('model');
            res.send(car);
        
    } catch (error) {
        res.status(400).send(error)
    }
    
}

/* get the SubModel of based on year,Make and model */
exports.getcarsubModel=async (req,res)=>{
    try{
        let year=req.query.year;
        let make=req.query.make;
        let model=req.query.model;
        let car=await carModel.find({year:year,maker:make,model:model}).distinct('style');
            res.send(car);
        
    } catch (error) {
        res.status(400).send(error)
    }
    
}

