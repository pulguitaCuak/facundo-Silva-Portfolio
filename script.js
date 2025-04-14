
const palabras = ["Desarrollador web", "Técnico en informática", "Artesano"];
const textoElemento = document.getElementById("reescribir");

let palabraIndex = 0;
let letraIndex = 0;
let borrando = false;

function escribir() {
  const palabraActual = palabras[palabraIndex];

  if (!borrando) {
    textoElemento.textContent = palabraActual.substring(0, letraIndex + 1);
    letraIndex++;

    if (letraIndex === palabraActual.length) {
      borrando = true;
      setTimeout(escribir, 1500);
      return;
    }
  } else {
    textoElemento.textContent = palabraActual.substring(0, letraIndex - 1);
    letraIndex--;

    if (letraIndex === 0) {
      borrando = false;
      palabraIndex = (palabraIndex + 1) % palabras.length;
    }
  }

  setTimeout(escribir, borrando ? 50 : 100);
}

escribir();