let y = 10;
let r = 200;
let g = 180;
let b = 0;
let ned = true;
let hoppet = 0;




function setup() {
    canvas = createCanvas(300, 550, 'beholder');
    textSize(24);
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';
    canvas.parent('#beholder');
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    parentDiv.insertBefore(canvas.elt, p);
}

function draw() {
    background(r, g, b);
    strokeWeight(10);
    ellipse(width / 2, y, 50);
    if (ned)
        y++;
    else
        y--;
    if (y >= height || y <= 0)
        ned = !ned;
    if (accelerationX > 70) {
        r = random(0, 256);
        g = random(0, 256);
        b = random(0, 256);
        if (hoppet % 2 == 0) {
            ned = !ned;
            hoppet++;
            
            // Opdater hop-tælleren
            let hopCountElement = select('#hopCount');
            hopCountElement.html('Hop: ' + hoppet);
        }
    }
    
    text('hoppet: ' + str(hoppet), 50, height-100);
   
}




function deviceShaken() {
    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);
    if (rystet % 2 == 0)
        ned = !ned;
    rystet++;
}