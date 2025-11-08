onload = () =>{
    document.body.classList.remove("container");
};
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  // 🎯 define "no heart zone" around the flowers (center)
  const centerX = screenW / 2;
  const centerY = screenH / 2;
  const safeZoneW = 400; // width of the area to avoid
  const safeZoneH = 300; // height of the area to avoid

  let x, y;

  // keep generating random positions until we're outside the safe zone
  do {
    x = Math.random() * screenW;
    y = Math.random() * screenH;
  } while (
    x > centerX - safeZoneW / 2 &&
    x < centerX + safeZoneW / 2 &&
    y > centerY - safeZoneH / 2 &&
    y < centerY + safeZoneH / 2
  );

  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  // color variation
  const hue = 340 + Math.random() * 20;
  heart.style.backgroundColor = `hsl(${hue}, 80%, 60%)`;
  heart.style.boxShadow = `0 0 10px hsl(${hue}, 80%, 60%)`;

  // size variation
  const scale = 0.8 + Math.random() * 1.4;
  heart.style.transform = `rotate(45deg) scale(${scale})`;

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

// generate hearts less frequently so it stays elegant
setInterval(createHeart, 350);
