function scrollToElement(elementId) {
  const element = document.querySelector(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  // scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  on: {
    slideChange: function() {
      const activeIndex = this.activeIndex;
      const cartSwiper = document.querySelector(".cart .swiper").swiper;
      cartSwiper.slideTo(activeIndex, 0); 

      const video = this.slides[this.activeIndex].querySelector("video");
      const videos = document.querySelectorAll("video");
      videos.forEach(function(video) {
        if (video !== null) {
          video.pause();
        }
      });
      if (video !== null) {
        video.play();
      }
    }
  }
});

AOS.init();



