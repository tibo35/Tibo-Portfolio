

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





// ================     Modal-windows     =============


const triggers = document.getElementsByClassName('trigger');
const modals = document.getElementsByClassName('modal');

const closeButtons = document.getElementsByClassName('dot-close');
const expandButtons = document.getElementsByClassName('dot-open');
const reduceButtons = document.getElementsByClassName('dot-reduce');
const soba = document.getElementById('soba');
const work = document.getElementById('work');
const sobaReadMe = document.getElementById('soba-readme');
const work2 = document.getElementById('work2');
const work2ReadMe = document.getElementById('work2-readMe');
const work3 = document.getElementById('work3');
const work3ReadMe = document.getElementById('work3-readMe');


for (let i=0; i < triggers.length; i++){

// Open the modal widows
triggers[i].addEventListener('dblclick', showModal);

// Close the modal widows
closeButtons[i].addEventListener('click', removeModal);

// Minimize the modal windows
reduceButtons[i].addEventListener('click', removeModal);

// Bring modal widow at the front (zindex)
modals[i].addEventListener("click", bringFront);
modals[i].addEventListener("mousedown", bringFront);

// keep modal window stays at the front when open:
triggers[i].addEventListener('dblclick', bringFront);

// expand.addEventListener('click', expandModal);
expandButtons[i].addEventListener('click', expandModal);


// ====================   FUNCTIONS =================



function showModal(){
  modals[i].classList.add('show-modal');
  modals[i].classList.remove('modal-expand');

  // if else statment for the Work modal. if <child> is opening <parent> removed:


soba.addEventListener('mouseover', removeWork)
sobaReadMe.addEventListener('mouseover', removeSoba)
work2.addEventListener('mouseover', removeWork)
work2ReadMe.addEventListener('mouseover', removeWork2)
work3.addEventListener('mouseover', removeWork)
work3ReadMe.addEventListener('mouseover', removeWork3)


function removeWork(){
      work.style.display='none';
}
function removeSoba(){
  soba.style.display='none';
}
function removeWork2 (){
  work2.style.display='none'
}
function removeWork3 (){
  work3.style.display='none'
}
}




function removeModal() {
  modals[i].classList.remove('modal-expand');
  modals[i].classList.remove('show-modal');
};

 var zIndex =10;
function bringFront(){
  modals[i].style.zIndex = zIndex++;
};

function expandModal() {
  modals[i].classList.toggle('modal-expand');
};

};

// ================     Switch box-modal WORK    =============
// const container = document.getElementsByClassName('container')
// const workFolder = document.querySelector('.modal-box-work')
// const sobaFolder = document.querySelector('.modal-box-sobaContainer')
// const triggerSobaFolder = document.getElementById('item-work1-trigger')
// const triggerWork2Folder = document.getElementById('work2-folder-trigger')
// const modalBox = document.querySelectorAll('.modal-box')
// const modal = document.querySelectorAll('.modal')



//   triggerSobaFolder.addEventListener('dblclick', openSobaFolder)
//   // triggerWork2Folder.addEventListener('dbclick', openWork2Folder)

//   function openSobaFolder(){
//   workFolder.classList.toggle('hide-work-folder')
// sobaFolder.classList.toggle('show-soba')
  
    // sobaFolder[i].classList.add('container-soba-folder')
    // sobaFolder[i].style.visibility='visible';
    
  

// const workFolder = document.getElementById('work');
// const triggerBox = document.getElementsByClassName('trigger-box');
// const modalBox = document.getElementsByClassName('modal-box');
// const triggerSoba = document.getElementById('item-work1-trigger');
// const containerSoba = document.getElementById('soba-container');

// for(let i=0; i < modalBox.length; i++){
// triggerSoba.addEventListener('dblclick', openSobaContainer)

// function openSobaContainer(){
// workFolder.style.visibility='hidden'
// containerSoba.style.visibility="visible"
// return

// }




// const triggerBox = document.getElementsByClassName('trigger-box');
// const modalBox = document.getElementsByClassName('modal-box');


// const triggerBox = Array.from(triggerBox).entries();

// for (let [i, trigger] of triggerBox){
// trigger.addEventListener('dblclick')

// }

// const nextBtn = document.querySelectorAll('.next-btn')
// const work = document.querySelectorAll('work')
// const soba = document.querySelectorAll('soba')
// const backBtn = document.querySelectorAll('.back-btn')
// const sobaFolder = document.querySelectorAll('.modal > .container-soba-folder') 
// const modalbox = document.querySelectorAll('.modal-box');
// const backArray = Array.from(backBtn).entries()
// const nextArray = Array.from(nextBtn).entries()


// for(let [i, back] of backArray){
// // BACK BUTTONS 
// const remove = () => {

// document.getElementById('soba').classList.remove('show-modal')
// return
// // e[i].classList.add('container-work-folder')
// }
// backBtn[i].addEventListener('click', remove);
// }

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

