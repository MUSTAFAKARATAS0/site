import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
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
              Yazlım alanına lise döneminde başlamış meraklı, çalışkan, tutkulu bir yazılım mühendisliği öğrencisiyim.
              Üniversite hayatım boyunca da sürekli gelişmeye açık bir şekilde yeni bilgiler edindim.
              <br />
          
              <br />
              Yeni Web Teknolojileri ve ürünleri geliştirmek, bu konudaki güncel haberleri ve teknolojleri araştırmak, ayrıca 
              Görüntü İşleme, Makine Öğrenmesi gibi alanımdan farklı konularda başka alanları da merak ettiğim için yapmış olduğum bazı araştırmalar ve projeler ilgi alanlarım arasında yer almaktadır..           
              <br />

              <br />
              Çoğu zaman Node.js, Modern Javascript Kütüphaneleri, React.js ve Next.js gibi
               teknolojiler ile ürün geliştirmeye olan tutkumu da uyguluyorum.
            </p>
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
