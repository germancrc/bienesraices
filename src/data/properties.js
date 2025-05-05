module.exports = [
  {
    id: 1,
    badge: {
      type: 'offer',
      icon: 'bi-tag-fill',
      text: 'Oferta'
    },
    images: [
      '/images/property-01.jpg', // Imagen principal que ya tienes
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', // Sala
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', // Cocina
      'https://images.unsplash.com/photo-1634623271558-7b8842665c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', // Dormitorio
      'https://images.unsplash.com/photo-1630569267625-157d7f7a2bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Baño
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60' // Jardín
    ],
    alt: 'Residencia Moderna',
    title: {
      icon: 'bi-house-door',
      text: 'Residencia Moderna'
    },
    description: "Exclusiva residencia moderna en zona premium de Punta Cana con amplios espacios, diseño contemporáneo y acabados de lujo. Perfecta para familias que buscan comodidad y elegancia.",
    details: [
      { icon: 'bi-door-open', text: '4 Hab' },
      { icon: 'bi-droplet', text: '3 Baños' },
      { icon: 'bi-arrows-fullscreen', text: '250m²' },
      { icon: 'bi-car-front-fill', text: '2 Estacionamientos' },
      { icon: 'bi-tree-fill', text: 'Jardín privado' }
    ],
    type: {
      class: 'house',
      icon: 'bi-house-door',
      text: 'Casa'
    },
    option: {
      class: 'sale',
      icon: 'bi-currency-dollar',
      text: 'Venta'
    },
    price: '$450,000',
    location: {
      icon: 'bi-geo-alt',
      text: 'Punta Cana, La Altagracia',
      zone: 'Zona residencial exclusiva'
    },
    features: {
      constructionYear: 2020,
      floors: 2,
      orientation: "Norte",
      condition: "Excelente",
      style: "Moderno",
      garage: {
        spaces: 2,
        type: "Techado"
      }
    },
    amenities: ["Piscina privada", "Jardín", "Terraza", "Cocina equipada", "Sistema de seguridad"],
    utilities: {
      water: true,
      electricity: true,
      internet: true,
      gas: false
    },
    services: ["Mantenimiento de áreas verdes", "Seguridad 24/7", "Recolección de basura"],
    tags: ["moderna", "familiar", "lujo", "piscina"],
    virtualTour: "/tours/propiedad1",
    video: "/videos/propiedad1.mp4",
    floorPlan: "/images/plano-propiedad1.jpg",
    link: '#',
    coordinates: [18.607206176969274, -68.39486210640666],
    featured: false
  },
  {
    id: 2,
    badge: {
      type: 'new',
      icon: 'bi-lightning-charge-fill',
      text: 'Nueva'
    },
    images: [
      '/images/property-03.jpg', // Imagen principal que ya tienes
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwaG91c2UlMjBsaXZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Sala familiar
      'https://images.unsplash.com/photo-1600566752228-1d5e19b49575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhbWlseSUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Cocina
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwaG91c2UlMjBsaXZpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Dormitorio infantil
      'https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhbWlseSUyMGhvdXNlJTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', // Piscina
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyZGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60' // Jardín
    ],
    alt: 'Departamento Premium',
    title: {
      icon: 'bi-building',
      text: 'Departamento Premium'
    },
    description: "Departamento premium con vista al mar en complejo residencial exclusivo. Cuenta con amenities de lujo y diseño inteligente que maximiza el espacio.",
    details: [
      { icon: 'bi-door-open', text: '2 Hab' },
      { icon: 'bi-droplet', text: '2 Baños' },
      { icon: 'bi-arrows-fullscreen', text: '120m²' },
      { icon: 'bi-building', text: 'Piso 12' },
      { icon: 'bi-umbrella', text: 'Área social compartida' }
    ],
    type: {
      class: 'apartment',
      icon: 'bi-building',
      text: 'Apartamento'
    },
    option: {
      class: 'rent',
      icon: 'bi-cash-stack',
      text: 'Renta'
    },
    price: '$1,200/mes',
    location: {
      icon: 'bi-geo-alt',
      text: 'Punta Cana, La Altagracia',
      zone: 'Zona turística'
    },
    features: {
      constructionYear: 2022,
      floors: 1,
      orientation: "Este",
      condition: "Nuevo",
      style: "Contemporáneo",
      garage: {
        spaces: 1,
        type: "Sótano"
      }
    },
    amenities: ["Gimnasio", "Piscina comunitaria", "Salón de eventos", "Área BBQ"],
    utilities: {
      water: true,
      electricity: true,
      internet: true,
      gas: true
    },
    services: ["Conserjería", "Limpieza semanal", "Mantenimiento"],
    tags: ["vista al mar", "nuevo", "amenities", "moderno"],
    virtualTour: "/tours/propiedad2",
    video: "/videos/propiedad2.mp4",
    floorPlan: "/images/plano-propiedad2.jpg",
    link: '#',
    coordinates: [18.607206176969274, -68.39486210640666],
    featured: true
  },
  {
    id: 3,
    badge: {
      type: 'popular',
      icon: 'bi-fire',
      text: 'Popular'
    },
    images: [
      '/images/property-04.jpg', // Imagen principal que ya tienes
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGx1eHVyeSUyMGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Sala de lujo
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Cocina gourmet
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzdGVyJTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', // Suite principal
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Baño de lujo
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGElMjBnYXJkZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60' // Jardines
    ],
    alt: 'Casa Familiar',
    title: {
      icon: 'bi-house-heart',
      text: 'Casa Familiar'
    },
    description: "Acogedora casa familiar en comunidad cerrada con amplios jardines. Ideal para quienes buscan tranquilidad sin renunciar a comodidades urbanas.",
    details: [
      { icon: 'bi-door-open', text: '3 Hab' },
      { icon: 'bi-droplet', text: '2.5 Baños' },
      { icon: 'bi-arrows-fullscreen', text: '180m²' },
      { icon: 'bi-tree', text: 'Jardín de 100m²' },
      { icon: 'bi-car-front-fill', text: 'Cochera techada' }
    ],
    type: {
      class: 'house',
      icon: 'bi-house-door',
      text: 'Casa'
    },
    option: {
      class: 'sale',
      icon: 'bi-currency-dollar',
      text: 'Venta'
    },
    price: '$320,000',
    location: {
      icon: 'bi-geo-alt',
      text: 'Punta Cana, La Altagracia',
      zone: 'Residencial Las Olas'
    },
    features: {
      constructionYear: 2018,
      floors: 1,
      orientation: "Sur",
      condition: "Muy buena",
      style: "Tradicional",
      garage: {
        spaces: 2,
        type: "Semi-techado"
      }
    },
    amenities: ["Piscina privada", "Cuarto de servicio", "Terraza cubierta", "Sistema de riego automático"],
    utilities: {
      water: true,
      electricity: true,
      internet: true,
      gas: false
    },
    services: ["Seguridad 24/7", "Mantenimiento de áreas comunes"],
    tags: ["familiar", "jardín", "tranquilo", "residencial"],
    virtualTour: "/tours/propiedad3",
    video: "/videos/propiedad3.mp4",
    floorPlan: "/images/plano-propiedad3.jpg",
    link: '#',
    coordinates: [18.607206176969274, -68.39486210640666],
    featured: true
  },
  {
    id: 4,
    badge: {
      type: 'offer',
      icon: 'bi-tag-fill',
      text: 'Oferta'
    },
    images: [
      '/images/property-05.jpg', // Imagen principal que ya tienes
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXBhcnRtZW50JTIwbGl2aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', // Sala moderna
      'https://images.unsplash.com/photo-1556910639-7c8a0ed42b98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVybiUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Cocina diseño
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGJlZHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Dormitorio diseño
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Baño diseño
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60' // Vista urbana
    ],
    alt: 'Villa de Lujo',
    title: {
      icon: 'bi-house-door',
      text: 'Villa de Lujo'
    },
    description: "Exclusiva villa de lujo con diseño arquitectónico premium, acabados de alta gama y amplios espacios de entretenimiento. Obra maestra del diseño residencial.",
    details: [
      { icon: 'bi-door-open', text: '6 Hab' },
      { icon: 'bi-droplet', text: '5 Baños' },
      { icon: 'bi-arrows-fullscreen', text: '350m²' },
      { icon: 'bi-water', text: 'Piscina infinity' },
      { icon: 'bi-car-front-fill', text: '3 Estacionamientos' }
    ],
    type: {
      class: 'villa',
      icon: 'bi-house-heart-fill',
      text: 'Villa'
    },
    option: {
      class: 'sale',
      icon: 'bi-currency-dollar',
      text: 'Venta'
    },
    price: '$1,200,000',
    location: {
      icon: 'bi-geo-alt',
      text: 'Punta Cana, La Altagracia',
      zone: 'Zona exclusiva Bahía Príncipe'
    },
    features: {
      constructionYear: 2021,
      floors: 3,
      orientation: "Noreste",
      condition: "Excelente",
      style: "Moderno",
      garage: {
        spaces: 3,
        type: "Techado con automatización"
      }
    },
    amenities: ["Piscina infinity", "Jacuzzi", "Home theater", "Bodega", "Sala de juegos"],
    utilities: {
      water: true,
      electricity: true,
      internet: true,
      gas: true
    },
    services: ["Jardinería", "Piscinero", "Seguridad privada", "Limpieza diaria"],
    tags: ["lujo", "exclusivo", "villa", "premium"],
    virtualTour: "/tours/propiedad4",
    video: "/videos/propiedad4.mp4",
    floorPlan: "/images/plano-propiedad4.jpg",
    link: '#',
    coordinates: [18.609206176969274, -68.39586210640666],
    featured: true
  },
  {
    id: 5,
    badge: {
      type: 'new',
      icon: 'bi-lightning-charge-fill',
      text: 'Nueva'
    },
    images: [
      '/images/property-05.jpg',
      '/images/property-05-living.jpg',
      '/images/property-05-kitchen.jpg',
      '/images/property-05-bedroom.jpg',
      '/images/property-05-terrace.jpg'
    ],
    alt: 'Apartamento de Diseño',
    title: {
      icon: 'bi-building',
      text: 'Apartamento de Diseño'
    },
    description: "Apartamento de diseño con acabados premium y ubicación privilegiada. Perfecto para profesionales que buscan estilo y conveniencia.",
    details: [
      { icon: 'bi-door-open', text: '3 Hab' },
      { icon: 'bi-droplet', text: '2 Baños' },
      { icon: 'bi-arrows-fullscreen', text: '150m²' },
      { icon: 'bi-building', text: 'Piso 15' },
      { icon: 'bi-binoculars', text: 'Vista panorámica' }
    ],
    type: {
      class: 'apartment',
      icon: 'bi-building',
      text: 'Apartamento'
    },
    option: {
      class: 'rent',
      icon: 'bi-cash-stack',
      text: 'Renta'
    },
    price: '$1,800/mes',
    location: {
      icon: 'bi-geo-alt',
      text: 'Punta Cana, La Altagracia',
      zone: 'Zona urbana central'
    },
    features: {
      constructionYear: 2023,
      floors: 1,
      orientation: "Oeste",
      condition: "Nuevo",
      style: "Minimalista",
      garage: {
        spaces: 1,
        type: "Asignado"
      }
    },
    amenities: ["Terraza privada", "Sistema domótico", "Closets organizados", "Cocina gourmet"],
    utilities: {
      water: true,
      electricity: true,
      internet: true,
      gas: true
    },
    services: ["Recepcionista", "Lavandería", "Gimnasio", "Salón social"],
    tags: ["diseño", "moderno", "urbano", "minimalista"],
    virtualTour: "/tours/propiedad5",
    video: "/videos/propiedad5.mp4",
    floorPlan: "/images/plano-propiedad5.jpg",
    link: '#',
    coordinates: [18.610206176969274, -68.39686210640666],
    featured: true
  }
];