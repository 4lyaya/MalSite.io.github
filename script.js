// Initialize AOS (Animate On Scroll)
AOS.init();

// Highlight the active menu item based on the current URL
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.navbar-nav .nav-link');

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.parentElement.classList.add('active');
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const countUp = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 200; // Adjust the speed of the counter
        let count = 0;

        const updateCount = () => {
            if (count < target) {
                count = Math.ceil(count + increment);
                counter.innerText = count;
                requestAnimationFrame(updateCount); // Use requestAnimationFrame for smoother animations
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Load More Testimonials
document.getElementById('loadMoreBtn').addEventListener('click', () => {
    const testimonialGrid = document.getElementById('testimonialGrid');
    const newTestimonials = [
        {
            name: "Alice Brown",
            position: "Project Manager, Global Corp",
            testimonial: "The collaboration with [Your Name] was seamless. They understood our needs perfectly and delivered outstanding results.",
            image: "https://via.placeholder.com/50"
        },
        {
            name: "David Wilson",
            position: "Founder, StartUp Inc.",
            testimonial: "I was impressed by the level of professionalism and creativity. [Your Name] is a true partner in success.",
            image: "https://via.placeholder.com/50"
        }
    ];

    newTestimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>"${testimonial.testimonial}"</p>
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="rounded-circle">
                    <div>
                        <h5>${testimonial.name}</h5>
                        <p class="text-muted">${testimonial.position}</p>
                    </div>
                </div>
            </div>
        `;
        testimonialGrid.appendChild(card);
    });
});

// Initialize Counter Animation On Scroll
const statsSection = document.querySelector('.row.text-center.mb-5');
const onScrollCountUp = () => {
    const statsSectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (statsSectionPosition < screenPosition) {
        countUp();
        window.removeEventListener('scroll', onScrollCountUp); // Remove event listener after counting
    }
};
window.addEventListener('scroll', onScrollCountUp);

// Portfolio Filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.portfolio-filters .btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Remove active class from all buttons and add to the clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter portfolio items based on the selected filter
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.querySelector('.badge').classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// FAQ Search Functionality
document.getElementById('faqSearch').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchText)) {
            item.style.display = 'block';
            // Highlight matching text
            if (searchText.length > 0) {
                const regex = new RegExp(searchText, 'gi');
                item.innerHTML = item.textContent.replace(regex, match => `<span class="highlight">${match}</span>`);
            }
        } else {
            item.style.display = 'none';
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir jika diperlukan

    // Tampilkan alert
    const alert = document.getElementById('alert');
    alert.classList.add('show');

    // Sembunyikan alert setelah 3 detik
    setTimeout(() => {
        alert.classList.remove('show');
    }, 3000);

    // Di sini Anda bisa menambahkan logika pengiriman formulir (misalnya, AJAX)
});