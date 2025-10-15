import React from "react";

const StreamerDashboard: React.FC = () => {
  const horasTransmitidas = 120;

  return (
    <div className="container mt-5">
      <div className="card text-center bg-dark text-white shadow-lg">
        <div className="card-body">
          <h2 className="card-title">🎮 Dashboard del Streamer</h2>
          <p className="card-text fs-5 mt-3">
            Horas de transmisión totales: <strong>{horasTransmitidas} h</strong>
          </p>

          {/* Barra de progreso de Bootstrap */}
          <div className="progress mt-4" style={{ height: "20px" }}>
            <div
              className="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              style={{ width: `${(horasTransmitidas / 200) * 100}%` }}
              aria-valuenow={horasTransmitidas}
              aria-valuemin={0}
              aria-valuemax={200}
            >
              {(horasTransmitidas / 200) * 100}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamerDashboard;