Third Parties
    MongoDB: 
        Home page: https://github.com/mongodb/node-mongodb-native
        Document & Installation: http://mongodb.github.io/node-mongodb-native/

MongoDB
    Advantage of ID:
        - No worry if we have multiple MongoDB Servers. It always unique, not like integer increment.
        - ID has timestamp when the document is created.
        - When can override ID of document.

MongooseDB
    http://mongoosejs.com/, http://mongoosejs.com/docs/guide.html
    mongoose

Commands
    npm init //Create package.json
    npm i mongodb@2.2.5 //Install mongodb library
    npm i mongoose@4.5.9 --save
    npm i express@4.14.0 body-parser@1.15.2 --save

Git commands to commit a new repo
    git init
    // add .gitignore to ignore node_modules
    git add .
    git commit -m "Init commit"
    // go to github and create a new repo
    git remote add origin https://github.com/vdkhiem/node-todo-api.git
    git push -u origin master

Git commands to update repo
    git add .
    git commit -m "Update ..."
    git push