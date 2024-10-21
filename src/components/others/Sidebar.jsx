import React from 'react';

import { useAuth } from "../../shared/hooks/auth/useAuth";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
    const { logout } = useAuth();

    return (
        <>
            <div className="sidebar" style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                height: '100vh', 
                width: '250px', 
                backgroundColor: '#079ddc', 
                zIndex: 1000 
            }}>
                <div className="d-flex flex-column align-items-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">Menú</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white align-middle px-0">
                                <i className="fs-4 bi-house"></i>
                                <span className="ms-1 d-none d-sm-inline">Inicio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                                <i className="fs-4 bi-person-circle"></i>
                                <span className="ms-1 d-none d-sm-inline">Usuarios</span>
                            </a>
                            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link text-white px-0">
                                        <span className="d-none d-sm-inline">Agregar</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                                <i className="fs-4 bi-person-badge"></i>
                                <span className="ms-1 d-none d-sm-inline">Candidatos</span>
                            </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link text-white px-0">
                                        <span className="d-none d-sm-inline">Agregar</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* Historial */}
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white align-middle px-0">
                                <i className="fs-4 bi-clock-history"></i>
                                <span className="ms-1 d-none d-sm-inline">Historial</span>
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." alt="User Avatar" width="30" height="30" className="rounded-circle me-2" />
                            <span className="d-none d-sm-inline">Usuario</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="#">Perfil</a></li>
                            <li><a className="dropdown-item" href="#">Configuraciones</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#" onClick={logout}>Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: '250px', padding: '20px' }}>
            </div>
        </>
    );
};

export default Sidebar;