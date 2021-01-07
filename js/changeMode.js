const switchToggle = document.querySelector('input[type="checkbox"');
const myKbds = document.querySelectorAll('kbd') ;
const toggleIcon = document.getElementById('toggle-icon');
var element = document.body;


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