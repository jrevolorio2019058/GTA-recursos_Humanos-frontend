import "./home.css";

import Sidebar from "../../components/others/Sidebar.jsx";

export const Home = () => {
    return (
        <main style={{ display: "flex" }}>
            <Sidebar style={{ flex: "0 0 250px" }} /> {/* Ajustar el ancho fijo del sidebar */}
            <div className="col py-3" style={{ backgroundColor: '#ecead3', color: '#6cb424', flex: 1 }}>
                <h1>Bienvenido al Panel de Administración</h1>
                <p style={{ color: '#848484' }}>
                    Gestión de usuarios y candidatos para las tiendas del Grupo de Tiendas Asociadas (GTA).
                </p>
            </div>
        </main>
    );
};