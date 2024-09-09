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
        let isAtStart3 = true;
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".info",
                start: "top top",
                end: "+=150%",
                pin: true,
                // markers: true,
                scrub: true,
                onLeave: () => {
                    moveToSection(4);
                },
                onUpdate: (self) => {
                    isAtStart3 = self.progress === 0; // Обновляем флаг в зависимости от прогресса
                    if (isAtStart3 && self.direction === -1) {
                        console.log('скролл вверх');
                        moveToSection(2);
                    }
                }
            }
        });

        timeline.to(".info__sub-title", {
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

    // ======анимация для секции services =========================
    if (section4) {
        let isAtStart4 = true;
        const timeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".services-view",
                start: "top top",
                end: "+=150%",
                pin: true,
                // markers: true,
                scrub: true,
                onLeave: ({ direction }) => {
                    if (direction === 1) {
                        moveToSection(5);
                        console.log('скролл вниз');
                    }
                },
                onUpdate: (self) => {
                    isAtStart4 = self.progress === 0; // Обновляем флаг в зависимости от прогресса
                    if (isAtStart4 && self.direction === -1) {
                        console.log('скролл вверх');
                        moveToSection(3);
                    }
                }
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

    // ================ Анимация секции CARD ================
    if (sectionCard) {
        let isAtStart5 = true;
        const timelineCard = gsap.timeline({
            scrollTrigger: {
                trigger: ".card",
                start: "top top",
                end: "+=150%",
                pin: true,
                // markers: true,
                scrub: true,
                onLeave: ({ direction }) => {
                    if (direction === 1) {
                        moveToSection(5);
                        // console.log('скролл вниз');
                    }
                },
                onUpdate: (self) => {
                    isAtStart5 = self.progress === 0; // Обновляем флаг в зависимости от прогресса
                    if (isAtStart5 && self.direction === -1) {
                        // console.log('скролл вверх');
                        moveToSection(3);
                    }
                }
            }
        });

        timelineCard.to(".card__img", {
            y: -80,
            scale: 1.4,
        }, "start");
    }
    // ================ Анимация секции CARD-ABOUT ================
    if (sectionCardAbout) {
        let isAtStartAbout = true;

        const timelineCardAbout = gsap.timeline({
            scrollTrigger: {
                trigger: ".card-about",
                start: "top top",
                end: "+=150%",
                pin: true,
                // markers: true,
                scrub: true,
                onLeave: ({ direction }) => {
                    if (direction === 1) {
                        moveToScreen(4);
                    }
                },
                onUpdate: (self) => {
                    isAtStartAbout = self.progress === 0; // Обновляем флаг в зависимости от прогресса
                    if (isAtStartAbout && self.direction === -1) {
                        console.log('скролл вверх');
                        moveToScreen(2);
                    }
                }
            }
        });

        timelineCardAbout.to(".card__img", {
            y: -80,
            scale: 1.4,
        }, "start");
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
    // if (document.querySelector(".our-clients__wrapper-about")) {
    //     let isAtStartClientsAbout = true;
    //     const timelineScroll = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".our-clients__wrapper-about",
    //             start: "top-=100 top",
    //             end: () => "+=" + document.querySelector(".our-clients__list").scrollWidth + "px",
    //             pin: true,
    //             scrub: true,
    //             onLeave: ({ direction }) => {
    //                 if (direction === 1) {
    //                     moveToScreen(9);
    //                 }
    //             },
    //             onUpdate: (self) => {
    //                 isAtStartClientsAbout = self.progress === 0; // Обновляем флаг в зависимости от прогресса
    //                 if (isAtStartClientsAbout && self.direction === -1) {
    //                     console.log('скролл вверх');
    //                     moveToScreen(7);
    //                 }
    //             }

    //         }
    //     });

    //     timelineScroll.to(".our-clients__list", {
    //         x: () => -(document.querySelector(".our-clients__list").scrollWidth - document.querySelector(".our-clients__wrapper-about").offsetWidth),
    //     }, "start");
    // }

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

        timelineInfo.to(".info__sub-title", {
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


    // Слушатели скролла для перехода по секциям

    let startY;

    if (section1) {
        section1.addEventListener('wheel', evt => moveToSection(evt.deltaY < 0 ? 1 : 2));
        section1.addEventListener('touchstart', (evt) => {
            startY = evt.touches[0].clientY;
        });

        section1.addEventListener('touchmove', (evt) => {
            const currentY = evt.touches[0].clientY;
            const deltaY = startY - currentY;
            if (deltaY < 0) {
                moveToSection(1);
            } else if (deltaY > 0) {
                moveToSection(2);
            }
            evt.preventDefault();
        });
    }

    if (section2) {
        section2.addEventListener('wheel', evt => moveToSection(evt.deltaY < 0 ? 1 : 3));

        section2.addEventListener('touchstart', (evt) => {
            startY = evt.touches[0].clientY;
        });

        section2.addEventListener('touchmove', (evt) => {
            const currentY = evt.touches[0].clientY;
            const deltaY = startY - currentY;
            if (deltaY < 0) {
                moveToSection(1);
            } else if (deltaY > 0) {
                moveToSection(3);
            }
            evt.preventDefault();
        });
    }

    if (section5) {
        section5.addEventListener('wheel', evt => moveToSection(evt.deltaY < 0 ? 4 : 6));
        section5.addEventListener('touchstart', (evt) => {
            startY = evt.touches[0].clientY;
        });
        section5.addEventListener('touchmove', (evt) => {
            const currentY = evt.touches[0].clientY;
            const deltaY = startY - currentY;
            if (deltaY < 0) {
                moveToSection(4);
            } else if (deltaY > 0) {
                moveToSection(6);
            }
            evt.preventDefault();
        });
    }

    if (section6) {
        section6.addEventListener('wheel', evt => moveToSection(evt.deltaY < 0 ? 5 : 7));
        section6.addEventListener('touchstart', (evt) => {
            startY = evt.touches[0].clientY;
        });
        section6.addEventListener('touchmove', (evt) => {
            const currentY = evt.touches[0].clientY;
            const deltaY = startY - currentY;
            if (deltaY < 0) {
                moveToSection(5);
            } else if (deltaY > 0) {
                moveToSection(7);
            }
            evt.preventDefault();
        });
    }

    if (section7) {
        section7.addEventListener('wheel', evt => moveToSection(evt.deltaY < 0 ? 6 : 8));
        section7.addEventListener('touchstart', (evt) => {
            startY = evt.touches[0].clientY;
        });
        section7.addEventListener('touchmove', (evt) => {
            const currentY = evt.touches[0].clientY;
            const deltaY = startY - currentY;
            if (deltaY < 0) {
                moveToSection(6);
            } else if (deltaY > 0) {
                moveToSection(8);
            }
            evt.preventDefault();
        });
    }

    if (section8) {
        section8.addEventListener('wheel', evt => moveToSection(evt.deltaY < 0 ? 7 : 9));
        section8.addEventListener('touchstart', (evt) => {
            startY = evt.touches[0].clientY;
        });
        section8.addEventListener('touchmove', (evt) => {
            const currentY = evt.touches[0].clientY;
            const deltaY = startY - currentY;
            if (deltaY < 0) {
                moveToSection(7);
            } else if (deltaY > 0) {
                moveToSection(9);
            }
            evt.preventDefault();
        });
    }

    if (section9) {
        section9.addEventListener('wheel', evt => moveToSection(evt.deltaY < 0 ? 8 : 10));
        section9.addEventListener('touchstart', (evt) => {
            startY = evt.touches[0].clientY;
        });
        section9.addEventListener('touchmove', (evt) => {
            const currentY = evt.touches[0].clientY;
            const deltaY = startY - currentY;
            if (deltaY < 0) {
                moveToSection(8);
            } else if (deltaY > 0) {
                moveToSection(10);
            }
            evt.preventDefault();
        });
    }

    if (section10) {
        section10.addEventListener('wheel', evt => moveToSection(evt.deltaY < 0 ? 9 : 11));
        section10.addEventListener('touchstart', (evt) => {
            startY = evt.touches[0].clientY;
        });
        section10.addEventListener('touchmove', (evt) => {
            const currentY = evt.touches[0].clientY;
            const deltaY = startY - currentY;
            if (deltaY < 0) {
                moveToSection(9);
            } else if (deltaY > 0) {
                moveToSection(11);
            }
            evt.preventDefault();
        });
    }

    if (section11) {
        section11.addEventListener('wheel', evt => {
            if (evt.deltaY < 0) {
                moveToSection(10);
            }
        });
    }

    if (sectionAboutScreen4) {
        sectionAboutScreen2.addEventListener('wheel', evt => moveToScreen(evt.deltaY < 0 ? 1 : 3));
        sectionAboutScreen4.addEventListener('wheel', evt => moveToScreen(evt.deltaY < 0 ? 3 : 5));
        sectionAboutScreen5.addEventListener('wheel', evt => moveToScreen(evt.deltaY < 0 ? 4 : 6));
        sectionAboutScreen6.addEventListener('wheel', evt => moveToScreen(evt.deltaY < 0 ? 5 : 7));
        sectionAboutScreen7.addEventListener('wheel', evt => moveToScreen(evt.deltaY < 0 ? 6 : 8));

        // sectionAboutScreen8.addEventListener('wheel', evt => moveToScreen(evt.deltaY < 0 ? 7 : 9));
        // sectionAboutScreen9.addEventListener('wheel', evt => moveToScreen(evt.deltaY < 0 ? 8 : 10));
    }
}

