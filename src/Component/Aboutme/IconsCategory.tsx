import { ReactComponent as IconBootstrap } from '../../Img/bootstrap.svg';
import { ReactComponent as IconC } from '../../Img/c.svg';
import { ReactComponent as IconCss } from '../../Img/css.svg';
import { ReactComponent as IconDocker } from '../../Img/docker.svg';
import { ReactComponent as IconFirebase } from '../../Img/firebase.svg';
import { ReactComponent as IconHtml } from '../../Img/html.svg';
import { ReactComponent as IconJavaScript } from '../../Img/javascript.svg';
import { ReactComponent as IconMui } from '../../Img/mui.svg';
import { ReactComponent as IconMysql } from '../../Img/mysql.svg';
import { ReactComponent as IconNodeJs } from '../../Img/nodejs.svg';
import { ReactComponent as IconReact } from '../../Img/react.svg';
import { ReactComponent as IconStyled } from '../../Img/styled.svg';
import { ReactComponent as IconTypeScript } from '../../Img/typescript.svg';
const propIcons = {
    height: 50,
    width : 50    
}
const iconsBack  = {
    '1': <IconC {...propIcons}/>,
    '2': <IconFirebase {...propIcons}/>,
    '3': <IconMysql {...propIcons}/>,
    '4': <IconNodeJs {...propIcons}/>,
    '5': <IconNodeJs {...propIcons}/>
  };
  const iconsFront  = {
    '6': <IconHtml {...propIcons}/>,
    '7': <IconCss {...propIcons}/>,
    '8': <IconJavaScript {...propIcons}/>,
    '9': <IconReact {...propIcons}/>,
    '10': <IconMui {...propIcons}/>,
    '11': <IconStyled {...propIcons}/>,
    '12': <IconBootstrap {...propIcons}/>,
    '13': <IconTypeScript {...propIcons}/>
  };
  const iconsOther  = {
    '14': <IconDocker {...propIcons}/>,
    '15': <IconDocker {...propIcons}/>
  };
  const IconsCategories = ({id} : {id : string}) => {
    return <>
    {iconsBack[id as keyof typeof iconsBack]},
    {iconsFront[id as keyof typeof iconsFront]},
    {iconsOther[id as keyof typeof iconsOther]}
    </>;
  };
export default IconsCategories;