import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../components/listedBooks/ListedReadList';
import ListedWishList from '../components/listedBooks/ListedWishList';

const BookPage = () => {

    // Sorting

    const [sortingBooks , setSortingBooks] = useState("");

    
    return (
        <div>
            <div className='flex items-center justify-center my-3'>
                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-400 text-lg text-white"> Sorted By ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingBooks("pages")}>
                            <a>Pages</a>
                        </li>
                        <li onClick={() => setSortingBooks("rating")}>
                            <a>rating</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container mx-auto my-4'>
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <ListedReadList sortingBooks ={sortingBooks}></ListedReadList>
                    </TabPanel>
                    <TabPanel>
                        <ListedWishList sortingBooks ={sortingBooks}></ListedWishList>
                    </TabPanel>
            </Tabs>
            </div>

            
            
        </div>
    );
};

export default BookPage;