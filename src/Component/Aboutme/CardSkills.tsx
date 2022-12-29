import { Grid } from '@mui/material';
import Skill from './Skill';
const CardSkills = () => {
    const skills = {
            backs : [
                {id : '1', text : 'C#' },
                {id : '2', text : 'Firebase 9'},
                {id : '3', text :'Mysql'},
                {id : '4', text : 'Node'},
                {id : '5', text : 'SQL'}
                ],
            fronts : [
                {id : '6', text : 'Html'},
                {id : '7', text : 'Css'},
                {id : '8', text : 'Javascript'},
                {id : '9', text : 'React'},
                {id : '10', text : 'Material-ui v5'},
                {id : '11', text : 'Styled-Componets'},
                {id : '12', text : 'Bootstrap'},
                {id : '13', text : 'Typescript'}
            ],
            others : [
                {id : '14', text : 'Docker'},
                {id : '15', text : 'Git'},
                {id : '16', text : 'Github'}
            ]
        }
    return (
        <Grid container xl={4} xs={11} p={3} sx={{
            justifyContent: 'center',
            textAlign:'center'}}>
                    {skills.backs.map((skill)=>{      
                     return (<Skill skillProps={skill}/>)
                    })}
                      {skills.fronts.map((skill)=>{      
                     return (<Skill skillProps={skill}/>)
                    })}
                      {skills.others.map((skill)=>{      
                     return (<Skill skillProps={skill}/>)
                    })}
        </Grid>
    );
}
export default CardSkills;
