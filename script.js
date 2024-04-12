function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// JavaScript
function editAbout() {
    var aboutText = document.getElementById('aboutText');
    var newText = prompt('Enter new text:');
    if (newText !== null) { // Check if user cancels prompt
        aboutText.textContent = newText;
    }
}

function editExperience() {
    var experienceText = document.getElementById('experienceText');
    var newText = prompt('Enter new text:');
    if (newText !== null) { // Check if user cancels prompt
        experienceText.textContent = newText;
    }
}
function toggleEdit() {
  var sections = document.querySelectorAll('section');
  var editButton = document.getElementById('editButton');
  var saveButton = document.getElementById('saveButton');

  if (editButton.style.display !== 'none') {
      sections.forEach(function (section) {
          section.setAttribute('contenteditable', 'true');
      });
      editButton.style.display = 'none';
      saveButton.style.display = 'inline-block';
  } else {
      sections.forEach(function (section) {
          section.setAttribute('contenteditable', 'false');
      });
      editButton.style.display = 'inline-block';
      saveButton.style.display = 'none';
  }
}
function goToEditPage() {
  window.location.href = "./edit.html";
}
function openEditPage() {
  // Open the edit page in a new window with specified dimensions
  window.open('./edit.html', '_blank', 'width=600,height=400');
}