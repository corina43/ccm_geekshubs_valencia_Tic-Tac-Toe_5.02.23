function random (nuevoJuego){
    let player1;
    const ranMacth = Math.floor(Math.random()*2) + 1;//1 O 2
    const playerInit = document.getElementById("playerInit");
    if(ranMacth === 1){
        playerInit.innerText = "Inicia el jugador 1";
        player1 = true;
    }
    else{
        playerInit.innerText = "Inicia el jugador 2";
        player1 = true;
    }
    let modal = document.querySelectorAll(".modal")[0];
    let modal_container = document.querySelectorAll(".modal-container")[0];
    modal_container.getElementsByClassName.opacity = 1;
    modal_container.getElementsByClassName.visibility = "visible"
    modal.classList.toggle("modal-close");
    iniciarJuego(nuevoJuego);
    const button_ranGame = document.getElementById("ranGame")
     button_ranGame.disabled = true;
     button_ranGame.style.backgroundColor = "green"
}