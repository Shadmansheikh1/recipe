import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import MyNav from './Component/MyNav';
import About from './Pages/About';
import SingleRecipe from './Pages/SingleRecipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Home/> */}
      <About/>
      <MyNav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/SingleRecipe' element={<SingleRecipe/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
