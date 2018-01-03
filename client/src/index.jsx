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
    
    let thisapp = this;

    $.ajax({
      method: 'POST',
      url: '/repos',
      data: JSON.stringify({'username': term}),
      contentType: 'application/json',

      success: function(data){
        console.log(data.body,' successfully posted!');
        thisapp.setState({repos: JSON.parse(data.body)});// add repos here from response
      },
      error: function(data){
        console.error(error);
      }
    });
  }

  render () {
    console.log('app state.repos = ',this.state.repos[0])

    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
      
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));