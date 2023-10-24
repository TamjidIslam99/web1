import Navbar from './component/Navbar';
import './App.css';
import Todowrapper from './component/Todowrapper';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import CourseLearnWrapper from './component/CourseLearnWrapper';
export function App() {
  return (
    <div className="App">
    
  
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Todowrapper/>}/>
      <Route exact path='/CLO' element={<CourseLearnWrapper/>}/>
     
    </Routes>
     
   

    
        
    </div>
  );
}
export default App;