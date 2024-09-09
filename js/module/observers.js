export const initObservers = () => {
    const price = document.querySelector('.prices');

    if (price) {
        const listItems = document.querySelectorAll('.prices__item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                } else {
                    // entry.target.classList.remove('is-active');
                }
            });
        }, {
            // Настройки области видимости
            rootMargin: '-250px 0px 0px 0px',
            threshold: 0.7// Элемент считается видимым, если 50% его площади пересекается с областью обзора
        });

        listItems.forEach(item => {
            observer.observe(item);
        });
    }

    // Observer секции news на странице about
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                } else {
                    entry.target.classList.remove('is-active');
                }
            });
        }, {
            // Настройки области видимости
            rootMargin: '-250px 0px 0px 0px',
            threshold: 0.7// Элемент считается видимым, если 50% его площади пересекается с областью обзора
        });

        observer.observe(aboutText);
    }

}