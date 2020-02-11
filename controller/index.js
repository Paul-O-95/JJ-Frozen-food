let ReviewModel = require('../models/review')

module.exports = {
    home: function(req, res){
        let viewModel = {
            layout: 'main'

        }
        res.render('index', viewModel);

    },

    review:function(req, res){
        if(!err){
            let newReview = new ReviewModel(req.body);

            newReview.save(function(err,review){
                if(err){
                    throw err
                } else {
                    res.redirect('/' + '#' + review._id)
                }
            });
        } else {
            res.redirect('/')
        }
    }
}