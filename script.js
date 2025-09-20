function calculateAge() {
  let dob = document.getElementById("dob").value;
  if (!dob) {
    document.getElementById("result").innerHTML = "⚠️ Please select your date of birth.";
    return;
  }

  let dobDate = new Date(dob);
  let today = new Date();

  let years = today.getFullYear() - dobDate.getFullYear();
  let months = today.getMonth() - dobDate.getMonth();
  let days = today.getDate() - dobDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerHTML =
    `🎉 You are <b>${years}</b> years, <b>${months}</b> months, and <b>${days}</b> days old.`;
}
