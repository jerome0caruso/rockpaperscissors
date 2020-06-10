//Rock, paper, scissors
//Selecting and assigning images for events
const rockImg = document.querySelector("#rock");
const sisImg = document.querySelector('#sis');
const paperImg = document.querySelector('#paper');
const imgageArea = document.querySelector('.s-container')
//global variables
var winner;
var usersPick = 0;
var computersPick = 0;

//Run when game starts
function playGame(e){
    usersPick = e.target;
    computerpick();
    result(usersPick, computersPick);
    setsWinnerImage();
    //delayed message of game over
    setTimeout(function(){
        let gameover = document.createElement("h4")
        gameover.innerHTML = "Game Over"
        imgageArea.appendChild(gameover)
        let WinnerImage = document.getElementById("changer")
        WinnerImage.addEventListener("mouseover", reloadMe);
    }, 2000)
    return ("Game Over");
}

//Changes images to display the winner/s
function setsWinnerImage(){
    if(usersPick === winner && computersPick === winner){
        winner.setAttribute("id", "changer")
        console.log("TIE!!")
    }else if(usersPick != winner){
        winner.setAttribute("id", "changer")
        imgageArea.removeChild(usersPick)  
    } else if(computersPick !== winner){
        winner.setAttribute("id", "changer")
        imgageArea.removeChild(computersPick)
    }

}

//event listeners 
rockImg.addEventListener("click", playGame);
sisImg.addEventListener("click", playGame);
paperImg.addEventListener("click", playGame);

//Computers pick set to random
function computerpick(min=0, max=2){
   computersPick = Math.floor(Math.random() * 3)
   if(computersPick === 0){
       computersPick = rockImg;
   } else if(computersPick === 1){
       computersPick = sisImg;
   } else if (computersPick === 2){
       computersPick = paperImg;
   }
   return computersPick;
}
// reloads/ refreshes the page uses onclick
function reloadMe(){
    return window.location.reload();
    }
//Determines the winner, removes image/s and returns winner
function result(user, computer){
    //computer is Rock
    if(computer === rockImg && user === rockImg){
        imgageArea.removeChild(sisImg)
        imgageArea.removeChild(paperImg)
        let h3 = document.createElement("h2")
        h3.innerHTML = `<h5>User pick: Rock</h5>  --- Tie! ---  <h5>Computer pick: Rock</h5>`
        imgageArea.appendChild(h3)
        winner = rockImg;
        return winner;
    } else if(computer === rockImg && user === sisImg){
         imgageArea.removeChild(paperImg)
        let h3 = document.createElement("h2")
        h3.innerHTML = `<h5>User pick: Scissors</h5>  --- Computer Wins! ---  <h5>Computer pick: Rock</h5>`
        imgageArea.appendChild(h3)
        winner = rockImg;
        return winner;
    } else if(computer === rockImg && user === paperImg){
        imgageArea.removeChild(sisImg)
        let h3 = document.createElement("h2")
        h3.innerHTML = `<h5>User pick: Paper</h5>  --- You Win! ---  <h5>Computer pick: Rock</h5>`
        imgageArea.appendChild(h3)
        winner = paperImg;
        return winner;
    // computer is Scissors  
    } else if(computer === sisImg && user === sisImg){
        imgageArea.removeChild(rockImg)
        imgageArea.removeChild(paperImg)
        let h3 = document.createElement("h2")
        h3.innerHTML = `<h5>User pick: Scissors</h5>  --- You Tie! ---  <h5>Computer pick: Scissors</h5>`
        imgageArea.appendChild(h3)
        winner = sisImg;
        return winner;
    } else if(computer === sisImg && user === rockImg){
        imgageArea.removeChild(paperImg)
        let h3 = document.createElement("h2")
        h3.innerHTML = `<h5>User pick: Rock</h5>  --- You Win! ---  <h5>Computer pick: Scissors</h5>`
        imgageArea.appendChild(h3)  
        winner = rockImg; 
        return winner;
    } else if(computer === sisImg && user === paperImg){
        imgageArea.removeChild(rockImg)
        let h3 = document.createElement("h2")
        h3.innerHTML = `<h5>User pick: Paper</h5>  --- Computer Wins! ---  <h5>Computer pick: Scissors</h5>`
        imgageArea.appendChild(h3)
        winner = sisImg;
        return winner;
    // computer is Paper
    } else if(computer === paperImg && user === paperImg){
        imgageArea.removeChild(rockImg)
        imgageArea.removeChild(sisImg)
        let h3 = document.createElement("h2")
        h3.innerHTML = `<h5>User pick: Paper</h5>  --- You Tie! ---  <h5>Computer pick: Paper</h5>`
        imgageArea.appendChild(h3)
        winner = paperImg;
        return winner;
    } else if(computer === paperImg && user === rockImg){
        imgageArea.removeChild(sisImg)
        let h3 = document.createElement("h2")
        h3.innerHTML = `<h5>User pick: Rock</h5>  --- Computer Wins! ---  <h5>Computer pick: Paper</h5>`
        imgageArea.appendChild(h3)  
        winner = paperImg;
        return winner; 
    } else if(computer === paperImg && user === sisImg){
        imgageArea.removeChild(rockImg)
        let h3 = document.createElement("h2")
        h3.innerHTML = `<h5>User pick: Scissors</h5>  --- You Win! ---  <h5>Computer pick: Paper</h5>`
        imgageArea.appendChild(h3)
        winner = sisImg;
        return winner;
    }

}
