//capturar datos de storage
let inputNamePlayer1  = sessionStorage.getItem("namePlayer1");
let inputNamePlayer2  = sessionStorage.getItem("namePlayer2");

document.getElementById("player1").innerHTML = inputNamePlayer1;
document.getElementById("player2").innerHTML = inputNamePlayer2;

   const playerselect = () =>{

   }
 
 let tablero = Array.from(document.getElementsByClassName("box"));

 let turno = true;

 let fichaP1 = 3;
 let fichaP2= 3;


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
            // celda.classList.add('cellDesign2');

            //Ejemplo de inyección de HTML desde JavaScript
            // celda.innerHTML = `<p class='devil'>NUNCA LO ACABARAS</p>`;

//             //Compruebo que SI puedo pintar la X o la O.
             if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){

//                 //Aqui PINTO el simbolo, dependiendo del turno
                 celda.innerHTML = (turno) ? "X" : "O";

//                 //Después, dependiendo tambien de quien fuese el turno, le quito una ficha
//                 //de las que puede poner
                 (turno) ? fichaP1 -- : fichaP2--;


//                 //Finalmente, además de que en pantalla quede marcada, guardo la posición 
//                 //que ocupa en mi tablero lógico
                 miTablero[celda.id] = (turno) ? "X" : "O";

                comprueboGanador();

//                 //Cambiamos de turno
                 turno = !turno;
            }
         })
     }
 )
// console.log("hola")