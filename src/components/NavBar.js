import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const NavBar = ({ search }) => {
  const [words, setWords] = useState("");
  const onSearch = () => {
    if (words === "") {
      return;
    } else {
      search(words);
      setWords(""); // مسح النص بعد البحث
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="nav-row align-items-center container">
          <Col md="4" xs="5" lg="3" className="">
            <a href="/" className="logo-link">
              <h1 className="logo-name">movieweb</h1>
            </a>
          </Col>
          <Col md="6" xs="5" lg="7">
            <div className="search">
              <input
                value={words} // ضبط قيمة الإدخال بناءً على الحالة
                onChange={(e) => setWords(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </Col>
          <Col md="2" xs="2" lg="2">
            <button onClick={onSearch} className="btn button-search">
              Search
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
