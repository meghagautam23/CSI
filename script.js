// Ensure DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');

  // Move the custom cursor with mouse
  document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  });

  // Click effect
  document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
  });
  document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
  });

  // ====== HOVER LOGIC FOR BUTTONS, NAV LINKS, FEATURE CARDS, ETC. ======
  const hoverElements = document.querySelectorAll(
    '.cta-button, .demo-button, .nav-links a, .feature-card, .nav-btn, .social-btn'
  );
  hoverElements.forEach((elem) => {
    elem.addEventListener('mouseenter', () => {
      cursor.classList.add('hover-button');
    });
    elem.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover-button');
    });
  });

  // ====== Smooth Scrolling for Navbar Links ======
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Smooth scroll to a specific section (for CTA buttons, etc.)
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Open the Demo Popup
function openDemo() {
  document.getElementById('demoPopup').style.display = 'block';
}

// Close the Demo Popup
function closeDemo() {
  document.getElementById('demoPopup').style.display = 'none';
  document.getElementById('userTask').value = '';
  document.getElementById('demoResult').textContent = '';
}

// Simulate AI-driven automation
function simulateAutomation() {
  const task = document.getElementById('userTask').value.trim();
  const resultElement = document.getElementById('demoResult');

  if (!task) {
    resultElement.textContent = 'Please enter a task to automate.';
    return;
  }
  resultElement.textContent = 'Analyzing...';
  setTimeout(() => {
    resultElement.textContent = `NovaFlow has automated the task: "${task}" successfully!`;
  }, 1500);
}
