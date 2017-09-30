const {MongoClient, ObjectID} = require('mongodb'); // ES6 desctructuring to create variable or const

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    DeleteUserByID(db, '59ccb4c7a6d82a406cac6c08');
    db.close();
});

// DeleteMany
let DeleteTodos = (db, text) => {
    db.collection('Todos').deleteMany({text}).then((result) => {
        console.log(`Deleted ${text} todos`);
        console.log(result.result);
    }, (error) => {
        console.log('Unable to delete todos', error);
    });
};

// DeleteOne
let DeleteTodoByID = (db, id) => {
    db.collection('Todos').deleteOne({_id: new ObjectID(id)}).then((result) => {
        console.log(result.result);
        console.log('Deleted todo');
    }, (error) => {
        console.log('Unable to delete a todo', error);
    });
};

// FindOneAndDelete
let FindAndDeleteTodoNotCompleted = (db) => {
    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
        console.log(result);
        console.log('Deleted todo');
    }, (error) => {
        console.log('Unable to delete a todo', error);
    });
};

let DeleteUserByID = (db, id) => {
    db.collection('Users').findOneAndDelete({_id: new ObjectID(id)}).then((result) => {
        console.log(result);
        console.log('Deleted User');
    }, (error) => {
        console.log('Unable to delete a user', error);
    });
};

let DeleteUsers = (db, name) => {
    db.collection('Users').deleteMany({name}).then((result) => {
        console.log(`Deleted ${name} users`);
        console.log(result.result);
    }, (error) => {
        console.log('Unable to delete users', error);
    });
};


