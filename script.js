// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation and internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Project item click handlers
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const projectTitle = this.querySelector('h3').textContent;
            
            console.log('Project clicked:', projectTitle);
            
            // Navigate to individual project page
            // You can customize this based on your project page structure
            // window.location.href = `projects/project-${projectId}.html`;
            
            // Or open in new tab
            // window.open(`projects/project-${projectId}.html`, '_blank');
            
            // For now, we'll show a placeholder alert
            showProjectModal(projectTitle);
        });

        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });

    // Featured project click handler
    document.querySelector('.project-featured').addEventListener('click', function() {
        const projectTitle = this.querySelector('h3').textContent;
        console.log('Featured project clicked:', projectTitle);
        showProjectModal(projectTitle);
    });

    // Contact CTA click handler
    document.querySelector('.contact-cta-card').addEventListener('click', function() {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Add staggered animation on page load
    function animateCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Run animation after a short delay
    setTimeout(animateCards, 200);

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe all cards for scroll animations
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Dynamic grid layout adjustment
    function adjustGridLayout() {
        const container = document.querySelector('.grid-container');
        const cards = document.querySelectorAll('.card');
        
        // Add responsive classes based on viewport
        if (window.innerWidth < 768) {
            container.classList.add('mobile-grid');
        } else {
            container.classList.remove('mobile-grid');
        }
    }

    // Run on load and resize
    adjustGridLayout();
    window.addEventListener('resize', adjustGridLayout);

    // Project modal placeholder function
    function showProjectModal(projectTitle) {
        // This is a placeholder - replace with your preferred modal/navigation method
        alert(`Opening case study for: ${projectTitle}\n\nThis would typically navigate to a dedicated project page or open a modal with project details.`);
        
        // Example of what you might do instead:
        // openProjectModal(projectTitle);
        // or
        // navigateToProject(projectTitle);
    }

    // Optional: Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Ensure focus is visible on interactive elements
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });

    // Optional: Add parallax effect to hero card
    function addParallaxEffect() {
        const heroCard = document.querySelector('.hero-card');
        const decorativeElement = document.querySelector('.decorative-element');
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (decorativeElement) {
                decorativeElement.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Enable parallax on desktop only
    if (window.innerWidth > 768) {
        addParallaxEffect();
    }

    // Log successful initialization
    console.log('Portfolio initialized successfully');
});
