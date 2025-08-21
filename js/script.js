// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Handle navigation clicks
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                fadeInSection(targetElement);
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effect to contact links
    const contactLinks = document.querySelectorAll('.contact-item a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Typing effect for profile title
    const profileTitle = document.querySelector('.profile-title');
    if (profileTitle) {
        const originalText = profileTitle.textContent;
        profileTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                profileTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Fade-in animation for content sections
    function fadeInSection(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Apply fade-in to the initially active section
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) {
        fadeInSection(activeSection);
    }
    
    // Mobile menu functionality
    function initMobileMenu() {
        if (window.innerWidth <= 768) {
            const sidebar = document.querySelector('.sidebar');
            
            // Add mobile toggle button if it doesn't exist
            if (!document.querySelector('.mobile-toggle')) {
                const toggleBtn = document.createElement('button');
                toggleBtn.className = 'mobile-toggle';
                toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.appendChild(toggleBtn);
                
                toggleBtn.addEventListener('click', () => {
                    sidebar.classList.toggle('mobile-open');
                });
                
                // Close sidebar when clicking outside
                document.addEventListener('click', (e) => {
                    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                        sidebar.classList.remove('mobile-open');
                    }
                });
            }
        } else {
            // Remove mobile toggle on larger screens
            const toggleBtn = document.querySelector('.mobile-toggle');
            if (toggleBtn) {
                toggleBtn.remove();
            }
            
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.remove('mobile-open');
            }
        }
    }
    
    // Initialize mobile menu
    initMobileMenu();
    window.addEventListener('resize', initMobileMenu);
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('Portfolio website loaded successfully!');
});

