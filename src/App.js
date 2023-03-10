import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import Header from './Components/Header/Header.jsx';
import Music from './Components/Music/Music';
import Navigation from './Components/Navigation/Navigation.jsx';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile.jsx';
import Setting from './Components/Setting/Setting';

const App = (props) => {
  return (
    
    <BrowserRouter>
    <div className='app'>
      <Header />
      <Navigation />
      <div className='content'>
        <Routes>
          <Route path="/Profile/*" element={<Profile PostsData={props.PostsData}/>} />
          <Route path="/Dialogs/*" element={<Dialogs DialogItemData={props.DialogItemData} MessagesData={props.MessagesData} />} />
          <Route path="/Music/*" element={<Music />} />
          <Route path="/News/*" element={<News />} />
          <Route path="/Setting/*" element={<Setting />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>


  );
}


export default App;