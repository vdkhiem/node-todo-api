let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json()); //bodyParser is middleware

app.post('/todos', (req, res) => {
    let todo =  new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    //console.log(req.body); //body is stored in bodyParser
});

app.listen(3000, () => {
    console.log('Webserver started on port 3000');
})