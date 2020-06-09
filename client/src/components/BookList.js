import React, { Component } from 'react';
import './BookList.css';

class BookList extends Component {
    render() {
        return (
            <div className="content">
                <ul id="book-list">
                    <li>Book Name</li>
                </ul>
            </div>
        );
    }

}

export default BookList;