let textoSinEncriptarMinusculas = '';
const button = document.getElementById('encriptar');
const button2 = document.getElementById('desencriptar');
const button3 = document.getElementById('copiar-texto');
const span = document.getElementById('output-encriptador');
let indices = [];


const transformaStringAMinuscula = () => {
  textoSinEncriptarMinusculas = document.getElementById('input-encriptador').value.toLowerCase();
  return textoSinEncriptarMinusculas;
};

const limpiarIndice = () => {
  indices = [];
};

const encriptarString = () => {
  const textoSinEncriptar = transformaStringAMinuscula();
  limpiarIndice ();
  let textoEncriptado = [];
  for(let i = 0; i < textoSinEncriptar.length; i++) {
    indices.push(i);
    textoEncriptado.push(i);
    textoEncriptado.push(textoSinEncriptar[i]);
  }
  span.textContent = textoEncriptado.join('');
  document.getElementById('input-encriptador').value = '';
};

const desencriptarString = () => {
  let textoDesencriptado = "";
  for(let i = 0; i < indices.length; i++) {
    textoDesencriptado += textoSinEncriptarMinusculas[indices[i]];
  }
  span.textContent = textoDesencriptado;
  document.getElementById('input-encriptador').value = '';
};

const copiarTexto = () => {
  const text = span.textContent;
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
};

button.addEventListener('click', encriptarString);
button2.addEventListener('click', desencriptarString);
button3.addEventListener('click', copiarTexto);