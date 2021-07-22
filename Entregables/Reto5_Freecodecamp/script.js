
//palabra = String(prompt('Ingrese una expresion a evaluar'))

function palindrome(str) {

  str = str.toLowerCase().replace(/[\W_]/g,"");
  let len = str.length;

  for (let i = 0; i < len/2; i++) {
  if (str[i] !== str[len - 1 - i]) {
    return false;
  }
}



  return true;
}


function calcular() {
  palabra = String(document.getElementById('entrada').value)
if (palindrome(palabra) ==true) {
  alert('La palabra es un palindromo')
} else {
  alert('La palabra no es un palindromo')
}

}
 

