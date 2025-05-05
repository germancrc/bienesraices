const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const properties = require('./src/data/properties');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar Handlebars con helpers
const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'src', 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'src', 'views', 'partials'),
  helpers: {
    // Helper para comparar igualdad
    eq: function (a, b) {
      return a === b;
    },
    // Helper para convertir a JSON
    json: function (context) {
      return JSON.stringify(context);
    },
    // Helper para comprobar si a > b
    gt: function (a, b) {
      return a > b;
    },
    // Helper para a % b === 0
    mod: function (a, b) {
      return a % b === 0;
    },
    // Helper para split
    split: function (str, separator) {
      return str.split(separator);
    },
    // ✅ Nuevo helper para limitar la cantidad de elementos
    limit: function (arr, limit) {
      if (!Array.isArray(arr)) return [];
      return arr.slice(0, limit);
    },
    stars: function (rating) {
      const stars = [];
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 >= 0.5;
  
      // Llenar las estrellas completas
      for (let i = 0; i < fullStars; i++) stars.push("bi-star-fill");
      
      // Agregar la estrella media si corresponde
      if (halfStar) stars.push("bi-star-half");
      
      // Rellenar las estrellas vacías restantes
      while (stars.length < 5) stars.push("bi-star");
  
      return stars;
    }
  }
});


// Registrar el motor de plantillas
app.engine('hbs', hbs.engine);

// Configuración del directorio de vistas
app.set('view engine', 'hbs');
app.set('views', [
  path.join(__dirname, 'src', 'views', 'pages'),
  path.join(__dirname, 'src', 'views')
]);

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const mainRoutes = require('./src/routes/main.routes')(properties);
app.use('/', mainRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
