"use strict";
const global = {
    header: "header"
};
class CartNotification extends HTMLElement {
    constructor() {
      super();
      this.cartCountDown = this.querySelector('.cart-countdown-time');
      this.startTime = Date.now();
      this.countdownTimer();
    }

    countdownTimer() {
      if (!this.cartCountDown) return;
      const e = Number(this.cartCountDown.dataset.countdownTime) || 5,
            t = this.cartCountDown.dataset.timeoutMessage,
            r = this.startTime + 60 * e * 1000;

      const i = setInterval(() => {
        if (document.querySelector(".cart-countdown-time .countdown-message")) {
          if (Date.now() > r) {
            this.cartCountDown.querySelector(".countdown-message").innerHTML = t;
            clearInterval(i);
          } else {
            const remaining = r - Date.now(),
                  minutes = Math.floor((remaining % 3600000) / 60000),
                  seconds = Math.floor((remaining % 60000) / 1000);

            document.querySelector(".countdown-timer-minute").innerHTML = String(minutes).padStart(2, '0');
            document.querySelector(".countdown-timer-sec").innerHTML = String(seconds).padStart(2, '0');
          }
        } else {
          clearInterval(i);
        }
      }, 1000);
    }
  }

 customElements.define("cart-notification", CartNotification);
 window.CartNotificationLoaded = true;


// Slide Toggle
const slideAnime = (() => {
        let e = !1;
        return t => {
            const n = Object.assign({}, {
                    target: !1,
                    animeType: "slideToggle",
                    duration: 400,
                    easing: "ease",
                    isDisplayStyle: "block"
                }, t),
                o = n.target;
            if (!o) return;
            if (e) return;
            e = !0;
            let i = n.animeType;
            const s = getComputedStyle(o);
            if ("slideToggle" === i && (i = "none" === s.display ? "slideDown" : "slideUp"), "slideUp" === i && "none" === s.display || "slideDown" === i && "none" !== s.display || "slideUp" !== i && "slideDown" !== i) return e = !1, !1;
            o.style.overflow = "hidden";
            const l = n.duration,
                r = n.easing,
                a = n.isDisplayStyle;
            "slideDown" === i && (o.style.display = a);
            const c = {
                height: o.getBoundingClientRect().height + "px",
                marginTop: s.marginTop,
                marginBottom: s.marginBottom,
                paddingTop: s.paddingTop,
                paddingBottom: s.paddingBottom
            };
            if (Object.keys(c).forEach((e => {
                    0 === parseFloat(c[e]) && delete c[e]
                })), 0 === Object.keys(c).length) return e = !1, !1;
            let d;
            "slideDown" === i ? (Object.keys(c).forEach((e => {
                o.style[e] = 0
            })), d = o.animate(c, {
                duration: l,
                easing: r
            })) : "slideUp" === i && (Object.keys(c).forEach((e => {
                o.style[e] = c[e], c[e] = 0
            })), d = o.animate(c, {
                duration: l,
                easing: r
            })), d.finished.then((() => {
                o.style.overflow = "", Object.keys(c).forEach((e => {
                    o.style[e] = ""
                })), "slideUp" === i && (o.style.display = "none"), e = !1
            }))
        }
    })();
// Slide Toggle

// Menu 
const QureMainMenu = {
    init: function () {
        this.initMainMenu();
        this.setHeaderHeights(); 
        window.addEventListener("resize", this.setHeaderHeights.bind(this));
    },

    initMainMenu: function () {
        document.querySelectorAll(".nav-toggle").forEach((toggleBtn) => {
            toggleBtn.addEventListener("click", () => {
                document.documentElement.classList.toggle("nav-open");
            });
        });
    },

    setHeaderHeights: function () {
        const announcementBar = document.getElementById("announcement-bar");
        const pageHeader = document.getElementById("page-header");

        const d = announcementBar ? announcementBar.clientHeight : 0;
        const p = pageHeader ? pageHeader.clientHeight : 0;

        document.body.style.setProperty("--height-bar", `${d}px`);
        document.body.style.setProperty("--height-header", `${p}px`);
    }
};
document.addEventListener("DOMContentLoaded", function () {
    QureMainMenu.init();
});
// Menu End


// Swiper Slider
var QureSettingsSwiper = {
    init: function() {
        this.QureSettingsCarousel()
    },
    QureSettingsCarousel: function() {
        document.querySelectorAll(".qure__swiper").forEach((e => {
            this.QureCarousel(e)
        }))
    },
    QureCarousel: function(e) {
        var t, n = "true" === e?.dataset.autoplay,
            o = "true" === e?.dataset.loop,
            i = e?.dataset.slideshow ? e?.dataset.slideshow : 0,
            s = e?.dataset.arrowCenterimage ? e?.dataset.arrowCenterimage : 0,
            l = e?.dataset.desktop ? e?.dataset.desktop : 4,
            r = e?.dataset.tablet ? e?.dataset.tablet : 2,
            a = e?.dataset.mobile ? e?.dataset.mobile : 1,
            c = e?.dataset.autoplaySpeed ? e?.dataset.autoplaySpeed : 3e3,
            d = e?.dataset.speed ? e?.dataset.speed : 400,
            u = e?.dataset.effect ? e?.dataset.effect : "slide",
            m = e?.dataset.sectionId,
            p = e?.dataset.row ? e?.dataset.row : 1,
            pd = e?.dataset.rowtablet ? e?.dataset.rowtablet : 1,
            pm = e?.dataset.rowmobile ? e?.dataset.rowmobile : 1,
            h = e?.dataset.spacing ? e?.dataset.spacing : 0,
            g = "true" === e?.dataset.paginationFraction,
            f = "true" === e?.dataset.animationSrcoll,
            cs = "true" === e?.dataset.slidecenter,
            csm = "true" === e?.dataset.stylemode,
            v = window.innerWidth,
            b = "true" === e?.dataset.itemMobile,
            al = e?.dataset.arrowleft ? e?.dataset.arrowleft : "qure-swiper-button-prev", 
            ar = e?.dataset.arrowright ? e?.dataset.arrowright : "qure-swiper-button-next",
            pg = e?.dataset.pagination ? e?.dataset.pagination : "swiper-pagination"; 
        h = Number(h), c = Number(c), d = Number(d), n && (n = {
            delay: c
        }), t = new Swiper("#qure__swiper-" + m, {
            slidesPerView: b ? "auto" : a,
            spaceBetween: h >= 15 ? 15 : h,
            autoplay: n,
            loop: o,
            effect: u,
            speed: d,
            cssMode: csm,
            centeredSlides: cs,
            watchSlidesProgress: !0,
            watchSlidesVisibility: !0,
            
            grid: {
                rows: pm,
                fill: "row"
            },
            navigation: {
                
                nextEl: `.${ar}`,
                prevEl: `.${al}`
            },
            pagination: {
                clickable: !0,

                el: `.${pg}`,
                type: g ? "fraction" : "bullets"
            },
            breakpoints: {
                768: {
                    slidesPerView: r,
                    spaceBetween: h >= 30 ? 30 : h,
                    grid: {
                      rows: pd,
                  },
                },
                1200: {
                    slidesPerView: l,
                    spaceBetween: h,
                    centeredSlides: cs,
                    grid: {
                      rows: p,
                      fill: "row"
                  },
                }
            },
            on: {
                init: function() {
                    if (i && (v > 767 ? document.querySelectorAll(".slide-image").forEach((e => {
                            var t = e?.dataset.imgSlide;
                            e.innerHTML = `<img \n                      src=${t} \n                      alt="slide" \n                      srcset="${t} width=375 375w, ${t} width=550 550w, ${t} width=750 750w, ${t} width=1100 1100w, ${t} width=1500 1500w, ${t} width=1780 1780w, ${t} width=2000 2000w, ${t} width=3000 3000w, ${t} width=3840 3840w" \n                      sizes="100vw"\n                    >`
                        })) : document.querySelector(".slide-image-mobile") ? document.querySelectorAll(".slide-image-mobile").forEach((e => {
                            var t = e?.dataset.imgSlideMobile;
                            e.innerHTML = `<img \n                        src=${t} \n                        alt="slide mobile" \n                        srcset="${t} width=375 375w, ${t} width=550 550w, ${t} width=750 750w, ${t} width=1100 1100w, ${t} width=1500 1500w, ${t} width=1780 1780w, ${t} width=2000 2000w, ${t} width=3000 3000w, ${t} width=3840 3840w" \n                        sizes="100vw"\n                      >`
                        })) : document.querySelectorAll(".slide-image").forEach((e => {
                            var t = e?.dataset.imgSlide;
                            e.innerHTML = `<img \n                        src=${t} \n                        alt="slide" \n                        srcset="${t} width=375 375w, ${t} width=550 550w, ${t} width=750 750w, ${t} width=1100 1100w, ${t} width=1500 1500w, ${t} width=1780 1780w, ${t} width=2000 2000w, ${t} width=3000 3000w, ${t} width=3840 3840w" \n                        sizes="100vw"\n                      >`
                        })), window.addEventListener("resize", (function() {
                            window.innerWidth <= 767 ? document.querySelector(".slide-image-mobile") ? document.querySelectorAll(".slide-image-mobile").forEach((e => {
                                var t = e?.dataset.imgSlideMobile;
                                e.innerHTML = `<img \n                          src=${t} \n                          alt="slide mobile" \n                          srcset="${t} width=375 375w, ${t} width=550 550w, ${t} width=750 750w, ${t} width=1100 1100w, ${t} width=1500 1500w, ${t} width=1780 1780w, ${t} width=2000 2000w, ${t} width=3000 3000w, ${t} width=3840 3840w" \n                          sizes="100vw"\n                        >`
                            })) : document.querySelectorAll(".slide-image").forEach((e => {
                                var t = e?.dataset.imgSlide;
                                e.innerHTML = `<img \n                          src=${t} \n                          alt="slide" \n                          srcset="${t} width=375 375w, ${t} width=550 550w, ${t} width=750 750w, ${t} width=1100 1100w, ${t} width=1500 1500w, ${t} width=1780 1780w, ${t} width=2000 2000w, ${t} width=3000 3000w, ${t} width=3840 3840w" \n                          sizes="100vw"\n                        >`
                            })) : document.querySelectorAll(".slide-image").forEach((e => {
                                var t = e?.dataset.imgSlide;
                                e.innerHTML = `<img \n                        src=${t} \n                        alt="slide" \n                        srcset="${t} width=375 375w, ${t} width=550 550w, ${t} width=750 750w, ${t} width=1100 1100w, ${t} width=1500 1500w, ${t} width=1780 1780w, ${t} width=2000 2000w, ${t} width=3000 3000w, ${t} width=3840 3840w" \n                        sizes="100vw"\n                      >`
                            }))
                        })), f && initializeScrollZoomAnimationTrigger()), s) {
                        var e = document.getElementById("qure__swiper-" + m),
                            t = e.querySelectorAll(".qure__responsive-image");
                        if (0 != t.length) {
                            var n = [];
                            t.forEach((e => {
                                n.push(e.offsetHeight / 2)
                            }));
                            var o = "--arrows-offset-top: " + Math.max(...n) + "px";
                            e.querySelectorAll(".swiper-arrow") && e.querySelectorAll(".swiper-arrow").forEach((e => {
                                e.setAttribute("style", o)
                            }))
                        }
                    }
                }
            }
        }), i && t.on("slideChange", (function() {
            document.querySelectorAll(".video-slider").forEach((e => {
                var t = e.dataset.video,
                    n = e.dataset.poster;
                e.innerHTML = `\n <video playsinline="true" loop="loop" muted="muted" autoplay="autoplay" preload="metadata"\n poster="${n}">\n                <source\n                  src="${t}"\n                  type="video/mp4">\n              </video>\n              `
            }))
        }))
    }
};
//QureSettingsSwiper.init();
document.addEventListener("DOMContentLoaded", function () {
    QureSettingsSwiper.init();
});


class SlideCarousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.init();
  }

  init() {
    this.QureSlideCarousel();
  }
    QureSlideCarousel() {
        var e = this.querySelector(".qure__swiper-carousel"),
            t = "true" === e.dataset.autoplay,
            n = "true" === e.dataset.loop,
            o = e.dataset.arrowCenterimage ? e.dataset.arrowCenterimage : 0,
            i = e.dataset.desktop ? e.dataset.desktop : 1,
            s = e.dataset.tablet ? e.dataset.tablet : 1,
            l = e.dataset.mobile ? e.dataset.mobile : 1,
            r = e.dataset.spacing ? e.dataset.spacing : 0;
        r = Number(r), new Swiper(e, {
            slidesPerView: l,
            spaceBetween: r >= 15 ? 15 : r,
            autoplay: t,
            loop: n,
            watchSlidesProgress: !0,
            watchSlidesVisibility: !0,
            navigation: {
                nextEl: e.querySelector(".swiper-button-next-item"),
                prevEl: e.querySelector(".swiper-button-prev-item")
            },
            pagination: {
                clickable: !0,
                el: e.querySelector(".swiper-pagination-item"),
                type: "progressbar"
            },
            breakpoints: {
                768: {
                    slidesPerView: s,
                    spaceBetween: r >= 30 ? 30 : r
                },
                1200: {
                    slidesPerView: i,
                    spaceBetween: r
                }
            }
        })
    }
}
customElements.define("slide-carousel", SlideCarousel);


class SlideImageShopable extends HTMLElement {
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

customElements.define("slide-with-thumbs", SlideImageShopable);

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
document.addEventListener("DOMContentLoaded", function () { 
      QureEventProductSlider.init();
});


  document.querySelectorAll('.qure__subscription-collapse').forEach(collapseEl => {
    collapseEl.addEventListener('show.bs.collapse', function () {
      document.querySelectorAll('.qure__subscription-item').forEach(item => item.classList.remove('subscription-active'));
      const accordionItem = this.closest('.qure__subscription-item');
      accordionItem.classList.add('subscription-active');
      const button = accordionItem.querySelector('.qure__subscription-btn');
      const label = button?.dataset.btnlabel;
      if (label && document.getElementById('qr__submit')) {
        document.getElementById('qr__submit').textContent = label;
      }
    });
    collapseEl.addEventListener('hide.bs.collapse', function () {
      const accordionItem = this.closest('.qure__subscription-item');
      accordionItem.classList.remove('subscription-active');
    });
    if (collapseEl.classList.contains('show')) {
      const accordionItem = collapseEl.closest('.qure__subscription-item');
      accordionItem.classList.add('subscription-active');
      const button = accordionItem.querySelector('.qure__subscription-btn');
      const label = button?.dataset.btnlabel;
      if (label && document.getElementById('qr__submit')) {
        document.getElementById('qr__submit').textContent = label;
      }
    }
  });


var QureEventShopify = {
    init: function() {
        this.setupEventListeners()
    },
    setupEventListeners: function() {
        document.querySelectorAll(".qure__footer-title").forEach((e => {
            e.addEventListener("click", (e => {
                const t = e.currentTarget,
                    n = t.parentElement.querySelector(".qure__footer-content");
                slideAnime({
                    target: n,
                    animeType: "slideToggle"
                });
                const o = t.closest(".qure__footer_block");
                o.classList.contains("active") ? o.classList.remove("active") : o.classList.add("active")
            }))
        }));
        const n = document.getElementById("qure_cookie");
        n && (n.classList.remove("d-none"), document.querySelectorAll("#qure_cookie .cookie-dismiss").forEach((e => {
            e.addEventListener("click", (e => {
                e.preventDefault(), e.currentTarget.closest("#qure_cookie").remove()
            }), !1)
        })));
        
    }
};
QureEventShopify.init();

document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(() => {
        if (document.querySelector(".qure__footer-title")) {
            QureEventShopify.init();
            observer.disconnect(); 
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});


// Video Popup
document.querySelectorAll(".lvideo").forEach((d) => d.addEventListener("click", playVideos));
const body = document.body;

function playVideos(e) {
  lvideo(e.currentTarget.dataset.url);

  body.classList.add("lvideo-active");
  var lvideoWrap = document.createElement("DIV");
  lvideoWrap.setAttribute("id", "lvideo-wrap");
  document.body.appendChild(lvideoWrap);
  const wrapper = document.getElementById("lvideo-wrap");
  wrapper.classList.add("active");

  const url = this.dataset.url;

  const startModal = `<span onclick="lvideoClose();" class="lvideo-overlay"></span> <div class="lvideo-container">`;
  const finishModal = `</div><button onclick="lvideoClose();" class="lvideo-close"><i class="fa-solid fa-xmark"></i></button>`;

    if (url.indexOf("youtube") !== -1 || url.indexOf("youtu") !== -1) {
    const ytUrl = [this.dataset.url];

    var i,
      r,
      regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

    for (i = 0; i < ytUrl.length; ++i) {
      r = ytUrl[i].match(regExp);
      document.getElementById(
        "lvideo-wrap"
      ).innerHTML = `${startModal}<iframe width="560" height="315" title="YouTube Video" src='https://www.youtube.com/embed/${r[1]}?rel=0&autoplay=1&mute=1&loop=1&playlist=${r[1]}' frameborder="0" allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>${finishModal}`;
    }
  } else if (url.indexOf("vimeo") !== -1) {

    const vimeoURL = this.dataset.url;
    const regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;

    const match = vimeoURL.match(regExp);

    if (match) {
      document.getElementById(
        "lvideo-wrap"
      ).innerHTML = `${startModal}<iframe title="Vimeo" src="https://player.vimeo.com/video/${match[2]}?autoplay=1&loop=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>${finishModal}`;
    } else {
      alert("Not a Vimeo!  URL example:\n https://vimeo.com/120206922");
    }
  
  } else if (url.indexOf("mp4") !== -1 || url.indexOf("m4v") !== -1) {
    
    document.getElementById(
      "lvideo-wrap"
    ).innerHTML = `${startModal}<video controls loop playsinline autoplay><source src='${this.dataset.url}' type="video/mp4"></video>${finishModal}`;
  } else {
    alert("No video link found.");
  }
}
const lvideoClose = () => {
  body.classList.remove("lvideo-active");

  const wrapper = document.getElementById("lvideo-wrap");
  wrapper.parentNode.removeChild(wrapper);
};

// LAUNCH
function lvideo(){}

  function applyEqualHeight(childClass, parentClass = null, cssVarName = 'child-height') {
  const updateHeights = () => {
    const elements = document.querySelectorAll(`.${childClass}`);
    if (!elements.length) return;

    // Reset heights
    elements.forEach((el) => el.style.height = 'auto');

    const maxHeight = Math.max(...Array.from(elements).map(el => el.offsetHeight));

    elements.forEach((el) => {
      if (parentClass) {
        const parent = el.closest(`.${parentClass}`);
        if (parent) {
          parent.style.setProperty(`--${cssVarName}`, `${maxHeight}px`);
        } else {
          el.style.height = `${maxHeight}px`;
        }
      } else {
        el.style.height = `${maxHeight}px`;
      }
    });
  };

  document.addEventListener('DOMContentLoaded', updateHeights);
  window.addEventListener('load', updateHeights);
  window.addEventListener('resize', updateHeights);
}
  applyEqualHeight('patch-card-img', 'eye-patch-care');
  applyEqualHeight('bundle__container', 'bundle__banner');
  applyEqualHeight('get-qure-content', 'get-qure-box');
  applyEqualHeight('filter-card-item', 'trusted_video_card ');
  applyEqualHeight('qure__eqBox-child', 'qure__eqBox-parent', 'eq__height');
  applyEqualHeight('cp__compare-content', 'compare_listRow', 'cp__height');
  
const container = document.querySelector('.cp__heading-box');
const ptRow = document.querySelector('.compare_listRow');

if (container) {
  const itemCount = container.querySelectorAll('.cp__heading-item').length;
  ptRow.style.setProperty('--item-count', itemCount);
}



// header and announcement js 
const siteHeader = document.getElementById("site-header");
const announcement = document.getElementById("announcement-bar");
if (siteHeader && announcement) {
    siteHeader.parentNode.insertBefore(announcement, siteHeader);
}
// header and announcement js end 

  