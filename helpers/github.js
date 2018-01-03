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

  function callback(error, response, body) { // causing infinite loop
    
    //console.log('body = ', body);
    //console.log('error = ', error);
    //console.log('response = ', response);
    console.log('reached getReposByUsername');    


    if (error) {
      console.log('errored in getReposByUsername');
      callback(error);
      //console.log('error = ', error);
      
      
    } else {
      console.log('succeeded in getReposByUsername'); 
      callback(body);
    }
  }

  request(options, callback);

};

module.exports.getReposByUsername = getReposByUsername;

//how can I ask only 25 results from the gitHub API?