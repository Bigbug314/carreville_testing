const size = 10;

let city;


function setup() {
    createCanvas(700, 700);

    console.log(width + "   " + height);

    city = new City(width / size, height / size, size, (0, 0, 0), (255, 255, 255));

    city.set_square(7, 8, true);
}



function draw() {
    background(80);
    city.draw(0, 0);
}