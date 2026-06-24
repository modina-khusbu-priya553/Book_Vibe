

const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('storeBooks');

    if (allReadList) return JSON.parse(allReadList);

    return [];
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId)
    if(!isAlreadyExist){
        allBooks.push(book);
        localStorage.setItem("storeBooks", JSON.stringify(allBooks));

    };
}


const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem('wishList');

    if (allWishList) return JSON.parse(allWishList);

    return[];
};

const allWishListToLocalDB = (book) => {
    const allWishBooks = getAllWishListFromLocalDB();
    const isWishBookExist = allWishBooks.find(bk => bk.bookId === book.bookId)
    if(!isWishBookExist){
        allWishBooks.push(book);
        localStorage.setItem('wishList', JSON.stringify(allWishBooks));
    };
}



export {getAllReadListFromLocalDB, addReadListToLocalDB,  allWishListToLocalDB, getAllWishListFromLocalDB};