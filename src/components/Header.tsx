import "./Header.css";

const Header = () =>{
    return(
        <header className="header">
            <nav className="navbar navbar-g5">
                <div className="container d-flex justify-content-between align-items-center">
                    <h4 className="navbar-brand fw-bold">Plataforma Stream Grupo 5</h4>
                    <div className="d-flex">
                        <button className="btn btn-g5"  type="button">
                            Iniciar Sesion
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Header
