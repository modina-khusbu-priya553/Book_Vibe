import React, { useContext } from 'react';
import { BookContext } from '../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../components/listedBooks/ListedReadList';
import ListedWishList from '../components/listedBooks/ListedWishList';

const BookPage = ({book, wishListBook}) => {

    const{ storeBooks, wishList } = useContext(BookContext);
    
    return (
        <div>
            <div className='container mx-auto my-4'>
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <ListedReadList></ListedReadList>
                    </TabPanel>
                    <TabPanel>
                        <ListedWishList></ListedWishList>
                    </TabPanel>
            </Tabs>
            </div>

            
            
        </div>
    );
};

export default BookPage;