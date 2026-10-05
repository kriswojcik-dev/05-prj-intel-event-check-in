const checkInForm = document.querySelector("#checkInForm");
const attendeeCountElement = document.querySelector("#attendeeCount");
const progressBar = document.querySelector("#progressBar");
const greeting = document.querySelector("#greeting");
const teamSelect = document.querySelector("#teamSelect");
const maxGoal = 50;
let attendeeCount = 0;

function handleCheckIn(event) {
  event.preventDefault();

  const attendeeName = document.querySelector("#attendeeName").value;
  const selectedTeam = teamSelect.options[teamSelect.selectedIndex].text;
  attendeeCount = attendeeCount + 1;
  attendeeCountElement.textContent = attendeeCount;

  const progressPercentage = (attendeeCount / maxGoal) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  greeting.textContent = `Welcome, ${attendeeName}! You are checked in with ${selectedTeam}.`;

  console.log(`${attendeeName} checked in with ${selectedTeam}.`);
}

checkInForm.addEventListener("submit", handleCheckIn);
