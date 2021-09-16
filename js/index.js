if (window.innerWidth < 768) {
  let openMenu = document.getElementById('mobile-menu');
  let closeMenu = document.getElementById('nav-close');
  let mobileMenu = document.getElementById('nav');
  let body = document.querySelector('body');

  openMenu.addEventListener( "click" , function() {
    mobileMenu.classList.toggle('open');
    body.classList.toggle('open-menu');
  });
  closeMenu.addEventListener( "click" , function() {
    mobileMenu.classList.remove('open');
    body.classList.remove('open-menu');
  });
}