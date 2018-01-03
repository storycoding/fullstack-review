const request = require('request');
const config = require('../config.js');

let getReposByUsername = (term, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  console.log('TERM FROM GITHELPER = ', term);
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${term}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

    //console.log('body = ', body);
    //console.log('error = ', error);
    //console.log('response = ', response);
    //console.log('reached getReposByUsername');    

  request(options, function(error, response) {
    
    if (error) {
      callback(error,null);

    } else {
      console.log('succeeded in getReposByUsername'); 
      callback(null, response);
    }
  });

};

module.exports.getReposByUsername = getReposByUsername;

//how can I ask only 25 results from the gitHub API?