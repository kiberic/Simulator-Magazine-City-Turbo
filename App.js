import React from 'react';
import './App.css';

import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import Magazine from './components/Magazine';
import Home from './components/Home';
import Login from './components/Login';
import MyProfile from './components/Profile';
import Error404 from './components/Error';

function App() {
  const [profile, setProfile] = useState(null);

  return (
    <BrowserRouter>
      <div className='headerContainer'>
        <h2>Городское топливо <img className='icon__magazine' src="https://cdn-icons-png.flaticon.com/128/3847/3847278.png" alt="Иконка магазина Городское топливо" /> 
        <NavLink to="/profile"><img className="navLinkMyProfile" src="https://cdn-icons-png.flaticon.com/128/265/265674.png" alt="" /></NavLink>
        <NavLink to="/" end><img className="navLinkHome" src="https://cdn-icons-png.flaticon.com/128/3175/3175130.png" alt="" /></NavLink>
        <NavLink to="/login"><img className="loginAuth" src="https://cdn-icons-png.flaticon.com/128/4980/4980114.png" alt="" /></NavLink> </h2> 
        <NavLink to="/magazine-turbo"><img className="navLinkMagazineTurbo" src="https://cdn-icons-png.flaticon.com/128/15106/15106158.png" alt="" /></NavLink>
        {/* <NavLink to="/my-cart"><img className="navLinkMagazineCart" src="https://cdn-icons-png.flaticon.com/128/834/834781.png" alt="Корзина"/></NavLink> */}
      </div>

      <div className="content">
        <Routes>
          <Route path="/profile" element={
            profile ? 
              <MyProfile profileUser={profile} /> : 
              <div className="profile-message">
                <p><strong>Профиль по прежнему отсутствует</strong></p>
                <NavLink to="/login">Авторизация</NavLink>
              </div>
          }/>
          <Route path="/login" element={<Login setProfile={setProfile}/>}/>
          <Route path="/magazine-turbo" element={<Magazine/>}/>
          {/* <Route path='/my-cart' element={<CartProduct/>}/>  */}
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;