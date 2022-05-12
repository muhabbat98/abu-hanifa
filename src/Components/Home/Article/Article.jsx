import React from 'react'
import './Article.css' 
import VideoImage from '../../../assets/img/videoImage.jpg'

import Carusel from '../../Carusel/Carusel1/Carusel'
import { FaArrowRight, FaPlus, FaPlay } from 'react-icons/fa';

export default () => {
    
    
	return ( <>
           
            <article>
                <div className="container flexing">
                    <div>
                        <h2 className="secondary-heading">Courses</h2>
                        <p>But I must explain to 
                            you how all this mistaken idea 
                            of denouncing pleasure and praising pain
                            was born and I will give you
                        </p>
                    </div>
                    <div className="viewcourses">
                        <a href="/">
                            view All Courses
                            <FaArrowRight/>
                        </a>
                    </div>
                </div>
               <Carusel></Carusel>
            </article>
            <main>
                <div className="container flexing">
                    <div className="info">
                        <h1> Abu Khanifa Online Academy </h1>
                        <p>
                             But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you But I must explain to you how all this mistaken idea of denouncing
                        </p>
                        <div className="statics">
                            <div className="part">
                                <span>4k <FaPlus/></span>
                                <p>students</p>
                            </div>
                            <div className="part">
                                <span>50 <FaPlus/></span>
                                <p>All Courses</p>
                            </div>
                            <div className="part">
                                <span>200 <FaPlus /></span>
                                <p>Free Courses</p>
                            </div>
                            
                        </div>
                        <button>Start studying</button>
                    </div>
                    <div className=" videoImage ">
                        <img src={VideoImage} alt="video for Abu Hanifa"/>
                        <span>
                            <FaPlay></FaPlay>
                        </span>
                    </div>  
                </div> 
            </main>
            
        </>
    );
}


