import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" } }>
           Herkese selamlar, ben <span className="purple">Mustafa KARATAŞ </span>
          
            
            <br />
            Fırat Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim.
            </p>
            <br />
           {/* İşte kodlama dışında sevdiğim aktvitelerden bazıları:
          
          <ul>
          <li className="about-activity">
              <ImPointRight /> Film İzlemek
            </li>
            <li className="about-activity">
              <ImPointRight /> Futbol Oynamak
            </li>
            <li className="about-activity">
              <ImPointRight /> Bilgisayar Oyunları
            </li>
            <li className="about-activity">
              <ImPointRight /> Kitap, dergi Okumak
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Yeni Yerler Görmek
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
