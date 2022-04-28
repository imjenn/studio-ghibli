import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { useState, useContext } from 'react';

import About from './views/About/About';
import Cart from './views/Cart/Cart';
import CartProvider from './context/CartProvider';
import FilmList from './components/Films/FilmList/FilmList';
import FilmStory from './components/Films/FilmDescription/FilmStory';
import Footer from './views/Footer/Footer';
import Lofi from './views/Lofi/Lofi';
import Login from './components/Login/Login';
import Main from './views/Main/Main';
import Nav from './views/Nav/Nav';
import ProductList from './components/Shop/ProductList/ProductList'
import Register from './components/Register/Register';
import Terms from './views/Misc/Terms';
import SnackbarContextProvider from './context/snackbar-context';
import SnackbarContext from './context/snackbar-context'
import Snackbar from './views/Snackbar/Snackbar'

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const snackbarCtx = useContext(SnackbarContext)

  const displayCartHandler = () => {
    setDisplayCart(true);
  }

  const hideCartHandler = () => {
    setDisplayCart(false);
  }

  return (
    <CartProvider>
      <SnackbarContextProvider>
        <div className="App">
          <BrowserRouter>
            <Nav onDisplayCart={displayCartHandler} />
            {displayCart && <Cart onHideCart={hideCartHandler} />}
            {snackbarCtx.isDisplayed && <Snackbar />}
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/films' element={<FilmList />} />
              <Route path='/film/:id' element={<FilmStory />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/about' element={<About />} />
              <Route path='/music' element={<Lofi />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/shop' element={<ProductList />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </SnackbarContextProvider>
    </CartProvider>
  );
}

export default App;
