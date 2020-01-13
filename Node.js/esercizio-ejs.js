var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/count/:number', function(req, res) {
    var names = ['Roberto', 'Giacomo', 'Davide'];
    res.render('page.ejs', {counter: req.params.number, names: names});
});

app.listen(8081);
