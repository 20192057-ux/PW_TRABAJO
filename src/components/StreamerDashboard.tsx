
const StreamerDashboard = () => {
  const horasTotales = 120 // Ejemplo, luego se puede hacer dinámico

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4 text-center">
        <h2 className="text-primary mb-3">🎮 Dashboard del Streamer</h2>
        <p className="fs-5">
          <strong>Horas totales transmitidas:</strong> {horasTotales} h
        </p>
        <div className="progress mt-3" style={{ height: "20px" }}>
          <div
            className="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            style={{ width: `${(horasTotales / 200) * 100}%` }}
            aria-valuenow={horasTotales}
            aria-valuemin={0}
            aria-valuemax={200}
          >
            {(horasTotales / 200) * 100}%
          </div>
        </div>
      </div>
    </div>
  )
}


export default StreamerDashboard;