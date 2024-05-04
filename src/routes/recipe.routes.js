import express from 'express';
import { getAllRecipes } from '../controllers/recipe.controller.js';

const router = express.Router();

router.get('/recipes', getAllRecipes);

export default router;
