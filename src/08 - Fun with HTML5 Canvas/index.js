const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Reference MDM for different properties.
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e) {
    if (!isDrawing) return; //Stops the fn from running when mouse is not down.

    console.log(e);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); //Starting from
    ctx.lineTo(e.offsetX, e.offsetY); //Going to
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;

    if (hue >= 360){
        hue = 0;
    }

    if (ctx.lineWidth >= 60 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    }else {
        ctx.lineWidth--;
    }

}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];

});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

