
import './App.css';
import Navbar from './Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import Favourites from './Pages/favourites/Favourites';
import Deatils from './Pages/details/Deatils';
import { createRoot } from 'react-dom/client';


function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/favourite' element={<Favourites/>}></Route>

        <Route path='/recipe-item/:id' element={<Deatils />}></Route>

      </Routes>
      
      

    </div>
  );
}

export default App;
