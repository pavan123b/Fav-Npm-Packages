
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Favlist from './pages/favlist';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [favarr, setFavarr] = useState([]);

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home setFavarr={setFavarr} favarr={favarr} />}></Route>
        <Route path="/favlist" element={<Favlist favarr={favarr} setFavarr={setFavarr}/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
