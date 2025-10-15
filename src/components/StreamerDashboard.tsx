import React from "react";

const Dashboard: React.FC = () => {
    // Aquí guardaremos las horas transmitidas
    const horasTransmitidas: number = 120; // tipo explícito en TypeScript

    return (
        <div
            style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#1e1e1e",
                color: "#fff",
                borderRadius: "12px",
                margin: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
        >
            <h2>🎮 Dashboard del Streamer</h2>
            <p style={{ fontSize: "18px", marginTop: "10px" }}>
                Horas de transmisión totales:{" "}
                <strong>{horasTransmitidas} h</strong>
            </p>
        </div>
    );
};

export default Dashboard;