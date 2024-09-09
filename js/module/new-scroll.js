export const initNewScroll = () => {

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const sections = document.querySelectorAll(".section");
    let currentSection = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length && !isScrolling) {
            isScrolling = true;
            currentSection = index;

            console.log(currentSection + 1);

            gsap.to(window, {
                scrollTo: { y: sections[index], autoKill: false },
                delay: 0,
                duration: 0.1,
                ease: "none",
                onComplete: () => {
                    isScrolling = false;
                    if (currentSection === 2) {
                        removeScrollListener();
                    }
                    if (currentSection === 3) {
                        removeScrollListener();
                    }
                }
            });
        }
    }

    function handleWheel(event) {
        if (isScrolling) return;
        if (event.deltaY > 0) {
            scrollToSection(currentSection + 1);
        } else if (event.deltaY < 0) {
            scrollToSection(currentSection - 1);
        }
    }

    function removeScrollListener() {
        window.removeEventListener("wheel", handleWheel);
    }

    window.addEventListener("wheel", handleWheel);

    //=============================================================== 
}


