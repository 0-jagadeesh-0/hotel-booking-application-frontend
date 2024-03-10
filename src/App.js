import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Signin from "./components/Signin/Signin";
import SignupPage from "./pages/SignupPage/SignupPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Hotels from "./pages/Hotels/Hotels";
import Room from "./components/Room/Room";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/hotels/:city' element={<Hotels />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/rooms/:hotelId' element={<Room />} />

            </Routes>
        </Router>
    );
};

export default App;