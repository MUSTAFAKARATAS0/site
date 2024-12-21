import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Herkese selamlar, ben <span className="purple">Mustafa KARATAŞ </span>
           Gaziantep'te yaşıyorum
            
            <br />
            Fırat Üniversitesi Yazılım Mühendisliğ 4. sınıf öğrencisiyim.
            <br />
            <br />
            Kodlama dışında sevdiğim aktviteler:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bilgisayar Oyunları
            </li>
            <li className="about-activity">
              <ImPointRight /> Kitap Okumak
            </li>
            <li className="about-activity">
              <ImPointRight /> Yeni Yerler Görmek
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
