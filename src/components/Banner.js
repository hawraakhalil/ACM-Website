import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Banner.css'

export default function Banner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , padding:"50px"}}>
<img src={'/images/banner.jpg'} style={{width:"60%", borderRadius: "5rem", border: "5px solid black"}} /> 
</div>
  );
}