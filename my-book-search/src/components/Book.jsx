import React, { Component } from 'react';
import Search from './Search';
import axios from 'axios';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchInput: ''
    }
  }
  searchBooks = (event) => {
    event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchInput}`).then((data) => {
      console.log(data);
    }).catch((error) => console.log(error))
  }
    
  handleSearch = (event) => {
    this.setState({ searchInput: event.target.value})
  }
  render() { 
    return ( 
      <Search searchBooks={this.searchBooks} handleSearch={this.handleSearch} />
    );
  }
}
 
export default Book;