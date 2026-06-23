import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookProvider';


const BookDetail = () => {

    const { id } = useParams();
    
    const books= useLoaderData();
    
    const expectedBook = books.find((book) => book.bookId == id);
    const {bookId, bookName, author, review, totalPages, rating, category, publisher, yearOfPublishing, image, tags} = expectedBook;

    const {handleMarkAsRead, handleWishList} = useContext(BookContext)
    
    
    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 bg-base-100 shadow-sm container mx-auto mt-6">
                <figure className='w-full flex items-center justify-center bg-gray-200 p-8'>
                    <img
                    src={image}
                    alt={bookName}
                    className='h-[400px]'/>
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title font-bold text-4xl">{bookName}</h2>
                    <p className='text-lg'>{author}</p>
                    <p className='py-2 border-y-2 border-gray-200 font-medium text-lg'>{category}</p>
                    <p className='font-bold text-lg'>review: <span className='font-medium text-gray-400'>{review}</span></p>

                    <div className="card-actions justify-start gap-4"> <span className='font-bold'>Tag</span>
                    {tags.map((tag, index) => <div key={index} className="badge bg-green-100 text-green-500 font-bold">#{tag}
                        </div>)}                                   
                    </div>

                    <div className='border-t-2 border-gray-200 card-actions flex flex-col space-y-2'>
                        <div><span className='text-lg'> Number of pages:</span> <span className='font-bold text-lg'>{totalPages}</span></div>
                        <div><span className='text-lg'>Publisher: </span><span className='font-bold text-lg'>{publisher}</span></div>
                        <div><span className='text-lg'>Year of Publishing: </span><span className='font-bold text-lg'>{yearOfPublishing}</span></div>
                        <div><span className='text-lg'>Rating: </span><span className='font-bold text-lg'>{rating}</span></div>
                    </div>

                    <div className="card-actions justify-start gap-2">
                        <button className="btn btn-outline" onClick={() =>{handleMarkAsRead(expectedBook)}}>Mark as Read</button>
                        <button className="btn btn-info text-white" onClick={() =>{handleWishList(expectedBook)}}>Add to Wishlist</button>
                    </div>
                </div>
               
            </div>
            
        </div>
    );
};

export default BookDetail;