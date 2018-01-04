const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher'); //fetcher is the name of our db
const db = mongoose.connection; // test this

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Fetcher is up and running!');
});


let repoSchema = new mongoose.Schema({
  "full-name" : String,         
  "private": Boolean,
  "forks_count": Number,
  "updated_at": String,
  "name" : String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {

  for (var i = 0; i < repos.length; i++) {

    let repo = new Repo(
      {
        forks_count: repos[i].forks_count,
        full_name : repos[i].full_name,
        name : repos[i].name,
        private : repos[i].private, 
        updated_at : repos[i].updated_at
      }
    );

    repo.save(function(err){
      if (err) {
        console.error(err);  
      }
    })
    
  }
}

module.exports.save = save;