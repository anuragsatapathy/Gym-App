function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const result = document.getElementById("bmi-result");

  if (!weight || !height || weight <= 0 || height <= 0) {
    result.textContent = "Please enter valid weight and height!";
    result.style.color = "#ff6600";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  result.textContent = `Your BMI is ${bmi} (${category})`;
  result.style.color = "#00ff90";
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-msg");

  if (!name || !email || !message) {
    msg.textContent = "Please fill all fields!";
    msg.style.color = "#ff6600";
    return;
  }

  msg.textContent = "Message sent successfully! We’ll get back soon.";
  msg.style.color = "#00ff90";
  document.getElementById("contactForm").reset();
});



