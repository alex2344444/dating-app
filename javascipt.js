// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Modal toggling
function toggleModal(id, show) {
  const modal = document.getElementById(id);
  if (modal) {
    if (show) modal.classList.add("show");
    else modal.classList.remove("show");
  }
}

// Open buttons
document.getElementById("open-login").addEventListener("click", () => toggleModal("login-modal", true));
document.getElementById("open-signup").addEventListener("click", () => toggleModal("signup-modal", true));

// Close buttons
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    toggleModal(btn.dataset.close, false);
  });
});

// Password toggle
document.querySelectorAll(".toggle-password").forEach(icon => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling;
    const isVisible = input.type === "text";
    input.type = isVisible ? "password" : "text";
    icon.textContent = isVisible ? "👁️" : "🙈";
  });
});

// Switch between modals
document.getElementById("switch-to-signup").addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal("login-modal", false);
  toggleModal("signup-modal", true);
});

document.getElementById("switch-to-login").addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal("signup-modal", false);
  toggleModal("login-modal", true);
});

// Password match check (Sign Up)
const signupForm = document.querySelector("#signup-modal form");
signupForm.addEventListener("submit", function (e) {
  const pwd = this.querySelector('input[name="signup-password"]');
  const confirm = this.querySelector('input[name="confirm-password"]');
  if (pwd.value !== confirm.value) {
    e.preventDefault();
    alert("Passwords do not match!");
  }
});



  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faq = button.parentElement;
      const openFaq = document.querySelector('.faq.open');

      if (openFaq && openFaq !== faq) {
        openFaq.classList.remove('open');
        openFaq.querySelector('.faq-answer').style.maxHeight = null;
      }

      faq.classList.toggle('open');
      const answer = faq.querySelector('.faq-answer');
      if (faq.classList.contains('open')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

   let isSignedIn = false;

  document.getElementById("age-continue-btn").addEventListener("click", () => {
    if (!isSignedIn) {
      document.getElementById("login-modal").style.display = "flex";
    } else {
      alert("You selected an age group!");
      // You could redirect or do something else here
    }
  });

  // Optional: Close modals when X is clicked
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute("data-close");
      document.getElementById(modalId).style.display = "none";
    });
  });