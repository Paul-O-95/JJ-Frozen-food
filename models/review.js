let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ReviewSchema = new Schema({
    rating: {type:Number, required:true},
    review: {type:String},
    name: {type:String, required:true},
    dateCreated: {type:Date, 'default':Date.now}
})

module.exports = mongoose.model('review' , ReviewSchema)