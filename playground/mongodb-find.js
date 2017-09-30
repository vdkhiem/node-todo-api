const {MongoClient, ObjectID} = require('mongodb'); // ES6 desctructuring to create variable or const

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    //GetTodos(db);
    //GetTodoByID(db, '59cf00a5de06bcdac0725161');
    //GetTodosCount(db);
    GetUsersByName(db, 'Vo Duy Khiem');
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
};

let GetUsersByName = (db, name) => {
    db.collection('Users').find({name}).toArray().then((users) => {
        console.log('Fetching users by name');
        console.log(JSON.stringify(users, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch users', error);
    });
};

let GetTodos = (db) => {
    db.collection('Todos').find({completed:false}).toArray().then((docs) => {
        console.log('Fetching todos collection');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch todos', error);
    });
};

let GetTodoByID = (db, id) => {
    db.collection('Todos').find({
        _id: new ObjectID(id)
    }).toArray().then((doc) => {
        console.log('Fetching todo by ID');
        console.log(JSON.stringify(doc, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch todos', error);
    });
};

let GetTodosCount = (db) => {
    db.collection('Todos').find().count().then((count) => {
        console.log(`Counting todos: ${count}`);
    }, (error) => {
        console.log('Unable to fetch todos', error);
    });
};