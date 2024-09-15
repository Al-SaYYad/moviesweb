import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetailsComp = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  // Get Movies By Details
  const getMoviesDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=e1f322ba5fca711f534b15757478cebe&language=en`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMoviesDetails();
  }, []);
  return (
    <div>
      <Row className="d-flex align-items-center justify-content-center">
        <Col md="6" xs="12" sm="12" className="mt4">
          <div className="card-details d-flex align-items-center">
            <div className="details-movie justify-content-center text-center mx-auto">
              <p className="movie-name">Movie Name: {movie.original_title}</p>
              <p className="card-text-details ">
                Production Date: {movie.release_date}
              </p>
              <p className="card-text-details ">
                Vote Count: {movie.vote_count}
              </p>
              <p className="card-text-details">
                Vote Average: {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
        <Col md="6" xs="12" sm="12">
          <img
            className="img-movie w-30"
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt="Filem Logo"
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom"></p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="justify-content-center mt-2 d-flex mb-5"
        >
          <Link to={movie.homepage} target="_blank">
            <button
              style={{ backgroundColor: "red", border: "none"}}
              className="btn btn-primary mx-2"
            >
              Watch Filem
            </button>
          </Link>
          <Link to={"/"}>
            <button
              style={{ backgroundColor: "red", border: "none" }}
              className="btn btn-primary mx-2"
            >
              Go Home
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetailsComp;
