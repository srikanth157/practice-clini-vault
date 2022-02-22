import React, {useState, useEffect,useRef} from 'react'
import MenuIcon from '@mui/icons-material/Menu';

import './navbar.css'


let useClickOutside=(handler)=>{

  let domNode=useRef();

 useEffect(()=>{
   let mayBeHandler=(event)=>{
    if(!domNode.current.contains(event.target)){
      handler();
     }
   }
   document.addEventListener("mousedown",mayBeHandler);
  //  return ()=>{
  //    document.removeEventListener("mousedown",handler);
  //  };
 })
 return domNode

}


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

const [isHovering,setIsHovering]=useState(false)

const handleMouseHover=(e)=>{
   setIsHovering(true)
   console.log(isHovering)
 }

 


 let domNode=useClickOutside(()=>{
   setIsHovering(false)
 })
 
  return (
    <>
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        
      <ul className="list">
         <img className='img' src="https://static.wixstatic.com/media/78eca0_db1801071b2e475aaea6f7e37e463628~mv2.png/v1/fill/w_125,h_89,al_c,q_85/LogoF.webp" alt=""/>
  
      <li className="items"><a className='link'  href="#whatwedo">What We Do</a></li>
      <li className="items"><a className='link' href='#whyus'>WHY US</a></li> 
     
     <ul className='list-1'   ref={domNode}  >
      <li  className="items" onMouseEnter={handleMouseHover}  ><a className='link' href='#howitworks'>HOW IT WORKS</a> </li> 
      {isHovering? <button className='items clini' ><a className='link' href='#contact'>clini desk</a></button>:""}
      </ul>
      
      <li className="items"><a className='link' href='#testimonials'>testimonials</a></li>
      <li className="items"><a className='link' href='#contact'>contact</a></li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn"><MenuIcon/></button>
    </nav>
     
      </>
  )
}