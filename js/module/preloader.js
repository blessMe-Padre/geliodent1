export const initPreloader = () => {

    const preloader = document.querySelector('.preloader');

    if (preloader) {

        const percentSpan = document.querySelector('.rings-percent');
        const body = document.querySelector('body');
        body.classList.add('lock');


        // записывает секунды в percentSpan
        let seconds = 0;
        const updatePercent = () => {
            seconds++;
            percentSpan.innerText = ` ${seconds} %`;
        };
        let timerId = setInterval(updatePercent, 30);

        // остановить запись через 3 секунд
        setTimeout(() => {
            clearInterval(timerId);
        }, 3000);
        setTimeout(() => {
            document.querySelector('.txt-loading').classList.add('txt-animate');
        }, 3000);
        setTimeout(() => {
            document.querySelector('.rings-wrapper').classList.add('hidden');
        }, 3200);
        setTimeout(() => {
            document.querySelector('.preloader').classList.add('hide');
            document.querySelector('body').classList.remove('lock');
        }, 4000);

    }
};