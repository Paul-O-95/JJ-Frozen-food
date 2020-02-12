let ReviewModel = require('../models/review');

module.exports = {
    home: function (req, res) {
        let viewModel = {
            layout: 'main'

        }
        res.render('index', viewModel);

    },

    // review: function (req, res) {
    //     if (!err) {
    //         let newReview = new ReviewModel(req.body);

    //         newReview.save(function (err, review) {
    //             if (err) {
    //                 throw err
    //             } else {
    //                 res.redirect('/' + '#' + review._id)
    //             }
    //         });
    //     } else {
    //         res.redirect('/')
    //     }
    // }

    review: async function (req, res, next) {
        const { rating, review, name } = req.body;

        let newReviewModel = new ReviewModel({ rating, review, name });
        newReviewModel.save(function (err, result) {
            if (err) throw err;
            res.redirect(`/#${result._id}`);
        });
    }
}