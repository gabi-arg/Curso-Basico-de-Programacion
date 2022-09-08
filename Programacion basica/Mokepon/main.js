//variables globales. del jugador y enemmigo

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
//funcion con la cual conecto con HTML/ y escucho clik de botones
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById ('seleccionar-ataques')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionSeleccionarReiniciar = document.getElementById ('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

//funcion con la cual se elige y se cual mascota selecciona el usuario
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById ('seleccionar-mascotas')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById ('seleccionar-ataques')
    sectionSeleccionarAtaque.style.display = 'flex'
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

//funcion en la cual la pc elige al enemigo de manera aleatoria
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        
    } else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Catipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
//Funciones con las cuales generos los ataques
// tipo de ataque que selecciona el usuario
function ataqueFuego(){
    ataqueJugador ='FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador ='AGUA'
    ataqueAleatorioEnemigo()

}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
// Tipo de ataque que elige la pc de manera aleatoria
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }else{
        ataqueEnemigo = 'TIERRA'
    }
    combate()
    
}
//esta funcion nos indica si ganamos , empatamos o perdemos, y llamando a la funcion del mensaje nos sale por pantalla
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO')  {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')  {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       
    }else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}
//funcion que verifica las vidas que se tienen y saber si ganamos o perdemos el juego
function revisarVidas() {
    if(vidasEnemigo == 0){
        crearMensajeFinal('Felicitaciones GANASTE!')
    }else if(vidasJugador== 0){
        crearMensajeFinal('Lo siento PERDISTE!')
    }
}

//mensaje que se crea para saber tipo de ataque del usuario y enemigo
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

  
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
   
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    sectionMensajes.innerHTML = resultadoFinal
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled =true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled =true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled =true

    
    let sectionSeleccionarReiniciar = document.getElementById ('reiniciar')
    sectionSeleccionarReiniciar.style.display = 'block'

}
function reiniciarJuego(){
    location.reload()
}

//funcion que hace que la computadora eliga los tipos de enemigos aleatoriamente
function aleatorio(min,max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}

window.addEventListener('load', iniciarJuego)