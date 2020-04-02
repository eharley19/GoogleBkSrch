import React, { Component } from 'react';
import Search from './Search';
import axios from 'axios';
import Bookshelf from './Bookshelf';

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
      // console.log(data);
      this.setState({ books: [...data.data.items] });
    }).catch((error) => console.log(error))
  }
    
  handleSearch = (event) => {
    
    event.preventDefault();
    const value = document.querySelector('.searchText').value;
    console.log(value);
    this.setState({ searchInput: value })
  }
  render() { 
    return ( 
      <React.Fragment>
        <Search searchBooks={this.searchBooks} handleSearch={this.handleSearch} />
        <Bookshelf books={this.state.books} />
      </React.Fragment>
    )
  }
}
 
export default Book;