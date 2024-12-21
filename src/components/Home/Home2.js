import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Kendimi <span className="purple"> Tanıtayım </span> 
            </h1>
            <p className="home-about-body">
              Programlamayı seviyorum ve en azından bir şeyler öğrendiğimi düşünüyorum.
              <br />
              
              
              
              <br />
              <br />
              İlgi alanlarım arasında yeni Web Teknolojileri ve ürünleri geliştirmek ayrıca 
              Görüntü İşleme ve Makine Öğrenmesi ile ilgili alanlar yer almaktadır.
             
              <br />
              <br />
              Mümkün olduğunda, Node.js ve Modern Javascript Kütüphanesi ve React.js ve Next.js gibi
               Çerçeveler ile ürün geliştirmeye olan tutkumu da uyguluyorum.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>BANA ULAŞIN</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MUSTAFAKARATAS0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mustafa-karata%C5%9F-657202221/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_mustafakaratas0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
