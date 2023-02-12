
//capturar datos de storage
let inputNamePlayer1  = sessionStorage.getItem("namePlayer1");
let inputNamePlayer2  = sessionStorage.getItem("namePlayer2");

document.getElementById("player1").innerHTML = inputNamePlayer1;
document.getElementById("player2").innerHTML = inputNamePlayer2;






let tablero = Array.from(document.getElementsByClassName("box"));

let turno = true;

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

tablero.map((celda) => {
        celda.addEventListener('click', ()=> {

        
            celda.classList.add('box');

         

       
            if((celda.innerHTML === "")) {
               if(namePlayer1 > 0 || namePlayer2 > 0){

                                                      

        celda.innerHTML = (turno) ? "X" : "O";//Aqui PINTO el simbolo, dependiendo del turno


                (turno) ? namePlayer1 -- :  namePlayer2--;//                 //Después, dependiendo tambien de quien fuese el turno, le quito una ficha
                //de las que puede poner


           
                miTablero[celda.id] = (turno) ? "X" : "O";      //Finalmente, además de que en pantalla quede marcada, guardo la posición 
                 //que ocupa en mi tablero lógico

               comprueboGanador();

                 //Cambiamos de turno
                turno = !turno;}
           }else{
               celda.innerHTML = (turno) ? "" : "";
               
               (turno) ? namePlayer1 ++ : namePlayer2++;
           }
        })
    }
)