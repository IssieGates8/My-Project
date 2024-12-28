// JavaScript source code
document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('visible');
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const filterProjects = (category) => {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.style.display = (category === 'all' || project.classList.contains(category)) ? 'block' : 'none';
        });
    };

    const openLightbox = (imageSrc) => {
        const lightbox = document.getElementById('lightbox');
        const img = document.createElement('img');
        img.src = imageSrc;
        lightbox.innerHTML = '';
        lightbox.appendChild(img);
        lightbox.style.display = 'block';
    };

    const validateForm = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return false;
        }
        return true;
    };

    // Example of how to use the functions
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
    document.querySelector('#filter-button').addEventListener('click', () => filterProjects('category-name'));
    document.querySelector('#lightbox-button').addEventListener('click', () => openLightbox('image-src'));
    document.querySelector('#contact-form').addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
        }
    });
});



