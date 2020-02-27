let reviewModel = require('../models/review')
let async = require('async');

module.exports = {
    newest: function(callback){
        reviewModel.find({}, {}, {limits:5, sort: {timestamp: -1}},
            function(err, reviews){
                if(err){throw err}


                async.each(reviews, function(err){
                    if(err){throw err}

                    callback(null, reviews)
                })

            });
    }
}