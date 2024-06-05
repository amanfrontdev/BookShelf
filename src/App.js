// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from '../src/components/BookSearch';
import Bookshelf from '../src/components/BookShelf';

const App = () => {
    return (
        <Router>


            <Routes>
                <Route path="/" element={<BookSearch/>} />
                <Route path="/bookshelf" element={<Bookshelf/>} />
            </Routes>

        </Router>
    );
};

export default App;
