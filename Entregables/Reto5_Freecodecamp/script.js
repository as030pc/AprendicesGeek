
function calcularPalindromo () {
    let boton = document.getElementById('boton')
    boton.addEventListener('click', function palindrome() {
        let str = String(document.getElementById("palindromo").value)

        str = str.toLowerCase().replace(/[^a-zA-Z]/g,"");
        
        let len = str.length;
      
        for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            let mensaje =  "No es un palindromo"
            String(document.getElementById("salida").value) = mensaje
          return false;
        } else {
            let mensaje = "Es un palindromo"
            String(document.getElementById("salida").value) = mensaje
        }

      }
      
        return true;

      } )
}


  
  
  valor_prueba = String(document.getElementById('palindromo').value);
 

