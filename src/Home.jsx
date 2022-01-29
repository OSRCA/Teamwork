import React from 'react';
import './styles/home.css';
import {AiOutlineSearch} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import {IconContext} from 'react-icons' 
import {FiFileText} from 'react-icons/fi'
import {HiOutlineVideoCamera, HiOutlineCamera} from 'react-icons/hi'
import man from './assets/images/man.svg'
import Posts from './components/posts';
function Home() {
  return(
    <div className='loginContainer'>
    <header className='header'>
     <div className='homeName'>
      <h1 className='headText'>Teamwork</h1>
     </div>
     <div className='searchBar'>

       <IconContext.Provider value={{ className:'searchIcon' }}>
         <AiOutlineSearch/>
       </IconContext.Provider>

       <input placeholder='search' className='searchInput'/>
     </div>
     <div className='tabs'>
       <h1>Home</h1>
       <h1>Colleagues</h1>
       <h1>Announcements</h1>
     </div>
     <div className='bellHolder'>
     <IconContext.Provider value={{ className:'bellIcon' }}>
         <BiBell/>
       </IconContext.Provider>
       <div className='notificationCircle'>
       </div>
     </div>
  <div className='ppHolder'>
  <img src={man} className='image'/>
  </div>

    </header>
    <main className='main'>
     <div className='posts'>
       <div className='create-post'>
         <textarea className='textarea' placeholder='Create a post...'/>
         <div className='post-icons'>
         <IconContext.Provider value={{color:'rgba(160, 160, 160, 1)', className:'post-icon' }}>
           <FiFileText/>
       </IconContext.Provider>
         <IconContext.Provider value={{color:'rgba(160, 160, 160, 1)', className:'post-icon' }}>
           <HiOutlineVideoCamera/>
       </IconContext.Provider>
         <IconContext.Provider value={{color:'rgba(160, 160, 160, 1)', className:'post-icon' }}>
           <HiOutlineCamera/>
       </IconContext.Provider>
         </div>

       </div>
       <Posts/>
     </div>
     <div className='sidebar'>

     </div>
    </main>
    </div>
  );
}

export default Home;
