import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import FilmList from './components/Films/FilmList/FilmList';
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
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
