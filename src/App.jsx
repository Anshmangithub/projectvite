import React from "react";

import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Details from "./components/Details";

const App = () => {
    return (
        <div className="container mt-5 ">
            <Nav />
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route path="/profile" element={<Profile />}>
                    <Route path="/profile/:id" element={<Details />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;