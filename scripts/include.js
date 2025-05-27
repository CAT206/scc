// Function to include HTML components
function includeHTML() {
    const includes = document.getElementsByTagName('include');
    
    [].forEach.call(includes, function(include) {
      const filePath = include.getAttribute('src');
      if (filePath) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              include.insertAdjacentHTML('afterend', this.responseText);
              include.remove();
              
              // Reinitialize any scripts that might be in the included content
              if (filePath.includes('navbar.html')) {
                initNavbar();
              }
            } else if (this.status == 404) {
              include.insertAdjacentHTML('afterend', '<p>Component not found.</p>');
              include.remove();
            }
          }
        };
        xhttp.open('GET', filePath, true);
        xhttp.send();
      }
    });
  }
  
  // Initialize navbar functionality
  function initNavbar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
      
      // Close menu when a link is clicked
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
          navLinks.classList.remove('active');
        });
      });
    }
  }
  
  // Run when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    includeHTML();
  });