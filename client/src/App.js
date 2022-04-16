import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import About from './views/About/About';
import FilmList from './components/Films/FilmList/FilmList';
import FilmStory from './components/Films/FilmDescription/FilmStory';
import Footer from './views/Footer/Footer';
import Login from './components/Login/Login';
import Main from './views/Main/Main';
import Nav from './views/Nav/Nav';
import Register from './components/Register/Register';


function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/films' element={<FilmList />} />
          <Route path='/film/:id' element={<FilmStory />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
