const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json()); 

const ANALYZER_API_URL = 'http://api-analyzer-py:5001/analyze';

app.post('/process-text', async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: "O campo 'text' é obrigatório." });
        }

        console.log(`Recebido texto para análise. Enviando para a API Python...`);

        const analyzerResponse = await axios.post(ANALYZER_API_URL, {
            text: text
        });

        console.log('Análise recebida com sucesso da API Python.');

        res.status(200).json(analyzerResponse.data);

    } catch (error) {
        console.error("Erro ao comunicar com a API de Análise:", error.message);
        res.status(500).json({ error: "Ocorreu um erro interno no servidor." });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API Gateway rodando na porta ${PORT}`);
});