import React from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SideDrawer from "../Drawer/drawer";
import MenuIcon from '@mui/icons-material/Menu';
import { useState,useEffect } from "react";
const Header = ()=>{

let [opendraw , setopendraw] = useState(false)
 const [headerShow,setHeaderShow] =  useState(false);

    const handleScroll = () => {
        if(window.scrollY > 0) {
            setHeaderShow(true)
        } else {
            setHeaderShow(false)
        }
    }

     useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    },[])
const toggledrawer = (value)=>
{
    setopendraw(value)
}

    return(
        <>
     <Box>
        <AppBar position="fixed" style={{
            backgroundColor:headerShow ? '#2f2f2f': 'transparent',
            padding:'7px 0px',
            boxShadow:"none"
        }}>
            <Toolbar>
                <div className="header_logo">
                    <div className="header_logo_venue">The Venue</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>
                 <IconButton aria-label="Menue" color="inherit" onClick={()=>toggledrawer(true)}>
                <MenuIcon />
            </IconButton>
            <SideDrawer open={opendraw}
            onClose={(value)=>toggledrawer(value)} />
            </Toolbar>
        </AppBar>
        </Box>
        </>
    )
}
export default Header