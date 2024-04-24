import React, { useState } from 'react';
import axios from 'axios';

const WeightControlPage = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [imc, setImc] = useState(null);
    const [idealWeight, setIdealWeight] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/api/calculate-imc', { weight, height });
            setImc(response.data.imc);
            setIdealWeight(response.data.idealWeight);
            setError(null);
        } catch (error) {
            setError('Error al calcular el IMC y el peso ideal');
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500">
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-black">
                <h1 className="text-3xl font-bold mb-4">Control de Peso</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Peso (kg):</label>
                        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Altura (cm):</label>
                        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Calcular</button>
                </form>
                {loading && <p className="text-gray-600">Cargando...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {imc && <p className="text-gray-700">IMC: {imc.toFixed(0)}</p>}
                {idealWeight && <p className="text-gray-700">Peso Ideal: {idealWeight.min.toFixed(0)} - {idealWeight.max.toFixed(0)}</p>}
            </div>
        </div>
    );
};

export default WeightControlPage;
