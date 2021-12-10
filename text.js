

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
  
  
  const triggers = document.querySelectorAll('.trigger');
  const modals = document.querySelectorAll('.modal');
  
  const closeButtons = document.querySelectorAll('.dot-close');
  const expandButtons = document.querySelectorAll('.dot-open');
  const reduceButtons = document.querySelectorAll('.dot-reduce');

const nextBtn = document.querySelectorAll('.next-btn');
  const backBtn = document.querySelectorAll('.back-btn');
  const work1Folder = document.querySelector('.work1-folder')
  const work2Folder = document.querySelector('.work2-folder')
  const work3Folder = document.querySelector('.work3-folder')

  const workFolder = document.getElementById('work-folder')
  const work1Container = document.getElementById('work1-container')
  const work2Container = document.getElementById('work2-container')
  const work3Container = document.getElementById('work3-container')
  const work1IconReadme = document.querySelector('.work1-readme-icon')
  const work2IconReadme = document.querySelector('.work2-readme-icon')
  const work3IconReadme = document.querySelector('.work3-readme-icon')
const work1ReadMe =  document.querySelector('.work1-readme')
const work2ReadMe =  document.querySelector('.work2-readme')
const work3ReadMe =  document.querySelector('.work3-readme')
const workTitle = document.querySelector('.work-title')

  for (let i = 0; i < modals.length; i++){
  
  // Open the modal widows
  triggers[i].addEventListener('click', showModal);
  
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

  var zIndex =10;
  function bringFront(){
    modals[i].style.zIndex = zIndex++;
  };
  function removeModal() {
    modals[i].classList.remove('modal-expand');
    modals[i].classList.remove('show-modal'); 
  };
  function expandModal() {
    modals[i].classList.toggle('modal-expand');
  };
  
  function showModal(){
  
    modals[i].classList.add('show-modal');
    modals[i].classList.remove('modal-expand');

work1Folder.addEventListener('dblclick', function openSoba(){
  workFolder.style.display='none'
  work1Container.style.display='grid'

})
work1IconReadme.addEventListener('dblclick', function openSobaReadme(){
  work1Container.style.display='none'
  work1ReadMe.style.display='block'

})

work2Folder.addEventListener('dblclick', function openWork2(){
  workFolder.style.display='none';
  work2Container.style.display='grid'
})

work2IconReadme.addEventListener('dblclick', function openWork2Readme(){
  work2Container.style.display='none'
 work2ReadMe.style.display='block'
} )
work3Folder.addEventListener('dblclick', function openWork3(){
  workFolder.style.display='none';
  work3Container.style.display='grid'
})

work3IconReadme.addEventListener('dblclick', function openWork3Readme(){
  work3Container.style.display='none'
  work3ReadMe.style.display='block'
} )
  }

  }
  // ====================   NAV BUTTONS / forwards / backwards =================
  
  
  
  // // btn-back 
  
  for(let i =0; i < backBtn.length; i++){
  backBtn[i].addEventListener('click', back)
  }

  function back (){
  if(work3ReadMe.style.display === 'block'){
   work3ReadMe.style.display='none'
   work3Container.style.display='grid'
  } else if(work3Container.style.display === 'grid'){
    work3Container.style.display='none'
    workFolder.style.display='grid'
  } else if (work2ReadMe.style.display === 'block'){
    work2ReadMe.style.display='none'
    work2Container.style.display='grid'
  } else if (work2Container.style.display === 'grid'){
    work2Container.style.display='none'
    workFolder.style.display='grid'
  } else if (work1ReadMe.style.display === 'block'){
    work1ReadMe.style.display='none'
    work1Container.style.display='grid'
  } else if (work1Container.style.display === 'grid'){
    work1Container.style.display='none'
    workFolder.style.display='grid'
  }
}

    
  // // // next-btn 
  
  // for(let i =0; i < nextBtn.length; i++){
  //   nextBtn[i].addEventListener('click', next)
  //   }
  
  //   function next(){
  //     if()
  //   }
  
  
  // dock
  let icons = document.querySelectorAll(".ico");
let length = icons.length;

icons.forEach((item, index) => {
  item.addEventListener("mouseover", (e) => {
    focus(e.target, index);
  });
  item.addEventListener("mouseleave", (e) => {
    icons.forEach((item) => {
      item.style.transform = "scale(1)  translateY(0px)";
    });
  });
});

const focus = (elem, index) => {
  let previous = index - 1;
  let previous1 = index - 2;
  let next = index + 1;
  let next2 = index + 2;

  if (previous == -1) {
    console.log("first element");
    elem.style.transform = "scale(1.5)  translateY(-10px)";
  } else if (next == icons.length) {
    elem.style.transform = "scale(1.5)  translateY(-10px)";
    console.log("last element");
  } else {
    elem.style.transform = "scale(1.5)  translateY(-10px)";
    icons[previous].style.transform = "scale(1.2) translateY(-6px)";
    icons[previous1].style.transform = "scale(1.1)";
    icons[next].style.transform = "scale(1.2) translateY(-6px)";
    icons[next2].style.transform = "scale(1.1)";
  }
};







  
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
  