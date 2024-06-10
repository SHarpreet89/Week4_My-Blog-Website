const toggleButton = document.getElementById("viewmode-button");
const buttonImage = document.getElementById("theme-button-image");
const blogBackgroundImage = document.getElementById("blog-background-image");

document.addEventListener('DOMContentLoaded', function() {
    const themeStateLocalStorage = localStorage.getItem('themeState');
    console.log('Saved theme from storage is', themeStateLocalStorage);
    if (themeStateLocalStorage) {
        applyTheme(themeStateLocalStorage);
    } else {
        localStorage.setItem('themeState', 'lightMode'); // Set default theme
    }
});

toggleButton.addEventListener('click', function() {
    console.log("Theme Button clicked");
    const themeState = buttonImage.getAttribute('data-themeState');
    const newThemeState = themeState === 'lightMode' ? 'darkMode' : 'lightMode';
    applyTheme(newThemeState);
});

function applyTheme(themeState) {
    if (themeState === 'darkMode') {
        // Switch to dark mode
        buttonImage.setAttribute('src', buttonImage.getAttribute('data-darkMode'));
        buttonImage.setAttribute('data-themeState', 'darkMode'); // Update the theme state
        document.querySelector('body').classList.add('dark-theme');
        document.querySelector('body').classList.remove('light-theme');
        blogBackgroundImage.setAttribute('src', './assets/images/Blogspot-background-img-dark.png');
        localStorage.setItem('themeState', 'darkMode'); // Update the theme state
    } else {
        // Switch to light mode
        buttonImage.setAttribute('src', buttonImage.getAttribute('data-lightMode'));
        buttonImage.setAttribute('data-themeState', 'lightMode'); // Update the theme state
        document.querySelector('body').classList.add('light-theme');
        document.querySelector('body').classList.remove('dark-theme');
        blogBackgroundImage.setAttribute('src', './assets/images/Blogspot-background-img-light.png');
        localStorage.setItem('themeState', 'lightMode'); // Update the theme state
    }
    console.log('Saved theme from button is', localStorage.getItem('themeState'));
}
