const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

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


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});