import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [String],
  instructions: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
