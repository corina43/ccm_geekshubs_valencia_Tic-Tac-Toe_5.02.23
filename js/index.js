import random from "./random.js";

let player1;//True o False
let nuevoJuego = false;//primer juego
const asignacionPartida  = document.querySelector("#ranGame");
const comenzar = document.querySelector("#start")


asignacionPartida.onclick = () => {
  player1 = random(nuevoJuego)

  comenzar.onclick = ()=> {
    ocultarModal();
  }
}
