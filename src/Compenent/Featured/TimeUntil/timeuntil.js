import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";


const TimeUntil = ()=>{
      const [time,settime] = useState(
        {
          seconds:'0',
          minutes:'0',
          hours:'0',
          days:'0'  
        }
      )

    const renderItem = (time,value) => (
        <div className="countdown_item">
            <div className="countdown_time">
                {time}
            </div>
            <div className="countdown_tag">
                {value}
            </div>
        </div>
    )

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0){
            console.log('Date passed')
        } else{
           const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));
            console.log(seconds)


             settime({
                seconds:seconds,
                minutes:minutes,
                hours:hours,
                days:days
             })
            
        }   

    }


 useEffect(()=>{
      setInterval(()=>getTimeUntil('Dec, 20, 2024, 01:20:00'),1000)
  },[getTimeUntil])

    return(
        <>
         <Slide left delay={50}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    {renderItem(time.days,'Days')}
                    {renderItem(time.hours,'HS')}
                    {renderItem(time.minutes,'Min')}
                    {renderItem(time.seconds,'Sec')}



                </div>
            </div>
        </Slide>
        </>
    )
}
export default TimeUntil;