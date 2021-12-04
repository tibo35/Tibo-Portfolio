// / ================     BUTTONS     =============


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



// ============================ RESIZE AND DRAG =============================


// DRAG =========

const element = document.querySelectorAll(".resizable");
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


// RESIZE
// ===================================


const resizers = document.querySelectorAll(".resizer");
let currentResizer;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
        isResizing = true;
        
      let el = resizer.closest(".resizable");
 
    
   
      const rect = el.getBoundingClientRect();

      if (currentResizer.classList.contains("se")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains("sw")) {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      } else if (currentResizer.classList.contains("ne")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
      } else {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}
}