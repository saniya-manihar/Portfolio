import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaCertificate } from "react-icons/fa";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoTextStyle = {
    color: "#c770f0",
    fontSize: "1.4rem",
    fontWeight: "700",
    letterSpacing: 0.3,
  };

  return (
    <Navbar
      expanded={expanded}
      expand="md"
      fixed="top"
      className={scrolled ? "site-nav sticky" : "site-nav"}
      aria-label="Primary navigation"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)} className="d-flex align-items-center">
          <div className="nav-logo" aria-hidden="true">GZ</div>
          <span style={logoTextStyle} className="ms-2">SaniyaM</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(prev => !prev)}
          aria-expanded={expanded}
        >
          <span className="hamburger" />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center" role="navigation">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/"
                end
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineHome className="nav-icon" /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/about"
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineUser className="nav-icon" /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/project"
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className="nav-icon" /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/resume"
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <CgFileDocument className="nav-icon" /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* Certification link */}
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/certification"
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <FaCertificate className="nav-icon" /> Certification
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
              >
                <CgFileDocument className="nav-icon" /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn ms-3">
              <Button
                href="https://github.com/saniya-manihar"
                target="_blank"
                rel="noopener noreferrer"
                className="fork-btn-inner"
                aria-label="Open GitHub profile"
                onClick={() => setExpanded(false)}
              >
                <CgGitFork style={{ fontSize: "1.05em" }} />
                <AiFillStar style={{ fontSize: "0.95em", marginLeft: 6 }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
