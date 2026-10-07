const timerElement = document.getElementById("timer");
let seconds = 14 * 60 + 59;

function updateTimer() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  timerElement.textContent =
    `До окончания: ${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

  if (seconds > 0) {
    seconds--;
  }
}

updateTimer();
setInterval(updateTimer, 1000);

const form = document.getElementById("promoForm");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // В учебной версии данные никуда не отправляются.
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", function() {
  modal.classList.add("hidden");
});

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
