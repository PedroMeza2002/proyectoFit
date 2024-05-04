export const calculateImc = async (req, res) => {
    const { weight, height } = req.body;

    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);

    if (isNaN(weightNumber) || isNaN(heightNumber) || heightNumber <= 0 || weightNumber <= 0) {
        return res.status(400).json({ error: 'Peso y altura deben ser números positivos válidos.' });
    }

    const heightInMeters = heightNumber / 100;
    const imc = Math.round(weightNumber / (heightInMeters * heightInMeters));

    const idealMin = Math.round(18.5 * heightInMeters * heightInMeters);
    const idealMax = Math.round(24.9 * heightInMeters * heightInMeters);

    res.json({ imc, idealWeight: { min: idealMin, max: idealMax } });
};
