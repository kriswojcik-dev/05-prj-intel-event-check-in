const checkInForm = document.querySelector("#checkInForm");
const attendeeCountElement = document.querySelector("#attendeeCount");
const progressBar = document.querySelector("#progressBar");
const maxGoal = 50;
let attendeeCount = 0;

function handleCheckIn(event) {
  event.preventDefault();

  const attendeeName = document.querySelector("#attendeeName").value;
  const team = document.querySelector("#teamSelect").value;
  attendeeCount = attendeeCount + 1;
  attendeeCountElement.textContent = attendeeCount;

  const progressPercentage = (attendeeCount / maxGoal) * 100;
  progressBar.style.width = `${progressPercentage}%`;

  console.log(`${attendeeName} checked in with Team ${team}.`);
}

checkInForm.addEventListener("submit", handleCheckIn);
