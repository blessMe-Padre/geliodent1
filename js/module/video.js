export const initVideo = () => {

    const videos = document.querySelectorAll('.video');
    const images = document.querySelectorAll('.our-clients__item-img');

    images.forEach(img => {
        // получает предыдущий элемент
        const previousSibling = img.previousElementSibling;
        img.addEventListener('click', () => {
            previousSibling.play();

        });
    });

    videos.forEach((video) => {
        video.addEventListener('click', () => {
            video.play();
        });

        video.addEventListener('play', () => {
            video.parentElement.classList.remove('our-clients-item-mask');
            videos.forEach((v) => {
                if (v !== video) {
                    v.pause();
                    v.classList.remove('is-active');
                    v.parentElement.classList.remove('is-active');
                }
            });
            video.classList.add('is-active');
            video.parentElement.classList.add('is-active');
            video.setAttribute('controls', 'controls');
        });

        video.addEventListener('pause', () => {
            video.classList.remove('is-active');
            video.parentElement.classList.remove('is-active');
        });
    });


    // Управление видео на странице about
    const videoSection = document.querySelector('.video-about');
    if (videoSection) {
        const video = videoSection.querySelector('.video-about__video');
        const playButton = videoSection.querySelector('.video-about__play-btn');

        playButton.addEventListener('click', () => {
            video.setAttribute('controls', 'controls');
            video.play();
            playButton.style.display = 'none';
        });
    }


}
