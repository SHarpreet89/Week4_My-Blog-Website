const formButton = document.getElementById("form-submit-button");
const userName = document.getElementById("UserName");
const title = document.getElementById("Title");
const content = document.getElementById("Content");
const error = document.getElementById("errorMessage");
const blogForm = document.getElementById("blog-info-form");

formButton.addEventListener('click', function(event) {
    console.log("Button clicked"); // Debug log
    event.preventDefault(); // Prevent form submission until validation is done

    // Clear previous error message
    error.textContent = '';

    // Validate Username
    if (userName.value.trim() === '') {
        error.textContent = "The Username cannot be blank! Please enter a user name.";
        error.removeAttribute('class', '.display-none');
        error.setAttribute('class', '.display-block');
    }
    // Validate Title
    else if (title.value.trim() === '') {
        error.textContent = "The Title cannot be blank! Please enter a Blog Title.";
        error.removeAttribute('class', '.display-none');
        error.setAttribute('class', '.display-block');
    }
    // Validate Content
    else {
        const wordCount = content.value.trim().split(/\s+/).length; // Split content by whitespace and count words
        if (wordCount < 5) {
            error.textContent = "The Content must be at least 5 words long! Please enter a longer content description for the blog.";
            error.removeAttribute('class', '.display-none');
            error.setAttribute('class', '.display-block');
        } else {
            // Create blogData object inside the event listener after validation
            const blogEntry = {
                userName: userName.value.trim(),
                title: title.value.trim(),
                content: content.value.trim(),
            };

            let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
                if (!Array.isArray(posts)) {
                    posts = []; // Ensure posts is an array
                }
            posts.push(blogEntry);
            localStorage.setItem('blogPosts', JSON.stringify(posts));
            console.log(JSON.parse(localStorage.getItem('blogPosts')));
            blogForm.setAttribute('action', './blog.html');
            blogForm.submit(); 
        }
    }
});