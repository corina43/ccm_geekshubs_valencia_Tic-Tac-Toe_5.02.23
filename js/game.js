
// obtener los nombres de los jugadores desde el almacenamiento de sesión.
let inputNamePlayer1  = sessionStorage.getItem("namePlayer1");

let inputNamePlayer2  = sessionStorage.getItem("namePlayer2");

document.getElementById("player1").innerHTML = inputNamePlayer1;
document.getElementById("player2").innerHTML = inputNamePlayer2;
// arreglo con todas las celdas que representan el juego de tres en raya
let tablero = Array.from(document.getElementsByClassName("box"));
// booleana que determina de quién es el turno actual, al inicio es true lo que significa que el jugador X tiene el primer turno.
let turno = true;
// arreglo que declaro el estado tablero
let miTablero = ["","","","","","","","",""];

let celdasJugador1 = [];
let celdasJugador2= [];
// arreglo de arreglos que representan las combinaciones ganadoras en el juego de tres en raya
let combinacionGanadora = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
// función que muestra en la consola el estado  del tablero
const comprueboGanador = () => {
    console.log(miTablero);
};
// bucle que recorre todas las celdas y agrega un evento de clic a cada una. Cuando una celda es clicada
tablero.map((celda) => {
    celda.addEventListener('click', () => {
        celda.classList.add('box');
// Si la celda está vacía, se pone X o O en ella dependiendo del turno actual
        if(celda.innerHTML === "") {
            celda.innerHTML = (turno) ? "X" : "O";
//actualizo el arreglo
            miTablero[celda.id] = (turno) ? "X" : "O";
 // Si el turno es del jugador 1, se agrega la celda a celdasJugador1 y si se han jugado más de 3 celdas, se elimina la primera celda de celdasJugador1
            if (turno) {
                if (celdasJugador1.length >= 3) {
                    let primeraCelda = celdasJugador1.shift();
                    primeraCelda.innerHTML = "";
                }
                celdasJugador1.push(celda);
//si no al revers
            } else {
                if (celdasJugador2.length >= 3) {
                    let primeraCelda = celdasJugador2.shift();
                    primeraCelda.innerHTML = "";
                }
                celdasJugador2.push(celda);
            }
// verifico ganador
            comprueboGanador();
// cambio turno
            turno = !turno;
        }
    });
});
