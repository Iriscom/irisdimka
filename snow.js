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

const mechanicTexts = document.querySelectorAll('.mechanic-text');
mechanicTexts.forEach(text => {
  text.addEventListener('mousemove', (e) => {
    const rect = text.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Clamp coordinates to stay within the element bounds
    const clampedX = Math.max(25, Math.min(rect.width - 25, x));
    const clampedY = Math.max(25, Math.min(rect.height - 25, y));
    text.style.setProperty('--flashlight-x', `${clampedX}px`);
    text.style.setProperty('--flashlight-y', `${clampedY}px`);
  });
});