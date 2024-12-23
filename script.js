let dailyGoal = 0;
let totalIntake = 0;

const goalForm = document.getElementById("goalForm");
const intakeForm = document.getElementById("intakeForm");
const progressSection = document.getElementById("progressSection");
const goalDisplay = document.getElementById("goalDisplay");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

goalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  dailyGoal = parseFloat(document.getElementById("goal").value) * 1000; 
  if (dailyGoal > 0) {
    goalDisplay.textContent = `Daily Goal: ${dailyGoal} ml`;
    progressSection.style.display = "block";
    progressBar.max = dailyGoal;
    updateProgress();
  }
});

intakeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const intake = parseFloat(document.getElementById("intake").value);
  if (intake > 0) {
    totalIntake += intake;
    updateProgress();
  }
});

function updateProgress() {
  progressBar.value = totalIntake;
  progressText.textContent = `You have consumed ${totalIntake} ml of ${dailyGoal} ml.`;
  if (totalIntake >= dailyGoal) {
    alert("Congratulations! You've met your daily water intake goal!");
  }
}
