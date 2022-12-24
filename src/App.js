import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import Header from './Components/Header/Header.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Profile from './Components/Profile/Profile.jsx';

const App = () => {
  return (
    
    <BrowserRouter>
    <div className='app'>
      <Header />
      <Navigation />
      <div className='content'>
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dialogs" element={<Dialogs />} />
        </Routes>
        {/* <Dialogs /> */}
      </div>
    </div>
    </BrowserRouter>


  );
}


export default App;