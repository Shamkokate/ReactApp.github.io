
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {render} from 'react-dom'
import MainNav from './Component/MainNav';
import Home from './Component/Home';
import Product from './Component/Product';
import Mobiles from './Component/Mobiles';
import MainCard from './Component/MainCard';
import Accessories from './Component/Accessories';
import Resell from './Component/Resell';
import Login from './Component/Login';
import MainCart from './Component/MainCart';
import Price from './Component/Price';
import Rating from './Component/Rating';
import Brand from './Component/Brand';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './Component/ProductDetail';
import CartBtn from './Component/Buttons/CartBtn';
import Checkout from './Component/Checkout';
import Footer from './Component/Footer';
import Category from './Component/Category';
import CategoryPrice from './Component/CategoryPrice';
import CategoryRating from './Component/CategoryRating';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <MainNav />

        <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:id' element={<ProductDetail />}></Route>
          <Route path='/accessories' element={<Accessories />}></Route>
          <Route path='/resell' element={<Resell />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/maincart' element={<MainCart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>

          <Route path='/category' element={<Category />}></Route>
          <Route path='/categoryprice' elemen={<CategoryPrice />}></Route>
          <Route path='/categoryrating' element={<CategoryRating />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
