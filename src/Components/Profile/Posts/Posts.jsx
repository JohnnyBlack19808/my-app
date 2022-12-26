import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css';
const Posts = () => {
  return (
    <div className={c.Posts}>
      <div className={c.Item}>
        MY POSTS
      </div>
      <Post like="15" message="Hi, how are you?" />
      <Post like="20" message="Hi, I'm good" />
    </div>
  );
}


export default Posts;


