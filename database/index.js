const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher'); //fetcher is the name of our db
const db = mongoose.connection; // test this

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Fetcher is up and running!');
});

//db.createCollection('gitList'); // this is the terminal version, does it work here?

let repoSchema = mongoose.Schema({
    "full-name" : string,         
    "private": boolean,
    "forks_count": number,
    "updated_at": string,
    "name" : string,
    "language" : string
    //forked repo URL
    //original repo URL
    //coding language // undefined
    // LINKS TO THE FORKED REPO
    //LINKS TO THE ORIGINAL REPO
    //forked from + origin
      // hackreactor/hrsf86-self-assessment-week-04-v3
});


const admim = db.createUser({
    user: 'admin',
    pwd: '',
    roles: [ ‘readWrite’, ‘dbAdmin’ ]
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  
  for (var i = 0; i < Things.length; i++) {

    db.Repo.insert(
      {
        language:’Javascript’,
        forks_count: repos[i].forks_count,
        full_name : repos[i].full_name,
        name : repos[i].name,
        private : repos[i].private, 
        updated_at : repos[i].updated_at
      }
    );
  }

}
module.exports.save = save;