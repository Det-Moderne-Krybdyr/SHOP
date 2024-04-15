import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import ProductDetails from '../pages/ProductDetails';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

export default function Router() {
    const Layout = () => {
        return (
            <>
                <Header />
                <div className="content"><Outlet /></div>
                <Footer userNames={userNames} />
            </>
        );
    };

    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(response => setUserNames(response.data))
            .catch(error => console.error('Error fetching user names:', error));
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="contact-us" element={<Contact />} />
                    <Route path="product" element={<ProductDetails />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
