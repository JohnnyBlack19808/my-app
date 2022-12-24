import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css';
const Posts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea> </textarea>
        <button>Add post</button>
      </div>
      <div className={c.Posts}>
        <Post like="15" message="Hi, how are you?"/>
        <Post like="20" message="Hi, I'm good"/>

      </div>
    </div>
  );
}


export default Posts;


