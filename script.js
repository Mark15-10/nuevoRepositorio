class Silla{
    color ;
    tamaño;
    peso;
    patas;
    estado;

    mover(){}

    romper(){
        return 'la silla' +' '+sillaRota.color + 'esta rota'
    }
    
    arreglar(){}
    
    
};

var sillaRota = new Silla();
var p = document.getElementById('resultado');
sillaRota.color = 'azul '

function mostrar(){
    p.innerText = sillaRota.romper()

    

}
