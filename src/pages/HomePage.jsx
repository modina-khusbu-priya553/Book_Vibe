import React, { Suspense } from 'react';
import Banner from '../components/homepage/Banner';
import AllBooks from '../components/homepage/AllBooks';

const booksPromise = fetch('/public/booksData.json').then(res=> res.json())

const HomePage = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<p>Loading books...</p>}>
                <AllBooks booksPromise={booksPromise}></AllBooks>
            </Suspense>
        </div>
    );
};

export default HomePage;