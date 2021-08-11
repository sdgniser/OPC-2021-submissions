const elementsToScroll = document.querySelectorAll(".on-scroll");
const windowHeight = window.innerHeight;
const bufferHeight = 50;

function fadeInOnScroll() {
  elementsToScroll.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (
      elementTop < windowHeight - bufferHeight &&
      elementBottom > bufferHeight
    ) {
      element.classList.add("on-scroll-active");
    }
    if (innerWidth < 768) {
      if (elementBottom < 0 || elementTop > windowHeight) {
        element.classList.remove("on-scroll-active");
      }
    }
  });
}

fadeInOnScroll();
window.addEventListener("scroll", fadeInOnScroll);
