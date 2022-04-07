import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import FilmList from './components/Films/FilmList/FilmList';
import FilmStory from './components/Films/FilmDescription/FilmStory';
import Footer from './views/Footer/Footer';
import Nav from './views/Nav/Nav';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' />
          <Route path='/films' element={<FilmList />} />
          <Route path='/film/:id' element={<FilmStory />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
