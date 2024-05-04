import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DietPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRecipe, setExpandedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/recipes');
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleExpandRecipe = (recipeId) => {
    setExpandedRecipe(recipeId);
  };

  const handleCollapseRecipe = () => {
    setExpandedRecipe(null);
  };

  return (
    <div className="container">
      <h1 className="title" style={{ color: '#007bff' }}>Recetas Fitness para tu semana!</h1>
      <Link to="/perfil" className="button is-primary mb-3">Ir a inicio</Link>
      {loading ? (
        <progress className="progress is-small is-primary" max="100">Loading...</progress>
      ) : (
        <div className="columns is-multiline">
          {recipes.map(recipe => (
            <div key={recipe._id} className="column is-one-third">
              <div className="box" style={{ backgroundColor: '#f0f8ff', borderColor: '#add8e6' }}>
                <h2 className="subtitle" style={{ color: '#007bff' }}>{recipe.name}</h2>
                {expandedRecipe === recipe._id ? (
                  <div>
                    <p style={{ color: 'black' }}>{recipe.description}</p>
                    <h3 style={{ color: '#007bff' }}>Ingredients:</h3>
                    <ul>
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} style={{ color: 'black' }}>{ingredient}</li>
                      ))}
                    </ul>
                    <h3 style={{ color: '#007bff' }}>Instructions:</h3>
                    <p style={{ color: 'black' }}>{recipe.instructions}</p>
                    <button className="button is-primary" onClick={handleCollapseRecipe}>Ver menos</button>
                  </div>
                ) : (
                  <button className="button is-primary" onClick={() => handleExpandRecipe(recipe._id)}>Ver más</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DietPage;
