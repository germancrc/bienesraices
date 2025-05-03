const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('pages/admin/login', { title: 'Login Admin' });
});

router.get('/', (req, res) => {
  res.render('pages/admin/dashboard', { title: 'Panel de Administración' });
});

router.get('/propiedades', (req, res) => {
  res.render('pages/admin/propiedades', { title: 'Gestión de Propiedades' });
});

router.get('/propiedades/nueva', (req, res) => {
  res.render('pages/admin/nueva', { title: 'Nueva Propiedad' });
});

router.get('/propiedades/:id/editar', (req, res) => {
  res.render('pages/admin/editar', { title: 'Editar Propiedad', id: req.params.id });
});

module.exports = router;