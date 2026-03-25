/**
 * Portfolio Website - Clean & Organized Interactive Animations
 */

// Initialize all effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initDynamicBackground();
    initScrollBackground();
    initTypewriter();
    initScrollReveal();
    initNavigation();
    initSkillBars();
    initCounters();
    initMobileMenu();
    initSmoothScroll();
    initScrollProgress();
    
    // Hide loader after everything is ready
    setTimeout(() => {
        document.querySelector('.loader')?.classList.add('hidden');
    }, 2000);
});

/**
 * Dynamic Background Colors based on Section
 */
function initDynamicBackground() {
    const sections = document.querySelectorAll('section[id]');
    const colors = [
        { primary: '#667eea', secondary: '#764ba2', glow: 'rgba(102, 126, 234, 0.3)' },
        { primary: '#f093fb', secondary: '#f5576c', glow: 'rgba(240, 147, 251, 0.3)' },
        { primary: '#4facfe', secondary: '#00f2fe', glow: 'rgba(79, 172, 254, 0.3)' },
        { primary: '#a855f7', secondary: '#ec4899', glow: 'rgba(168, 85, 247, 0.3)' },
        { primary: '#22c55e', secondary: '#3b82f6', glow: 'rgba(34, 197, 94, 0.3)' },
        { primary: '#06b6d4', secondary: '#8b5cf6', glow: 'rgba(6, 182, 212, 0.3)' },
        { primary: '#10b981', secondary: '#6366f1', glow: 'rgba(16, 185, 129, 0.3)' }
    ];
    
    let currentIndex = 0;
    
    function updateColors(index) {
        const color = colors[index % colors.length];
        const root = document.documentElement;
        root.style.setProperty('--current-primary', color.primary);
        root.style.setProperty('--current-secondary', color.secondary);
        root.style.setProperty('--current-glow', color.glow);
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionIndex = Array.from(sections).indexOf(entry.target);
                if (sectionIndex !== -1 && sectionIndex !== currentIndex) {
                    currentIndex = sectionIndex;
                    updateColors(currentIndex);
                }
            }
        });
    }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });
    
    sections.forEach(section => observer.observe(section));
    updateColors(0);
}

/**
 * Scroll-based Animated Background
 */
function initScrollBackground() {
    const animatedBg = document.querySelector('.animated-bg');
    const sections = document.querySelectorAll('section[id]');
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
    let currentBgClass = '';
    
    const bgClasses = {
        'home': '',
        'skills': 'bg-skill',
        'experience': 'bg-experience',
        'projects': 'bg-projects',
        'training': 'bg-training',
        'certifications': 'bg-certifications',
        'achievements': 'bg-achievements',
        'education': 'bg-education',
        'contact': 'bg-contact'
    };
    
    function updateScrollBackground() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Determine scroll direction
        scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = scrollY;
        
        // Find current section
        let currentSection = 'home';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - windowHeight / 2;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                currentSection = section.getAttribute('id') || 'home';
            }
        });
        
        // Update background class with direction-based effect
        const newBgClass = bgClasses[currentSection] || '';
        
        if (newBgClass !== currentBgClass) {
            // Remove old class with fade
            if (currentBgClass) {
                animatedBg.classList.remove(currentBgClass);
            }
            
            // Add new class with animation
            if (newBgClass) {
                animatedBg.classList.add(newBgClass);
            }
            
            // Add transition effect based on scroll direction
            animatedBg.style.transition = scrollDirection === 'down' 
                ? 'background 0.8s ease-in-out' 
                : 'background 0.8s ease-out';
            
            currentBgClass = newBgClass;
        }
        
        // Add dynamic movement effect based on scroll
        const scrollProgress = scrollY / (documentHeight - windowHeight);
        const translateY = scrollProgress * 100;
        animatedBg.style.transform = `translateY(${translateY * 0.3}px)`;
    }
    
    window.addEventListener('scroll', () => requestAnimationFrame(updateScrollBackground));
    updateScrollBackground();
}

/**
 * Typewriter Effect
 */
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    // The name is already displayed in HTML, just add color animation
    setTimeout(() => {
        typewriterElement.classList.add('color-changing');
    }, 500);
}

/**
 * Scroll Reveal Animations
 */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('active'), index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    reveals.forEach(reveal => observer.observe(reveal));
}

/**
 * Navigation Active State
 */
function initNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    function updateActiveNav() {
        const scrollY = window.scrollY;
        
        // Navbar background on scroll
        navbar.classList.toggle('scrolled', scrollY > 100);
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
                });
            }
        });
    }
    
    window.addEventListener('scroll', () => requestAnimationFrame(updateActiveNav));
    updateActiveNav();
}

/**
 * Animated Skill Progress Bars
 */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.dataset.progress;
                const card = entry.target.closest('.skill-card');
                const cardIndex = Array.from(document.querySelectorAll('.skill-card')).indexOf(card);
                
                setTimeout(() => {
                    entry.target.style.width = `${progress}%`;
                    const percentageElement = entry.target.querySelector('.skill-percentage');
                    if (percentageElement) {
                        animateCounter(percentageElement, 0, parseInt(progress), 1500);
                    }
                }, cardIndex * 150);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

/**
 * Animated Counters
 */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target, 0, parseInt(entry.target.dataset.target), 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

/**
 * Counter Animation Helper
 */
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(2, -10 * progress);
        element.textContent = Math.floor(easeOut * (end - start) + start);
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = end;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!navToggle || !navLinks) return;
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Smooth Scroll for Navigation Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll Progress Indicator
 */
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--current-primary), var(--current-secondary));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
}
