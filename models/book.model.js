'use strict'

const mongoose = require ('mangoose')

const BookSchema = new mangoose.Schema ({
    name:{type:String},
    description : {type:String},
    status : {type:String}
})

module.exports= BookSchema;