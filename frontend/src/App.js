
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';

import Addfavs from './pages/addfavs';
import Home from './pages/home';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [favarr, setFavarr] = useState([]);

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
        <Route path="/" element={<Home favarr={favarr} setFavarr={setFavarr}/>}></Route>
        <Route path="/addfavs" element={<Addfavs setFavarr={setFavarr} favarr={favarr}/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
