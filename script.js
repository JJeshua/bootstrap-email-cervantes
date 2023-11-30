let darkModeToggled = false;
const darkModeTogglerIconPath = 'assets/icons/dark-mode-toggler.svg';
const lightModeTogglerIconPath = 'assets/icons/light-mode-toggler.svg';

const switchTheme = () => {
  const newTheme = darkModeToggled ? 'light' : 'dark';
  toggleButton.src = darkModeToggled
    ? darkModeTogglerIconPath
    : lightModeTogglerIconPath;
  darkModeToggled = !darkModeToggled;
  document.documentElement.setAttribute('data-theme', newTheme);
};

const toggleButton = document.getElementById('dark-mode-toggler-button');
toggleButton.addEventListener('click', switchTheme);

// sets initial state of data-theme
switchTheme();
