import React from "react";
import { Drawer } from "@mui/material";
import {List} from "@mui/material";
import {ListItem} from "@mui/material";
import { scroller } from 'react-scroll'

const SideDrawer = (props)=>{

 const links = [
        { where:'featured',value:'To top'},
        { where:'venuenfo',value:'Venue NFO'},
        { where:'highlights',value:'Highlights'},
        { where:'pricing',value:'Pricing'},
        { where:'location',value:'Location'}
    ]



    const Listmaker = ()=>(
        links.map((link,index)=>{
          return(
            <>
            <ListItem  onClick={()=>scroller.scrollTo(link.where)}>
                {link.value}
            </ListItem>
            </>
          )
        
                      

})
    )

    return(
        <>
        <Drawer  anchor="right"
        open={props.open}
        onClose={()=>props.onClose(false)}>
            <List component="nav">
                {Listmaker()}
            </List>

        </Drawer>
        </>
    )
}
export default SideDrawer;