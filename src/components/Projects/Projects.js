import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Yaptığım <strong className="purple">Projeler </strong>
        </h1>
        <p style={{ color: "white" }}>
        Yaptığım veya içinde yer aldığım projeler.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dog Scope"
              description="MobileNet teknolojisi kullanılarak sisteme yüklenen köpek fotoğraflarından hangi ırka ait olduğunu gösteren görüntü işleme projesi."
              ghLink="https://github.com/MUSTAFAKARATAS0/Dog-Scope"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Diabetic Retinopathy "
              description="CNN algoritması ile fundus makinelerinden çekilen retina görüntülerinde diyabet olup olmadığını anlayan makine öğrenmesi projesi."
              ghLink="https://github.com/MUSTAFAKARATAS0/Diabetic-Retinopathy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="World Of Wonders"
              description="React, NodeJs ve MongoDB kullanarak yapmış olduğum Dünya üzerindeki gezileceke yerleri gösteren Web Sitesi"
              ghLink="https://github.com/MUSTAFAKARATAS0/WorldOfWonders"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="F Arsiv"
              description="React Native, NodeJs ve MongoDB kullanarak yapmış olduğum, insanların filmleri görüp, hakkında bilgi alabildiği bir mobil projesi."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Maritime-Trade-Routes-Optimization"
              description="Python ve Graph algoritmaları kullanarak seçilen iki liman arasındaki en kısa deniz yolu mesafesini gösteren uygulama. "
              ghLink="https://github.com/MUSTAFAKARATAS0/Maritime-Trade-Routes-Optimization"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
