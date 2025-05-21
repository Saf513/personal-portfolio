// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation de la sidebar
gsap.from('.sidebar', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

// Animation du titre principal et de la description
gsap.from('.article-title', {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: 'power3.out'
});

// Animation des services
gsap.from('.service-item', {
  scrollTrigger: {
    trigger: '.service',
    start: 'top center',
    toggleActions: 'play none none reverse'
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out'
});

// Animation de la timeline
gsap.from('.timeline-item', {
  scrollTrigger: {
    trigger: '.timeline',
    start: 'top center',
    toggleActions: 'play none none reverse'
  },
  x: -50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
  ease: 'power3.out'
});

// Animation des compétences
gsap.from('.skills-item', {
  scrollTrigger: {
    trigger: '.skills-list',
    start: 'top center',
    toggleActions: 'play none none reverse'
  },
  width: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: 'power3.out'
});

// Animation des projets
gsap.from('.project-item', {
  scrollTrigger: {
    trigger: '.project-list',
    start: 'top center',
    toggleActions: 'play none none reverse'
  },
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out'
});

// Animation des articles de blog
gsap.from('.blog-post-item', {
  scrollTrigger: {
    trigger: '.blog-posts-list',
    start: 'top center',
    toggleActions: 'play none none reverse'
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out'
});

// Animation du formulaire de contact
gsap.from('.contact-form', {
  scrollTrigger: {
    trigger: '.contact-form',
    start: 'top center',
    toggleActions: 'play none none reverse'
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

// Animation de la navbar
gsap.from('.navbar-item', {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: 'power3.out'
});

// Animation du bouton de thème
gsap.to('.theme-btn', {
  rotation: 360,
  duration: 1,
  ease: 'power3.out'
});

// Animation des témoignages
gsap.from('.testimonials-item', {
  scrollTrigger: {
    trigger: '.testimonials-list',
    start: 'top center',
    toggleActions: 'play none none reverse'
  },
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out'
});

// Animation pour le changement de thème
function animateThemeChange() {
  gsap.to('body', {
    backgroundColor: 'var(--bg-color)',
    color: 'var(--primary-color)',
    duration: 0.5,
    ease: 'power2.inOut'
  });

  gsap.to('.content-card, .sidebar, .service-item, .blog-post-item', {
    backgroundColor: 'var(--card-bg)',
    duration: 0.5,
    ease: 'power2.inOut'
  });
}

// Écouteur d'événement pour le changement de thème
document.getElementById('theme-btn').addEventListener('click', animateThemeChange); 