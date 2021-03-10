const switchToggle = document.querySelector('input[type="checkbox"');
const myKbds = document.querySelectorAll('kbd') ;
const toupcase = document.querySelectorAll('.maj');
const toggleIcon = document.getElementById('toggle-icon');
const capsIcon = document.getElementById('capskey');
const toucheentree = document.getElementById('enterKey');
const touchesupprime = document.getElementById('touchesup');
var element = document.body;
let myscreen = document.getElementById('myscreen');
const toucheespace = document.getElementById('spacekey');


function modetheme(event){
    console.log(event.target.checked);
    if(event.target.checked){
          
      lightMode(); 
        
    }else{
        /***mode jour */
        darkMode();
    }
}

/**dark mode */
function darkMode(){
    toggleIcon.children[0].textContent = 'Mode nuit';
    toggleIcon.children[0].style.color = "white";
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    element.classList.add("nightbody");
    element.classList.remove("lightbody");
    for(let i=0;i<myKbds.length;i++){
        document.getElementsByTagName("kbd")[i].setAttribute("class", "nightkbd")
        myKbds[i].classList.remove('lightkbd');
       
       }

}

/**light mode */
function lightMode(){
    element.classList.add("lightbody");
    element.classList.remove("nightbody");
    toggleIcon.children[0].textContent = 'Mode Jour';
    toggleIcon.children[0].style.color = "blue";
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    for(let i=0;i<myKbds.length;i++){
        document.getElementsByTagName("kbd")[i].setAttribute("class", "lightkbd");
        myKbds[i].classList.remove('nightkbd');
       
       }

}

switchToggle.addEventListener('change',modetheme);

window.addEventListener("DOMContentLoaded", (event) => {
   lightMode();
  });
  /****touche verrouillage */
  const capskey = document.getElementById("verrou");
/*   capskey.onclick=function (){
    capskey.checked? capslockActivated():capslockDisable();

  } */
  capskey.addEventListener('change',verroMode);
  function verroMode(event){
      if(event.target.checked){
        capsIcon.children[0].classList.replace('fa-unlock', 'fa-lock');
        capslockActivated();
        console.log('test');
      }else{
        capsIcon.children[0].classList.replace('fa-lock', 'fa-unlock');
        capslockDisable();
        console.log('test ok');
        //console.log(myKbds);
      }
  }

  function capslockActivated(){
/*     for(let i=0;i<myKbds.length;i++){
        document.getElementsByTagName("kbd")[i].style.textTransform = "uppercase";
        console.log(toupcase);
       } */
       toupcase.forEach(function(el,index){
        el.innerText=el.innerText.toUpperCase();
       });
       
  }
  function capslockDisable(){
    toupcase.forEach(function(el,index){
      el.innerText=el.innerText.toLowerCase();
     });
  }
    /*********les touches du clavier************ */
    var touches = document.querySelectorAll('.keyboardRow .centerkey');
    //var touches = document.querySelectorAll('.centerkey');
    touches.forEach(function(el) {
  el.addEventListener('click', onClick, false);
  })

function onClick(e) {
  var kbd = e.currentTarget;
  myscreen.value = myscreen.value + kbd.innerText;
  console.log(myscreen.value);
 // console.log(toucheentree);
  //  myscreen.textContent = myscreen.innerText + kbd.innerText;
  //  console.log(kbd.innerText);
}
/************touche entrée */
toucheentree.addEventListener('click',function(e){
  myscreen.value +="\n";
  console.log(myscreen);

});
/***touche entrée */
toucheespace.addEventListener('click',(e)=>{
  myscreen.value +=" ";
});
/******************touche supprimée */
 touchesupprime.addEventListener('click',function(e){
   myscreen.value= myscreen.value.slice(0, myscreen.value.length-1);
  
 });
