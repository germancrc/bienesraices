module.exports = (properties) => {
  const express = require('express');
  const router = express.Router();

// Ruta: Página de inicio
router.get('/', (req, res) => {
  // Filtrar propiedades destacadas
  const featuredProperties = properties.filter(property => property.featured);
  const testimonials = require('../data/testimonials');

  res.render('home', {
    layout: 'main',
    title: 'Inicio - Portal Punta Cana',
    description: 'Explora nuestras propiedades destacadas',
    featuredProperties: featuredProperties.slice(0, 5),
    testimonials: testimonials // Pasa los datos de los testimonios
  });
});


  // Ruta: Listado completo de propiedades
  router.get('/propiedades', (req, res) => {
    res.render('propiedades', {  // Cambiado de 'pages/propiedades' a 'propiedades'
      layout: 'main',
      title: 'Propiedades - Portal Punta Cana',
      active: 'propiedades', // Esto activará el link correspondiente
      description: 'Catálogo completo de propiedades disponibles',
      properties: properties
    });
  });

  // Ruta: Detalle de propiedad individual
  router.get('/propiedad/:id', (req, res) => {
    const { id } = req.params;
    const property = properties.find(p => p.id === parseInt(id));
    
    if (!property) {
      return res.status(404).render('404', {  // Cambiado de 'pages/404' a '404'
        layout: 'main',
        title: 'Propiedad no encontrada'
      });
    }

    res.render('propiedad_detalle', {  // Cambiado de 'pages/propiedad_detalle' a 'propiedad_detalle'
      layout: 'main',
      title: `${property.title.text} - Potal Punta Cana`,
      active: 'propiedades', // Esto activará el link correspondiente
      property: property,
      description: `Detalles de ${property.title.text} - ${property.type.text}`
    });
  });

  return router;
};