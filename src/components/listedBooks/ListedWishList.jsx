import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../../Ui/BookCard';

const ListedWishList = () => {
    const{ wishList } = useContext(BookContext);

    if (wishList.length === 0){
        return(
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Book found in Wish list</h2>
            </div>
        );
    };

    return (
        <div>
            {wishList.map((book, index) => (<BookCard key={index} book={book}></BookCard>))}
            
            
        </div>
        
    );
};

export default ListedWishList;