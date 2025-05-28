var lista = [];

function ingresar(){
    var numero = document.getElementById("numero-ingresado")
    lista.push(parseInt(numero.value))
}

function mostrar (){
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    var p3 = document.getElementById('p3')
    var p4 = document.getElementById('p4')
    
    
    p1.innerText ='EL valor mas alto ingresado es: '+ Math.max(...lista)
    p2.innerText = 'El valor minimo ingresado es : '+Math.min(...lista)
    
    var sumaTotal = 0 ;
    for(var i = 0 ; i<lista.length; i++){sumaTotal+=lista[i]};
    p3.innerHTML = 'La suma de todos los valores ingresados es: ' + sumaTotal
    p4.innerText = 'El promedio es : '+sumaTotal/lista.length
}


// max min promedio sumaTotal   