import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css';
const Posts = (props) => {

  let Posts = props.PostsData.map(Data => <Post like={Data.like} message={Data.message} />)
  return (
    <div className={c.Posts}>
      <div className={c.Item}>
        MY POSTS
      </div>
        {
          Posts
        }
    </div>
  );
}


export default Posts;


