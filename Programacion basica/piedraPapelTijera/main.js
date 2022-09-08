//1-Piedra, 2-Papel, 3-Tijera
        //funcion que hace que la pc eliga una opcion de forma aleatoria
        function aleatorio(min,max) {
            return Math.floor(Math.random() * (max-min + 1) + min)
        }
        //funcion que da las opciones elegidas

        function eleccion(jugada) {
            let resultado = ""
            if(jugada == 1) {
                resultado ="Piedra 🥌"
            } else if(jugada == 2) {
                resultado ="Papel 📄"
            }else if(jugada == 3) {
                resultado ="Tijera ✂"
            }else  {
                resultado ="MAL ELEGIDO"
            }
            return resultado
        }
        
        //Variables
        let jugador = 0
        /* let pc = aleatorio(1,3) */
        let triunfos = 0
        let perdidas = 0

        while(triunfos <3 && perdidas <3){
            let pc = aleatorio(1,3)
            jugador = prompt("Elige; 1 para Piedra, 2 para Papel, 3 para Tijera")
            alert("PC elige: " + eleccion(pc))
            alert("Tu eliges: " + eleccion(jugador))
            //COMBATE
            if(jugador == pc) {
                alert ("EMPATE")
            } else if(jugador == 1 && pc == 3) {
                alert ("GANASTE")
                triunfos = triunfos + 1
            }else if(jugador == 2 && pc == 1)  {
                alert ("GANASTE")
                triunfos = triunfos + 1
            }else if(jugador == 3 && pc == 2)  {
                alert ("GANASTE")
                triunfos = triunfos + 1
            }else {
                alert ("PERDISTE")
                perdidas = perdidas + 1
            }
        }

        alert("Ganaste  " + triunfos + "veces. Perdiste  " + perdidas + "veces")




       /*  jugador = prompt("Elige; 1 para Piedra, 2 para Papel, 3 para Tijera")  ANTES DE USAR WHILE */
    //alert ("Elegiste " + jugador) sin funciones
        /* if(jugador == 1) {
            alert ("Elegiste 🥌")
        } else if(jugador == 2) {
            alert ("Elegiste 📄")
        }else if(jugador == 3) {
            alert ("Elegiste ✂")
        }else  {
            alert ("Elegiste Perder")
        }
        if(pc == 1) {
            alert ("la PC 🥌")
        } else if(pc == 2) {
            alert ("La PC 📄")
        }else if(pc == 3) {
            alert ("La PC ✂")
        } */
        //con funciones(llamo porq la funcion esta arriba)

       /*  alert("PC elige: " + eleccion(pc))
        alert("Tu eliges: " + eleccion(jugador))  ANTES DE USAR WHILE*/
        


    /* //COMBATE
        if(jugador == pc) {
            alert ("EMPATE")
        } else if(jugador == 1 && pc == 3) {
            alert ("GANASTE")
        }else if(jugador == 2 && pc == 1)  {
            alert ("GANASTE")
        }else if(jugador == 3 && pc == 2)  {
            alert ("GANASTE")
        }else {
            alert ("PERDISTE")
        } */