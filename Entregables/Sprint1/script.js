
    
    function calculo() {
        let cantidadComp = document.getElementById('cantidad-comp').value;
        let totalSinDescuento = cantidadComp*820000
        let totalCompra = 0
        
        
        if (totalSinDescuento >= 1640000 && totalSinDescuento <= 3280000){
            totalCompra = totalSinDescuento*0.85;

        
        }
        else if (totalSinDescuento <= 6560000 && totalSinDescuento > 3280000) {
            totalCompra = totalSinDescuento*0.75;
        }
        else if (totalSinDescuento > 6560000 && totalSinDescuento<=9840000) {
            totalCompra = totalSinDescuento*0.65;
        }

        else {
            totalCompra = totalSinDescuento;
            document.getElementById('alerta').value = "El cliente no recibe descuento"
            let alerta = "El cliente no recibe descuento"
        }
        document.getElementById('valor-compra').value = totalSinDescuento
        document.getElementById('valor-descuento').value = totalSinDescuento-totalCompra
        document.getElementById('total').value = totalCompra
        localStorage.setItem('Alerta',alerta)
        

    }

    function listar() {

        let alerta1 = localStorage.getItem('Alerta')
        listar.innerHTML = `<p> ${alerta1}</p>` 
    }
   
    
    
