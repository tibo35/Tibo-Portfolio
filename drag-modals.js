
document.querySelectorAll('.modal').forEach((item) =>{

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


// Resize

// const el = document.querySelector('.resize')
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