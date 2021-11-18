import React from "react";
import Home from "./Components/Pages/Home/Home.js";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";
import NewsPage from "./Components/Pages/NewsPage/NewsPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileProvider from "./Context/ProfileContext.js";
import "./App.css";

function App() {
  return (
    <ProfileProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/NewsPage" element={<NewsPage />} />
          </Routes>
        </Router>
      </div>
    </ProfileProvider>
  );
}

export default App;
