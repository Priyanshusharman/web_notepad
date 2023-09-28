import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Notestate from './context/notes/notestate';
function App() {
  return (
    <Notestate>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route index element={<Home />} />
      <Route path='/about' element={<About/>}/>
    </Routes>
    </Router>
    </Notestate>
  );
}

export default App;
