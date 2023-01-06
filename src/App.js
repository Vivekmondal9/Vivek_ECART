// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home"
import Cart from './Cartitems/Cart';

function App() {

  
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart'element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
