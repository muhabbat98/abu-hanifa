import React, {  useState } from 'react'
import './Carusel.css' 
import Accardion1 from '../../../assets/img/accordion1.jpg'
import Accardion2 from '../../../assets/img/accordion2.jpg'
import Accardion3 from '../../../assets/img/accordion3.jpg'
import Teacher1 from '../../../assets/img/teacher1.jpg'

import { FaArrowRight, FaArrowLeft, FaClock  , FaComment, FaEye } from 'react-icons/fa';
import moment  from 'moment'
export default ()=>{
    const time = time => moment(time).format('ll')
    const obj = [
        {
            src:Accardion1,
            titile:'Learn Arabic',
            text:` But I must explain to you how all this mistaken idea of denocing pleasure and 
                    praising pain was born and I will give you`,
            time: Date(),
            view:519,
            comment:4,
            author:{
                name:'James Bond',
                src:Teacher1
            }
        },
        {
            src:Accardion2,
            titile:'Learn Arabic2',
            text:` But I must explain to you how all this mistaken idea of denocing pleasure and 
                    praising pain was born and I will give you`,
            time: Date(),
            view:519,
            comment:4,
            author:{
                name:'James Bond',
                src:Teacher1
            }
        },
        {
            src:Accardion3,
            titile:'Learn Arabic3',
            text:` But I must explain to you how all this mistaken idea of denocing pleasure and 
                    praising pain was born and I will give you`,
            time: Date(),
            view:519,
            comment:4,
            author:{
                name:'James Bond',
                src:Teacher1
            }
        },
        {
            src:Accardion2,
            titile:'Learn Arabic4',
            text:` But I must explain to you how all this mistaken idea of denocing pleasure and 
                    praising pain was born and I will give you`,  
            time: Date(),
            view:519,
            comment:4,
            author:{
                name:'James Bond',
                src:Teacher1
            }
        },
        {
            src:Accardion2,
            titile:'Learn Arabic5',
            text:` But I must explain to you how all this mistaken idea of denocing pleasure and 
                    praising pain was born and I will give you`,
            time: Date(),
            view:519,
            comment:4,
            author:{
                name:'James Bond',
                src:Teacher1
            }
        },
        {
            src:Accardion2,
            titile:'Learn Arabic6',
            text:` But I must explain to you how all this mistaken idea of denocing pleasure and 
                    praising pain was born and I will give you`,
            time: Date(),
            view:519,
            comment:4,
            author:{
                name:'James Bond',
                src:Teacher1
            }
        },
        {
            src:Accardion2,
            titile:'Learn Arabic7',
            text:` But I must explain to you how all this mistaken idea of denocing pleasure and 
                    praising pain was born and I will give you`
                    ,
            time: Date(),
            view:519,
            comment:4,
            author:{
                name:'James Bond',
                src:Teacher1
            }
        }
    ]
    
    
    let viewer = obj.slice(0,3)
    const [state, setState] = useState(obj.slice(0,3))
    
    const [counter, setCounter]=useState(1)
    const [disabledNext, setDisabledNext] = useState(false)
    const [disabledPrev, setDisabledPrev] = useState(true)
    const widthLine = obj.length / 3 

    function prev(){
      
            viewer.splice(0,3, ...obj.slice((counter-2)*3, (counter-1)*3)) 

            if(viewer.length===3){
                setState(viewer)
                setDisabledNext(false) 
                setCounter(counter-1)
            }
            if (!obj.slice((counter-3)*3, (counter-2)*3).length){
                setDisabledPrev(true)
            }      
    }
    function next(){
        viewer.splice(0,3,...obj.slice((counter)*3, (counter+1)*3))
        if(viewer.length===3){
            setState(viewer) 
            setDisabledPrev(false)
            setCounter(counter+1)
        }
        else if(viewer.length!==0 && viewer.length < 3){
            setDisabledNext(true)
            setState(viewer) 
            setCounter(counter+1)    
        }
        else if (viewer.length){
            setDisabledNext(true)
        }
    }

    return(
    <div className="carusel carusel3" >
        <div className="container flexing">
        { 
            state.map((el,ind)=>{
                return (                 
                    <div className="element"  key= {ind}>
                        <img src={ el.src } alt="accardion img"/>
                        <div className="element-body">
                            <div className="element-info">
                                <span className= "info-data">
                                    <FaClock/>
                                    {time(el.time)}
                                </span>
                                <span className= "info-view">
                                    <FaEye/>
                                    {el.view}
                                </span>
                                <span className= "info-comment">
                                    <FaComment/>
                                    {el.comment}
                                </span>
                            </div> 
                            <p>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
                            </p>
                            <div className="author">
                                <img src={el.author.src} alt="author"/>
                                <span>by {el.author.name}</span>
                                <a href="/">Read more</a>
                            </div>   
                        </div>

                </div>
                )
            })
        }
        
        </div>
        <div className="container controller ">
                        
            <button onClick={prev} disabled={disabledPrev}>
                <FaArrowLeft value={{ color: "white", className: "play-icon" }}></FaArrowLeft>
            </button>
            <span className="line" >
                <span className="height" style={{width:335 / widthLine, left:(counter-1)*(335 / widthLine)}}>

                </span>
            </span>
                            
            <button onClick={next} disabled={disabledNext}>
                <FaArrowRight></FaArrowRight>
            </button>
        </div>
    </div>
)}