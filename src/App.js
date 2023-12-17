import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./pages/Movie_detail/MovieDetail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Search from "./pages/SearchBar/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies/:type" element={<MovieList />} />
        <Route path="/search/*" element={<Search />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
