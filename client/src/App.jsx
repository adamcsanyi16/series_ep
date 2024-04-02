import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Addserie from "./pages/Addserie";
import Serie from "./pages/Serie";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Img from "./images/logo.jpeg";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="navbarka">
          <Container>
            <NavbarBrand href="/">
              <img src={Img} alt="" id="kep"/>
            </NavbarBrand>
            <Navbar.Brand href="/">Főoldal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/hozzaad">Sorozat hozzáad</Nav.Link>
                <Nav.Link href="/megjelenit">Sorozatok</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hozzaad" element={<Addserie />} />
          <Route path="/megjelenit" element={<Serie />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
