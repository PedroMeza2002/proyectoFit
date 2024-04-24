import { Link } from 'react-router-dom';

function DietPage() {
    return (
        <div className="flex justify-center items-center h-screen" style={{ background: 'linear-gradient(135deg, #D6E4FF 0%, #FBC2EB 100%)' }}>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Dieta</h1>
                <p className="text-gray-700 mb-4">Estamos trabajando en esta página. ¡Pronto estará disponible!</p>
                <Link to="/perfil" className="text-blue-500 hover:underline">← Volver</Link>
            </div>
        </div>
    );
}

export default DietPage;
