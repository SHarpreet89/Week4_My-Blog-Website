const toggleButton = document.getElementById("viewmode-button");
const buttonImage = document.getElementById("theme-button-image");
const blogBackgroundImage = document.getElementById("blog-background-image");

toggleButton.addEventListener('click', function() {
    console.log("Button clicked");

    const themeState = buttonImage.getAttribute('data-themeState');

    if (themeState === 'Light') {
        // Switch to dark mode
        buttonImage.setAttribute('src', buttonImage.getAttribute('data-darkMode'));
        buttonImage.setAttribute('data-themeState', 'Dark'); // Update the theme state
        document.querySelector('body').setAttribute('class', 'dark-theme')
        blogBackgroundImage.setAttribute('src', './assets/images/Blogspot-background-img-dark.png');
    } else {
        // Switch to light mode
        buttonImage.setAttribute('src', buttonImage.getAttribute('data-lightMode'));
        buttonImage.setAttribute('data-themeState', 'Light'); // Update the theme state
        document.querySelector('body').setAttribute('class', 'light-theme')
        blogBackgroundImage.setAttribute('src', './assets/images/Blogspot-background-img-light.png');
    }
});
