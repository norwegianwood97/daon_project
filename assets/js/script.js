document.addEventListener('DOMContentLoaded', function () {
  const navbarPlaceholder = document.getElementById('navbar-placeholder');

  fetch('/src/components/navbar.html')
    .then((response) => response.text())
    .then((data) => {
      navbarPlaceholder.innerHTML = data;
    })
    .catch((error) => console.error('Error loading navbar:', error));
});
