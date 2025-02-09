import React from "react";
import Confetti from "react-confetti";
import { useMeasure  } from 'react-use';

const WinPage = () => {
  const { width, height } = useMeasure (); // Ekran boyutunu almak için

  return (
    <div style={styles.container}>
      <Confetti width={width} height={height} />
      <h1 style={styles.title}>🎉 Kazandınız! 🎉</h1>
      <p style={styles.subtitle}>Tebrikler, oyunu kazandınız!</p>
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
    backgroundColor: "#28a745",
    color: "white",
    textAlign: "center",
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

export default WinPage;
