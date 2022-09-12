import React from 'react';
//components
import Navbar from './Component/Navbar/Navbar';
import NavbarMail from './Component/Navbar/NavbarMail';
import Description from './Component/Description/Description';
import Aboutme from './Component/Aboutme/Aboutme';
import Worked from './Component/Work/Worked';

//themes
import { theme } from './Themeconfig/ThemeConfig';
import { ThemeProvider } from '@mui/system';
//components mui 5v
import {Grid} from '@mui/material';
import Footer from './Component/Footer/Footer';
import Project from './Component/Project/Project';


const App  = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{flexDirection : 'row' , justifyContent : 'space-between' , position:'fixed'}}>
      <Navbar />
      <NavbarMail />
      </Grid>
        <Description/>
        <Aboutme/>
        {/* <Worked/> */}
        {/* <Project/> */}
        <Footer/>
    </ThemeProvider>
    );
}
export default App;

