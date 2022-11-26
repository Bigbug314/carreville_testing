class City {
    constructor(width, height, size, background_color, color, outline_weight) {
        this.w = width;
        this.h = height;
        this.size = size;
        this.b_color = background_color;
        this.color = color;
        this.outline = outline_weight;

        this.reset();
    }

    reset() {
        this.grid = [];
        for (let y = 0; y < this.size; y++) {
            this.grid.push([]);
            for (let x = 0; x < this.size; x++) {
                this.grid[y].push(false);
            }
        }
    }


    draw(city_x, city_y) {
        push();
        strokeWeight(0);
        rectMode(CORNER);
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (this.grid[y][x]) {
                    fill(this.color);
                    rect(city_x + this.w * x + this.outline, city_y + this.h * y + this.outline, this.w - 2*this.outline, this.h - 2*this.outline);
                } else {
                    fill(this.b_color);
                    rect(city_x + this.w * x + this.outline, city_y + this.h * y + this.outline, this.w - 2*this.outline, this.h - 2*this.outline);
                }
            }
        }
        pop();
    }

    set_square(x, y, state) {
        this.grid[y][x] = state;
    }

    get_square(x, y) {
        return this.grid[y][x];
    }

    world_to_grid(x, y) {
        let grid_x = Math.floor(x / this.w);
        let grid_y = Math.floor(y / this.h);

        return [grid_x, grid_y];
    }

    get_area() {
        let area = 0;
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (this.grid[y][x]) {
                    area++;
                }
            }
        }

        return area;
    }

    get_perimeter() {

    }
}