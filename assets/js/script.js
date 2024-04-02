// Controle do Menu
function oculatarMenu() {
  document.getElementById("subMenu").classList.toggle("subMenuOcultar");
}

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById("responsive-menu");
  if (el) {
    el.addEventListener("click", oculatarMenu, false);
  }
});

//##################################################################
// Leaf Map
// Where you want to render the map.
var element = document.getElementById("osm-map");

// Height has to be set. You can do this in CSS too.
if (typeof element != "undefined" && element != null) {
  element.style = "height:500px;";

  // Create Leaflet map on map element.
  var map = L.map(element);

  // Add OSM tile layer to the Leaflet map.
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Target's GPS coordinates.
  var target = L.latLng("-30.059297", "-51.172996");

  // Set map's center to target with zoom 14.
  map.setView(target, 17);

  // Place a marker on the same location.
  L.marker(target).addTo(map);
}

//##################################################################
// Faligação de Formulário

const fields = document.querySelectorAll("[required]");
//console.log(fields)

function customValidation(event) {
  const field = event.target;

  //logica para verificar se existem erros
  function verifyErrors() {
    let foundError = false;

    for (let error in field.validity) {
      //se nao for customError
      // entao verifica se tem erro
      if (error != "customError" && field.validity[error]) {
        foundError = error;
      }
    }
    return foundError;
  }

  const error = verifyErrors();

  if (error) {
    //trocar mensagem padrao
    field.setCustomValidity("Campo é obrigatório");
  } else {
    field.setCustomValidity("");
  }
}

for (field of fields) {
  field.addEventListener("invalid", customValidation);
}

document.querySelector("form").addEventListener("submit", (event) => {
  console.log("Enviar o formulario");
  //Proteção para não enviar o formulário se estiver com dados padrão
  event.preventDefault();
});
