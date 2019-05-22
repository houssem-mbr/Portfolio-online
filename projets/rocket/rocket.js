var myVar;

 mySound = new Audio("rockets2.mp3");
 mySound2= new Audio("rihanna.mp3");
var i=10;
function myFunction() {
    
    myVar = setInterval(function()
        
        {
        if(i >=0)

        {
            console.log("**"+i+"**");
            mySound.play();
            mySound2.pause();
            var x=document.getElementsByTagName('img');
            x[3].setAttribute('src','images/rocket2.gif')
            document.getElementsByTagName('span')[0].innerHTML=i;
             i--;
        }
        else
        {    
            clearInterval(myVar);
            var y=document.getElementsByTagName('img');
            y[3].setAttribute('src','images/rocket3.gif');
           y[3].classList.add('tookOff');
        }
        
        
    }, 1000);
}
function myStopFunction() {
 clearInterval(myVar);
    mySound.pause();
    mySound2.play();
 
}
// Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
function getRandomInteger(min, max)
{
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addStar()
{
    var divElement;
    var index;
    var sizes = ['tiny', 'normal', 'big'];
    
    // Création d'un élément<div>
    divElement = document.createElement('div');
    
    // Ajout de la classe 'star'
    divElement.classList.add('star');
    
    // On tire au hasard un index pour le tableau des tailles
    index = getRandomInteger(0,sizes.length-1);
    
    // Ajout d'une classe pour la taille de l'étoile
    divElement.classList.add(sizes[index]);
    
    // On tire au hasard la position de l'étoile entre 0 et 100%
    divElement.style.top = getRandomInteger(0, 100) + '%';
    divElement.style.left = getRandomInteger(0, 100) + '%';
    
    // On insère l'élément <div> dans le body du document
    document.body.appendChild(divElement);
}




// Ajout des étoiles
for(let i = 0 ; i < 150 ; i++){
    addStar();
}
