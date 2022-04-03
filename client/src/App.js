import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import FilmList from './components/Films/FilmList/FilmList';
import Footer from './views/Footer/Footer';
import Nav from './views/Nav/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/films" element={<FilmList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
