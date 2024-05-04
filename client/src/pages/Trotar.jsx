import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Trotar = () => {
  const [kilometros, setKilometros] = useState('');
  const [tiempo, setTiempo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:4000/api/trotar', { kilometers: kilometros, time: tiempo });
      alert('Datos de trote guardados exitosamente.');
      setKilometros('');
      setTiempo('');
    } catch (error) {
      console.error('Error al guardar datos de trote:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container" style={{ width: '80%', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 className="title" style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Registro de Trote</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" style={{ color: '#333' }}>Kilómetros</label>
            <div className="control">
              <input
                className="input is-primary"
                type="number"
                value={kilometros}
                onChange={(e) => setKilometros(e.target.value)}
                required
                style={{ backgroundColor: 'var(--bulma-table-cell-background-color)', color: 'black' }}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" style={{ color: '#333' }}>Tiempo (minutos)</label>
            <div className="control">
              <input
                className="input is-primary"
                type="number"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
                required
                style={{ backgroundColor: 'var(--bulma-table-cell-background-color)', color: 'black' }}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className={`button is-primary ${loading && 'is-loading'}`} type="submit" disabled={loading}>
                Guardar
              </button>
            </div>
          </div>
        </form>
        <div className="field" style={{ display: 'flex', marginTop: '20px' }}>
          <div className="control" style={{ marginRight: '10px' }}>
            <Link to="/perfil" className="button is-success is-fullwidth">Ir a inicio</Link>
          </div>
          <div className="control">
            <Link to="/reporte" className="button is-info is-fullwidth">Ver Reportes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trotar;
