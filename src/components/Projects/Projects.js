import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Proje verilerinin saklandığı bir dizi. Bu yapı kod tekrarını önler ve yönetimi kolaylaştırır.
const projects = [
  {
    // Proje 3: Gezilecek yerleri gösteren bir web sitesi
    imgPath: require("../../Assets/Projects/5Z2eP5Tfe0anTWCtliOV2v.webp"),
    title: "World Of Wonders",
    description:
      "React, NodeJs ve MongoDB kullanarak yapmış olduğum Dünya üzerindeki gezilecek yerleri gösteren web Sitesi.",
    ghLink: "https://github.com/MUSTAFAKARATAS0/WorldOfWonders",
  },
  {
    // Proje 5: Limanlar arası en kısa deniz yolu mesafesini bulan bir uygulama
    imgPath: require("../../Assets/Projects/images (2).jpeg"),
    title: "Maritime-Trade-Routes-Optimization",
    description:
      "Python ve Graph algoritmaları kullanarak seçilen iki liman arasındaki en kısa deniz yolu mesafesini gösteren web projesi.",
    ghLink: "https://github.com/MUSTAFAKARATAS0/Maritime-Trade-Routes-Optimization",
  },
  {
    // Proje 4: Film bilgilerini sunan bir mobil uygulama
    imgPath: require("../../Assets/Projects/images (1).jpeg"),
    title: "F Arsiv",
    description:
      "React Native, NodeJs ve MongoDB kullanarak yapmış olduğum, insanların filmleri görüp, hakkında bilgi alabildiği bir mobil app.",
    ghLink: "https://github.com/MUSTAFAKARATAS0/F-Arsiv",
  },
  {
    // Proje 1: Köpek fotoğraflarını analiz eden görüntü işleme projesi
    imgPath: require("../../Assets/Projects/images.jpeg"),
    title: "Dog Scope",
    description:
      "MobileNet teknolojisi kullanılarak sisteme yüklenen köpek fotoğraflarından hangi ırka ait olduğunu gösteren görüntü işleme projesi.",
    ghLink: "https://github.com/MUSTAFAKARATAS0/Dog-Scope",
  },
  {
    // Proje 2: Diyabetik Retinopati teşhis projesi
    imgPath: require("../../Assets/Projects/diyabetik-retinopati-2.jpg"),
    title: "Diabetic Retinopathy",
    description:
      "CNN algoritması ile fundus makinelerinden çekilen retina görüntülerinde diyabet olup olmadığını anlayan makine öğrenmesi projesi.",
    ghLink: "https://github.com/MUSTAFAKARATAS0/Diabetic-Retinopathy",
  },
  
 
  
];

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* Arka plan animasyonlarını sağlayan bileşen */}
      <Particle />
      <Container>
        {/* Başlık kısmı */}
        <h1 className="project-heading">
          Yaptığım  <strong className="purple">Projeler</strong>
        </h1>
        <p style={{ color: "#1f4758" }}>
          Yaptığım veya içinde yer aldığım projelerden bazıları.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Projelerin listelenmesi */}
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath} // Proje görseli
                isBlog={false}
                title={project.title} // Proje başlığı
                description={project.description} // Proje açıklaması
                ghLink={project.ghLink} // GitHub bağlantısı
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
