import React from "react";
import { Button } from "@mui/material";

const Mybutton = (props)=>{

return(
    <>
    <Button variant="contained"
    size={props.size}
    style={{...props.style}}
    href={props.href}>
        {props.text}
    </Button>
    </>
)

}



export default Mybutton;