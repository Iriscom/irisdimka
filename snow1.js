const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 1 + 0.5
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fff";
  snowflakes.forEach(flake => {
    ctx.fillRect(flake.x, flake.y, flake.size, flake.size);
    flake.y += flake.speed;
    if (flake.y > height) {
      flake.y = -flake.size;
      flake.x = Math.random() * width;
    }
  });
}

function loop() {
  drawSnowflakes();
  requestAnimationFrame(loop);
}

createSnowflakes();
loop();