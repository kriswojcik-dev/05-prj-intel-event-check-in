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
