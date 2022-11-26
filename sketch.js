const size = 20;

let city;


let drawing_mode;

let beach = false;


function setup() {
    createCanvas(700, 750);

    console.log(width + "   " + height);

    city = new City(width / size, width / size, size, (0, 0, 0), (255, 255, 255), 1);
}



function draw() {
    background(80);
    city.draw(0, 0);

    textAlign(CORNER);
    textSize(30);
    fill(255, 255, 255)
    text("Area: " + city.get_area(), 50, 735);
    text("Perimeter: " + city.get_perimeter(beach), 250, 735);
}


function mousePressed() {
    let grid_coord = city.world_to_grid(mouseX, mouseY);

    if (city.get_square(grid_coord[0], grid_coord[1])) {
        drawing_mode = false;
    } else {
        drawing_mode = true;
    }

    city.set_square(grid_coord[0], grid_coord[1], drawing_mode);
}

function mouseDragged() {
    let grid_coord = city.world_to_grid(mouseX, mouseY);

    city.set_square(grid_coord[0], grid_coord[1], drawing_mode);
}