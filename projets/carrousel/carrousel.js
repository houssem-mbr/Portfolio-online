//---------------------------------------------------------------------------------------
//Déclaration de tableau d'image avec les legendes
//---------------------------------------------------------------------------------------
var o=[{image:'images/1.jpg', leg:'Image 1'},{image:'images/2.jpg',leg:'Image 2'},{image:'images/3.jpg',leg:'Image 3'},{image:'images/4.jpg',leg:'Image 4'},{image:'images/5.jpg',leg:'Image 5'},{image:'images/6.jpg',leg:'Image 6'}];
//var n=[{texte:'image 1'},{texte:'image 2'},{texte:'image 3'},{texte:'image 4'},{texte:'image 5'},{texte:'image 6'}];
var x=document.getElementsByTagName('img');
//---------------------------------------------------------------------------------------
//Avancement et récule en click 
//---------------------------------------------------------------------------------------
var i=0;
function suivant(){
	if (i<o.length-1) {
	i++;
  document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
}
else{
	i=0;
  document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
}

x[0].setAttribute('src',o[i].image);


}

function prev(){
if (i>0) {
      i--;
      document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
  }
  else{
  	i=o.length-1;
    document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
  }
	x[0].setAttribute('src',o[i].image);
}
//----------------------------------------------------------------------------
//Avancement automatique arrét
//----------------------------------------------------------------------------
var i=0;
var Var;
function commencer(y) {

y.classList.add('hidden');
y.classList.remove('showen');

z=document.getElementById('stopen');

z.classList.remove('hidden');
z.classList.add('showen');
    
    Var = setInterval(function(){
        if(i<o.length-1){
            i++;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }else{
            i=0;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }
x[0].setAttribute('src',o[i].image);
        
    }, 1000);
}

function arreter(y){
z=document.getElementById('player');

z.classList.remove('hidden');
z.classList.add('showen');
y.classList.remove('showen');
y.classList.add('hidden');
clearInterval(Var);
}

//------------------------------------------------------------------------
//Avancement aléatoire et arrét 
//------------------------------------------------------------------------
function getRandomInteger(min, max)
{
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var var2;
function rand (y){
y.classList.add('hidden');
y.classList.remove('showen');
z=document.getElementById('rans');
z.classList.remove('hidden');
z.classList.add('showen');
    Var2 = setInterval(function(){
      i=getRandomInteger(0,o.length-1);
        if(i<o.length-1){
            i++;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }else{
            i=getRandomInteger(0,o.length-1);
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }
x[0].setAttribute('src',o[i].image);
        
    }, 1000);
}
function rands(y){

y.classList.remove('showen');
y.classList.add('hidden');
z=document.getElementById('ran');
z.classList.remove('hidden');
z.classList.add('showen');

clearInterval(Var2);
}
//------------------------------------------------------------------------------------
//Affichage et disparition de barre d'outil
//------------------------------------------------------------------------------------

function showit(y){

y.classList.toggle('hidden');
z=document.getElementById('down');
z.classList.toggle('hidden');

w=document.getElementById('btt');
w.classList.toggle('hidden');
 
}
function hideit(y){
z=document.getElementById('right');
z.classList.toggle('hidden');
y.classList.toggle('hidden');
w=document.getElementById('btt');
w.classList.toggle('hidden');

}
//-----------------------------------------------------------------------------------
//Faire réculer automatique 
//-----------------------------------------------------------------------------------
var var3;
function recule(y) {
y.classList.toggle('hidden');
z=document.getElementById('reculearr');
z.classList.toggle('hidden');

    Var3 = setInterval(function(){
        if(i>0){
            i--;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }else{
            i=o.length-1;
            document.getElementsByTagName('h4')[0].innerHTML=(o[i].leg);
        }
x[0].setAttribute('src',o[i].image);
        
    }, 1000);
}

function reculearr(y){
y.classList.toggle('hidden');
z=document.getElementById('recule')
z.classList.remove('hidden');
  clearInterval(Var3);

}