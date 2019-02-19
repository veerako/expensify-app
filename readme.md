# Git Commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits

git add .
git commit -m ""
git push / git push origin master
git pull origin master
git push heroku master

yarn test -- --watch



yarn install
yarn run dev-server for dev purpose localhost:3000
yarn run build:prod
yarn run start

CRUD create read update delete

subscription 

promises dont work with on method
we have to pass snapshot as 2nd variable (success call back)

.once() for displaying once on console
.on() for displaying if any changes made to the data (multiple times)

database.ref() /.update() .set() .remove()

firebase
realtime DB,cloud,auth,hosting etc... backend as a service (baas)


mongo collection of docs
sql table with rows
firebase does not support arrays - it allows list data



database.ref('node name').ref().once('value').then((snapshot)=>{
    console.log(snapshot.val());

});


child_removed
will output if a child is deleted

child_changed
will output if data is changed

syntax:
database.ref('expenses').on('child_removed',(snapshot)=>{
      console.log(snapshot.key, snapshot.val());
  });

make changes ex: expenses.js (/actions/expenses)
write a test case expenses.test.js (/test/actions/expenses.test)