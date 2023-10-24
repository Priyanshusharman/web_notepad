import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Notestate from './context/notes/notestate';
import Login from './component/Login';
import Singup from './component/Singup';
function App() {
  return (
    <Notestate>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route index element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Singup/>}/>
    </Routes>
    </Router>
    </Notestate>
  );
}

export default App;
