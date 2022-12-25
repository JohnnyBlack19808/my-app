import React from 'react';
import Posts from './Posts/Posts.jsx';
import c from './Profile.module.css';
import background from './background.jpg';
import InfoUser from './InfoUser/InfoUser.jsx';
const Profile = () => {
  return (
    <div>
      <img className={c.background} alt='background' src={background}></img>
      <InfoUser Name="Dashhhh" Age="18" City="Moscow" />
      <Posts />
    </div>
  );
}


export default Profile;


