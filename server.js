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
app.get('/api/productos', async (req, res)=>{
    const ruta = './data/productos.json'
    const productos = await readJson(ruta);
    res.json({status:200, message:'success', data:{produtos:productos}});
})

// GET - USuarios


// GET - Categorias


// Get - Pedidos


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});