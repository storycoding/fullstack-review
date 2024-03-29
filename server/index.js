const express = require('express');
const app = express();
const parser = require('body-parser');
const db = require('../database/index.js');

//call the index.js database and post get
const GitHelper = require('../helpers/github.js');

app.use(parser.json()); // needs to be invoked

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  
  console.log('REQUEST MADE, BODY = username: ',req.body.username);

  GitHelper.getReposByUsername(req.body.username, function(error ,repos){

    if (error) {
      console.error(error);

    } else {
      console.log('GOT THE REPOS ON GITHELPER');
      db.save(repos.body)  
      res.status(201);
      res.send(repos);
      res.end();
    }
    
  });
  
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  db.model('Repo').find(function(err, repos) {
    res.send(repos);
  })
  
  
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// react app.search
  // DB post request triggers API get request
    // query for latest / top 25 results
  // post results to the DB
  // DB get request
  // react app.setState 
// repo list re-renders
