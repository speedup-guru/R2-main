
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
        const desktop = parseInt(thumbsEl.dataset.desktop || 4);
        const tablet = parseInt(thumbsEl.dataset.tablet || 2);
        const mobile = parseInt(thumbsEl.dataset.mobile || 1);
        const spacing = parseInt(thumbsEl.dataset.spacing || 0);

        const thumbSwiper = new Swiper(thumbsEl, {
            spaceBetween: spacing,
            slidesPerView: mobile,
            autoplay: autoplay ? { delay: 3000 } : false,
            freeMode: true,
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

        new Swiper(mainEl, {
            loop: loop,
            speed: 600,
            autoplay: autoplay ? { delay: 3000 } : false,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn
            },
            thumbs: {
                swiper: thumbSwiper
            }
        });
    }
}

customElements.define("slide-with-thumbs", SlideImageWithThumbs);

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

    const autoplay = thumbsEl.dataset.autoplay === "false";
   // console.log(autoplay)
    const g = "true" === thumbsEl?.dataset.autoplay;
    const loop = thumbsEl.dataset.loop === "true";
    const slideshow = thumbsEl.dataset.slideshow || 0;
    const desktop = thumbsEl.dataset.desktop || 4;
    const tablet = thumbsEl.dataset.tablet || 2;
    const mobile = thumbsEl.dataset.mobile || 1;
    const spacing = parseInt(thumbsEl.dataset.spacing || 0);

    const thumbSwiper = new Swiper(thumbsEl, {
      spaceBetween: spacing,
      slidesPerView: mobile,
      autoplay: g,
      freeMode: true,
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

    new Swiper(mainEl, {
      loop: loop,
      speed: 600,
      autoplay:g,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      },
      thumbs: {
        swiper: thumbSwiper
      }
    });
  }
};

QureEventProductSlider.init();