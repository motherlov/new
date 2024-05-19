
import './App.css';

import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Login from './Component/Auth/Login/Login';
import Home from './Component/Cms/Home/Home';
import Create from './Component/Cms/Home/Create';
import ListData from './Component/Cms/Home/ListData';
import Details from './Component/Cms/Home/Details';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Home/>} />
        <Route path="/add" element={<Create/>} />
        <Route path="/list" element={<ListData/>} />
        <Route path="/getblogdetails/:id" element={<Details/>} />
      </Routes>
     </BrowserRouter> 
    
    </div>
  );
}

export default App;
