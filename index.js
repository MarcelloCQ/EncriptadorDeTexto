const button = document.getElementById('encriptar');
const textoSinEncriptar = document.getElementById('input-encriptador').value;
const span = document.getElementById('output-encriptador');


const transformaStringAMinuscula = () => {
  const textoSinEncriptarMinusculas = textoSinEncriptar.toLowerCase();
  return textoSinEncriptarMinusculas;
}

const encriptarString = () => {
  const textoSinEncriptar = transformaStringAMinuscula();
  let textoEncriptado = [];
  for(let i = 0; i < textoSinEncriptar.length; i++) {
    textoEncriptado.push(i);
    textoEncriptado.push(textoSinEncriptar[i]);
  }
  span.textContent = textoEncriptado.join('');
}

const desencriptarString = () => {

}

button.addEventListener('click', encriptarString);
