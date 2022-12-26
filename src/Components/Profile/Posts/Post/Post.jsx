import React from 'react';
import c from './Post.module.css';
import avatar from "./../../avatar.jpg"
const Post = (props) => {
  return (
    <div className={c.Post}>
      <div className={c.img_and_text}>
        {/* <img alt='ava' src={avatar} /> */}
        <div className={c.___}>
          <div className={c.message}>{props.message}</div>
          <div className={c.likes}>{props.like} likes</div>
        </div>
      </div>
      
    </div>
  );
}

export default Post;


