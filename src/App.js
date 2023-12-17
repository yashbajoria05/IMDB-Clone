import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./pages/Movie_detail/MovieDetail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Search from "./pages/SearchBar/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path="/IMDB_clone" element={<Home />} />
          <Route path="IMDB_clone/movie/:id" element={<MovieDetail />} />
          <Route path="IMDB_clone/movies/:type" element={<MovieList />} />
          <Route path="IMDB_clone/search/*" element={<Search />} />
          <Route path="IMDB_clone/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
