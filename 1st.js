const song = document.getElementById("song");
const start = document.getElementById("start");
const proposal = document.getElementById("proposal");

start.addEventListener("click", () => {
  start.style.display = "none";
  proposal.classList.remove("hidden");

  song.play().catch(() => {
    alert("Tap again to play music 💙");
  });
});

function sayYes() {
  document.getElementById("response").innerText =
    "You just made me the happiest person 💙🥹";
}

function sayNo() {
  document.getElementById("response").innerText =
    "Okay… but my feelings stay the same 💙";
}