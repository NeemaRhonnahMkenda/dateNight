document.addEventListener("DOMContentLoaded", () => {
  // Automatically play the music after the DOM is fully loaded
  const music = document.getElementById("background-music");
  music.play();

  const revealBtn = document.getElementById("revealBtn");
  const poems = document.querySelectorAll(".poem");

  let delay = 0;
  poems.forEach((poem, index) => {
    setTimeout(() => {
      poem.classList.add("show");
    }, delay);
    delay += 2000;
  });
});

function showQuestion() {
  document.getElementById("question").style.display = "block";
  document.getElementById("revealBtn").style.display = "none";
}

function showResponse() {
  document.getElementById("response").style.display = "block";
  document.getElementById("question").style.display = "none";
}
