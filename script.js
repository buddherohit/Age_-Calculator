// This function is called when the "Calculate" button is clicked
function calculateAge() {
  // Get values from inputs and convert to integers
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1; // JS months are 0-based (0 = Jan, 11 = Dec)
  const year = parseInt(document.getElementById("year").value);
  const result = document.getElementById("result");

  // Simple validation: check if values are missing or out of range
  if (!day || !month || !year || day < 1 || day > 31 || month < 0 || month > 11 || year < 1900 || year > new Date().getFullYear()) {
    result.innerHTML = "⚠️ Please enter a valid date.";
    return;
  }

  // Create birth date and get today’s date
  const birthDate = new Date(year, month, day);
  const today = new Date();

  // Future DOB is invalid
  if (birthDate > today) {
    result.innerHTML = "⚠️ Date of Birth cannot be in the future.";
    return;
  }

  // Calculate years, months, days
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // If days are negative, borrow days from previous month
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); // last date of previous month
    days += prevMonth.getDate();
  }

  // If months are negative, borrow months from previous year
  if (months < 0) {
    years--;
    months += 12;
  }

  // Display the final result
  result.innerHTML = `🎉 You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
}
