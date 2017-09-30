//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // ES6 desctructuring to create variable or const

// let user = {name:'Khiem', age:36};
// let {name} = user;
//console.log(name);

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2)); // ops is attribute to store all the docs
    // });
    
    // InsertUser(db, {
    //     name: 'Vo Van Niem',
    //     age: 8,
    //     location: 'New Zealand'
    // });
    db.close();
});

let InsertUser = (db, user) => {
    db.collection('Users').insertOne(user, (err, result) => {
        if (err) {
            return console.log('Unable insert to Users collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2)); // ops is attribute to store all the docs
        console.log(result.ops[0]._id.getTimestamp());
    });
    db.close();
}