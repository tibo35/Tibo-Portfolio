
// TIME
// ===================================================
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    // let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
    //  ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();


  // DATE
  // ===================================================

  function currentDate() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + ' / ' + dd + ' / ' + yyyy;
document.getElementById("date").innerText = today; 
  }
  currentDate();






// =====================      MODALS     ====================================





// ================     BUTTONS     =============


const triggers = document.getElementsByClassName('trigger');
const modals = document.getElementsByClassName('modal');


const closeButtons = document.getElementsByClassName('dot-close');
const expandButtons = document.getElementsByClassName('dot-open');
const reduceButtons = document.getElementsByClassName('dot-reduce');

const expandArray = Array.from(expandButtons).entries();
const triggerArray = Array.from(triggers).entries();
const reduceArray = Array.from(reduceButtons).entries();


for (let [i, trigger] of triggerArray){

// Open the modal widow

  const showModal = () => {
   
    modals[i].classList.add('show-modal');
    modals[i].classList.remove('modal-expand');

  }
  trigger.addEventListener('dblclick', showModal);



// Close the modal widow
  const removeModal = () => {
    modals[i].classList.remove('modal-expand');
    modals[i].classList.remove('show-modal');

  }
  closeButtons[i].addEventListener('click', removeModal);
  reduceButtons[i].addEventListener('click', removeModal);


// Bring modal widow at the front (zindex)

var zIndex =10;
  const bringFront = () => {
    
    modals[i].style.zIndex = zIndex++;
  }
  modals[i].addEventListener("click", bringFront);
  modals[i].addEventListener("mousedown", bringFront);
  // make sure that the modal window stays at the front when open:
  trigger.addEventListener('dblclick', bringFront);
  }
  


for(let [i, expand] of expandArray) {

// Expand the modal widow

  const expandModal = () => {
    modals[i].classList.toggle('modal-expand');
    
  }
  // expand.addEventListener('click', expandModal);
  expandButtons[i].addEventListener('click', expandModal);

}



  







