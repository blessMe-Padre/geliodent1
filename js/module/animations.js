export const initAnimation = () => {
    const section1 = document.querySelector('.section-1');
    const section2 = document.querySelector('.section-2');
    const section3 = document.querySelector('.section-3');
    const section4 = document.querySelector('.section-4');
    const section5 = document.querySelector('.section-5');
    const section6 = document.querySelector('.section-6');
    const section7 = document.querySelector('.section-7');
    const section8 = document.querySelector('.section-8');
    const section9 = document.querySelector('.section-9');
    const section10 = document.querySelector('.section-10');
    const section11 = document.querySelector('.section-11');

    // Экраны
    const sectionAboutScreen1 = document.querySelector('.about-screen-1');
    const sectionAboutScreen2 = document.querySelector('.about-screen-2');
    const sectionAboutScreen3 = document.querySelector('.about-screen-3');
    const sectionAboutScreen4 = document.querySelector('.about-screen-4');
    const sectionAboutScreen5 = document.querySelector('.about-screen-5');
    const sectionAboutScreen6 = document.querySelector('.about-screen-6');
    const sectionAboutScreen7 = document.querySelector('.about-screen-7');
    // const sectionAboutScreen8 = document.querySelector('.about-screen-8');
    const sectionAboutScreen9 = document.querySelector('.about-screen-9');
    const sectionAboutScreen10 = document.querySelector('.about-screen-10');


    const sectionInfo = document.querySelector('.section-info');
    const sectionForClients = document.querySelector('.for-clients');
    const sectionCard = document.querySelector('.card');
    const sectionCardAbout = document.querySelector('.card-about');
    const sectionInfoSolo = document.querySelector('.info-solo');


    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    function moveToSection(sectionNumber) {
        const section = document.querySelector(`.section-${sectionNumber}`);
        if (section) {
            const sectionRect = section.getBoundingClientRect();
            window.scrollTo({
                top: sectionRect.top + window.scrollY,
                behavior: 'smooth'
            });
        }
    }

    function moveToScreen(sectionScreen) {
        const section = document.querySelector(`.about-screen-${sectionScreen}`);
        if (section) {
            const sectionRect = section.getBoundingClientRect();
            window.scrollTo({
                top: sectionRect.top + window.scrollY,
                behavior: 'smooth'
            });
        }
    }

    // ============анимация для секции info============
    if (section3) {
        if (window.innerWidth > 768) {
            let isAtStart3 = true;
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".info",
                    start: "top top",
                    end: "+=150%",
                    pin: true,
                    // markers: true,
                    scrub: true,
                    // onLeave: () => {
                    //     moveToSection(4);
                    // },
                    // onUpdate: (self) => {
                    //     isAtStart3 = self.progress === 0; // Обновляем флаг в зависимости от прогресса
                    //     if (isAtStart3 && self.direction === -1) {
                    //         console.log('скролл вверх');
                    //         moveToSection(2);
                    //     }
                    // }
                }
            });

            timeline.to(".info__sub-title wow fadeInUp", {
                color: "#ffffff",
            }, "start") // Начало анимации
                .to(".info__img", {
                    y: -180,
                    scale: 1.4,
                }, "start") // Начало анимации
                .to(".info-wrapper", {
                    y: 600,
                }, "start"); // Начало анимации
        }

    }

    // ======анимация для секции services =========================
    if (section4) {

        if (window.innerWidth > 768) {
            let isAtStart4 = true;
            const timeline1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services-view",
                    start: "top top",
                    end: "+=150%",
                    pin: true,
                    // markers: true,
                    scrub: true,
                }
            });

            timeline1.to(".opacity-06", {
                opacity: 1,
            })
                .to('.opacity-04', {
                    opacity: 1,
                })
                .to('.opacity-02', {
                    opacity: 1,
                })
                .to('.opacity-015', {
                    opacity: 1,
                })
                .to('.opacity-01', {
                    opacity: 1,
                })
                .to('.opacity-008', {
                    opacity: 1,
                })
                .to('.opacity-005', {
                    opacity: 1,
                })
        }
    }

    // ================ Анимация секции CARD ================
    if (sectionCard) {
        if (window.innerWidth > 768) {
            let isAtStart5 = true;
            const timelineCard = gsap.timeline({
                scrollTrigger: {
                    trigger: ".card",
                    start: "top top",
                    end: "+=150%",
                    pin: true,
                    // markers: true,
                    scrub: true,
                }
            });

            timelineCard.to(".card__img", {
                y: -80,
                scale: 1.4,
            }, "start");
        }
    }
    // ================ Анимация секции CARD-ABOUT ================
    if (sectionCardAbout) {
        if (window.innerWidth > 768) {
            let isAtStartAbout = true;

            const timelineCardAbout = gsap.timeline({
                scrollTrigger: {
                    trigger: ".card-about",
                    start: "top top",
                    end: "+=150%",
                    pin: true,
                    // markers: true,
                    scrub: true,
                }
            });

            timelineCardAbout.to(".card__img", {
                y: -80,
                scale: 1.4,
            }, "start");
        }
    }

    // ============анимация для секции наши клиенты главная============
    if (document.querySelector(".our-clients__wrapper")) {
        const timelineScroll = gsap.timeline({
            scrollTrigger: {
                trigger: ".our-clients__wrapper",
                start: "top-=100 top",
                end: () => "+=" + document.querySelector(".our-clients__list").scrollWidth + "px",
                pin: true,
                // markers: true,
                scrub: true,
            }
        });

        timelineScroll.to(".our-clients__list", {
            x: () => -(document.querySelector(".our-clients__list").scrollWidth - document.querySelector(".our-clients__wrapper").offsetWidth),
        }, "start");
    }

    // ============анимация для секции наши клиенты - о компании============
    if (document.querySelector(".our-clients__wrapper-about")) {
        let isAtStartClientsAbout = true;
        const timelineScroll = gsap.timeline({
            scrollTrigger: {
                trigger: ".our-clients__wrapper-about",
                start: "top-=100 top",
                end: () => "+=" + document.querySelector(".our-clients__list").scrollWidth + "px",
                pin: true,
                scrub: true,
                onLeave: ({ direction }) => {
                    if (direction === 1) {
                        moveToScreen(9);
                    }
                },
                onUpdate: (self) => {
                    isAtStartClientsAbout = self.progress === 0; // Обновляем флаг в зависимости от прогресса
                    if (isAtStartClientsAbout && self.direction === -1) {
                        console.log('скролл вверх');
                        moveToScreen(7);
                    }
                }

            }
        });

        timelineScroll.to(".our-clients__list", {
            x: () => -(document.querySelector(".our-clients__list").scrollWidth - document.querySelector(".our-clients__wrapper-about").offsetWidth),
        }, "start");
    }

    // ============анимация для секции section-info============
    if (sectionInfo) {
        const timelineInfo = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-info",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
            }
        });

        timelineInfo.to(".info__sub-title wow fadeInUp", {
            color: "#ffffff",
        }, "start") // Начало анимации
            .to(".info__img", {
                y: -80,
                scale: 1.4,
            }, "start") // Начало анимации
            .to(".info-wrapper", {
                y: 600,
            }, "start"); // Начало анимации
    }

    // ============анимация для секции for-client============
    if (sectionForClients) {
        if (window.innerWidth > 620) {
            const timelineForClients = gsap.timeline({
                scrollTrigger: {
                    trigger: ".for-clients",
                    start: "bottom bottom",
                    end: "+=150%",
                    // markers: true,
                    pin: true,
                    scrub: true,
                    onEnter: playVideo,
                    onLeave: pauseVideo,
                }
            });

            timelineForClients.to(".for-clients-video", {
                y: 30,
                scale: 1.3,
            });

            function playVideo() {
                document.addEventListener('scroll', () => {
                    const video = document.querySelector('.for-clients-video');
                    if (video) {
                        video.play().catch((error) => {
                            console.log("Автовоспроизведение заблокировано. Ожидание взаимодействия пользователя.");
                        });
                    }
                }, { once: true });
            }

            function pauseVideo() {
                const video = document.querySelector('.for-clients-video');
                if (video) {
                    video.pause();
                }
            }
        }
    }


    // Инициализация ScrollTrigger для каждого секции
    document.querySelectorAll('.pin').forEach((section) => {
        ScrollTrigger.create({
            trigger: section, // Элемент, который будет триггером (секция)
            pin: true, // Закрепить (приклеить) эту секцию
            start: "top top", // Закрепление начнется, когда верх секции достигнет верхней части окна просмотра (viewport)
            end: "bottom top", // Закрепление закончится, когда низ секции достигнет верхней части окна просмотра
            pinSpacing: false, // Отключить добавление пространства между секциями, чтобы они оставались вплотную друг к другу
        });
    });


}

