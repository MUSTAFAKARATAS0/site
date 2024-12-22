import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/MustafaKaratas.pdf"; // PDF'nin doğru yolu
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import image from "../../Assets/download.jpeg"; // Resmin doğru yolu

// PDF.js Worker dosyasını yapılandırma
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js"; // Public klasöründe olması gerekiyor

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* CV İndirme Butonu */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;CV İndir
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", marginTop: "20px" }}>
          <img
            src={image}
            alt="Resume Preview"
            style={{
              maxWidth: "60%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}
          />
        </Row>

        {/* Alt İndirme Butonu */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;CV İndir
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
