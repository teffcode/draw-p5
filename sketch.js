var teapot;

function preload() {
  teapot = loadModel('./assets/tree.png');
}

function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // model(teapot);
}