 
 import turno from "./turno.js";
 function iniciarJuego(nuevoJuego,player1){
      let i;
     if(!nuevoJuego){
         for ( i = 0; i < 9 ; i++) {
     let string = "box_active" + i ;
    document.getElementById(string).style.display = 'block';
            
       }
      }      else {
        for(i = 0; index < 9 ; i++){
            let string = "box_active" + i ;
            
            document.getElementById(string).style.display = false; 
             document.getElementById(string).style.cursor = 'pointer';
        }
         nuevoJuego = false;
 }
 turno(player1)
 }
 export default iniciarJuego;