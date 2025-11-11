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