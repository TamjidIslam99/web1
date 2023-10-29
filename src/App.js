import Navbar from './component/Navbar';
import './App.css';
import Todowrapper from './component/Todowrapper';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import CourseLearnWrapper from './component/CourseLearnWrapper';
import CourseInfo from './component/CourseInfo';
import CouseInfoT from './component/CouseInfoT';
import CourseAsses from './component/CourseAsses';
import Bookreference from './component/Bookreference';
import Coursecontoutline from './component/Coursecontoutline';
import Guidedlearning from './component/Guidedlearning';
export function App() {
  return (
    <div className="App">
    
  
  
    <Navbar/>

    <Routes>
      <Route exact path='/' element={<Todowrapper/>}/>
      <Route exact path='/CLO' element={<CourseLearnWrapper/>}/>
      <Route exact path='/Cinfo' element={<CourseInfo/>}/>
      <Route exact path='/Cinfo23' element={<CouseInfoT/>}/>
      <Route exact path='/Cinfo33' element={<CourseAsses/>}/>
      <Route exact path="/Cinfo34" element={<Bookreference/> }/>
      <Route exact path="/Cinfo54" element={<Coursecontoutline/> }/>
      <Route exact path="/Cinfo44" element={<Guidedlearning/> }/>
    </Routes>
     
   

    
        
    </div>
  );
}
export default App;