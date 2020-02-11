let index = require('../controller/index');
let router = require('express').Router();


module.exports = function(app){

    router.get('/', index.home);
    router.post('/review', index.review);

    app.use(router);
    
}