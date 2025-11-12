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
const fs = require('fs').promises;
const path = require('path');

app.get('/api/categorias', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data', 'categorias.json'), 'utf8');
    const categorias = JSON.parse(data);
    
    res.status(200).json({
      success: true,
      count: categorias.length,
      data: categorias,
      message: 'Categorías obtenidas correctamente'
    });
    
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: 'No se pudieron cargar las categorías'
    });
  }
});

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