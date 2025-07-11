const downloadButtons = document.querySelectorAll('.download-btn');
const downloadAnimation = document.getElementById('download-animation');
const animationIcon = document.getElementById('animation-icon');

downloadButtons.forEach(button => {
  button.addEventListener('click', () => {
    const version = button.getAttribute('data-version');
    const iconSrc = button.querySelector('img').src;
    animationIcon.src = iconSrc;
    downloadAnimation.classList.add('active');

    // Trigger file download based on version
    const fileUrl = version === '1.20.1' 
      ? 'https://drive.usercontent.google.com/u/0/uc?id=1B5T2lrPgjbRKbhU7OdwY2AO1ewXjJpFi&export=download'
      : '#'; // Placeholder for other versions
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = ''; // Let browser handle filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      downloadAnimation.classList.remove('active');
    }, 1500); // Match animation duration
  });
});