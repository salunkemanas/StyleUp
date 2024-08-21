import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar2  from './components/Navbar2';
import SalonDetail from './components/SalonDetail';



function App() {
  return (
    <div>
    <Router>
    <Navbar2/>
      <Routes>
        <Route path='/salon/:id' element={<SalonDetail/>} ></Route>
        <Route path='/' element={<HomePage/>} ></Route>
      </Routes>
    </Router>
    
    </div>
  ) 
}

export default App
