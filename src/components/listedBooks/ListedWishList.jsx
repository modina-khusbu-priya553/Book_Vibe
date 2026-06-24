import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../../Ui/BookCard';

const ListedWishList = ({sortingBooks}) => {
    const{ wishList } = useContext(BookContext);

    //Sorting useState
        const[filterReadList, setFilterReadList] = useState(wishList)
    
    
        // Sorting
        useEffect(() =>{
            if(sortingBooks){
                if(sortingBooks === 'pages'){
                    const storeSortedBooks = [...wishList].sort((a,b) => a.totalPages - b.totalPages,);
                    setFilterReadList(storeSortedBooks);
    
                } else if(sortingBooks === 'rating'){
                    const storeSortedBooks = [...wishList].sort((a,b) => a.rating - b.rating,);
                    setFilterReadList(storeSortedBooks);
                }
            }
        }, [sortingBooks, wishList])

    if (filterReadList.length === 0){
        return(
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Book found in Wish list</h2>
            </div>
        );
    };

    return (
        <div>
            {filterReadList.map((book, index) => (<BookCard key={index} book={book}></BookCard>))}
            
            
        </div>
        
    );
};

export default ListedWishList;