import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css' 

export default () => {
    const indicator = useRef()
    const parent = useRef()

    function hover (e) {
        const styleElement  = indicator.current.style
        for(let i=0; i < parent.current.childNodes.length-2; i++){
            if(parent.current.childNodes[i]===e.currentTarget){
                indicator.current.style = `left:${i*80}px`
            }
        }
        
        e.currentTarget.addEventListener('mouseout',()=>{
            indicator.current.style = styleElement
            
        })
        
    }

	return ( <>
        
	<div className="root">
        <nav>
			<div className="container flexing">
                <div className="logo">
                    <h3>abu hanifa</h3>
                </div>
                <div className="links" >
                    <ul ref={parent}>
                        <li  onMouseOver={hover}>
                            <Link to="/">Home</Link>
                        </li>
                        <li onMouseOver={hover}>
                            <Link to="/">Courses</Link>
                        </li>
                        <li  onMouseOver={hover}>
                            <Link to="/">Team</Link>
                        </li>
                        <li  onMouseOver={hover}>
                            <Link to="/about">About us</Link>
                        </li>
                        <li  onMouseOver={hover}>
                            <Link to="/">Contacts</Link>
                        </li>
                      
                        <span className="border" ref={indicator}></span>

                        <li>
                            <Link to="/">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
		</nav>

    </div>



	</>	);
}
