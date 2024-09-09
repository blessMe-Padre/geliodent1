export const initAnimateText = () => {

    const about = document.querySelector('.about');
    const calculateAbout = document.querySelector('.calculate-about');

    const spans = document.querySelectorAll('.about-text span');
    const calculateSpans = document.querySelectorAll('.calculate__title span');

    if (about) {

        spans.forEach((letter) => {
            letter.style.opacity = 0.1;
        });

        document.addEventListener('scroll', () => {
            const spans = document.querySelectorAll('.about-text span');
            const aboutTop = about.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const groupSize = 8; // Количество элементов в группе
            const scrollStep = 20; // Шаг прокрутки

            // Проверяем, находится ли блок в зоне видимости
            if (aboutTop < windowHeight) {
                const scrollY = window.scrollY;
                spans.forEach((span, index) => {
                    const groupIndex = Math.floor(index / groupSize);
                    span.dataset.groupIndex = groupIndex;
                    const groupVisibility = Math.floor(scrollY / scrollStep);

                    if (groupIndex <= groupVisibility) {
                        if (groupIndex === groupVisibility) {
                            // Если элемент в активной группе, задаем градиентную прозрачность
                            const itemIndexInGroup = index % groupSize;
                            const opacityStep = (0.9 - 0.1) / (groupSize - 1);
                            span.style.opacity = 0.9 - (opacityStep * itemIndexInGroup);
                        } else {
                            span.style.opacity = 1;
                        }
                    } else {
                        // Если группа за пределами видимости, устанавливаем opacity 0.1
                        span.style.opacity = 0.1;
                    }
                });
            }
        });
    }

    if (calculateAbout) {

        calculateSpans.forEach((letter) => {
            letter.style.opacity = 0.1;
        });

        document.addEventListener('scroll', () => {
            // Получаем все элементы <span> внутри элемента с классом .calculate__title
            const spans = document.querySelectorAll('.calculate__title span');
            // Получаем вертикальное положение верхней границы элемента calculateAbout относительно окна браузера
            const aboutTop = calculateAbout.getBoundingClientRect().top;
            // Получаем высоту окна браузера
            const windowHeight = window.innerHeight;

            // Устанавливаем размер группы элементов (по 8 элементов в группе)
            const groupSize = 8;
            // Устанавливаем шаг прокрутки для изменения видимости групп
            const scrollStep = 30;

            // Проверяем, находится ли элемент calculateAbout в видимой области окна
            if (aboutTop < windowHeight) {
                // Вычисляем смещение прокрутки относительно начала calculateAbout, корректируем на высоту окна и значение 600
                const sectionScrollY = window.scrollY - (calculateAbout.offsetTop - windowHeight) - 400;

                // Проходимся по всем элементам <span>
                spans.forEach((span, index) => {
                    // Определяем индекс группы для текущего элемента <span>
                    const groupIndex = Math.floor(index / groupSize);
                    span.dataset.groupIndex = groupIndex;

                    // Определяем, какая группа должна быть видимой в зависимости от прокрутки
                    const groupVisibility = Math.floor(sectionScrollY / scrollStep);

                    // Если индекс группы меньше или равен текущему видимому индексу группы
                    if (groupIndex <= groupVisibility) {
                        // Если группа совпадает с текущей видимой группой
                        if (groupIndex === groupVisibility) {
                            // Определяем индекс элемента внутри группы
                            const itemIndexInGroup = index % groupSize;
                            // Устанавливаем шаг изменения прозрачности от 0.9 до 0.1
                            const opacityStep = (0.9 - 0.1) / (groupSize - 1);
                            // Устанавливаем прозрачность для текущего элемента <span>
                            span.style.opacity = 0.9 - (opacityStep * itemIndexInGroup);
                        } else {
                            // Если группа полностью видима, устанавливаем максимальную прозрачность
                            span.style.opacity = 1;
                        }
                    } else {
                        // Если группа ещё не должна быть видима, устанавливаем минимальную прозрачность
                        span.style.opacity = 0.1;
                    }
                });
            }
        });


    }
};