
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


let count = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});



document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); 
  let valid = true;


  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

 
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }


  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  
  if (valid) {
    document.getElementById("formMessage").textContent = "✅ Signup successful!";
    document.getElementById("formMessage").style.color = "green";
  } else {
    document.getElementById("formMessage").textContent = "❌ Please fix the errors above.";
    document.getElementById("formMessage").style.color = "red";
  }
});

