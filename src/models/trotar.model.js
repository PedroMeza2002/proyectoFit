import mongoose from 'mongoose';

const trotSchema = new mongoose.Schema({
  kilometers: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Trot = mongoose.model('Trot', trotSchema);

export default Trot;
