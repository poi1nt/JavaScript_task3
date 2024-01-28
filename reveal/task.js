let revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    revealElements.forEach((element) => {
        let rect = element.getBoundingClientRect();
        element.classList.toggle('reveal_active', rect.top >= 0 && rect.bottom <= window.innerHeight);
    });
  });