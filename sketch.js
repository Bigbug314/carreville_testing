const size = 20;

const screenSize = 700;

let city;


let drawing_mode;

let beach = false;


function setup() {
    createCanvas(screenSize + 10, screenSize + 50);
    strokeWeight(0);
    textAlign(CORNER);

    console.log(width + "   " + height);

    city = new City(screenSize / size, screenSize / size, size, (0, 0, 0), (255, 255, 255), 1);
}



function draw() {
    background(80);
    city.draw(10, 0);

    textSize(30);
    fill(255, 255, 255)
    text("Area: " + city.get_area(), 60, 735);
    text("Perimeter: " + city.get_perimeter(beach), 260, 735);
    text("Beach: ", 510, 735);

    //Beach button
    if (beach) {
        fill(0, 255, 0);
        rect(620, 710, 30, 30);
    } else {
        fill(255, 0, 0);
        rect(620, 710, 30, 30);
    }

    //Beach
    if (beach) {
        fill(220, 220, 0);
        rect(0, 0, 10, 700);
    }
}


function mouseClicked() {
    //Beach button
    if (mouseX > 610 && mouseX < 640 && mouseY > 710 && mouseY < 740) {
        beach = !beach;
    }
}


function mousePressed() {
    let grid_coord = city.world_to_grid(mouseX - 10, mouseY);

    if (city.get_square(grid_coord[0], grid_coord[1])) {
        drawing_mode = false;
    } else {
        drawing_mode = true;
    }

    city.set_square(grid_coord[0], grid_coord[1], drawing_mode);
}

function mouseDragged() {
    let grid_coord = city.world_to_grid(mouseX - 10, mouseY);

    city.set_square(grid_coord[0], grid_coord[1], drawing_mode);
}