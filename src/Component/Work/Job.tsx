import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card,Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Job = () => {

    return (
      <Grid item xl={5} xs={11} data-aos="zoom-in" data-aos-duration="1500">
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography></Typography>
            </AccordionSummary>
            <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
             
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                    
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      
                      </Typography>
                  </CardContent>
                      <CardContent sx={{display : 'flex',flexDirection : 'row', gap: 1}}>
                       
                      </CardContent>
                </CardActionArea>
              </Card>
        </Accordion>
      </Grid>
    );
}
export default Job;

