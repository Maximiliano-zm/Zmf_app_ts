import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import App from './App';
import AnimationAOS from "./AnimationAOS";

AnimationAOS();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>      
  </Routes>
  </BrowserRouter>    
);
