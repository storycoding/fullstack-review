const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher'); //fetcher is the name of our db
const db = mongoose.connection; // test this

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Fetcher is up and running!');
});

//db.createCollection('gitList'); // this is the terminal version
let repoSchema = mongoose.Schema({


    //title
    "full-name" : string,
        // hrsf86-self-assessment-week-04-v3
        // LINKS TO THE FORKED REPO

    //forked repo URL
              
    //public: boolean
    "private": boolean,

    //forked from + origin
        // hackreactor/hrsf86-self-assessment-week-04-v3
        //LINKS TO THE ORIGINAL REPO

    //original repo URL

    //coding language // undefined
    

    //number of forks
    "forks_count": number,
        //LINKS TO URL + /network
    //Redundant...

    // forked repo url + /network

    //last updated // creation date
    "updated_at": string
});
const admim = db.createUser({
    user: 'admin',
    pwd: '',
    roles: [ ‘readWrite’, ‘dbAdmin’ ]
});
let Repo = mongoose.model('Repo', repoSchema);
let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}
module.exports.save = save;