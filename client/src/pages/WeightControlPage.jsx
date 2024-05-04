import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="container" style={{ width: '80%', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h1 className="title" style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Control de Peso</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="field">
                        <label className="label" style={{ color: '#333' }}>Peso (kg):</label>
                        <div className="control">
                            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="input is-primary" style={{ backgroundColor: 'var(--bulma-table-cell-background-color)', color: 'black' }} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" style={{ color: '#333' }}>Altura (cm):</label>
                        <div className="control">
                            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="input is-primary" style={{ backgroundColor: 'var(--bulma-table-cell-background-color)', color: 'black' }} />
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control" style={{ marginRight: '20px' }}>
                            <button type="submit" disabled={loading} className={`button is-primary ${loading && 'is-loading'}`} style={{ width: '100%' }}>Calcular</button>
                        </div>
                        <div className="control">
                            <Link to="/perfil" className="button is-success" style={{ width: '100%' }}>Ir a inicio</Link>
                        </div>
                    </div>
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
