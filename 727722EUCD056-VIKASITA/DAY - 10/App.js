import './App.css';
import Read from './Components/Read';
import Create from './Components/Create';
import Update from './Components/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="main">
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Create/>} />
        <Route path="/read" element={<Read/>} />
        <Route path="/edit" element={<Update/>} />
        </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
