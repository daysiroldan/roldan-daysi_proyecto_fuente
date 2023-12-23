

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

  // background(255);

  for (let i = 0; i < g.length; i++) {

    if (g[i].isAlive) {
      g[i].update();
      g[i].display();



    } else {
      g.splice(i, 1);

    }

  }
}




