import React from 'react';
import c from './Post.module.css';
import avatar from "./avatar.jpg"
const Post = (props) => {
  return (
    <div className={c.Post}>
      <div className={c.img_and_text}>
        <img alt='ava' src={avatar} />
        <div className={c.text}>
          {props.message}
        </div>
      </div>
      <div>{props.like} 👍</div>
    </div>
  );
}
// это то же самое но через функцию

// function Post(props) {
//   return (
//     <div>
//       <div className={c.Post}>
//         <img src={avatar} />
//         { props.message }
//         <div>{ props.like} 👍</div>
//       </div>
//     </div>
//   );
// }
export default Post;


