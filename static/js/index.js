function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function showCodeReleaseNotice() {
  window.alert('The code repository, including implementation details, will be made public after acceptance.');
}

window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (!scrollButton) {
    return;
  }

  if (window.pageYOffset > 320) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
});
