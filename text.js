

// ===========================  TIME  ========================
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


   
  // ============================ DATE  =======================

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

const nextBtn = document.querySelectorAll('.next-btn')
const work = document.querySelectorAll('work')
const soba = document.querySelectorAll('soba')
const backBtn = document.querySelectorAll('.back-btn')
const sobaFolder = document.querySelectorAll('.modal > .container-soba-folder') 
const modalbox = document.querySelectorAll('.modal-box');
const backArray = Array.from(backBtn).entries()
const nextArray = Array.from(nextBtn).entries()


for(let [i, back] of backArray){
// BACK BUTTONS 
const remove = () => {

  document.getElementById('soba').classList.remove('show-modal')
  return
  // e[i].classList.add('container-work-folder')
}
backBtn[i].addEventListener('click', remove);
}

// for(let [i, next] of nextArray){
// const next = () => {
//   document.getElementById('soba').classList.add('modal-box-show')
// }
// nextBtn[i].addEventListener('click', next)
// }

// backBtn.addEventListener('click', back)
// function back (){
//   removeModal
// }
// // }


// ============================ RESIZE AND DRAG =============================


// DRAG =========

const element = document.querySelectorAll(".modal");
for (let el of element) {
let isResizing = false;

el.addEventListener("mousedown", mousedown);

function mousedown(e) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let prevX = e.clientX;
  let prevY = e.clientY;

  function mousemove(e) {
    if (!isResizing) {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;

      const rect = el.getBoundingClientRect();

      el.style.left = rect.left - newX + "px";
      el.style.top = rect.top - newY + "px";

      prevX = e.clientX;
      prevY = e.clientY;
    }
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}
}

// RESIZE
// ===================================


// const resizers = document.querySelectorAll(".resizer");
// let currentResizer;

// for (let resizer of resizers) {
//   resizer.addEventListener("mousedown", mousedown);

//   function mousedown(e) {
//     currentResizer = e.target;
//     isResizing = true;

//     let prevX = e.clientX;
//     let prevY = e.clientY;

//     window.addEventListener("mousemove", mousemove);
//     window.addEventListener("mouseup", mouseup);

//     function mousemove(e) {
    
//       let el = currentResizer.closest(".resizable");
   
//       const rect = el.getBoundingClientRect();

//       if (currentResizer.classList.contains("se")) {
//         el.style.width = rect.width - (prevX - e.clientX) + "px";
//         el.style.height = rect.height - (prevY - e.clientY) + "px";
//       } else if (currentResizer.classList.contains("sw")) {
//         el.style.width = rect.width + (prevX - e.clientX) + "px";
//         el.style.height = rect.height - (prevY - e.clientY) + "px";
//         el.style.left = rect.left - (prevX - e.clientX) + "px";
//       } else if (currentResizer.classList.contains("ne")) {
//         el.style.width = rect.width - (prevX - e.clientX) + "px";
//         el.style.height = rect.height + (prevY - e.clientY) + "px";
//         el.style.top = rect.top - (prevY - e.clientY) + "px";
//       } else {
//         el.style.width = rect.width + (prevX - e.clientX) + "px";
//         el.style.height = rect.height + (prevY - e.clientY) + "px";
//         el.style.top = rect.top - (prevY - e.clientY) + "px";
//         el.style.left = rect.left - (prevX - e.clientX) + "px";
//       }

//       prevX = e.clientX;
//       prevY = e.clientY;
//     }

//     function mouseup() {
//       window.removeEventListener("mousemove", mousemove);
//       window.removeEventListener("mouseup", mouseup);
//       isResizing = false;
//     }
//   }
// }




