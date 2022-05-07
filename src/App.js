
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import Products from './component/Products/Products';
import Register from './component/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/products' element={<Products></Products>} ></Route>
       <Route path='/orders'element={<Orders></Orders>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
