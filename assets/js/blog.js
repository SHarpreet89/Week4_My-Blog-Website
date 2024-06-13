const blogsContainer = document.getElementById('blogPosts-Container');

function createBlogPost (post) {
    const blogPost = document.createElement('div');
    blogPost.setAttribute('id', 'blog-post-card');

    const title = document.createElement('h1');
    title.textContent = post.title;

    const content = document.createElement('p');
    content.textContent = post.content;

    const userName = document.createElement('h3');
    userName.textContent = post.userName;

    blogPost.appendChild(title);
    blogPost.appendChild(content);
    blogPost.appendChild(userName);

    return blogPost;
}

document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
});

function loadPosts() {
const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
console.log("Open the arrow below to see the array of blog posts");
console.log(blogPosts);

if (blogPosts) {
    blogsContainer.innerHTML = '';
    blogPosts.reverse().forEach(post => {
        const blogPost = createBlogPost(post);
        blogsContainer.appendChild(blogPost);
    });
}else { console.log('No blog posts found'); }
}