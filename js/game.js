<<<<<<< HEAD
let tablero = Array.from(document.getElementsByClassName("cellDesign"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

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
=======
//capturar datos de storage
 let inputNamePlayer1  = sessionStorage.getItem("namePlayer1");
 let inputNamePlayer2  = sessionStorage.getItem("namePlayer2");

 document.getElementById("player1").innerHTML = inputNamePlayer1;
 document.getElementById("player2").innerHTML = inputNamePlayer2;

   const playerselect = () =>{

   }
//  let nameScreen1 = document.getElementById(fichaP1)
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
>>>>>>> 935d05a2be6e61c7555d6f64d473e81cd3c4b641

            //Ejemplo de como añadir una clase a un elemento seleccionado
            // celda.classList.add('cellDesign2');

            //Ejemplo de inyección de HTML desde JavaScript
            // celda.innerHTML = `<p class='devil'>NUNCA LO ACABARAS</p>`;

<<<<<<< HEAD
            //Compruebo que SI puedo pintar la X o la O.
            if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){

                //Aqui PINTO el simbolo, dependiendo del turno
                celda.innerHTML = (turno) ? "X" : "O";

                //Después, dependiendo tambien de quien fuese el turno, le quito una ficha
                //de las que puede poner
                (turno) ? fichaP1-- : fichaP2--;


                //Finalmente, además de que en pantalla quede marcada, guardo la posición 
                //que ocupa en mi tablero lógico
                miTablero[celda.id] = (turno) ? "X" : "O";

                comprueboGanador();

                //Cambiamos de turno
                turno = !turno;
            }
        })
    }
)
// const savePlayers = () => {

//     let player1Name = document.getElementById("player1_title");
//     let NamePlayer1 = player1Name.value;
//     console.log(NamePlayer1);
//     sessionStorage.setItem("Name player 1", NamePlayer1);

//     let player1Type = document.getElementById("TypePlayer1Human");
//     let TypePlayer1 = player1Type.checked;
//     sessionStorage.setItem("Is player 1 human?", TypePlayer1);

//     let player2Name = document.getElementById("player2_title");
//     let NamePlayer2 = player2Name.value;
//     console.log(NamePlayer2);
//     sessionStorage.setItem("Name player 2", NamePlayer2);

//     let player2Type = document.getElementById("TypePlayer2Human");
//     let TypePlayer2 = player2Type.checked;
//     sessionStorage.setItem("Is player 2 human?", TypePlayer2);

// // CHECK IF EVERYTHING IS FILLED IN AND AT LEAST ONE PLAYER IS A HUMAN

//     if(TypePlayer1 == false && TypePlayer2 == false) {
//         alert("At least one player must be human");
//     } else if(NamePlayer1 == "" || NamePlayer2 == "") {
//         alert("You must complete both names");
//     } else {
//        document.getElementById("startGame").href="./game.html";
//     };
// }

=======
//             //Compruebo que SI puedo pintar la X o la O.
             if(celda.innerHTML === "") {
                if(fichaP1 > 0 || fichaP2 > 0){

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
                 turno = !turno;}
            }else{
                celda.innerHTML = (turno) ? "" : "";
                
                (turno) ? fichaP1 ++ : fichaP2++;
            }
         })
     }
 )//&& (fichaP1 > 0 || fichaP2 > 0))
// console.log("hola")
>>>>>>> 935d05a2be6e61c7555d6f64d473e81cd3c4b641
