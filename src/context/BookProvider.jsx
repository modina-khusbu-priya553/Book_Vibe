import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, allWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from '../utils/localDB';

export const BookContext = createContext();

const BookProvider = ({children}) => {
        // How to store books if already readed or wis to read
        // step1 : store book id / book object
        // step 2: where to store (data base/ local storage)
        // step 3: array or collection
        // step 4: If the book is already exesit then show alert/ toast. Check it with find
        // step 5: if not then add the book in the array or collection
    const [storeBooks, setStoreBooks] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB())

    const handleMarkAsRead = (currentBook) => {

        addReadListToLocalDB(currentBook);

        const isExistBook = storeBooks.find((book) => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error("the book is already added")
        } else{
            setStoreBooks([...storeBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to this read list`)
            
        }
    };

    const handleWishList = (currentBook) => {
        // storage
        allWishListToLocalDB(currentBook);

        // getBook for List
        const isExistedInReadList = storeBooks.find((book) => book.bookId === currentBook.bookId);

        if(isExistedInReadList){
            toast.warn(`${currentBook.bookName} is already in read list!`);
            return;
        }

        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error("the book is already added!");
        } else{
           setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to this Wish list`);
            
        }
    };

    const bookData = {
        handleMarkAsRead,
        setStoreBooks,
        storeBooks,
        handleWishList,
        setWishList,
        wishList
    }
    return <BookContext.Provider value={bookData}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;