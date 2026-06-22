import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({children}) => {
        // How to store books if already readed or wis to read
        // step1 : store book id / book object
        // step 2: where to store (data base/ local storage)
        // step 3: array or collection
        // step 4: If the book is already exesit then show alert/ toast. Check it with find
        // step 5: if not then add the book in the array or collection
    const [storeBooks, setStoreBooks] = useState([]);

    const handleMarkAsRead = (currentBook) => {

        const isExistBook = storeBooks.find((book) => book.bookId === currentBook.bookId);

        if (isExistBook) {
            alert("the book is already aded")
        } else{
            setStoreBooks([...storeBooks, currentBook])
            alert(`${currentBook.bookName} is added to this list`)
            
        }
    };

    const bookData = {
        handleMarkAsRead,
        setStoreBooks,
        storeBooks
    }
    return <BookContext.Provider value={bookData}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;