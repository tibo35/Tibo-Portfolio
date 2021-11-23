
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






  // function toggleModal(){
  //   modalWork1.classList.toggle('show-modal');
  // }
  // openWork1.addEventListener('dblclick', () => {
  //   modalWork1.classList.toggle('show-modal');
  //   closeButtons.addEventListener("click", toggleModal);
  //   });









// // OPEN CLOSE EXPAND MODALS
// // ==================================================
// //  MODAL ABOUT
// // ==================

// const close = document.getElementById('close-about');
// const reduce = document.getElementById('reduce-about');
// const expand = document.getElementById('open-about');

// const about = document.querySelector('.items-about');
// const modalAbout = document.querySelector('.modal-about');

// //OPEN
// about.addEventListener('dblclick', () => {

//   // if modal skills is open, close it and open About instead
//   if(modalSkills.style.display="flex"){
//     modalSkills.style.display="none"
//   }
// modalAbout.style.display='flex';
// });

// //CLOSE
// close.addEventListener('click', () => {
//   modalAbout.style.display='none';
//   });

// // REDUCE  
// reduce.addEventListener('click', () => {
//   modalAbout.style.display='none';
//   });

//   // EXPAND 
// expand.addEventListener('click', () => {
//   if (modalAbout.className==='modal-about') {
//     modalAbout.className='modal-expand';
//   } else {
//   modalAbout.className = 'modal-about';
//   }
//   });


// //  MODAL SKILLS
// // ==================

// const closeSkills = document.getElementById('close-skills');
// const reduceSkills = document.getElementById('reduce-skills');
// const expandSkills = document.getElementById('open-skills');



// const skills = document.querySelector('.items-skills');
// const modalSkills = document.querySelector('.modal-skills');

// //OPEN
// skills.addEventListener('dblclick', () => {
//     // if modal about is open, close it and open Skills instead
//   if(modalAbout.style.display="flex"){
//     modalAbout.style.display="none"
//   }
// modalSkills.style.display='flex';
// });

// //CLOSE
// closeSkills.addEventListener('click', () => {
//   modalSkills.style.display='none';
//   });

// // REDUCE  
// reduceSkills.addEventListener('click', () => {
//   modalSkills.style.display='none';
//   });

//   // EXPAND 
// expandSkills.addEventListener('click', () => {
//   if (modalSkills.className==='modal-skills') {
//     modalSkills.className='modal-expand';
//   } else {
//   modalSkills.className = 'modal-skills';
//   }
//   });

// //  MODAL WORK
// // ==================

// const closeWork = document.getElementById('close-work');
// const reduceWork = document.getElementById('reduce-work');
// const expandWork = document.getElementById('open-work');

// const work = document.querySelector('.items-work');
// const modalWork = document.querySelector('.modal-work');

// //OPEN
// work.addEventListener('dblclick', () => {
//     // if modal about is open, close it and open WORK instead
//   if(modalAbout.style.display="flex") {
//     modalAbout.style.display="none";
//   }
// modalWork.style.display='flex';
// });

// //CLOSE
// closeWork.addEventListener('click', () => {
//   modalWork.style.display='none';
//   });

// // REDUCE  
// reduceWork.addEventListener('click', () => {
//   modalSkills.style.display='none';
//   });

//   // EXPAND 
// expandWork.addEventListener('click', () => {
//   if (modalWork.className==='modal-work') {
//     modalWork.className='modal-expand';
//   } else {
//   modalWork.className = 'modal-work';
//   }
//   });

// //  MODAL WORK - WORK1
// // ==================
// const closeWork1 = document.getElementById('close-work1');
// const reduceWork1 = document.getElementById('reduce-work1');
// const expandWork1 = document.getElementById('open-work1');

// const openWork1 = document.querySelector('.item-work1');
// const modalWork1 = document.querySelector('.modal-work1');


// openWork1.addEventListener('dblclick', () => {
// modalWork1.style.display='flex';
// });

// //OPEN
// openWork1.addEventListener('dblclick', () => {
//   // if modal about is open, close it and open WORK instead
// if(modalAbout.style.display="flex") {
//   modalAbout.style.display="none";
// }
// modalWork1.style.display='flex';
// });

// //CLOSE
// closeWork1.addEventListener('click', () => {
// modalWork1.style.display='none';
// modalWork.style.display="none";
// });

// // REDUCE  
// reduceWork1.addEventListener('click', () => {
// modalWork1.style.display='none';
// });

// // EXPAND 
// expandWork1.addEventListener('click', () => {
// if (modalWork1.className==='modal-work') {
//   modalWork1.className='modal-expand';
// } else {
// modalWork1.className = 'modal-work';
// }
// });







