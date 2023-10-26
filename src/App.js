import Navbar from './component/Navbar';
import './App.css';
import Todowrapper from './component/Todowrapper';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import CourseLearnWrapper from './component/CourseLearnWrapper';
import CourseInfo from './component/CourseInfo';
export function App() {
  return (
    <div className="App">
    
  

    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Todowrapper/>}/>
      <Route exact path='/CLO' element={<CourseLearnWrapper/>}/>
      <Route exact path='/Cinfo' element={<CourseInfo/>}/>
     
    </Routes>
     
   

    
        
    </div>
  );
}
export default App;