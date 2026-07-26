const manifestUrl = 'media-manifest.json';
const sharedNavbarUrl = 'partials/navbar.html';
const isFileProtocol = window.location.protocol === 'file:';

const fallbackNavbar = `
<nav class="nav container" aria-label="Primary navigation">
  <a class="brand" href="index.html">
    <img src="media/logo/logo_dark.jpg" alt="NKFA logo" />
  </a>
  <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <div class="nav-links">
    <a href="about.html" data-nav-item="about">About</a>
    <div class="nav-dropdown">
      <button class="nav-dropdown-toggle" type="button" aria-expanded="false">My Journey</button>
      <div class="nav-dropdown-menu">
        <a href="artistiquetale.html" data-nav-item="artistiquetale">ArtistiqueTale</a>
        <a href="nkfa.html" data-nav-item="nkfa">NKFA</a>
      </div>
    </div>
    <a href="services.html" data-nav-item="services">Services</a>
    <a href="index.html#contact" data-nav-item="contact">Contact</a>
  </div>
</nav>
`;

function getMediaKey(page) {
  const map = {
    home: 'herobanner',
    about: 'about',
    artistiquetale: 'artistiquetale',
    nkfa: 'nkfa',
  };
  return map[page] || 'about';
}

async function loadManifest() {
  if (isFileProtocol) {
    console.error('Cannot load media-manifest.json over file://. Run this site via HTTP (for example: python3 -m http.server 8080) and open http://localhost:8080/.');
    return {};
  }

  try {
    const response = await fetch(manifestUrl);
    if (!response.ok) {
      console.error(`Failed to load media manifest: ${response.status} ${response.statusText}`);
      return {};
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch media manifest.', error);
    return {};
  }
}

function createImageFigure(src, alt = 'Editorial image') {
  const figure = document.createElement('figure');
  figure.className = 'gallery-card';
  const normalizedSrc = String(src || '').replace(/^\//, '');

  const image = document.createElement('img');
  image.src = normalizedSrc;
  image.alt = alt;
  image.loading = 'lazy';
  image.addEventListener('error', () => {
    console.error(`Image failed to load: ${normalizedSrc}`);
  });

  figure.appendChild(image);
  return figure;
}

function createAudioCard(src, title = 'Client testimonial') {
  const normalizedSrc = String(src || '').replace(/^\//, '');
  const card = document.createElement('article');
  card.className = 'testimonial-audio-card';

  const heading = document.createElement('h3');
  heading.textContent = title;

  const audio = document.createElement('audio');
  audio.controls = true;
  audio.preload = 'none';
  audio.src = normalizedSrc;
  audio.addEventListener('error', () => {
    console.error(`Audio failed to load: ${normalizedSrc}`);
  });

  const fallbackText = document.createElement('p');
  fallbackText.className = 'testimonial-audio-note';
  fallbackText.innerHTML = `Unable to play this recording. <a href="${normalizedSrc}" target="_blank" rel="noopener">Open file</a>.`;

  card.appendChild(heading);
  card.appendChild(audio);
  card.appendChild(fallbackText);
  return card;
}

function setupHeroSlideshow(images) {
  const hero = document.querySelector('.hero');
  if (!hero || !Array.isArray(images) || !images.length) return;

  const existingSlideshow = document.getElementById('hero-slideshow');
  if (existingSlideshow) {
    existingSlideshow.remove();
  }

  const normalizedImages = images
    .map((src) => String(src || '').replace(/^\//, ''))
    .filter(Boolean);

  if (!normalizedImages.length) return;

  const slideshow = document.createElement('div');
  slideshow.className = 'hero-slideshow';
  slideshow.id = 'hero-slideshow';

  normalizedImages.forEach((src, index) => {
    const image = document.createElement('img');
    image.src = src;
    image.alt = 'Hero showcase image';
    image.loading = index === 0 ? 'eager' : 'lazy';
    image.classList.toggle('active', index === 0);
    image.addEventListener('error', () => {
      console.error(`Hero image failed to load: ${src}`);
    });
    slideshow.appendChild(image);
  });

  hero.prepend(slideshow);

  if (normalizedImages.length < 2) return;

  let currentIndex = 0;
  const slides = Array.from(slideshow.querySelectorAll('img'));
  window.setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }, 5000);
}

function attachGalleryScroll() {
  document.querySelectorAll('.gallery').forEach((gallery) => {
    const shell = document.createElement('div');
    shell.className = 'gallery-shell';
    shell.setAttribute('tabindex', '0');
    shell.setAttribute('role', 'region');
    shell.setAttribute('aria-label', 'Scrollable gallery');

    gallery.parentNode.insertBefore(shell, gallery);
    shell.appendChild(gallery);

    shell.addEventListener('wheel', (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        shell.scrollTop += event.deltaY;
      }
    }, { passive: false });

    shell.addEventListener('keydown', (event) => {
      const step = 220;
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        shell.scrollTop += step;
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        shell.scrollTop -= step;
      } else if (event.key === 'Home') {
        event.preventDefault();
        shell.scrollTop = 0;
      } else if (event.key === 'End') {
        event.preventDefault();
        shell.scrollTop = shell.scrollHeight;
      }
    });
  });
}

function attachLightboxListeners() {
  const lightbox = document.getElementById('lightbox');
  const image = document.getElementById('lightbox-image');

  if (!lightbox || !image) return;

  const closeButton = lightbox.querySelector('.lightbox-close');
  const prevButton = lightbox.querySelector('.lightbox-prev');
  const nextButton = lightbox.querySelector('.lightbox-next');

  let currentImages = [];
  let currentIndex = 0;

  function openLightbox(src, alt, images = [], index = 0) {
    currentImages = images;
    currentIndex = index;
    image.src = src;
    image.alt = alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showImage(direction) {
    if (!currentImages.length) return;
    currentIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
    const nextImage = currentImages[currentIndex];
    image.src = nextImage.src;
    image.alt = nextImage.alt;
  }

  document.addEventListener('click', (event) => {
    const card = event.target.closest('.gallery-card, .image-stack figure');
    if (!card) return;

    const img = card.querySelector('img');
    if (!img) return;

    const gallery = card.closest('.gallery') || card.closest('.image-stack');
    const images = Array.from(gallery?.querySelectorAll('img') || []).map((item) => ({
      src: item.src,
      alt: item.alt,
    }));

    const index = images.findIndex((item) => item.src === img.src && item.alt === img.alt);
    openLightbox(img.src, img.alt, images, index >= 0 ? index : 0);
  });

  closeButton?.addEventListener('click', closeLightbox);
  prevButton?.addEventListener('click', () => showImage(-1));
  nextButton?.addEventListener('click', () => showImage(1));
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      showImage(-1);
    } else if (event.key === 'ArrowRight') {
      showImage(1);
    }
  });
}

function syncNavigationState() {
  const page = document.body.dataset.page || 'home';
  const activeItemByPage = {
    about: 'about',
    artistiquetale: 'artistiquetale',
    nkfa: 'nkfa',
    services: 'services',
  };

  const activeItem = activeItemByPage[page];
  document.querySelectorAll('.nav-links [data-nav-item]').forEach((item) => {
    const isActive = item.dataset.navItem === activeItem;
    item.classList.toggle('active', isActive);
    if (isActive) {
      item.setAttribute('aria-current', 'page');
    } else {
      item.removeAttribute('aria-current');
    }
  });

  const servicesLink = document.querySelector('.nav-links [data-nav-item="services"]');
  const contactLink = document.querySelector('.nav-links [data-nav-item="contact"]');
  if (page === 'home') {
    servicesLink?.setAttribute('href', 'services.html');
    contactLink?.setAttribute('href', '#contact');
  } else if (page === 'services') {
    servicesLink?.setAttribute('href', 'services.html');
    contactLink?.setAttribute('href', 'index.html#contact');
  } else {
    servicesLink?.setAttribute('href', 'services.html');
    contactLink?.setAttribute('href', 'index.html#contact');
  }
}

async function loadSharedNavbar() {
  const header = document.querySelector('.site-header[data-shared-nav], .site-header');
  if (!header) return;

  if (header.querySelector('.nav')) {
    syncNavigationState();
    return;
  }

  if (isFileProtocol) {
    // file:// blocks fetch; use embedded fallback nav locally.
    header.innerHTML = fallbackNavbar;
    syncNavigationState();
    return;
  }

  try {
    const response = await fetch(sharedNavbarUrl);
    if (!response.ok) throw new Error('Failed to load shared navbar');
    header.innerHTML = await response.text();
  } catch {
    // Fallback keeps navigation available if fetch is blocked or fails.
    header.innerHTML = fallbackNavbar;
  }

  syncNavigationState();
}

async function populatePageContent() {
  const page = document.body.dataset.page || 'home';
  const manifest = await loadManifest();

  if (page === 'home') {
    setupHeroSlideshow(manifest.herobanner || []);
  }

  document.querySelectorAll('[data-media-key]').forEach((container) => {
    if (container.classList.contains('gallery')) return;

    const mediaKey = container.dataset.mediaKey;
    const images = manifest[mediaKey] || [];
    const isHomeSectionImage = container.id === 'home-about-images' || container.id === 'home-artistique-images' || container.id === 'home-nkfa-images';
    const limit = isHomeSectionImage ? 1 : images.length;

    images.slice(0, limit).forEach((src) => {
      const figure = createImageFigure(src);
      container.appendChild(figure);
    });
  });

  document.querySelectorAll('.gallery[data-media-key]').forEach((container) => {
    const mediaKey = getMediaKey(page);
    const images = manifest[mediaKey] || [];
    container.innerHTML = '';

    images.forEach((src) => {
      const figure = createImageFigure(src);
      container.appendChild(figure);
    });
  });

  document.querySelectorAll('[data-audio-key]').forEach((container) => {
    const audioKey = container.dataset.audioKey;
    const recordings = manifest[audioKey] || [];
    container.innerHTML = '';

    recordings.forEach((src, index) => {
      const title = `Testimonial ${index + 1}`;
      const card = createAudioCard(src, title);
      container.appendChild(card);
    });
  });

  const form = document.getElementById('consultation-form');
  const formNote = document.getElementById('form-note');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formNote) {
      formNote.textContent = 'Thank you — your consultation request has been received.';
    }
  });
}

function setupNavigation() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const dropdowns = Array.from(document.querySelectorAll('.nav-dropdown'));

  function onScroll() {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links?.classList.toggle('open');
  });

  function closeDropdowns() {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove('open');
      dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
    });
  }

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector('.nav-dropdown-toggle');

    button?.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      closeDropdowns();

      if (!isOpen) {
        dropdown.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-dropdown')) {
      closeDropdowns();
    }
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      links?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
      closeDropdowns();
    });
  });
}

async function init() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  await loadSharedNavbar();
  setupNavigation();
  attachGalleryScroll();
  attachLightboxListeners();
  populatePageContent();
}

init();
