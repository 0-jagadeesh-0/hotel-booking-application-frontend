import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Signin from "./components/Signin/Signin";
import SignupPage from "./pages/SignupPage/SignupPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Hotels from "./pages/Hotels/Hotels";
import Room from "./components/Room/Room";
import BookingHistory from "./components/BookingHistory/BookingHistory";
import SignInPage from "./pages/SignInPage/SignInPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/signin' element={<SignInPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/hotels/:city' element={<Hotels />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/rooms/:hotelId' element={<Room />} />
                <Route path='/booking-history' element={<BookingHistory />} />
            </Routes>
        </Router>
    );
};

export default App;