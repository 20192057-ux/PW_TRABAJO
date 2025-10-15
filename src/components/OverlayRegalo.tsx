import { useState } from "react";
import { Button, Toast, ToastContainer } from "react-bootstrap";

const OverlayRegalo: React.FC = () => {
  const [show, setShow] = useState(false);

  const recibirRegalo = () => {
    setShow(true);
    setTimeout(() => setShow(false), 3000); // Se oculta después de 3 segundos
  };

  return (
    <>
      <Button variant="warning" onClick={recibirRegalo} className="mb-3">
        🎁 Simular regalo
      </Button>

      <ToastContainer
        position="top-center"
        className="p-3"
        style={{ pointerEvents: "none" }}
      >
        <Toast
          onClose={() => setShow(false)}
          show={show}
          bg="warning"
          style={{
            minWidth: "250px",
            textAlign: "center",
            pointerEvents: "auto",
            animationName: "subir",
            animationDuration: "0.8s",
            animationTimingFunction: "ease-in-out",
          }}
        >
          <Toast.Body>
            <strong>🎉 ¡Gracias por el regalo!</strong>
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <style>{`
        @keyframes subir {
          0% { transform: translateY(50px); opacity: 0; }
          50% { transform: translateY(-10px); opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default OverlayRegalo;
