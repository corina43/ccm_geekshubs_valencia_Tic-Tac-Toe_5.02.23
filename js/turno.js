function turno (player1){

    if(player1 === true){
        const img_player1 = document.getElementById("img_player1")
        img_player1.src = " ../img/play.png";
        img_player1.style.width = "120%"

        const img_player2 = document.getElementById("img_player2")
        img_player2.src = " ../img/wait.png";
        img_player2.style.width = "80%";

        
    }
    else{
        const img_player1 = document.getElementById("img_player1")
        img_player1.src = " ../img/wait.png";
        img_player1.style.width = "80%"

        const img_player2 = document.getElementById("img_player2")
        img_player2.src = " ../img/play.png";
        img_player2.style.width = "120%";


    }
    
}

export default turno ;