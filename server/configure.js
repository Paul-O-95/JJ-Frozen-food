let routes = require('./route');
let express = require('express');
let path = require('path');
let exphbs = require('express-handlebars');
let morgan = require('morgan');
let favicon = require('serve-favicon');
let bodyParser = require('body-parser');
let methodOverride = require('method-override')

module.exports = function(app){
    app.use(favicon(path.join(__dirname, '../public','images', 'favicon.png')));

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use(methodOverride('_method'));
    app.use('/public/', express.static(path.join(__dirname, '../public')));
    routes(app);

    app.engine('handlebars', exphbs.create({
        'defaultlayout':'main',
        'layoutsDir':app.get('views') + '/layouts',
        'partialsDir':app.get('views') + '/partials',
        'helpers':{}
    }).engine);
    app.set('view engine', 'handlebars');
    
    return app;
}