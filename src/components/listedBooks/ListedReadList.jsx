import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../../Ui/BookCard';

const ListedReadList = () => {
    const{ storeBooks} = useContext(BookContext);

    if (storeBooks.length === 0){
        return(
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Book found in Read list</h2>
            </div>
        );
    };
    

    return (
        <div>
            {storeBooks.map((book, index) => (<BookCard key={index} book={book}></BookCard>))}
            
            
        </div>
    );
};

export default ListedReadList;