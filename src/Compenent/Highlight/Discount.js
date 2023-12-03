import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import Mybutton from "../Utils/mybutton";

const Discount = ()=>{
    const end = 30;
    let [off,setoff]=useState(0)
    const porcentage = ()=>{
        if(off < end){
        setoff(prevcount => prevcount +1);
        }
    }
    useEffect(()=>
    {
        if( off > 0 && off < 30){
            setTimeout(()=>{
                setoff(prevCount => prevCount+1)
            },30)
        }
    },[off])
    return(
        <>
         <div className="center_wrapper">
            <div className="discount_wrapper">
        <Fade
        delay={500}
        onVisibilityChange={ (inView) => {
                        if(inView){
                            porcentage()
                        }}}
                        
                        >
                            <div className="discount_porcentage">
                        <span>{off}%</span>
                        <span>OFF</span>
                    </div>

        </Fade>
        <Slide right>
             <div className="discount_description">
                        <h3>Purchase ticket before 20th June</h3>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                  <Mybutton text="Clickiiii"
                  size="large"
                  style={{
                                background:'#ffa800',
                                color:'#ffffff'
                        }} 
                     link="http://google.com"
                  >
                    </Mybutton>     
        </Slide>
        </div>
  </div>
        </>
    )
}
export default Discount