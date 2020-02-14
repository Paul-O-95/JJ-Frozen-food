let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ReviewSchema = new Schema({
    rating: { type: Number, required: true },
    testimonial: { type: String },
    name: { type: String, required: true },
    timestamp: {type:Date, 'default':Date.now}
})

module.exports = mongoose.model('review', ReviewSchema)