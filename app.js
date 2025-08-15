const imageWrapper = document.querySelector('.image-wrapper');

imageWrapper.addEventListener('mousemove', (e) => {
  const rect = imageWrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Stronger rotation: 20 degrees instead of 10
  const rotateX = ((y - centerY) / centerY) * 20;
  const rotateY = ((x - centerX) / centerX) * 20;

  // Dynamic shadow
  const shadowX = (x - centerX) / 5;
  const shadowY = (y - centerY) / 5;

  imageWrapper.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  imageWrapper.style.boxShadow = `${-shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.4)`;
});

imageWrapper.addEventListener('mouseleave', () => {
  imageWrapper.style.transform = `rotateX(0) rotateY(0)`;
  imageWrapper.style.boxShadow = `0 0 20px rgba(0,0,0,0.3)`;
});
