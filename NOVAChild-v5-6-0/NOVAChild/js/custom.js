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
     5. Smooth Scroll for Anchor Links
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
    XTHeroCarousel.init();
    XTScrollAnimator.init();
    XTCategoryPopups.init();
    XTFlipCards.init();
    XTSmoothScroll.init();
  });

})();
