import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: props.onSearch
    }
  }

  onChange (e) {

    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4 className="margin-left">Add more repos!</h4>
      <input className="margin-left" placeholder="type a username here..." value={this.state.terms} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Fetch repos </button>
    </div>) 
  }
}

export default Search;