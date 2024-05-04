import Trot from '../models/trotar.model.js';

export const saveTrotData = async (req, res) => {
  const { kilometers, time } = req.body;

  try {
    const newTrot = new Trot({ kilometers, time });
    await newTrot.save();
    res.status(201).json({ message: 'Datos de trote guardados correctamente.' });
  } catch (error) {
    console.error('Error al guardar datos de trote:', error);
    res.status(500).json({ message: 'Error al guardar datos de trote.' });
  }
};

export const getAllTrots = async (req, res) => {
  try {
    const trots = await Trot.find();
    res.status(200).json(trots);
  } catch (error) {
    console.error('Error al obtener trotes:', error);
    res.status(500).json({ message: 'Error al obtener trotes.' });
  }
};

export const deleteTrot = async (req, res) => {
  const { id } = req.params;

  try {
    await Trot.findByIdAndDelete(id);
    res.status(200).json({ message: 'Trote eliminado correctamente.' });
  } catch (error) {
    console.error('Error al eliminar el trote:', error);
    res.status(500).json({ message: 'Error al eliminar el trote.' });
  }
};

export const updateTrot = async (req, res) => {
  const { id } = req.params;
  const { kilometers, time } = req.body;

  try {
    const updatedTrot = await Trot.findByIdAndUpdate(id, { kilometers, time }, { new: true });
    res.status(200).json(updatedTrot);
  } catch (error) {
    console.error('Error al actualizar el trote:', error);
    res.status(500).json({ message: 'Error al actualizar el trote.' });
  }
};

