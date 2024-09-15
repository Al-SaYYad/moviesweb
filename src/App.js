import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailsComp from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState();

  // Get All Movies By Axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=e1f322ba5fca711f534b15757478cebe"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Get Current Page
  const getPage = async (numPage) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=e1f322ba5fca711f534b15757478cebe&page=${numPage}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  // On Search To API
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e1f322ba5fca711f534b15757478cebe&query=${word}&language=en`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };

  return (
    <div className="font color-body">
      <BrowserRouter basename="/">
        <NavBar search={search} />
      </BrowserRouter>
      <Container>
        <BrowserRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetailsComp />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
