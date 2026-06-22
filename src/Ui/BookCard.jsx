import React from 'react';
import star from '../assets/Frame.png'
import { Link } from 'react-router';


const BookCard = ({book}) => {
    return (
        <div>
            <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
                                <div className='bg-gray-100 rounded-2xl m-4'>
                                    <figure className='p-6'>
                                    <img
                                    src={book.image}
                                    alt={book.bookName} className='rounded-xl h-[220px]'/>
                                    </figure>
                                </div>
                                <div className="card-body">
                                    <div className="card-actions justify-start gap-4">
                                        {book.tags.map((tag, index) => <div key={index} className="badge bg-green-100 text-green-500 font-bold">{tag}

                                        </div>)}                                   
                                    </div>
                                        <h2 className='text-2xl font-bold'>{book.bookName}</h2>
                                        <p className='font-medium text-lg'>{book.author}</p>
                                    <div className="card-actions justify-between border-dashed border-t-2 border-gray-300">
                                        <h2 className='font-medium text-lg'>{book.category}</h2>
                                        <div className='flex items-center justify-center gap-1'>
                                            <h2 className='font-medium text-lg'>{book.rating}</h2>
                                            <img src={star}/>
                                        </div>
                                    </div>
                                </div>
            </Link>
        </div>    
        
    );
};

export default BookCard;