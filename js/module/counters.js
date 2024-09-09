export const initCounter = () => {
    const newsSection = document.querySelector('.news-section--about');

    function counter(selector, minValue, maxValue, duration) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error('Элемент не найден');
            return;
        }

        const startTime = performance.now(); // Начальное время
        const range = maxValue - minValue;

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime; // Время, прошедшее с начала анимации
            const progress = Math.min(elapsed / duration, 1); // Прогресс анимации от 0 до 1
            const currentValue = Math.round(minValue + range * progress); // Текущее значение счётчика

            element.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(updateCounter); // Продолжить анимацию
            }
        }

        requestAnimationFrame(updateCounter); // Запустить анимацию
    }

    if (newsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counter('.news-section-counter-1', 1200, 2000, 2000);
                    counter('.news-section-counter-2', 6200, 8400, 2000);

                } else {
                    // entry.target.classList.remove('is-active');
                }
            });
        }, {
            // Настройки области видимости
            rootMargin: '-250px 0px 0px 0px',
            threshold: 0.7// Элемент считается видимым, если 50% его площади пересекается с областью обзора
        });

        observer.observe(newsSection);
    }
}