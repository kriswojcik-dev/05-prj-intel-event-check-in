const checkInForm = document.querySelector("#checkInForm");
const attendeeCountElement = document.querySelector("#attendeeCount");
const progressBar = document.querySelector("#progressBar");
const greeting = document.querySelector("#greeting");
const teamSelect = document.querySelector("#teamSelect");
const waterCountElement = document.querySelector("#waterCount");
const zeroCountElement = document.querySelector("#zeroCount");
const powerCountElement = document.querySelector("#powerCount");
const maxGoal = 50;
const savedAttendeeCount = localStorage.getItem("attendeeCount");
const savedWaterCount = localStorage.getItem("waterCount");
const savedZeroCount = localStorage.getItem("zeroCount");
const savedPowerCount = localStorage.getItem("powerCount");
let attendeeCount = savedAttendeeCount ? Number(savedAttendeeCount) : 0;
const waterCount = savedWaterCount ? Number(savedWaterCount) : 0;
const zeroCount = savedZeroCount ? Number(savedZeroCount) : 0;
const powerCount = savedPowerCount ? Number(savedPowerCount) : 0;

attendeeCountElement.textContent = attendeeCount;
waterCountElement.textContent = waterCount;
zeroCountElement.textContent = zeroCount;
powerCountElement.textContent = powerCount;
const initialProgressPercentage = (attendeeCount / maxGoal) * 100;
progressBar.style.width = `${initialProgressPercentage}%`;

function handleCheckIn(event) {
  event.preventDefault();

  const attendeeName = document.querySelector("#attendeeName").value;
  const selectedTeam = teamSelect.value;
  const selectedTeamName = teamSelect.options[teamSelect.selectedIndex].text;
  const teamCountElement = document.querySelector(`#${selectedTeam}Count`);
  const teamCount = Number(teamCountElement.textContent);
  const updatedTeamCount = teamCount + 1;
  teamCountElement.textContent = updatedTeamCount;
  localStorage.setItem(`${selectedTeam}Count`, updatedTeamCount);
  attendeeCount = attendeeCount + 1;
  attendeeCountElement.textContent = attendeeCount;
  localStorage.setItem("attendeeCount", attendeeCount);

  const progressPercentage = (attendeeCount / maxGoal) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  greeting.textContent = `Welcome, ${attendeeName}! You are checked in with ${selectedTeamName}.`;

  if (attendeeCount === maxGoal) {
    const waterCount = Number(
      document.querySelector("#waterCount").textContent,
    );
    const zeroCount = Number(document.querySelector("#zeroCount").textContent);
    const powerCount = Number(
      document.querySelector("#powerCount").textContent,
    );
    let winningTeamName = "Team Water Wise";
    let winningTeamCount = waterCount;

    if (zeroCount > winningTeamCount) {
      winningTeamName = "Team Net Zero";
      winningTeamCount = zeroCount;
    }

    if (powerCount > winningTeamCount) {
      winningTeamName = "Team Renewables";
    }

    greeting.textContent = `Congratulations! Goal reached. ${winningTeamName} is the winning team!`;
  }

  console.log(`${attendeeName} checked in with ${selectedTeamName}.`);
  checkInForm.reset();
}

checkInForm.addEventListener("submit", handleCheckIn);
