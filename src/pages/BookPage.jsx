import React, { useContext } from 'react';
import { BookContext } from '../context/BookProvider';

const BookPage = () => {

    const{ storeBooks } = useContext(BookContext);
    console.log(storeBooks)
    return (
        <div>
            <h1>Books</h1>
            
        </div>
    );
};

export default BookPage;