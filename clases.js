 export class Persona {
        nombre = 'alfo';
        #vive = true;    
        constructor(apellido, nombre, dni){
            if (nombre !== undefined){
                this.nombre = nombre;
            }
            
        
            
        }

        correr(){
            return 'La persona esta corriendo';

            
        }
        matar(){
            return this.#vive = false;
        }
        mostrarEstado(){
            if(this.#vive){
                return 'la persona esta viva';

            }
            return 'la persona esta viva'
        }

    }