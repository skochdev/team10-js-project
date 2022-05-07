import getRefs from './get-refs';

  export default function onScroll () {  
    function trackScroll() {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        refs.goTopBtn.classList.add('show');
      }
      if (scrolled < coords) {
        refs.goTopBtn.classList.remove('show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
    const refs = getRefs();

    window.addEventListener('scroll', trackScroll);
    refs.goTopBtn.addEventListener('click', backToTop);
  };
