import React, { useState } from "react"; // React ve useState kütüphanesini içe aktar
import Navbar from "react-bootstrap/Navbar"; // Bootstrap Navbar bileşenini içe aktar
import Nav from "react-bootstrap/Nav"; // Bootstrap Nav bileşenini içe aktar
import Container from "react-bootstrap/Container"; // Bootstrap Container bileşenini içe aktar
import logo from "../Assets/MRQ.png"; // Logo resmini içe aktar
import { Link } from "react-router-dom"; // React Router'dan Link bileşenini içe aktar
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai"; // React Icons'dan simgeleri içe aktar

import { CgFileDocument } from "react-icons/cg"; // React Icons'dan belge simgesini içe aktar

function NavBar() {
  const [expand, updateExpanded] = useState(false); // Navbar'ın genişleme durumunu yönet
  const [navColour, updateNavbar] = useState(false); // Navbar rengini yönet

  function scrollHandler() {
    if (window.scrollY >= 20) { // Sayfa 20 piksel kaydırıldığında
      updateNavbar(true); // Navbar rengini değiştir
    } else {
      updateNavbar(false); // Navbar rengini eski haline getir
    }
  }

  window.addEventListener("scroll", scrollHandler); // Scroll olayını dinle

  return (
    <Navbar
      expanded={expand} // Navbar genişleme durumu
      fixed="top" // Navbar'ı sayfanın üst kısmına sabitle
      expand="md" // Orta boyutlarda genişletilebilir
      className={navColour ? "sticky" : "navbar"} // Navbar sınıfı
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex"> {/* Navbar markası */}
          <img src={logo} className="img-fluid logo" alt="brand" /> {/* Logo resmi */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav" // Erişilebilirlik için
          onClick={() => {
            updateExpanded(expand ? false : "expanded"); // Genişleme durumunu değiştir
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav"> {/* Navbar içeriği */}
          <Nav className="ms-auto" defaultActiveKey="#home"> {/* Navigasyon menüsü */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> {/* Ana sayfa bağlantısı */}
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)} // Hakkında bağlantısı
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)} // Projeler bağlantısı
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)} // Özgeçmiş bağlantısı
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar; // NavBar bileşenini dışa aktar
