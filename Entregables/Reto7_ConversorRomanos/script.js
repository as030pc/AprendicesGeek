function convertToRoman() {
    var num = String(document.getElementById('entrada').value)
    var letras = [["","I","II","III","IV","V","VI","VII","VIII","IX"], ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], ["","M", "MM","MMM"]];  
     var num_romano = "";
     var digitos = num.split('').reverse();
     for (var i=0; i < digitos.length; i++){
       num_romano = letras[i][parseInt(digitos[i])] + num_romano;
     }
     alert(`El numero ${num} en numeros romanos es ${num_romano}`)
     return num_romano;  
   }

   