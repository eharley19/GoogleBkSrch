import React from 'react';
import BookCard from './BookCard';

const Bookshelf = (props) => {
    return(
        <div className="card-container">
            {
                props.books.map((book, i) => {
                    return <BookCard key={i} image={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} author={book.volumeInfo.authors} date={book.volumeInfo.publishedDate} />
                })
            }

        </div>
    )
}

export default Bookshelf