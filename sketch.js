let g = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(255, 50);
  translate(width / 2, height);
  let nG = new Gota();
  g.push(nG);

  for (let i = g.length - 1; i >= 0; i--) {
    if (g[i].isAlive) {
      g[i].update();
      g[i].display();
    } else {
      g.splice(i, 1);
    }
  }
}

class Gota {
  constructor() {
    this.pos = createVector(0, 0);
    this.vel = createVector(0, -1);
    this.vel.setMag(random(11, 10));
    this.vel.rotate(random(-20, 20));

    this.gravedad = createVector(0, 0.1);

    this.isAlive = true;
    this.maxRebotes = 4;
    this.rebotes = 0;
    // this.lifeTime = int(random(100, 200));
    this.radio = random(8, 15);
    this.reboteHeight = height * 0.9;
  }

  update() {
    this.vel.add(this.gravedad);
    this.pos.add(this.vel);

    if (this.pos.y > this.reboteHeight) {
      this.vel.y *= -0.8;
      this.pos.y = this.reboteHeight;
      this.rebotes++;

      if (this.rebotes >= this.maxRebotes) {
        this.isAlive = false;
      }
    }

    this.lifeTime -= 1;
    if (this.lifeTime <= 0) {
      this.isAlive = false;
    }
  }

  display() {
    noStroke();
    fill(0, 100, 255, 20);
    circle(this.pos.x, this.pos.y, this.radio * 1.2);
  }
}

