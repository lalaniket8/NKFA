const manifestUrl = 'media-manifest.json';

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
  const response = await fetch(manifestUrl);
  return response.json();
}

async function loadTextFile(fileName) {
  const response = await fetch(`text/${fileName}`);
  if (!response.ok) return '';
  return response.text();
}

function renderText(container, content, maxParagraphs = null) {
  if (!container || !content) return;
  const blocks = content
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean);

  const visibleBlocks = maxParagraphs ? blocks.slice(0, maxParagraphs) : blocks;

  container.innerHTML = visibleBlocks
    .map((block) => `<p>${block.replace(/\n/g, '<br>')}</p>`)
    .join('');
}

function createImageFigure(src, alt = 'Editorial image') {
  const figure = document.createElement('figure');
  figure.className = 'gallery-card';
  figure.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy" />`;
  return figure;
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
  const closeButton = lightbox?.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
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

  document.addEventListener('click', (event) => {
    const card = event.target.closest('.gallery-card, .image-stack figure');
    if (!card) return;
    const img = card.querySelector('img');
    if (img) openLightbox(img.src, img.alt);
  });

  closeButton?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}

async function populatePageContent() {
  const page = document.body.dataset.page || 'home';
  const manifest = await loadManifest();

  document.querySelectorAll('[data-text-file]').forEach(async (element) => {
    const fileName = element.dataset.textFile;
    const content = await loadTextFile(fileName);
    const maxParagraphs = element.classList.contains('home-about-preview') ? 2 : null;
    renderText(element, content, maxParagraphs);
  });

  const heroSlideshow = document.getElementById('hero-slideshow');
  if (heroSlideshow) {
    const heroImages = manifest.herobanner || [];
    heroImages.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Hero image';
      img.loading = 'lazy';
      heroSlideshow.appendChild(img);
    });

    const slides = heroSlideshow.querySelectorAll('img');
    if (slides.length) {
      let index = 0;
      slides[index].classList.add('active');
      setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
      }, 6000);
    }
  }

  document.querySelectorAll('[data-media-key]').forEach((container) => {
    const mediaKey = container.dataset.mediaKey;
    const images = manifest[mediaKey] || [];
    const limit = container.id === 'home-about-images' || container.id === 'home-artistique-images' || container.id === 'home-nkfa-images'
      ? 4
      : images.length;

    images.slice(0, limit).forEach((src) => {
      const figure = createImageFigure(src);
      container.appendChild(figure);
    });
  });

  document.querySelectorAll('.gallery[data-media-key]').forEach((container) => {
    const mediaKey = container.dataset.mediaKey;
    const images = manifest[mediaKey] || [];
    images.forEach((src) => {
      const figure = createImageFigure(src);
      container.appendChild(figure);
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

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      links?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function init() {
  document.getElementById('year').textContent = new Date().getFullYear();
  setupNavigation();
  attachGalleryScroll();
  attachLightboxListeners();
  populatePageContent();
}

init();
