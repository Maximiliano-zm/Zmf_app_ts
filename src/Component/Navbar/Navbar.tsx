import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Grid, Typography } from '@mui/material';
const Navbar = () => {
  return (
      <Grid m={1} data-aos="fade-right" data-aos-duration="1500">
      <AppBar elevation={0} position="static" sx={{backgroundColor:'transparent'}}>
        <Toolbar sx={{flexDirection:'column'}}>
          <IconButton
            size="large"
            color="secondary"
            href='https://github.com/Maximiliano-zm'
          >
            <GitHubIcon/>
          </IconButton>
          <Divider orientation="horizontal" variant="middle" flexItem sx={{ bgcolor: '#fff' }}/>
          <IconButton
            size="large"
            color="secondary"
            href='https://www.linkedin.com/in/maximiliano-zurita-7a9841206/'
          >
            <LinkedInIcon/>
          </IconButton>
          <IconButton
            size="large"
            color="secondary"
            href='https://drive.google.com/file/d/17NF9_rkZfFwGKQV1_jIvZn2aBBTg9ksO/view?usp=sharing'
          >
          <InsertDriveFileIcon color='primary'/>
          </IconButton>
          <Typography variant="body1"  sx={{writingMode : 'vertical-lr'}}>
              Resumen
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default Navbar;