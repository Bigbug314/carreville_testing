let size = 20;

let size_input;

const screenSize = 700;

let city;


let drawing_mode;

let beach = false;


function setup() {
    createCanvas(screenSize + 10, screenSize + 50);

    size_input = createInput();
    size_input.position(630, 712);
    size_input.size(60);
    size_input.style('font-size', 30+'px');

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
    text("Area: " + city.get_area(), 30, 735);
    text("Perimeter: " + city.get_perimeter(beach), 200, 735);
    text("Beach: ", 440, 735);

    //Beach button
    if (beach) {
        fill(0, 255, 0);
        rect(550, 710, 30, 30);
    } else {
        fill(255, 0, 0);
        rect(550, 710, 30, 30);
    }

    //Beach
    if (beach) {
        fill(220, 220, 0);
        rect(0, 0, 10, 700);
    }
}


function mouseClicked() {
    //Beach button
    if (mouseX > 550 && mouseX < 580 && mouseY > 710 && mouseY < 740) {
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


function keyPressed() {
    //Move around
    if (keyCode === RIGHT_ARROW) {
        city.shift_grid(1, 0);
    }
    if (keyCode === LEFT_ARROW) {
        city.shift_grid(-1, 0);
    }
    if (keyCode === UP_ARROW) {
        city.shift_grid(0, -1);
    }
    if (keyCode === DOWN_ARROW) {
        city.shift_grid(0, 1);
    }

    //Change size
    if (keyCode == ENTER) {
        size = parseInt(size_input.value());

        city = new City(screenSize / size, screenSize / size, size, (0, 0, 0), (255, 255, 255), 1);
    }
}