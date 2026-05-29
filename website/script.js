// Image lists for each journey section
const galleries = {
  artistiquetale: [
    'artistiquetale/act1.jpeg', 'artistiquetale/act2.jpg', 'artistiquetale/act3.jpg',
    'artistiquetale/act4.jpg', 'artistiquetale/act5.JPG', 'artistiquetale/act6.JPG',
    'artistiquetale/act7.JPG', 'artistiquetale/act8.JPG', 'artistiquetale/act9.JPG',
    'artistiquetale/article1.jpg', 'artistiquetale/article2.jpg', 'artistiquetale/article3.jpg',
    'artistiquetale/article4.jpg', 'artistiquetale/article5.jpg'
  ],
  exportandfair: [
    'exportandfair/expo1.jpg', 'exportandfair/expo2.jpg', 'exportandfair/expo3.jpg',
    'exportandfair/fair.jpg', 'exportandfair/office1.jpg', 'exportandfair/office2.jpg',
    'exportandfair/office3.jpg', 'exportandfair/office4.jpg', 'exportandfair/office5.jpg',
    'exportandfair/office6.jpg'
  ],
  nkfaagency: [
    'nkfaagency/1.jpg', 'nkfaagency/2.JPG', 'nkfaagency/3.jpg', 'nkfaagency/4.png',
    'nkfaagency/5.png', 'nkfaagency/6.jpg', 'nkfaagency/7.jpg', 'nkfaagency/8.jpg',
    'nkfaagency/9.jpg', 'nkfaagency/10.jpg', 'nkfaagency/11.jpg', 'nkfaagency/12.jpg',
    'nkfaagency/13.jpg', 'nkfaagency/invitation.jpg', 'nkfaagency/webinar.jpg'
  ]
};

function showGallery(key) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  if (galleries[key]) {
    galleries[key].forEach(imgPath => {
      const img = document.createElement('img');
      img.src = '../' + imgPath;
      img.alt = key;
      gallery.appendChild(img);
    });
  } else {
    gallery.innerHTML = '<p>No images found for this section.</p>';
  }
}

// Optionally, show a default gallery on load
// showGallery('artistiquetale');
