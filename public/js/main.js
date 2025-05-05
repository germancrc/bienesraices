document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM
  const mapElement = document.getElementById("map");
  const mobileMapElement = document.getElementById("mobileMap");
  const showMapBtn = document.getElementById("showMapMobile");
  const refreshMapBtn = document.getElementById("refreshMap");
  const mapFullscreenBtn = document.getElementById("mapFullscreen");

  // Obtener propiedades
  const propiedades = mapElement
    ? JSON.parse(mapElement.dataset.properties || "[]")
    : [];

  // Coordenadas por defecto
  const defaultCoords = propiedades[0]?.coordinates || [
    18.607206176969274, -68.39486210640666,
  ];
  const zoomLevel = 14;

  // Variables para instancias de mapa
  let map;
  let mobileMap;
  let activeMarker = null;

  // Función para crear marcadores con mejoras
  function createMarkers(mapInstance, props) {
    const customIcon = L.icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

    const markers = props
      .map((prop) => {
        if (!prop.coordinates || prop.coordinates.length !== 2) return null;

        const marker = L.marker(prop.coordinates, {
          icon: customIcon,
          riseOnHover: true,
        }).addTo(mapInstance);

        // Popup mejorado
        const popupContent = `
          <div class="map-popup">
            <img src="${prop.image}" alt="${prop.alt}" class="img-fluid rounded mb-2">

            ${
              prop.badge
                ? `<span class="property-badge badge-${prop.badge.type} d-inline-block mb-1 px-2 py-1 fw-semibold text-uppercase" style="font-size: 0.75rem;">${prop.badge.text}</span>`
                : ""
            }

            <h6 class="fw-bold text-dark mb-1" style="font-size: 1.05rem;">${prop.title.text}</h6>

            <p class="mb-1" style="font-size: 0.85rem; color: #6c757d;">
              <i class="bi ${prop.option.icon} me-1"></i> ${prop.option.text || "Propiedad"}
              <span class="text-primary fw-bold ms-1">${prop.price}</span>
            </p>

            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">
                <i class="bi bi-geo-alt me-1"></i> ${prop.location.text || ""}
              </small>
              <a href="${prop.link}" class="btn btn-sm btn-outline-primary rounded-pill px-3">Ver</a>
            </div>
          </div>


      `;

        marker.bindPopup(popupContent);

        // Eventos para interacción
        marker.on("click", function () {
          if (activeMarker) {
            activeMarker.setIcon(customIcon);
          }
          activeMarker = marker;
          highlightPropertyInList(prop.id);
        });

        marker.on("popupopen", function () {
          this.setIcon(
            L.icon({
              iconUrl:
                "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          );
        });

        marker.on("popupclose", function () {
          this.setIcon(customIcon);
        });

        return {
          id: prop.id,
          marker: marker,
        };
      })
      .filter((m) => m !== null);

    return markers;
  }

  // Resaltar propiedad en la lista
  function highlightPropertyInList(propertyId) {
    document.querySelectorAll(".map-property-item").forEach((item) => {
      item.classList.remove("active");
      if (item.dataset.id === propertyId) {
        item.classList.add("active");
        item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  // Inicializar mapa principal
  if (mapElement) {
    map = L.map("map", {
      zoomControl: false,
      scrollWheelZoom: false,
    }).setView(defaultCoords, zoomLevel);

    // Capa del mapa
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Agregar control de zoom personalizado
    L.control
      .zoom({
        position: "topright",
      })
      .addTo(map);

    // Crear marcadores
    const markers = createMarkers(map, propiedades);

    // Ajustar vista para mostrar todos los marcadores
    if (markers.length > 0) {
      const markerGroup = new L.featureGroup(markers.map((m) => m.marker));
      map.fitBounds(markerGroup.getBounds().pad(0.2));
    }
  }

  // Mapa para móvil (modal)
  if (showMapBtn && mobileMapElement) {
    showMapBtn.addEventListener("click", function () {
      const modal = new bootstrap.Modal(document.getElementById("mapModal"));
      modal.show();

      if (!mobileMap) {
        setTimeout(() => {
          mobileMap = L.map("mobileMap", {
            zoomControl: false,
          }).setView(defaultCoords, zoomLevel - 2);

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "",
          }).addTo(mobileMap);

          // Agregar marcadores
          const mobileProps = JSON.parse(
            mobileMapElement.dataset.properties || "[]"
          );
          createMarkers(mobileMap, mobileProps);

          // Ajustar tamaño después de que el modal esté visible
          setTimeout(() => mobileMap.invalidateSize(), 50);
        }, 300);
      } else {
        setTimeout(() => {
          mobileMap.invalidateSize();
          mobileMap.setView(defaultCoords, zoomLevel - 2);
        }, 300);
      }
    });
  }

  // Botón para actualizar mapa
  if (refreshMapBtn && map) {
    refreshMapBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (markers.length > 0) {
        const markerGroup = new L.featureGroup(markers.map((m) => m.marker));
        map.fitBounds(markerGroup.getBounds().pad(0.2));
      } else {
        map.setView(defaultCoords, zoomLevel);
      }
    });
  }

  // Botón para pantalla completa
  if (mapFullscreenBtn && mapElement) {
    mapFullscreenBtn.addEventListener("click", function () {
      if (mapElement.requestFullscreen) {
        mapElement.requestFullscreen();
      } else if (mapElement.webkitRequestFullscreen) {
        mapElement.webkitRequestFullscreen();
      } else if (mapElement.msRequestFullscreen) {
        mapElement.msRequestFullscreen();
      }
    });
  }

  // Interacción entre lista y mapa
  document.querySelectorAll(".map-property-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const propertyId = this.dataset.id;

      // Resaltar en lista
      highlightPropertyInList(propertyId);

      // Centrar mapa en la propiedad
      if (map) {
        const property = propiedades.find((p) => p.id === propertyId);
        if (property && property.coordinates) {
          map.setView(property.coordinates, 16);

          // Abrir popup si existe el marcador
          const marker = markers.find((m) => m.id === propertyId)?.marker;
          if (marker) {
            marker.openPopup();
          }
        }
      }
    });
  });
});


//////////////SWIPER

const swiper = new Swiper('.properties-carousel', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});


