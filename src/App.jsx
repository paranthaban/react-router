import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import All from "./All";
import FullStackDevelopment from "./FullStackDevelopment";
import DataScience from "./DataScience";
import Career from "./Career";
import CyberSecurity from "./CyberSecurity";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              {" "}
              <a href="https://www.guvi.in/blog/">
                <img
                  src="./image/Guvi-blog-logo.png"
                  alt="Guvi-blog-logo"
                ></img>
              </a>
            </div>
            <ul className="nav">
              <li>
                <a href="https://www.guvi.in/courses">COURSES</a>
              </li>
              <li>
                <a href="https://www.guvi.in/zen-class/full-stack-development-course/">
                  LIVE CLASSES
                </a>
              </li>
              <li>
                <a href="https://www.guvi.in/code-kata">PRACTICE</a>
              </li>
              <li>
                <a href="https://www.guvi.in/rewards">RESOURCES</a>
              </li>
              <li>
                <a href="https://www.guvi.in/mlp/GUVI-for-corporates">
                  OUR PRODUCTS
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <header className="header">
          <div className="container1">
            <a href="https://www.guvi.in/">
              <img
                src="./image/blog-header.png"
                height="172"
                width="1096"
              ></img>
            </a>
          </div>
        </header>

        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-nav mr-auto align">
            <Link className="nav-link" to="/">
              ALL
            </Link>
            <Link className="nav-link" to="/fullstackdevelopment">
              FULL STACK DEVELOPMENT
            </Link>
            <Link className="nav-link" to="/datascience">
              DATA SCIENCE
            </Link>
            <Link className="nav-link" to="/cybersecurity">
              CYBER SECURITY
            </Link>
            <Link className="nav-link" to="/career">
              CAREER
            </Link>
          </div>
        </Nav>

        <Routes>
          <Route path="/" exact Component={All} />
          <Route
            path="/fullstackdevelopment"
            exact
            Component={FullStackDevelopment}
          />
          <Route path="/datascience" exact Component={DataScience} />
          <Route path="/cybersecurity" exact Component={CyberSecurity} />
          <Route path="/career" exact Component={Career} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;