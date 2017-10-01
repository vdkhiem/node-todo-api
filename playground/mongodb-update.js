const {MongoClient, ObjectID} = require('mongodb'); // ES6 desctructuring to create variable or const

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    //FindOneAndUpdateTodo(db, '59cf00a5de06bcdac0725161');
    FindOneAndUpdateUser(db, '59cca7d94c06e91b480a9195');
    db.close();
});

// FindOneAndUpdate
let FindOneAndUpdateTodo = (db, id) => {
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID(id)
    }, {
            $set: {
                text: 'Walk the dog 2',
                completed: true
            }
    } , {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (error) => {
        console.log('Unable to update a Todo', error);
    });
};

let FindOneAndUpdateUser = (db, id) => {
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID(id)
    }, {
            $set: {
                name: 'Khiem Duy Vo',
                location: 'Australia'
            },
            $inc: {
                age: 1
            }
    } , {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (error) => {
        console.log('Unable to update a User', error);
    });
};


