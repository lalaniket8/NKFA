const manifestUrl = 'media-manifest.json';
const sharedNavbarUrl = 'partials/navbar.html';

const fallbackNavbar = `
<nav class="nav container" aria-label="Primary navigation">
  <a class="brand" href="index.html">
    <img src="media/logo/logo.png" alt="NKFA logo" />
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
    <a href="index.html#services" data-nav-item="services">Services</a>
    <a href="index.html#contact" data-nav-item="contact">Contact</a>
  </div>
</nav>
`;

const fallbackManifest = {
  herobanner: [],
  about: [
    'media/about/11.jpg',
    'media/about/129.png',
    'media/about/130.png',
    'media/about/161.png',
    'media/about/165.jpg',
    'media/about/1ab4165e-2d8d-48c0-bbf0-fb24fb9d7788.jpg',
    'media/about/2014-02-05 18.46.15.jpg',
    'media/about/2014-06-11 19.16.59.jpg',
    'media/about/20231015_180044.jpg',
    'media/about/20240201_190601-1.jpg',
    'media/about/20240301_161038.jpg',
    'media/about/71S4EdWfFsS._UF1000,1000_QL80_.jpg',
    'media/about/Aisa Des Hai Mera.jpg',
    'media/about/Aks14.jpg',
    'media/about/Copy of pics germany 004.jpg',
    'media/about/DSC_9851nans.jpg',
    'media/about/Documentary copy.JPG',
    'media/about/Documentary.JPG',
    'media/about/FB_IMG_1539593614520.jpg',
    'media/about/FB_IMG_1706796761486.jpg',
    'media/about/Gr8.jpg',
    'media/about/IMG_0621.jpg',
    'media/about/IMG_0621_1.jpg',
    'media/about/IMG_0635.JPG',
    'media/about/IMG_0802.JPG',
    'media/about/IMG_1970 copy.jpg',
    'media/about/IMG_20190112_172059.jpg',
    'media/about/IMG_20190430_124126_HDR.png',
    'media/about/IMG_20190830_151617_HDR.jpg',
    'media/about/Khane ke rang Sitaron ke sang.JPG',
    'media/about/MV5BMDFlYWRjNGYtMGU2ZC00YzFiLTlkZTEtOGM3NGJmNGMwNTEyXkEyXkFqcGdeQXVyNjk1MzQ2MTE@._V1_FMjpg_UX1000_.jpg',
    'media/about/MV5BMTc5NTUyNTMxNl5BMl5BanBnXkFtZTcwNjY1ODgzMQ@@._V1_.jpg',
    'media/about/MV5BNTIwYjJmZWUtZDM3NS00ZDc5LWE3YTItNDMyNTFhNzBmMTFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'media/about/Miilee.jpg',
    'media/about/NKFA profile copy JPEG.003.jpeg',
    'media/about/Pyaar_Tune_Kya_Kiya.jpg',
    'media/about/SAVE_20200817_184056.jpg',
    'media/about/SAVE_20200817_184250.jpg',
    'media/about/SDC11973.JPG',
    'media/about/Saajan.png',
    'media/about/UNADJUSTEDNONRAW_thumb_5bc.jpg',
    'media/about/a857347d-a69b-4999-8cd8-333c69050f1c.jpg',
    'media/about/germany.jpg',
    'media/about/gkfw .jpg',
    'media/about/gkfw .png',
    'media/about/gkfw.jpg',
    'media/about/gulshan n nans.jpg',
    'media/about/hqdefault.jpg',
    'media/about/kohinoor_6487.jpg',
    'media/about/nans pic.jpg',
    'media/about/scan0012.jpg'
  ],
  artistiquetale: [
    'media/artistiquetale/20230309_154005.jpg',
    'media/artistiquetale/20230315_122310.jpg',
    'media/artistiquetale/20231008_174124.jpg',
    'media/artistiquetale/20240213_172643.jpg',
    'media/artistiquetale/20240229_110618.jpg',
    'media/artistiquetale/263f8255-1026-436b-83a6-a4bd8d88e260.jpg',
    'media/artistiquetale/282564308_1191494511608052_4157750152368594990_n.jpg',
    'media/artistiquetale/4ae67704-ea26-42b1-92a9-225592ee1b08.jpg',
    'media/artistiquetale/ATSP 01.jpeg',
    'media/artistiquetale/ATTCL 1d.jpeg',
    'media/artistiquetale/IMG_0579.JPG',
    'media/artistiquetale/IMG_0669.JPG',
    'media/artistiquetale/IMG_0749.JPG',
    'media/artistiquetale/IMG_0757.JPG',
    'media/artistiquetale/IMG_0794 copy.JPG'
  ],
  nkfa: [
    'media/nkfa/Aks5 copy.jpg',
    'media/nkfa/IMG-20190502-WA0035.jpg',
    'media/nkfa/IMG-20191016-WA0014.jpg',
    'media/nkfa/IMG-20210318-WA0028.jpg',
    'media/nkfa/IMG_0215.JPG',
    'media/nkfa/IMG_20190424_154027.jpg',
    'media/nkfa/IMG_20190502_114627_HDR.jpg',
    'media/nkfa/IMG_20190505_130351.jpg',
    'media/nkfa/IMG_20190930_154239.jpg',
    'media/nkfa/IMG_20200127_172047.jpg',
    'media/nkfa/IMG_20200128_103340.jpg',
    'media/nkfa/IMG_20200214_151206_HDR.jpg',
    'media/nkfa/SAVE_20200502_205930.jpg'
  ]
};

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
  try {
    const response = await fetch(manifestUrl);
    if (!response.ok) {
      return fallbackManifest;
    }
    return response.json();
  } catch {
    return fallbackManifest;
  }
}

function createImageFigure(src, alt = 'Editorial image') {
  const figure = document.createElement('figure');
  figure.className = 'gallery-card';
  const normalizedSrc = String(src || '').replace(/^\//, '');
  figure.innerHTML = `<img src="${normalizedSrc}" alt="${alt}" loading="lazy" />`;
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
    servicesLink?.setAttribute('href', '#services');
    contactLink?.setAttribute('href', '#contact');
  } else {
    servicesLink?.setAttribute('href', 'index.html#services');
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

  const heroSlideshow = document.getElementById('hero-slideshow');
  if (heroSlideshow) {
    heroSlideshow.remove();
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
