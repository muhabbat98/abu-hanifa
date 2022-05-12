import React from 'react'
import './Summary.css' 
import Teacher1 from '../../../assets/img/teacher1.jpg'

import Carusel2 from '../../Carusel/Carusel2/Carusel'
import { FaArrowRight} from 'react-icons/fa';

import { useState } from 'react'


export default () => {
    const [text, setText] = useState('Request Call') 
   
	return ( <>
            <article>
                <div className="container flexing">
                    <div>
                        <h2 className="secondary-heading">teachers</h2>
                        <p>But I must explain to 
                            you how all this mistaken idea 
                            of denouncing pleasure and praising pain
                            was born and I will give you
                        </p>
                    </div>
                    <div className="viewcourses">
                        <a href="/">
                            view All Mentors
                            <FaArrowRight/>
                        </a>
                    </div>
                </div>
               <div className="container flexing">
                    <div className="teachers-section hovering" >
                        <img src={Teacher1} alt="teacher"/>
                        <div className="bottom">
                            <h2>Muhammad Yunus</h2>
                            <p>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                            </p>
                        </div>
                        <div className="next">
                            <FaArrowRight/>        
                        </div>
                    </div>
                    <div className="teachers-section hovering" >
                        <img src={Teacher1} alt="teacher"/>
                        <div className="bottom">
                            <h2>Muhammad Yunus</h2>
                            <p>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                            </p>
                        </div>
                        <div className="next">
                            <FaArrowRight/>        
                        </div>
                    </div>
                    <div className="teachers-section hovering" >
                        <img src={Teacher1} alt="teacher"/>
                        <div className="bottom">
                            <h2>Muhammad Yunus</h2>
                            <p>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                            </p>
                        </div>
                        <div className="next">
                            <FaArrowRight/>        
                        </div>
                    </div>
                    <div className="teachers-section hovering" >
                        <img src={Teacher1} alt="teacher"/>
                        <div className="bottom">
                            <h2>Muhammad Yunus</h2>
                            <p>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                            </p>
                        </div>
                        <div className="next">
                            <FaArrowRight/>        
                        </div>
                    </div>
				</div>
            </article>
            <summary>
                <div className="container">
                    <h3>Feedback from our students</h3>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                    </p>
                    <Carusel2/>
                </div>
            </summary>
            <summary>
                <div className="container">
                    <h3>Feedback from our students</h3>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you
                    </p>
                    <form className="question-submit">
                        <input type="text" placeholder="Name*"/>
                        <input type="text"  placeholder="Phone*"/>
                        <button 
                             onMouseEnter={() => setText('Sign up')}
                             onMouseLeave={() => setText(' Request Call')}>
                            {text}
                        </button>
                        <span>Learn more <a href="/">Privacy Policy</a> . And learn <a href="/">Academy Terms</a> </span>

                    </form>
                </div>
            </summary>
            
        </>
    );
}


