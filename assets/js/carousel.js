document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carouselContainer");
  const items = container ? container.querySelectorAll(".carousel-item") : [];
  if (!items.length) return;

  let currentIndex = 0;
  const intervalTime = 3000;
  let autoPlayTimer = null;

  function updateHighlight(index) {
    items.forEach((item, idx) => {
      if (idx === index) {
        item.classList.add("active-highlight");
      } else {
        item.classList.remove("active-highlight");
      }
    });

    const activeItem = items[index];
    if (activeItem) {
      const scrollLeftPos =
        activeItem.offsetLeft -
        container.offsetLeft -
        container.clientWidth / 2 +
        activeItem.clientWidth / 2;
      container.scrollTo({
        left: scrollLeftPos,
        behavior: "smooth",
      });
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateHighlight(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateHighlight(currentIndex);
  }

  function startAutoPlay() {
    if (!autoPlayTimer) {
      autoPlayTimer = setInterval(nextSlide, intervalTime);
    }
  }

  function stopAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }

  const slideLeft = document.getElementById("slideLeft");
  const slideRight = document.getElementById("slideRight");

  if (slideLeft) {
    slideLeft.addEventListener("click", () => {
      stopAutoPlay();
      prevSlide();
      startAutoPlay();
    });
  }

  if (slideRight) {
    slideRight.addEventListener("click", () => {
      stopAutoPlay();
      nextSlide();
      startAutoPlay();
    });
  }

  container.addEventListener("mouseenter", stopAutoPlay);
  container.addEventListener("mouseleave", startAutoPlay);
  container.addEventListener("touchstart", stopAutoPlay, { passive: true });
  container.addEventListener("touchend", startAutoPlay);

  updateHighlight(currentIndex);
  startAutoPlay();
});
