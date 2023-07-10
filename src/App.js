import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './page/Home/Home';
import MovieList from './components/movielist/movielist';
import "react-loading-skeleton/dist/skeleton.css"
import Movie from './page/movieDetail/movie';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    
      <Router>
      <Header/>
        <Routes>
          <Route path="/FILM-EE" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movies/:type" element={<MovieList />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
