import express from 'express';
import { saveTrotData, getAllTrots, deleteTrot, updateTrot } from '../controllers/trotar.controller.js'; 

const router = express.Router();

router.post('/trotar', saveTrotData);
router.get('/trotar', getAllTrots);
router.delete('/trotar/:id', deleteTrot); 
router.put('/trotar/:id', updateTrot); 

export default router;
