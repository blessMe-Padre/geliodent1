import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";
import { initCurrentYear } from "./module/current-year.js";

import { initScroll } from "./module/scroll.js";
import { initPreloader } from "./module/preloader.js";
import { initSectionScroll } from "./module/section-scroll.js";
import { initNewScroll } from "./module/new-scroll.js";
import { initAnimation } from "./module/animations.js";
import { initPopup } from "./module/popup.js";
import { initVideo } from "./module/video.js";
import { initAccordions } from "./module/accordions.js";
import { initObservers } from "./module/observers.js";
import { initAnimateText } from "./module/animate-text.js";
import { initCounter } from "./module/counters.js";


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initSlider();
    initCurrentYear();
    initPopup();

    // initScroll();
    // baguetteBox.run('.gallery-wrapper');
    // initNewScroll();

    initPreloader();
    initSectionScroll();
    initAnimation();
    initVideo();
    initAccordions();
    initObservers();
    initAnimateText();
    initCounter();

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        if (scrollTop >= 50) {
            header.classList.add('shadow-filter-1');
        } else {
            header.classList.remove('shadow-filter-1');
        }
    });

    const scrollButtonDown = document.querySelector('.three-scroll-button');

    if (scrollButtonDown) {
        const threeSection = document.querySelector('.three');
        const threeSectionHeight = threeSection.offsetHeight;

        window.addEventListener('scroll', () => {
            if (window.scrollY > threeSectionHeight) {
                scrollButtonDown.style.display = 'none';
            } else {
                scrollButtonDown.style.display = 'block';
            }
        });
    }

    // DOMContentLoaded
});
