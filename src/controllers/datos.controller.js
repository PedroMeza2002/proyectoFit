export const calculateImc = async (req, res) => {
    const { weight, height } = req.body;

    const weightNumber = parseFloat(weight); // Convertir peso a número
    const heightNumber = parseFloat(height); // Convertir altura a número

    if (isNaN(weightNumber) || isNaN(heightNumber) || heightNumber <= 0 || weightNumber <= 0) {
        return res.status(400).json({ error: 'Peso y altura deben ser números positivos válidos.' });
    }

    const heightInMeters = heightNumber / 100; // Convertir altura a metros
    const imc = Math.round(weightNumber / (heightInMeters * heightInMeters)); // Calcular y redondear el IMC

    // Calcular peso ideal utilizando el rango recomendado de IMC (18.5 - 24.9)
    const idealMin = Math.round(18.5 * heightInMeters * heightInMeters); // Peso mínimo recomendado
    const idealMax = Math.round(24.9 * heightInMeters * heightInMeters); // Peso máximo recomendado

    res.json({ imc, idealWeight: { min: idealMin, max: idealMax } });
};

