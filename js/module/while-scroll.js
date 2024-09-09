export const initWhileScroll = () => {
    let isScrolling = false;
    let scrollTimeout;

    document.addEventListener('wheel', (event) => {
        if (isScrolling) return;

        isScrolling = true;
        clearTimeout(scrollTimeout);

        document.querySelector('html').classList.add('lock');

        const sections = document.querySelectorAll('.section');
        const sectionHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const currentIndex = Math.round(scrollPosition / sectionHeight);

        // добавляет активный класс к текущей секции
        // получает data-index всех секций
        sections.forEach((section, index) => {
            section.dataset.index = index;
            section.classList.remove('is-active');
        });

        let nextIndex;
        if (event.deltaY > 0) {
            nextIndex = currentIndex + 1;
        } else {
            nextIndex = currentIndex - 1;
        }

        if (nextIndex < 0) {
            nextIndex = 0;
        } else if (nextIndex >= sections.length) {
            nextIndex = sections.length - 1;
        }

        sections[nextIndex].classList.add('is-active');
        window.scrollTo({
            top: sections[nextIndex].offsetTop,
            behavior: 'smooth'
        });

        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 1000);  // Увеличенная задержка для уменьшения скорости прокрутки
    });

}