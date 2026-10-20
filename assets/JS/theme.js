// theme.js - Global Dark/Light Mode Manager

(function() {
  // 1. Apply theme immediately on script load to prevent flashing
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }

  // 2. Set up event listener once the DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Update icon to match current theme state on load
    const currentTheme = document.body.getAttribute('data-theme');
    if (themeIcon) {
      themeIcon.className = currentTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    // Toggle button click handler
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const activeTheme = document.body.getAttribute('data-theme');
        let newTheme = 'light';

        if (activeTheme === 'light') {
          newTheme = 'dark';
          if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
        } else {
          if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
        }

        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });
    }
  });
})();
