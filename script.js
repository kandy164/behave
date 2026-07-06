// Handle Yes button click
document.getElementById("yesBtn").addEventListener("click", () => {
  alert("Kandy Jr says I love you too 💖 Let's go on a date!");
});

// Handle No button hover/tap (make it run away)
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton); // mobile tap support

function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
