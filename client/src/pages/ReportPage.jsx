import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReportPage = () => {
  const [trots, setTrots] = useState([]);
  const [editedTrot, setEditedTrot] = useState(null);

  useEffect(() => {
    const fetchTrots = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/trotar');
        setTrots(response.data);
      } catch (error) {
        console.error('Error al obtener trotes:', error);
      }
    };

    fetchTrots();
  }, []);

  const handleEditTrot = async (id, newData) => {
    try {
      await axios.put(`http://localhost:4000/api/trotar/${id}`, newData);
      setEditedTrot(null);
      alert('Cambios guardados exitosamente.');
    } catch (error) {
      console.error('Error al guardar cambios:', error);
    }
  };

  const handleDeleteTrot = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/trotar/${id}`);
      setTrots(prevTrots => prevTrots.filter(trot => trot._id !== id));
      alert('Trote eliminado correctamente.');
    } catch (error) {
      console.error('Error al eliminar trote:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditedTrot(null);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container" style={{ width: '80%', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 className="title" style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Reporte de Trotes</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <Link to="/perfil" className="button is-primary">Ir a inicio</Link>
          </div>
          <div>
            <Link to="/trotar" className="button is-primary">Agregar Nuevo Trote</Link>
          </div>
        </div>
        <div className="table-container" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'auto' }}>
          <table className="table is-fullwidth" style={{ borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Kilómetros</th>
                <th>Tiempo (minutos)</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {trots.map((trot) => (
                <tr key={trot._id} style={{ backgroundColor: 'white' }}>
                  <td style={{ color: 'black', border: '1px solid #ccc', padding: '8px' }}>{new Date(trot.date).toLocaleDateString()}</td>
                  <td style={{ color: 'black', border: '1px solid #ccc', padding: '8px' }}>{new Date(trot.date).toLocaleTimeString()}</td>
                  <td style={{ color: 'black', border: '1px solid #ccc', padding: '8px' }}>
                    {editedTrot === trot._id ? (
                      <input
                        type="number"
                        value={trot.kilometers}
                        onChange={(e) => setTrots(prevTrots => prevTrots.map(prevTrot => prevTrot._id === trot._id ? {...prevTrot, kilometers: e.target.value} : prevTrot))}
                        style={{ border: `2px solid ${editedTrot === trot._id ? '#4CAF50' : 'transparent'}`, transition: 'border 0.3s ease', backgroundColor: 'transparent', borderRadius: '5px', width: '70px' }}
                      />
                    ) : trot.kilometers}
                  </td>
                  <td style={{ color: 'black', border: '1px solid #ccc', padding: '8px' }}>
                    {editedTrot === trot._id ? (
                      <input
                        type="number"
                        value={trot.time}
                        onChange={(e) => setTrots(prevTrots => prevTrots.map(prevTrot => prevTrot._id === trot._id ? {...prevTrot, time: e.target.value} : prevTrot))}
                        style={{ border: `2px solid ${editedTrot === trot._id ? '#4CAF50' : 'transparent'}`, transition: 'border 0.3s ease', backgroundColor: 'transparent', borderRadius: '5px', width: '70px' }}
                      />
                    ) : trot.time}
                  </td>
                  <td style={{ color: 'black', border: '1px solid #ccc', padding: '8px', verticalAlign: 'middle', display: 'flex', alignItems: 'center' }}>
                    {editedTrot === trot._id ? (
                      <>
                        <button onClick={() => handleEditTrot(trot._id, trot)} className="button is-primary" style={{ marginRight: '0.5rem' }}>
                          <span>&#10004;</span>
                        </button>
                        <button onClick={handleCancelEdit} className="button is-warning">
                          <span>&#10008;</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => setEditedTrot(trot._id)} className="button is-primary" style={{ marginRight: '0.5rem' }}>
                          <span>&#9998;</span>
                        </button>
                        <button onClick={() => handleDeleteTrot(trot._id)} className="button is-danger">
                          <span>&#10006;</span>
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
