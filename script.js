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