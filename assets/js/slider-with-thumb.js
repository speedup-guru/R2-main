class SlideImageWithThumbs extends HTMLElement {
    constructor() {
        super();
        this.init();
    }

    init() {
        this.querySelectorAll(".qure__swiper-wrapper").forEach((wrapper, index) => {
            this.initGallerySlider(wrapper, index);
        });
    }

    initGallerySlider(wrapper, index) {
      const thumbsEl = wrapper.querySelector(".qure__swiper-gallery-thumbnails");
    const mainEl = wrapper.querySelector(".qure__swiper-gallery");
    const nextBtn = wrapper.querySelector(".swiper-next");
    const prevBtn = wrapper.querySelector(".swiper-prev");

    if (!thumbsEl || !mainEl) return;

    const autoplay = thumbsEl.dataset.autoplay === "true";
    const loop = thumbsEl.dataset.loop === "true";
    const slideshow = thumbsEl.dataset.slideshow || 0;
    const desktop = thumbsEl.dataset.desktop || 4;
    const tablet = thumbsEl.dataset.tablet || 2;
    const mobile = thumbsEl.dataset.mobile || 1;
    const spacing = parseInt(thumbsEl.dataset.spacing || 0);
    const paginationSelector = thumbsEl.dataset.pagination || ".swiper-pagination";
    const useFraction = thumbsEl.dataset.paginationFraction === "true";

    const thumbSwiper = new Swiper(thumbsEl, {
  spaceBetween: spacing,
  slidesPerView: mobile,
  loop: loop, // ✅ Match main slider
  loopedSlides: parseInt(desktop), // Match slides count for correct cloning
  autoplay: autoplay,
  watchSlidesProgress: true,
  navigation: {
    nextEl: nextBtn,
    prevEl: prevBtn
  },
  breakpoints: {
    768: {
      slidesPerView: tablet,
      spaceBetween: spacing >= 30 ? 30 : spacing
    },
    1200: {
      slidesPerView: desktop,
      spaceBetween: spacing
    }
  }
});

const mainSwiper = new Swiper(mainEl, {
  loop: loop,
  loopedSlides: parseInt(desktop),
  speed: 600,
  autoplay: autoplay,
  navigation: {
    nextEl: nextBtn,
    prevEl: prevBtn
  },
  pagination: {
    el: paginationSelector,
    clickable: true,
    type: useFraction ? "fraction" : "bullets"
  },
  thumbs: {
    swiper: thumbSwiper
  }
});

// 🔁 Sync both ways with loop-safe method
mainSwiper.on('slideChange', () => {
  thumbSwiper.slideToLoop(mainSwiper.realIndex, 300, false);
});

thumbSwiper.on('slideChange', () => {
  mainSwiper.slideToLoop(thumbSwiper.realIndex, 300, false);
});

// ✅ Ensure correct alignment after load
setTimeout(() => {
  thumbSwiper.update();
  mainSwiper.update();
  thumbSwiper.slideToLoop(mainSwiper.realIndex, 0, false);
}, 100);


    }
}
customElements.define('slide-with-thumbs', SlideImageWithThumbs);



var QureEventProductSlider = {
  init: function () {
    this.initAllSliders();
  },

  initAllSliders: function () {
    document.querySelectorAll(".qure__swiper-wrapper").forEach((wrapper, index) => {
      this.initGallerySlider(wrapper, index);
    });
  },

  initGallerySlider: function (wrapper, index) {
    const thumbsEl = wrapper.querySelector(".qure__swiper-gallery-thumbnails");
    const mainEl = wrapper.querySelector(".qure__swiper-gallery");
    const nextBtn = wrapper.querySelector(".swiper-next");
    const prevBtn = wrapper.querySelector(".swiper-prev");

    if (!thumbsEl || !mainEl) return;

    const autoplay = thumbsEl.dataset.autoplay === "true";
    const loop = thumbsEl.dataset.loop === "true";
    const slideshow = thumbsEl.dataset.slideshow || 0;
    const desktop = thumbsEl.dataset.desktop || 4;
    const tablet = thumbsEl.dataset.tablet || 2;
    const mobile = thumbsEl.dataset.mobile || 1;
    const spacing = parseInt(thumbsEl.dataset.spacing || 0);
    const paginationSelector = thumbsEl.dataset.pagination || ".swiper-pagination";
    const useFraction = thumbsEl.dataset.paginationFraction === "true";
    
const thumbSwiper = new Swiper(thumbsEl, {
  spaceBetween: spacing,
  slidesPerView: mobile,
  loop: loop, // ✅ Match main slider
  loopedSlides: parseInt(desktop), // Match slides count for correct cloning
  autoplay: autoplay,
  watchSlidesProgress: true,
  navigation: {
    nextEl: nextBtn,
    prevEl: prevBtn
  },
  breakpoints: {
    768: {
      slidesPerView: tablet,
      spaceBetween: spacing >= 30 ? 30 : spacing
    },
    1200: {
      slidesPerView: desktop,
      spaceBetween: spacing
    }
  }
});

const mainSwiper = new Swiper(mainEl, {
  loop: loop,
  loopedSlides: parseInt(desktop),
  speed: 600,
  autoplay: autoplay,
  navigation: {
    nextEl: nextBtn,
    prevEl: prevBtn
  },
  pagination: {
    el: paginationSelector,
    clickable: true,
    type: useFraction ? "fraction" : "bullets"
  },
  thumbs: {
    swiper: thumbSwiper
  }
});

// 🔁 Sync both ways with loop-safe method
mainSwiper.on('slideChange', () => {
  thumbSwiper.slideToLoop(mainSwiper.realIndex, 300, false);
});

thumbSwiper.on('slideChange', () => {
  mainSwiper.slideToLoop(thumbSwiper.realIndex, 300, false);
});

// ✅ Ensure correct alignment after load
setTimeout(() => {
  thumbSwiper.update();
  mainSwiper.update();
  thumbSwiper.slideToLoop(mainSwiper.realIndex, 0, false);
}, 100);

    
  },
};

QureEventProductSlider.init();

