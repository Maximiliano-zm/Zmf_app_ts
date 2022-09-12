import {Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import IconsCategories from './IconsCategory';
interface Propstypes {
    skillProps: {
        id: string;
        text: string;
    }  
}
const Skill = ({skillProps} : Propstypes) => {
    const propIcons = {
        height: 50,
        width : 50
    }
    return (
    <>
    <Grid  m={1} xl={4} sx={{flexDirection : 'row'}}>
        <IconsCategories {...propIcons} id={skillProps.id}/>
        <Typography gutterBottom variant='body2' color='#fff'>
            {skillProps.text}
        </Typography>     
    </Grid>
    </>
      );
}
export default Skill;