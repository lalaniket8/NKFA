// Nandini Kumar Portfolio Website JS
// Vanilla JS only, for editorial, minimal, luxury site

// ========== NAVBAR ========== //
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');

// Sticky navbar background
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger menu
navToggle.addEventListener('click', () => {
  const expanded = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', expanded);
});

// Close menu on link click (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    }
  });
});

// Smooth scroll and active link
function scrollToSection(e) {
  if (this.hash) {
    e.preventDefault();
    const target = document.querySelector(this.hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', this.hash);
    }
  }
}
navLinks.forEach(link => link.addEventListener('click', scrollToSection));

// Active section highlighting
const sectionIds = ['home','about','journey','services','contact'];
const sectionMap = {
  'artistiquetale': 'journey',
  'exportfair': 'journey',
  'nkfaagency': 'journey'
};
function updateActiveNav() {
  let fromTop = window.scrollY + 120;
  let current = sectionIds[0];
  for (let id of sectionIds) {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= fromTop) {
      current = id;
    }
  }
  navLinks.forEach(link => link.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
  // Highlight dropdowns
  document.querySelectorAll('.dropdown-link').forEach(link => {
    const hash = link.getAttribute('href').replace('#','');
    if (window.location.hash === '#' + hash || (sectionMap[hash] && window.location.hash.includes(hash))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('DOMContentLoaded', updateActiveNav);

// ========== HERO SLIDESHOW ========== //
const heroSlides = document.querySelectorAll('.hero-slide');
let heroIndex = 0;
function showHeroSlide(idx) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
}
function nextHeroSlide() {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  showHeroSlide(heroIndex);
}

showHeroSlide(heroIndex);
setInterval(nextHeroSlide, 5000);

// ========== GALLERY DATA ========== //
const galleries = {
  'artistiquetale': [
    'media/artistiquetale/act1.jpeg',
    'media/artistiquetale/act2.jpg',
    'media/artistiquetale/act3.jpg',
    'media/artistiquetale/act4.jpg',
    'media/artistiquetale/act5.JPG',
    'media/artistiquetale/act6.JPG',
    'media/artistiquetale/act7.JPG',
    'media/artistiquetale/act8.JPG',
    'media/artistiquetale/act9.JPG',
    'media/artistiquetale/article1.jpg',
    'media/artistiquetale/article2.jpg',
    'media/artistiquetale/article3.jpg',
    'media/artistiquetale/article4.jpg',
    'media/artistiquetale/article5.jpg'
  ],
  'exportfair': [
    'media/exportandfair/expo1.jpg',
    'media/exportandfair/expo2.jpg',
    'media/exportandfair/expo3.jpg',
    'media/exportandfair/fair.jpg',
    'media/exportandfair/office1.jpg',
    'media/exportandfair/office2.jpg',
    'media/exportandfair/office3.jpg',
    'media/exportandfair/office4.jpg',
    'media/exportandfair/office5.jpg',
    'media/exportandfair/office6.jpg'
  ],
  'nkfaagency': [
    'media/nkfaagency/1.jpg',
    'media/nkfaagency/2.JPG',
    'media/nkfaagency/3.jpg',
    'media/nkfaagency/4.png',
    'media/nkfaagency/5.png',
    'media/nkfaagency/6.jpg',
    'media/nkfaagency/7.jpg',
    'media/nkfaagency/8.jpg',
    'media/nkfaagency/9.jpg',
    'media/nkfaagency/10.jpg',
    'media/nkfaagency/11.jpg',
    'media/nkfaagency/12.jpg',
    'media/nkfaagency/13.jpg',
    'media/nkfaagency/invitation.jpg',
    'media/nkfaagency/webinar.jpg'
  ]
};

function createGallery(section, images) {
  const gallery = document.getElementById('gallery-' + section);
  images.forEach(src => {
    const item = document.createElement('div');
    item.className = 'gallery-item fade-in';
    const img = document.createElement('img');
    img.src = src;
    img.alt = section.charAt(0).toUpperCase() + section.slice(1) + ' gallery image';
    img.loading = 'lazy';
    item.appendChild(img);
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'View image in lightbox');
    item.addEventListener('click', () => openLightbox(src, img.alt));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(src, img.alt);
    });
    gallery.appendChild(item);
  });
}
Object.entries(galleries).forEach(([section, images]) => createGallery(section, images));

// ========== LIGHTBOX ========== //
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
let lightboxImages = [], lightboxIndex = 0;

function openLightbox(src, alt) {
  // Find which gallery and index
  lightboxImages = [];
  Object.values(galleries).forEach(arr => lightboxImages.push(...arr));
  lightboxIndex = lightboxImages.indexOf(src);
  showLightboxImage();
  lightbox.removeAttribute('hidden');
  lightbox.focus();
}
function showLightboxImage() {
  const src = lightboxImages[lightboxIndex];
  lightboxImg.src = src;
  lightboxImg.alt = 'Gallery image enlarged';
  lightboxCaption.textContent = '';
}
function closeLightbox() {
  lightbox.setAttribute('hidden', '');
  lightboxImg.src = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
// Keyboard navigation
window.addEventListener('keydown', e => {
  if (lightbox.hasAttribute('hidden')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    showLightboxImage();
  }
  if (e.key === 'ArrowLeft') {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    showLightboxImage();
  }
});

// ========== FADE-IN ON SCROLL ========== //
const fadeEls = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = (Math.random() * 0.3 + 0.1) + 's';
      entry.target.classList.add('animated');
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'none';
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeEls.forEach(el => fadeInObserver.observe(el));

// ========== ACCESSIBILITY ========== //
// Focus trap for lightbox
lightbox.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    e.preventDefault();
    lightboxClose.focus();
  }
});

// ========== END ========== //
