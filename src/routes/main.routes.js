const express = require('express');
const router = express.Router();

// Ruta: Página de inicio
router.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Inicio - Bienes Raíces',
    description: 'Explora nuestras propiedades destacadas'
  });
});

// Ruta: Listado de propiedades
router.get('/propiedades', (req, res) => {
  res.render('pages/propiedades', {
    title: 'Propiedades',
    description: 'Catálogo completo de propiedades disponibles'
  });
});

// Ruta: Detalle de propiedad individual
router.get('/propiedad/:id', (req, res) => {
  const { id } = req.params;
  res.render('pages/propiedad_detalle', {
    title: 'Detalle de Propiedad',
    propertyId: id,
    description: `Detalles completos de la propiedad con ID ${id}`
  });
});

module.exports = router;
