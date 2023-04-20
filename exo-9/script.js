const ball = document.getElementById("ball");

ball.addEventListener("click", () => {
  ball.style.top = "-20px";
  setTimeout(() => {
    ball.style.top = "50%"; 
  }, 500); 
});

