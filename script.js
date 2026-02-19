// Game Data
const games = [
    {
        title: "NEON WARS",
        description: "Immerse yourself in a cyberpunk future where corporations rule and chaos reigns. NEON WARS delivers high-octane action gameplay with stunning neon-lit environments and a gripping story of rebellion.",
        platforms: "PC, PlayStation 5, Xbox Series X|S",
        release: "Q3 2026",
        genre: "Cyberpunk Action"
    },
    {
        title: "SHADOW PROTOCOL",
        description: "Master the art of espionage in this stealth-driven thriller. Infiltrate enemy bases, complete covert missions, and uncover a conspiracy that threatens world peace. Stealth has never been more thrilling.",
        platforms: "PC, PlayStation 4, Xbox One",
        release: "Available Now",
        genre: "Stealth Thriller"
    },
    {
        title: "CRIMSON CITY",
        description: "Rise from the streets to rule the underworld in this sprawling open-world crime saga. Build your empire, recruit loyal allies, and engage in epic turf wars across a massive living city.",
        platforms: "Multi-Platform",
        release: "Available Now",
        genre: "Open-World Crime"
    },
    {
        title: "ECHO NEXUS",
        description: "Enter a sci-fi universe where thousands of players compete in intense multiplayer battles. Build teams, customize your abilities, and dominate the leaderboards in the most immersive multiplayer experience.",
        platforms: "Cross-Platform",
        release: "Beta Now - Full Launch Q2 2026",
        genre: "Sci-Fi Multiplayer"
    }
];

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            updateActiveNav();
        }
    });
});

// Update Active Navigation
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

updateActiveNav();

// Modal Functions
function openModal(index) {
    const modal = document.getElementById('gameModal');
    const game = games[index];
    
    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalDescription').textContent = game.description;
    document.getElementById('modalPlatforms').textContent = game.platforms;
    document.getElementById('modalRelease').textContent = game.release;
    document.getElementById('modalGenre').textContent = game.genre;
    
    modal.style.display = 'block';
}

function closeModal(event) {
    const modal = document.getElementById('gameModal');
    if (event && event.target !== modal) {
        return;
    }
    modal.style.display = 'none';
}

// Close modal when pressing ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('gameModal');
        modal.style.display = 'none';
    }
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.game-card, .news-card, .team-member, .stat').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Form Submission
function submitForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// CTA Button Animation
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#games').scrollIntoView({ behavior: 'smooth' });
});
