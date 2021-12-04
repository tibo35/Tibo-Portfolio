
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




// =====================      BUTTONS     ====================================

  const triggers = document.getElementsByClassName('trigger');
  const modals = document.getElementsByClassName('modal');

  const closeButtons = document.getElementsByClassName('dot-close');
  const expandButtons = document.getElementsByClassName('dot-open');
  const reduceButtons = document.getElementsByClassName('dot-reduce');

  const expandArray = Array.from(expandButtons).entries();
  const triggerArray = Array.from(triggers).entries();
 const reduceArray = Array.from(reduceButtons).entries();

// OPEN AND CLOSE

  for (let [i, trigger] of triggerArray) {
    const toggleModal = () => {
      modals[i].classList.toggle('show-modal');
      modals[i].classList.remove('modal-expand')
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


  // OPEN MODAL - WORK - WORK1

    const openWork1 = document.querySelector('.item-work1');
    const modalWork1 = document.querySelector('.modal-work1');
    
    
    openWork1.addEventListener('dblclick', () => {
      modalWork1.style.visibility='visible';
      });