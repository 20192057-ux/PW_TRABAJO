import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const StreamerDashboard: React.FC = () => {
  const [horas, setHoras] = useState(0); // empezar en 0 para la demo
  const [nivel, setNivel] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const horasPorNivel = 5; // 
  const horasParaSiguienteNivel = horasPorNivel - (horas % horasPorNivel);
  const progreso = ((horas % horasPorNivel) / horasPorNivel) * 100;

  const sumarHora = () => {
    const nuevasHoras = horas + 1;
    setHoras(nuevasHoras);

    if (nuevasHoras % horasPorNivel === 0) {
      const nuevoNivel = nivel + 1;
      setNivel(nuevoNivel);
      setShowToast(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card text-center bg-dark text-white shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-3">🎮 Dashboard del Streamer</h2>
          <p className="fs-5">Nivel actual: <strong>{nivel}</strong></p>
          <p className="fs-5">Horas totales transmitidas: <strong>{horas} h</strong></p>
          <p className="fs-6 text-secondary">
            Te faltan <strong>{horasParaSiguienteNivel}</strong> horas para el siguiente nivel
          </p>

          {/* Barra de progreso */}
          <div className="progress mt-4" style={{ height: "25px" }}>
            <div
              className="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              style={{ width: `${progreso}%` }}
              aria-valuenow={progreso}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {Math.round(progreso)}%
            </div>
          </div>

          {/* Boton para sumar horas */}
          <button className="btn btn-success mt-4" onClick={sumarHora}>
            + Sumar hora
          </button>
        </div>
      </div>

      {/* Aviso */}
      <ToastContainer className="p-3" position="top-end">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">🎉 ¡Subiste de nivel!</strong>
          </Toast.Header>
          <Toast.Body>Ahora eres nivel {nivel}. ¡Sigue transmitiendo!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default StreamerDashboard;