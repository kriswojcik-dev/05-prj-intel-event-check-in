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
  const selectedTeam = teamSelect.value;
  const selectedTeamName = teamSelect.options[teamSelect.selectedIndex].text;
  const teamCountElement = document.querySelector(`#${selectedTeam}Count`);
  const teamCount = Number(teamCountElement.textContent);
  teamCountElement.textContent = teamCount + 1;
  attendeeCount = attendeeCount + 1;
  attendeeCountElement.textContent = attendeeCount;

  const progressPercentage = (attendeeCount / maxGoal) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  greeting.textContent = `Welcome, ${attendeeName}! You are checked in with ${selectedTeamName}.`;

  console.log(`${attendeeName} checked in with ${selectedTeamName}.`);
  checkInForm.reset();
}

checkInForm.addEventListener("submit", handleCheckIn);
