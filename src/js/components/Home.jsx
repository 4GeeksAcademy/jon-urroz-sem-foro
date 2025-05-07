import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [auto, setAuto] = useState(false);

  const changeColor = () => {
    if (color === "red") setColor("yellow");
    else if (color === "yellow") setColor("green");
    else setColor("red");
  };

  useEffect(() => {
    let intervalId;
    if (auto) {
      intervalId = setInterval(changeColor, 3000);
    }
    return () => clearInterval(intervalId);
  }, [auto, color]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "black",
          padding: "10px",
          borderRadius: "30px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => setColor("red")}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            margin: "10px",
            background: color === "red" ? "red" : "darkred",
            boxShadow: color === "red" ? "0 0 25px 8px red" : "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
        <div
          onClick={() => setColor("yellow")}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            margin: "10px",
            background: color === "yellow" ? "yellow" : "darkgoldenrod",
            boxShadow: color === "yellow" ? "0 0 25px 8px yellow" : "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
        <div
          onClick={() => setColor("green")}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            margin: "10px",
            background: color === "green" ? "lime" : "darkgreen",
            boxShadow: color === "green" ? "0 0 25px 8px lime" : "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
      </div>

      <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
        <button
          onClick={changeColor}
          style={{
            padding: "12px 24px",
            borderRadius: "8px",
            background: "#555",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background 0.3s ease",
          }}
        >
          Cambiar Luz
        </button>

        <button
          onClick={() => setAuto(!auto)}
          style={{
            padding: "12px 24px",
            borderRadius: "8px",
            background: auto ? "#c0392b" : "#27ae60",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background 0.3s ease",
          }}
        >
          {auto ? "Detener" : "Auto"}
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
