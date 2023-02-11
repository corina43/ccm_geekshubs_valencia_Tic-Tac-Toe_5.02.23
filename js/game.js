//capturar datos de storage
let inputNamePlayer1  = sessionStorage.getItem("namePlayer1");
let inputNamePlayer2  = sessionStorage.getItem("namePlayer2");

document.getElementById("player1").innerHTML = inputNamePlayer1;
document.getElementById("player2").innerHTML = inputNamePlayer2;


//TURNO GAME
let player1;//True o False
let nuevoJuego = false;//primer juego
const selectTurn = document.querySelector("#ranGame");
selectTurn.onclick = () => {
    player1 = random(nuevoJuego)

}







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
//let tablero = Array.from(document.getElementsByClassName("box"));

/*let turno = true;

let namePlayer1 = 3;
let namePlayer2 = 3;


let miTablero = ["","","","","","","","",""];

let combinacionGanadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

const comprueboGanador = () => {
    console.log(miTablero);

}

tablero.map(
    (celda) => {
        celda.addEventListener('click', ()=> {

           //Ejemplo de como añadir una clase a un elemento seleccionado
            celda.classList.add('box');

           //Ejemplo de inyección de HTML desde JavaScript
           // celda.innerHTML = `<p class='devil'>NUNCA LO ACABARAS</p>`;

//             //Compruebo que SI puedo pintar la X o la O.
            if(celda.innerHTML === "") {
               if(namePlayer1 > 0 || namePlayer2 > 0){

//                 //Aqui PINTO el simbolo, dependiendo del turno
                celda.innerHTML = (turno) ? "X" : "O";

//                 //Después, dependiendo tambien de quien fuese el turno, le quito una ficha
//                 //de las que puede poner
                (turno) ? namePlayer1 -- :  namePlayer2--;


//                 //Finalmente, además de que en pantalla quede marcada, guardo la posición 
//                 //que ocupa en mi tablero lógico
                miTablero[celda.id] = (turno) ? "X" : "O";

               comprueboGanador();

//                 //Cambiamos de turno
                turno = !turno;}
           }else{
               celda.innerHTML = (turno) ? "" : "";
               
               (turno) ? namePlayer1 ++ : namePlayer2++;
           }
        })
    }
)//&& (fichaP1 > 0 || fichaP2 > 0))
// console.log("hola")*/

