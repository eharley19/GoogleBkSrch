import React, { Component } from 'react';
import Search from './Search';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchInput: ''
    }
  }
    
  handleSearch = (e) => {
    
    this.setState({ searchInput: e.target.value})
  }
    render() { 
      return ( 
          <Search handleSearch={this.handleSearch} />
      );
    }
}
 
export default Book;