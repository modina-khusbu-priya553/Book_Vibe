import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../../Ui/BookCard';

const ListedReadList = ({sortingBooks}) => {
    const{ storeBooks} = useContext(BookContext);

    //Sorting useState
    const[filterReadList, setFilterReadList] = useState(storeBooks)


    // Sorting
    useEffect(() =>{
        if(sortingBooks){
            if(sortingBooks === 'pages'){
                const storeSortedBooks = [...storeBooks].sort((a,b) => a.totalPages - b.totalPages,);
                setFilterReadList(storeSortedBooks);

            } else if(sortingBooks === 'rating'){
                const storeSortedBooks = [...storeBooks].sort((a,b) => a.rating - b.rating,);
                setFilterReadList(storeSortedBooks);
            }
        }
    }, [sortingBooks, storeBooks])

    if (filterReadList.length === 0){
        return(
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Book found in Read list</h2>
            </div>
        );
    };
    

    return (
        <div>
            {filterReadList.map((book, index) => (<BookCard key={index} book={book}></BookCard>))}
            
            
        </div>
    );
};

export default ListedReadList;