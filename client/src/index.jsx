import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [
        {
          coding_language : 'javascript',
          forks_count: 32,
          full_name : 'octocat/git-consortium',
          name : 'git-consortium',
          private : false,  
          updated_at :'2016-12-06T13:06:37Z'
        }
      ]
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    //send to the server
    
    $.ajax({
      url: '/repos',
      data: JSON.stringify({username: term}),
      success: function(){}, //             <<---------- SORT THIS OUT
      contentType: 'application/json'
    });
    //ajax request to server with the '/repos' endpoint
    
    // api get    
      // db post
      // update state in app

    //at the end, change the state of the app
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));