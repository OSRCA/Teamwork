import React from 'react';
import '../styles/post.css'
import userImage from '../assets/images/Image.svg'
function Posts() {
  return (
  <div className='singlePost'>
    <div className='topbar'>
     <div className='ppHolder'><img src={userImage}/></div>
     <div className='online'></div>
    </div>
    <div className='text'>
    </div>
    <div className='image'>

    </div>
    <div className='likes'>

    </div>
  </div>
  );
}

export default Posts;
