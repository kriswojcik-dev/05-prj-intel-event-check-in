const checkInForm = document.querySelector("#checkInForm");

function handleCheckIn(event) {
  event.preventDefault();

  const attendeeName = document.querySelector("#attendeeName").value;
  const team = document.querySelector("#teamSelect").value;

  console.log(`${attendeeName} checked in with Team ${team}.`);
}

checkInForm.addEventListener("submit", handleCheckIn);
