document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }

  // Slideshow functionality
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); 
  }

  // Initialize the gallery
  generateGallery();
});

// Gallery functionality
function generateGallery() {
  const galleryImages = [
    { src: 'images/gallery/p01.webp', alt: 'GI 01' },
    { src: 'images/gallery/p02.webp', alt: 'GI 02' },
    { src: 'images/gallery/p03.webp', alt: 'GI 03' },
    { src: 'images/gallery/p04.webp', alt: 'GI 04' },
    { src: 'images/gallery/p05.webp', alt: 'GI 05' },
    { src: 'images/gallery/p06.webp', alt: 'GI 06' },
    { src: 'images/gallery/p07.webp', alt: 'GI 07' },
    { src: 'images/gallery/p08.webp', alt: 'GI 08' },
    { src: 'images/gallery/p09.webp', alt: 'GI 09' },
    { src: 'images/gallery/p10.webp', alt: 'GI 10' },
    { src: 'images/gallery/p11.webp', alt: 'GI 11' },
    { src: 'images/gallery/p12.webp', alt: 'GI 12' },
    { src: 'images/gallery/p13.webp', alt: 'GI 13' },
    { src: 'images/gallery/p14.webp', alt: 'GI 14' },
    { src: 'images/gallery/p15.webp', alt: 'GI 15' },
    { src: 'images/gallery/p16.webp', alt: 'GI 16' },
    { src: 'images/gallery/p17.webp', alt: 'GI 17' },
    { src: 'images/gallery/p18.webp', alt: 'GI 18' },
    { src: 'images/gallery/p19.webp', alt: 'GI 19' },
    { src: 'images/gallery/p20.webp', alt: 'GI 20' },
    { src: 'images/gallery/p21.webp', alt: 'GI 21' },
    { src: 'images/gallery/p22.webp', alt: 'GI 22' },
    { src: 'images/gallery/p23.webp', alt: 'GI 23' },
    { src: 'images/gallery/p24.webp', alt: 'GI 24' },
    { src: 'images/gallery/p25.webp', alt: 'GI 25' },
    { src: 'images/gallery/p26.webp', alt: 'GI 26' },
    { src: 'images/gallery/p27.webp', alt: 'GI 27' },
    { src: 'images/gallery/p28.webp', alt: 'GI 28' },
    { src: 'images/gallery/p29.webp', alt: 'GI 29' },
    { src: 'images/gallery/p30.webp', alt: 'GI 30' },
    { src: 'images/gallery/p31.webp', alt: 'GI 31' },
    { src: 'images/gallery/p32.webp', alt: 'GI 32' },
    { src: 'images/gallery/p33.webp', alt: 'GI 33' },
    { src: 'images/gallery/p34.webp', alt: 'GI 34' },
    { src: 'images/gallery/p35.webp', alt: 'GI 35' },
    { src: 'images/gallery/p36.webp', alt: 'GI 36' },
    { src: 'images/gallery/p37.webp', alt: 'GI 37' },
    { src: 'images/gallery/p38.webp', alt: 'GI 38' },
    { src: 'images/gallery/p39.webp', alt: 'GI 39' },
    { src: 'images/gallery/p40.webp', alt: 'GI 40' },
    { src: 'images/gallery/p41.webp', alt: 'GI 41' },
    { src: 'images/gallery/p42.webp', alt: 'GI 42' },
    { src: 'images/gallery/p43.webp', alt: 'GI 43' },
    { src: 'images/gallery/p44.webp', alt: 'GI 44' },
    { src: 'images/gallery/p45.webp', alt: 'GI 45' },
    { src: 'images/gallery/p46.webp', alt: 'GI 46' },
    { src: 'images/gallery/p47.webp', alt: 'GI 47' },
    { src: 'images/gallery/p48.webp', alt: 'GI 48' },
    { src: 'images/gallery/p49.webp', alt: 'GI 49' },
    { src: 'images/gallery/p50.webp', alt: 'GI 50' },
    { src: 'images/gallery/p51.webp', alt: 'GI 51' },
    { src: 'images/gallery/p52.webp', alt: 'GI 52' }
  ];

  const gallerySection = document.querySelector('#gallery');
  if (!gallerySection) return;
  
  gallerySection.innerHTML = '<h2>Gallery</h2><hr class="sep-bar" style="width: 100%;">';
  
// Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <span class="close-btn">&times;</span>
    <span class="nav-btn prev-btn">&lt;</span>
    <span class="nav-btn next-btn">&gt;</span>
    <div class="lightbox-content">
      <img src="" alt="">
    </div>
  `;
  gallerySection.appendChild(lightbox);



  for (let i = 0; i < galleryImages.length; i += 3) {
    const row = document.createElement('div');
    row.className = 'gallery-row';
    
    const isWideLeft = (i / 3) % 2 === 0;
    
    // Safely get up to 3 images (may return fewer at the end)
    const batch = [
      galleryImages[i],
      galleryImages[i + 1],
      galleryImages[i + 2]
    ].filter(img => img !== undefined); // Remove undefined entries

    if (isWideLeft) {
      if (batch[0]) row.appendChild(createGalleryItem(batch[0], 'wide', i));
      if (batch.length > 1) {
        const narrowContainer = createNarrowContainer(batch.slice(1), i + 1);
        row.appendChild(narrowContainer);
      }
    } else {
      if (batch.length > 2) {
        const narrowContainer = createNarrowContainer(batch.slice(0, 2), i);
        row.appendChild(narrowContainer);
        row.appendChild(createGalleryItem(batch[2], 'wide', i + 2));
      } else {
        // Handle leftover images (1 or 2) in alternate layout
        batch.forEach((img, idx) => {
          row.appendChild(createGalleryItem(img, 'wide', i + idx));
        });
      }
    }
    
    gallerySection.appendChild(row);
  }

  // Initialize lightbox functionality
  initLightbox(galleryImages);

  updateRowHeights();
  window.addEventListener('resize', debounce(updateRowHeights, 100));
}

function updateRowHeights() {
  const rows = document.querySelectorAll('.gallery-row');
  rows.forEach(row => {
    const rowWidth = row.offsetWidth;
    const goldenHeight = rowWidth * (2/3) * 0.618;
    row.style.height = `${goldenHeight}px`;
    
    const narrowImages = row.querySelectorAll('.narrow-img');
    const availableHeight = goldenHeight - 16;
    narrowImages.forEach(container => {
      container.style.height = `${availableHeight / 2}px`;
    });
  });
}

function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

function createGalleryItem(imgData, sizeClass, index) {
  const container = document.createElement('div');
  container.className = sizeClass;
  
  const link = document.createElement('a');
  link.href = '#';
  link.dataset.index = index;
  link.className = 'gallery-link';
  
  const img = document.createElement('img');
  img.src = imgData.src;
  img.alt = imgData.alt;
  
  if (sizeClass === 'narrow') {
    const narrowImgDiv = document.createElement('div');
    narrowImgDiv.className = 'narrow-img';
    narrowImgDiv.appendChild(img);
    link.appendChild(narrowImgDiv);
  } else {
    link.appendChild(img);
  }
  
  container.appendChild(link);
  return container;
}

function createNarrowContainer(images, startIndex) {
  const narrowContainer = document.createElement('div');
  narrowContainer.className = 'narrow';
  
  images.forEach((imgData, i) => {
    if (imgData) {
      narrowContainer.appendChild(createGalleryItem(imgData, 'narrow', startIndex + i));
    }
  });
  
  return narrowContainer;
}

// Initialize lightbox functionality
function initLightbox(galleryImages) {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.close-btn');
  const prevBtn = lightbox.querySelector('.prev-btn');
  const nextBtn = lightbox.querySelector('.next-btn');
  const galleryLinks = document.querySelectorAll('.gallery-link');
  
  let currentIndex = 0;
  
  // Open lightbox when clicking a gallery image
  galleryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      currentIndex = parseInt(this.dataset.index);
      updateLightboxImage();
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  });
  
  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Previous image
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  });
  
  // Next image
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightboxImage();
  });
  
  // Close when clicking outside image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'Escape') {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
      } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightboxImage();
      }
    }
  });
  
  function updateLightboxImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;
  }
}
