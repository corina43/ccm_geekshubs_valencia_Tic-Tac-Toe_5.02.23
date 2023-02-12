
//capturar datos de storage
let inputNamePlayer1  = sessionStorage.getItem("namePlayer1");
let inputNamePlayer2  = sessionStorage.getItem("namePlayer2");

document.getElementById("player1").innerHTML = inputNamePlayer1;
document.getElementById("player2").innerHTML = inputNamePlayer2;


// //TURNO GAME



//Caracteres para el tablero


//Elementos de la página


// class game{
//     constructor(){
//         this.tablero = new Cuadricula(this)
//         this.turnoActual = "x";
   
//     }
// cambiarTurnoActual(){
//     this.turnoActual = this.turnoActual === "x" ? "0" : "x";
// }
//     jugarTurno(indice=null){
//         this.tablero.dibujarJugada(indice);
//         this.cambiarTurnoActual();
//     }
// }
// class Cuadro {
//     constructor(index){
//         this.index = index
//     }
// }
// class Cuadricula
// let player1 = new Player(player1info.innerHTML, player1type);
// let player2 = new Player(player2info.innerHTML, player2type);

//  const playerselect = () =>{}
//  let nameScreen1 = document.getElementById(fichaP1)

