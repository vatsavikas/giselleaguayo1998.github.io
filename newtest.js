
var i=1;
var imgs=[];



imgs[1]= '1.jpg';
imgs[2]='2.jpg';
imgs[3] ='3.jpg';

function switchpics(){
  document.slideshow.src= imgs[i];

  if (i < imgs.length - 1){
    i++;} else {
      i = 1; }
setTimeout (switchpics,2000)
}


window.onload= switchpics;
