import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import Box from '@mui/material/Box';
export default function ActionAreaCard() {
  return (
    <Card sx={{position:'relative',boxShadow:'none',height:'65%'}}>
      <CardActionArea sx={{ width: "70%",marginLeft:'auto', marginRight:'auto', position:'relative',marginTop:'30px'}}>
        <CardMedia
          sx={{zIndex:3,position:'relative'}}
          component="img"
          image="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
          alt="green iguana"
        />
       
      </CardActionArea>
      <Box sx={{backgroundColor:"#F06022",borderRadius:'25px', color:'white',position:'absolute',height:'300px',width:'70%',left:'130px',top:'5px',zIndex:2}}>
        </Box>
      <Box sx={{backgroundColor:"#F06022",borderRadius:'25px', color:'white',position:'absolute',height:'auto',width:'55%',left:'50px',top:'200px',zIndex:3}}>
          <Typography sx={{padding:'30px',}}>
          "I'm constantly impressed by the company's commitment to innovation
          and its willingness to take risks to stay ahead of the curve. It's
          exciting to be part of such a forward-thinking organization."
          </Typography>
        </Box>
    </Card>
  );
}
