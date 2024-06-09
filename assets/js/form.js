const formButton = document.getElementById("form-submit-button");
const userName = document.getElementById("UserName");
const title = document.getElementById("Title");
const content = document.getElementById("Content");
const error = document.getElementById("errorMessage");
const blogForm = document.getElementById("blog-info-form");

formButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission until validation is done

    // Clear previous error message
    error.textContent = '';

    // Validate Username
    if (userName.value.trim() === '') {
        error.textContent = "The Username cannot be blank! Please enter a user name.";
    }
    // Validate Title
    else if (title.value.trim() === '') {
        error.textContent = "The Title cannot be blank! Please enter a Blog Title.";
    }
    // Validate Content
    else {
        const wordCount = content.value.trim().split(/\s+/).length; // Split content by whitespace and count words
        if (wordCount < 10) {
            error.textContent = "The Content must be at least 10 words long! Please enter a longer content description for the blog.";
        } else {
            // Create blogData object inside the event listener after validation
            const blogData = {
                userName: userName.value.trim(),
                title: title.value.trim(),
                content: content.value.trim(),
            };
            localStorage.setItem('BlogInfo', JSON.stringify(blogData));
            console.log(JSON.parse(localStorage.getItem('BlogInfo')));
            blogForm.setAttribute('action', './blog.html');
            blogForm.submit(); 
        }
    }
});
