let ReviewModel = require('../models/review');

module.exports = {
    home: function (req, res) {
        let viewModel = {
            layout: 'main',
            review: []
        };

        ReviewModel.find({}, function (err, result) {
            if (err) throw err;
            console.log(result.rating);

            if (result) {
                viewModel.review = result;
                viewModel.review.forEach(element => {
                    console.log(element.rating);

                });

                res.render('index', viewModel);
            } else {
                res.redirect('/');
            }
        }).lean();
    },


    review: async function (req, res, next) {
        const { rating, review, name } = req.body;

        let newReviewModel = new ReviewModel({ rating, review, name });
        newReviewModel.save(function (err, result) {
            if (err) throw err;
            res.redirect(`/#${result._id}`);
        });
    }
}