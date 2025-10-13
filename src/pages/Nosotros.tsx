import TeamMember from '../components/TeamMember'

const Nosotros = () => {
    return (
        <div className="container py-5">
            <h1>Nosotros</h1>
            <h2 className="mb-4">Conoce al equipo</h2>
            <div className="row justify-content-center">
                <TeamMember src={"https://randomuser.me/api/portraits/men/27.jpg"} name="Juan Pérez" />
                <TeamMember src={"https://randomuser.me/api/portraits/men/30.jpg"} name="Esteban López" />
                <TeamMember src={"https://randomuser.me/api/portraits/men/33.jpg"} name="Carlos Gómez" />
                <TeamMember src={"https://randomuser.me/api/portraits/men/36.jpg"} name="Facundo Salazar" />
                <TeamMember src={"https://randomuser.me/api/portraits/men/39.jpg"} name="Julian Rodríguez" />
            </div>
        </div>
    )
}

export default Nosotros