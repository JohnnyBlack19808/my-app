import React from 'react';
import Posts from './Posts/Posts.jsx';
import c from './Profile.module.css';
import background from './background.jpg';
import InfoUser from './InfoUser/InfoUser.jsx';
import AddPost from './AddPost/AddPost.jsx';
const Profile = (props) => {
  return (
    <div className={c.Profile}>
      <InfoUser Name="Johnny" Age="36" City="Moscow" />
      <AddPost />
      <Posts PostsData={props.PostsData}/>
    </div>
  );
}


export default Profile;


