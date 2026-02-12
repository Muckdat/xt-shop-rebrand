/**
 * XT-TRADE Landing Page – Custom JavaScript
 * Modules: HeroCarousel, ScrollAnimator, CategoryPopups, FlipCards
 */

(function () {
  'use strict';

  /* ============================================
     1. Hero Carousel – Fade transition, autoplay 8s
     ============================================ */
  var XTHeroCarousel = {
    current: 0,
    timer: null,
    delay: 8000,

    init: function () {
      this.slides = document.querySelectorAll('.xt-hero-slide');
      this.bullets = document.querySelectorAll('.xt-hero-bullet');
      if (!this.slides.length) return;

      this.goTo(0);
      this.startAutoplay();

      var self = this;
      this.bullets.forEach(function (bullet, idx) {
        bullet.addEventListener('click', function () {
          self.goTo(idx);
          self.resetAutoplay();
        });
      });
    },

    goTo: function (index) {
      this.slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === index);
      });
      this.bullets.forEach(function (bullet, i) {
        bullet.classList.toggle('active', i === index);
      });
      this.current = index;
    },

    next: function () {
      var nextIndex = (this.current + 1) % this.slides.length;
      this.goTo(nextIndex);
    },

    startAutoplay: function () {
      var self = this;
      this.timer = setInterval(function () {
        self.next();
      }, this.delay);
    },

    resetAutoplay: function () {
      clearInterval(this.timer);
      this.startAutoplay();
    }
  };

  /* ============================================
     2. Scroll Animator – Intersection Observer
     ============================================ */
  var XTScrollAnimator = {
    init: function () {
      var elements = document.querySelectorAll('[data-xt-animate]');
      if (!elements.length) return;

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = el.getAttribute('data-xt-delay') || 0;
            setTimeout(function () {
              el.classList.add('xt-visible');
            }, parseFloat(delay) * 1000);
            observer.unobserve(el);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      elements.forEach(function (el) {
        observer.observe(el);
      });
    }
  };

  /* ============================================
     3. Category Popups – hover (desktop) / click (mobile)
     ============================================ */
  var XTCategoryPopups = {
    init: function () {
      var cards = document.querySelectorAll('.xt-category-card');
      if (!cards.length) return;

      var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      cards.forEach(function (card) {
        var popup = card.querySelector('.xt-category-popup');
        if (!popup) return;

        if (isTouchDevice) {
          card.addEventListener('click', function (e) {
            // Don't toggle if clicking a link inside the popup
            if (e.target.closest('a')) return;

            var isVisible = popup.classList.contains('xt-popup-visible');
            // Close all other popups first
            document.querySelectorAll('.xt-category-popup.xt-popup-visible').forEach(function (p) {
              p.classList.remove('xt-popup-visible');
            });
            if (!isVisible) {
              popup.classList.add('xt-popup-visible');
            }
          });
        } else {
          card.addEventListener('mouseenter', function () {
            popup.classList.add('xt-popup-visible');
          });
          card.addEventListener('mouseleave', function () {
            popup.classList.remove('xt-popup-visible');
          });
        }
      });

      // Close popups when clicking outside (touch)
      if (isTouchDevice) {
        document.addEventListener('click', function (e) {
          if (!e.target.closest('.xt-category-card')) {
            document.querySelectorAll('.xt-category-popup.xt-popup-visible').forEach(function (p) {
              p.classList.remove('xt-popup-visible');
            });
          }
        });
      }
    }
  };

  /* ============================================
     4. Flip Cards – CSS :hover (desktop) + click toggle (mobile)
     ============================================ */
  var XTFlipCards = {
    init: function () {
      var cards = document.querySelectorAll('.xt-flip-card');
      if (!cards.length) return;

      var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      if (isTouchDevice) {
        cards.forEach(function (card) {
          card.addEventListener('click', function () {
            card.classList.toggle('xt-flipped');
          });
        });
      }
    }
  };

  /* ============================================
     5. Header Scroll – Transparent on landing, white on scroll
     ============================================ */
  var XTHeaderScroll = {
    header: null,
    topBar: null,
    isLanding: false,
    menuOpen: false,
    bgElements: [],

    init: function () {
      this.header = document.getElementById('jtl-nav-wrapper');
      if (!this.header) return;

      this.topBar = document.getElementById('header-top-bar');
      this.isLanding = !!document.querySelector('.xt-landing');

      this.collectBgElements();
      this.protectLogos();

      if (this.isLanding) {
        this.header.classList.add('xt-header-transparent');
        if (this.topBar) this.topBar.classList.add('xt-header-transparent');
      }

      this.applyState();
      this.bindScroll();
      this.bindMegaMenu();

      // Re-apply after CSS loads asynchronously (preload pattern)
      var self = this;
      window.addEventListener('load', function () {
        self.collectBgElements();
        self.protectLogos();
        self.applyState();
      });

      // Safety retries: catch late-loading CSS or JS that overrides styles
      setTimeout(function () { self.applyState(); self.protectLogos(); }, 500);
      setTimeout(function () { self.applyState(); self.protectLogos(); }, 1500);
    },

    // Collect ALL elements inside header that might have backgrounds
    collectBgElements: function () {
      this.bgElements = [this.header];
      var innerEls = this.header.querySelectorAll('div, nav, .navbar, .container, .container-fluid, .container-fluid-xl, .hide-navbar, .topbar-wrapper');
      for (var i = 0; i < innerEls.length; i++) {
        this.bgElements.push(innerEls[i]);
      }
      if (this.topBar) {
        this.bgElements.push(this.topBar);
        var topBarInner = this.topBar.querySelectorAll('div, nav, ul');
        for (var j = 0; j < topBarInner.length; j++) {
          this.bgElements.push(topBarInner[j]);
        }
      }
    },

    // Prevent NOVA lazy loading from hiding our logos
    protectLogos: function () {
      var logos = document.querySelectorAll('.xt-logo');
      for (var i = 0; i < logos.length; i++) {
        logos[i].classList.remove('lazyload');
        logos[i].classList.add('lazyloaded');
        logos[i].style.setProperty('opacity', '1', 'important');
      }
    },

    // Set inline styles directly – overrides any CSS
    setTransparent: function () {
      for (var i = 0; i < this.bgElements.length; i++) {
        this.bgElements[i].style.setProperty('background', 'transparent', 'important');
        this.bgElements[i].style.setProperty('background-color', 'transparent', 'important');
      }
      this.header.style.setProperty('box-shadow', 'none', 'important');
    },

    setWhite: function () {
      for (var i = 0; i < this.bgElements.length; i++) {
        this.bgElements[i].style.setProperty('background', '#ffffff', 'important');
        this.bgElements[i].style.setProperty('background-color', '#ffffff', 'important');
      }
      this.header.style.setProperty('box-shadow', '0 4px 6px -1px rgba(0,0,0,0.1)', 'important');
    },

    clearInlineStyles: function () {
      for (var i = 0; i < this.bgElements.length; i++) {
        this.bgElements[i].style.removeProperty('background');
        this.bgElements[i].style.removeProperty('background-color');
      }
      this.header.style.removeProperty('box-shadow');
    },

    applyState: function () {
      var scrolled = window.scrollY > 50;

      if (scrolled || this.menuOpen) {
        this.header.classList.add('xt-scrolled');
        if (this.topBar) this.topBar.classList.add('xt-scrolled');
        if (this.isLanding) {
          this.setWhite();
        }
      } else {
        this.header.classList.remove('xt-scrolled');
        if (this.topBar) this.topBar.classList.remove('xt-scrolled');
        if (this.isLanding) {
          this.setTransparent();
        }
      }
    },

    bindScroll: function () {
      var self = this;
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            self.applyState();
            ticking = false;
          });
          ticking = true;
        }
      });
    },

    bindMegaMenu: function () {
      if (!this.isLanding) return;

      var self = this;
      var dropdowns = this.header.querySelectorAll('.dropdown');

      dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
          self.menuOpen = true;
          self.applyState();
        });
        dropdown.addEventListener('mouseleave', function () {
          self.menuOpen = false;
          self.applyState();
        });
      });

      // Bootstrap collapse events for mobile menu
      var mainNav = document.getElementById('mainNavigation');
      if (mainNav && typeof $ !== 'undefined') {
        $(mainNav).on('show.bs.collapse', function () {
          self.menuOpen = true;
          self.applyState();
        });
        $(mainNav).on('hidden.bs.collapse', function () {
          self.menuOpen = false;
          self.applyState();
        });
      }
    }
  };

  /* ============================================
     6. Smooth Scroll for Anchor Links
     ============================================ */
  var XTSmoothScroll = {
    init: function () {
      document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
          var targetId = this.getAttribute('href').substring(1);
          var target = document.getElementById(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  };

  /* ============================================
     Initialize all modules on DOMContentLoaded
     ============================================ */
  document.addEventListener('DOMContentLoaded', function () {
    XTHeaderScroll.init();
    XTHeroCarousel.init();
    XTScrollAnimator.init();
    XTCategoryPopups.init();
    XTFlipCards.init();
    XTSmoothScroll.init();
  });

})();
