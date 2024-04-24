import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProfilePage() {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:4000/api/logout');
            // Redirigir al usuario a la página de inicio de sesión u otra página
            // Aquí puedes usar useHistory si estás usando React Router
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-200 to-blue-400">
            <div className="bg-white p-12 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">¡Bienvenido a tu perfil!</h1>
                <ul className="space-y-6 text-xl">
                    <li className="flex items-center">
                        <span className="mr-3 text-blue-600 text-3xl">&#x1F374;</span>
                        <Link to="/dieta" className="text-gray-800 hover:text-blue-600 transition duration-300">Dieta</Link>
                    </li>
                    <li className="flex items-center">
                        <span className="mr-3 text-blue-600 text-3xl">&#x1F9DA;&#xFE0F;</span>
                        <Link to="/controlPeso" className="text-gray-800 hover:text-blue-600 transition duration-300">Control de peso</Link>
                    </li>
                    <li className="flex items-center">
                        <span className="mr-3 text-blue-600 text-3xl">&#x1F3C3;&#xFE0F;&#x200D;&#x2642;&#xFE0F;</span>
                        <Link to="/trotar" className="text-gray-800 hover:text-blue-600 transition duration-300">Trotar</Link>
                    </li>
                    <li className="flex items-center">
                        <button onClick={handleLogout} className="text-gray-800 hover:text-blue-600 transition duration-300">
                            Cerrar sesión
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfilePage;
