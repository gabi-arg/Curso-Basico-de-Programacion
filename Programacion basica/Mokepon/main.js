//variables globales. del jugador y enemmigo
const sectionSeleccionarAtaque = document.getElementById ('seleccionar-ataques')
const sectionSeleccionarReiniciar = document.getElementById ('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

const sectionSeleccionarMascota = document.getElementById ('seleccionar-mascotas')
const botonReiniciar = document.getElementById('boton-reiniciar')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVictoriasJugador = document.getElementById('victoriasJugador')
const spanVictoriasEnemigo = document.getElementById('victoriasEnemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById ('mapa')

let mokepones =[]
let botones =[]
let ataqueJugador=[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo 
let inputRatigueya 
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo 
let indexAtaqueJugador
let indexAtaqueEnemigo
let botonTierra 
let botonFuego 
let botonAgua
let vidasJugador =3 
let vidasEnemigo = 3
let victoriasJugador = 0
let victoriasEnemigos = 0
let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackground = new Image ()
mapaBackground.src = './css/img/mokemap.webp'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if(anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa -20
}
alturaQueBuscamos = anchoDelMapa * 600 /800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre 
        this.foto = foto
        this.vida = vida
        this.ataques =[]
        this.ancho = 30
        this.alto = 30
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y= aleatorio(0, mapa.height - this.alto)
        
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
           )
    }
}

let hipodoge = new Mokepon('Hipodoge', './css/img/mokepons_mokepon_hipodoge_attack.webp', 5, './css/img/hipodoge.webp')
let capipepo = new Mokepon ('Capipepo', './css/img/mokepons_mokepon_capipepo_attack.webp', 5 , './css/img/capipepo.webp')
let ratigueya = new Mokepon ('Ratigueya', './css/img/mokepons_mokepon_ratigueya_attack.webp', 5, './css/img/ratigueya.webp')

let hipodogeEnemigo = new Mokepon('Hipodoge', './css/img/mokepons_mokepon_hipodoge_attack.webp', 5, './css/img/hipodoge.webp')
let capipepoEnemigo = new Mokepon ('Capipepo', './css/img/mokepons_mokepon_capipepo_attack.webp', 5 , './css/img/capipepo.webp')
let ratigueyaEnemigo = new Mokepon ('Ratigueya', './css/img/mokepons_mokepon_ratigueya_attack.webp', 5, './css/img/ratigueya.webp')

hipodoge.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'}
)
hipodogeEnemigo.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'}
)
capipepo.ataques.push(
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'}
)
capipepoEnemigo.ataques.push(
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'}
)
ratigueya.ataques.push(
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🌱', id:'boton-tierra'}
)
ratigueyaEnemigo.ataques.push(
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🌱', id:'boton-tierra'}
)

mokepones.push(hipodoge,capipepo,ratigueya)


function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display ='none'
    mokepones.forEach((mokepon)=> {//sirve para iterar con HTML
        opcionDeMokepones = ` 
        <input type="radio" name="mascota" id= ${mokepon.nombre} />
        <label class="tarjeta-de-mokepon"  for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego) 

}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'

   if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else {
        alert('Selecciona una mascota')
    }
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display ='flex'
    iniciarMapa()
    
}
function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
            
        }
        
    } 
    mostrarAtaques(ataques) 
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque) =>{
        ataquesMokepon =
        `<button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += ataquesMokepon

    })
    botonTierra = document.getElementById('boton-tierra')
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botones = document.querySelectorAll(`.BAtaque`)
}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) =>{
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}
function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}
function ataqueAleatorioEnemigo(){
    console.log('Ataques enemigo', ataquesMokeponEnemigo)
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    iniciarPelea()
}
function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}
function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
            
        } else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
       
        }else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO')  {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador

        }else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA')  {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
           
        }else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigos++
            spanVictoriasEnemigo.innerHTML = victoriasEnemigos
        }
        }
        revisarVictorias()
    }
 function revisarVictorias() {
    if(victoriasEnemigos ===  victoriasJugador){
        crearMensajeFinal('Esto fue un empate')
    }else if(victoriasJugador > victoriasEnemigos){
        crearMensajeFinal('Felicitaciones GANASTE!')
    }else {
        crearMensajeFinal('Lo siento PERDISTE!')
    }
}
function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
   
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    sectionSeleccionarReiniciar.style.display = 'block'

}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}
function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x +mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y +mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.heigth)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !==0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }
}

function moverDerecha(){
    
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}
function detenerMovimiento(){
   
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}
function sePresionoUnaTecla(event){
    switch (event.key) {
        case `ArrowUp`:
            moverArriba()
            break
        case `ArrowDown`:
            moverAbajo()
            break
        case `ArrowLeft`:
            moverIzquierda()
            break
        case `ArrowRight`:
            moverDerecha()
            break
        default:
            break
    }
}
function iniciarMapa() {
    
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}
function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
            
        }
        
    }  
}
function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(
        abajoMascota< arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    )   {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)