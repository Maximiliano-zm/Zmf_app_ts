import { Grid } from '@mui/material';
// import Job from './Job';
import sca from '../../Img/scamusica.png';
const AcorddionWork = () => {
  const jobs = [
    {id : 1 , 
    title : '2020 - 2021 Freelance && practica profesional' , 
    subtitle : 'Scamusica', 
    content : 'Scamusica pertenece al grupo de empresas El Conquistador FM quien ofrece servicios integracion de audio y contenidos libre de derechos autor',
    lenguajes : [
      {lenguaje : 'Html', icono : null , color : '#f16529'},
      {lenguaje: 'Css', icono : null , color : '#3487d1'},
      {lenguaje : 'Jquery',icono : null , color : '#fbec61'},
      {lenguaje : 'Boostrap',icono : null , color : '#6f42c1'}],
      link : 'https://www.scamusica.cl/',
      img : sca
    },
      // {id : 2 , 
      //   title : 'ASD - ASD ASD && ASD ASD' , 
      //   subtitle : 'Scamusica', 
      //   content : 'Scamusica pertenece al grupo de empresas El Conquistador FM quien ofrece servicios integracion de audio y contenidos libre de derechos autor',
      //   lenguajes : [
      //     {lenguaje : 'S', icono : null , color : '#61dafb'},
      //     {lenguaje : 'DD', icono : null , color : '#f661fb'},
      //     {lenguaje : 'jquDDery',icono : null , color : '#fbec61'},
      //     {lenguaje : 'BoosAAtrap',icono : null , color : '#fb6161'},
      //     {lenguaje : 'BoostrAAap',icono : null , color : '#fb6161'}],
      //   link : 'https://www.scamusica.cl/',
      //   img : sca
      // }
  ]
  return (
        <Grid container spacing={2} sx={{
            justifyContent: 'center',
            textAlign:'center'}}> 
                {/* {jobs.map((job,index)=>{
                 return(<Job key={index} job={job}/>) 
                })} */}
        </Grid>
    );
}
export default AcorddionWork;