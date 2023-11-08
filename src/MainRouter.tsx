// MainRouter.js (or wherever you define your routes)
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp'
import Login from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import About from './components/About/About';


function MainRouter() {
  return (
    
        <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path="/signup" element={<SignUp />} />
             <Route path="/login" element={<Login />} /> 
            <Route path="/about" element={<About />} />
        </Routes>
   
  );
}

export default MainRouter;
