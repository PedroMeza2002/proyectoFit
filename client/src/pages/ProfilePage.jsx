import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProfilePage() {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:4000/api/logout');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold mb-6 text-gray-800">¡Bienvenido a tu perfil!</h1>
                <ul className="space-y-4">
                    <li>
                        <Link to="/trotar" className="block text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                            Trotar
                        </Link>
                    </li>
                    <li>
                        <Link to="/reporte" className="block text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                            Ver Informes
                        </Link>
                    </li>
                    <li>
                        <Link to="/controlPeso" className="block text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                            Control de peso
                        </Link>
                    </li>
                    <li>
                        <Link to="/dieta" className="block text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                            Dieta
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={handleLogout} className="block w-full text-center py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
                            Cerrar sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfilePage;
