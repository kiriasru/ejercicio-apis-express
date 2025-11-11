const express = require('express');
const fs = require('fs/promises');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());

async function readJson(ruta) {
    const rutaCompleta = path.join(__dirname, ruta);
    const texto = await fs.readFile(rutaCompleta, 'utf-8');
    return JSON.parse(texto);
};

// GET - Productos


// GET - USuarios


// GET - Categorias


// Get - Pedidos
app.get('/api/pedidos', async (req, res) => {
    const ruta = './data/pedidos.json';
    const pedidos = await readJson(ruta);
    res.status(200).json({
        status: 200,
        message: 'success',
        data: pedidos
    })
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});