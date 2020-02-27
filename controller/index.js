let ReviewModel = require('../models/review');

module.exports = {
    home: function (req, res) {
        let viewModel = {
            layout: 'main',
            review: []
        };

        ReviewModel.find({}, function (err, result) {
            if (err) throw err;
            // console.log(result.rating);
            // console.log(typeof`${result.rating}`)

            if (result) {
                viewModel.review = result;
                viewModel.review.forEach(element => {
                    // console.log(element.rating);

                });

                res.render('index', viewModel);
            } else {
                res.redirect('/');
            }
        }).lean();
    },


    review: async function (req, res) {
        const { rating, testimonial, name } = req.body;

        let newReviewModel = new ReviewModel({ rating, testimonial, name });
        
        // if(parseInt(newReviewModel.rating) === 3){
        //     console.log(newReviewModel.rating);
        //     document.getElementById('star33').checked = true;
        //     document.getElementById('star11').disabled = true;
        //     document.getElementById('star22').disabled = true;
        //     document.getElementById('star44').disabled = true;
        //     document.getElementById('star55').disabled = true;
        // }

        newReviewModel.save(function (err, review) {
            if (err) throw err;

            console.log(review)
            console.log(review.rating)
            res.redirect(`/#${review._id}`);

        });
        
    }
}