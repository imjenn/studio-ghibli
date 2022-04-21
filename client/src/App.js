import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import About from './views/About/About';
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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <CartProvider> */}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/films' element={<FilmList />} />
            <Route path='/film/:id' element={<FilmStory />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/music' element={<Lofi />} />
            <Route path='/terms' element={<Terms />} />
          </Routes>
        {/* </CartProvider> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
