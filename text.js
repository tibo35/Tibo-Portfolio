
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

today = mm + '/' + dd + '/' + yyyy;
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


  // MODALS Z-INDEX




  // OPEN CLOSE FINDER
  // ===================================================

  // function toggleFinder () {
  //   document.getElementById('modal-work').classList.add('nav-lis-visible');
    
  // }
  // modalWork.addEventListener('dblclick', toggleFinder);
// OPEN AND CLOSE

for (let [i, trigger] of triggerArray) {
  const toggleModal = () => {
    modals[i].classList.toggle('show-modal');
    modals[i].classList.remove('modal-expand');
  }
  trigger.addEventListener("dblclick", toggleModal);
  closeButtons[i].addEventListener("click", toggleModal);
}


// EXPAND 

for(let [i, expand] of expandArray ) {
  const expandModal = () => {
    modals[i].classList.toggle('modal-expand');
  }
  expand.addEventListener('click', expandModal);
  expandButtons[i].addEventListener('click', expandModal);
}

  // REDUCE
  for(let [i, trigger] of reduceArray ) {
    const reduceModal = () => {
      modals[i].classList.toggle('show-modal');
      modals[i].classList.remove('modal-expand')
    }
    trigger.addEventListener('click', reduceModal);
    reduceButtons[i].addEventListener('click', reduceModal);
  }


// // OPEN MODAL - WORK - WORK1
const readMe = document.getElementsByClassName('modal-readme');

function toggleReadMe (){
  modals.classList.toggle('modal-readme');

}
readMe.addEventListener('dblclick', toggleReadMe);








// DRAG

document.querySelectorAll('.modal').forEach((item) => {

  item.addEventListener('mousedown', mousedown);
  
  function mousedown(e){
  
      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup);
      
      let prevX = e.clientX; // 2
      let prevY = e.clientY; // 2
  
      function mousemove(e){
          let newX = prevX - e.clientX; // 2-3 =-1
          let newY = prevY - e.clientY; // 2 -2 = 0
  
          const rect = item.getBoundingClientRect();
  
          item.style.left = rect.left - newX + "px"; // 200 - - 1 = 201
          item.style.top = rect.top - newY + "px";
  
          prevX = e.clientX;
          prevY = e.clientY;
      }
  
      function mouseup(){
          window.removeEventListener('mousemove', mousemove);
          window.removeEventListener('mouseup', mouseup);
      }
  }
});


// const el = document.querySelector('.drag');

// el.addEventListener('mousedown', mousedown);

// function mousedown(e){

//     window.addEventListener('mousemove', mousemove);
//     window.addEventListener('mouseup', mouseup);
    
//     let prevX = e.clientX; // 2
//     let prevY = e.clientY; // 2

//     function mousemove(e){
//         let newX = prevX - e.clientX; // 2-3 =-1
//         let newY = prevY - e.clientY; // 2 -2 = 0

//         const rect = el.getBoundingClientRect();

//         el.style.left = rect.left - newX + "px"; // 200 - - 1 = 201
//         el.style.top = rect.top - newY + "px";

//         prevX = e.clientX;
//         prevY = e.clientY;
//     }

//     function mouseup(){
//         window.removeEventListener('mousemove', mousemove);
//         window.removeEventListener('mouseup', mouseup);
//     }
// }
// const el = document.querySelector('.theDiv');

// el.addEventListener('mousemove', mousedown);

// function mousedown(e) {
//   window.addEventListener('mousemove', mousemove);
//   window.addEventListener('mouseup', mouseup);

//   let prevX = e.clientX;
//   let prevY = e.clientY;

//   function mousemove(e){
//     let newX = prevX - e.clientX;
//     let newY = prevY - e.clientY;

//     const rect = el.getBoundingClientRect();

//     el.style.left = rect.left - newX + 'px';
//     el.style.top = rect.top - newY + 'px';

//     prevX = e.clientX;
//     prevY = e.clientY;
//   }
//   function mouseup(){}
// }








