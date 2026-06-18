// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter items
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });
        });
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill out all required fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message (in a real application, this would send to a server)
        alert('Thank you for reaching out! We will be in touch within 24 hours.');
        this.reset();
    });
}

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.btn-add-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.closest('.catalog-item').querySelector('h3').textContent;
        alert(`"${itemName}" has been added to your cart!`);
        // In a real application, this would add the item to an actual shopping cart
    });
});

// Mobile Menu Toggle (if you add a mobile menu)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Lazy Load Images (optional enhancement)
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[src*="placeholder"]');
    
    images.forEach(img => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(img);
    });
}

// Filter Functionality for Catalog
const sizeFilter = document.getElementById('size-filter');
const priceFilter = document.getElementById('price-filter');
const typeFilter = document.getElementById('type-filter');

if (sizeFilter || priceFilter || typeFilter) {
    function applyFilters() {
        const catalogItems = document.querySelectorAll('.catalog-item');
        
        catalogItems.forEach(item => {
            // Add filtering logic here based on selected filters
            item.style.display = 'block';
        });
    }

    if (sizeFilter) sizeFilter.addEventListener('change', applyFilters);
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    if (typeFilter) typeFilter.addEventListener('change', applyFilters);
}

// Active Navigation Link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            const currentLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });
});

console.log('LOSTSOULARTSTUDIO website script loaded successfully');