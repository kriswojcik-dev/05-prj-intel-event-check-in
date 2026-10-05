const checkInForm = document.querySelector("#checkInForm");
const attendeeCountElement = document.querySelector("#attendeeCount");
let attendeeCount = 0;

function handleCheckIn(event) {
  event.preventDefault();

  const attendeeName = document.querySelector("#attendeeName").value;
  const team = document.querySelector("#teamSelect").value;
  attendeeCount = attendeeCount + 1;
  attendeeCountElement.textContent = attendeeCount;

  console.log(`${attendeeName} checked in with Team ${team}.`);
}

checkInForm.addEventListener("submit", handleCheckIn);
