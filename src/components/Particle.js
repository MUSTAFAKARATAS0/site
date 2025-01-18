import React from "react";
import Particles from "react-tsparticles";

// Particle bileşeni: Sayfanın arka planında hareketli partikül efektleri oluşturur.
function Particle() {
  return (
    <Particles
      id="tsparticles" // Bu ID, partikül efektlerini tanımlamak için kullanılır.
      params={{
        particles: {
          // Partikül özellikleri
          number: {
            value: 160, // Sayfada yer alacak toplam partikül sayısı
            density: {
              enable: true, // Partikül yoğunluğunu etkinleştirir.
              value_area: 1500, // Partiküllerin yoğun olarak yerleşeceği alan büyüklüğü
            },
          },
          line_linked: {
            enable: false, // Partiküller arasında çizgi bağlantılarını devre dışı bırakır.
            opacity: 0.03, // Çizgi bağlantıları etkinse, bağlantıların şeffaflık seviyesi
          },
          move: {
            direction: "right", // Partiküllerin hareket yönü (sağa doğru)
            speed: 0.05, // Partiküllerin hareket hızı
          },
          size: {
            value: 1, // Partiküllerin boyutu
          },
          opacity: {
            anim: {
              enable: true, // Opaklık animasyonunu etkinleştirir.
              speed: 1, // Opaklık değişim hızı
              opacity_min: 0.05, // Minimum opaklık değeri
            },
          },
        },
        interactivity: {
          // Kullanıcı ile etkileşim özellikleri
          events: {
            onclick: {
              enable: true, // Tıklama olayını etkinleştirir.
              mode: "push", // Tıklama sırasında yeni partiküller oluşturur.
            },
          },
          modes: {
            push: {
              particles_nb: 1, // Her tıklamada oluşturulacak partikül sayısı
            },
          },
        },
        retina_detect: true, // Retina ekranlar için destek
      }}
    />
  );
}

export default Particle; // Bileşeni dışa aktarır, böylece başka dosyalarda kullanılabilir.
