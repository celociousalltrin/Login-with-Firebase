import React from 'react';
import {BrowserRouter,NavLink,Routes,Route} from "react-router-dom";
import HomePage from './HomePage';
import UserPage from './UserPage';
import Logout from './Logout';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/UserPage">Profile</NavLink>
      <NavLink to ="/Logout">logout</NavLink>

      <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/UserPage" element={<UserPage />}></Route>
            <Route path="/Logout" element={<Logout />}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing;