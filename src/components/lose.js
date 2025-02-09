import React, { useEffect, useState } from "react";

const LosePage = () => {
  return (
    <div style={styles.container}>
      <div className="rain"></div>
      <h1 style={styles.title}>😞 Kaybettiniz! 😞</h1>
      <p style={styles.subtitle}>Bir dahaki sefere daha iyi şanslar!</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#b22222", // Koyu kırmızı
    color: "white",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "20px",
  },
};

export default LosePage;
