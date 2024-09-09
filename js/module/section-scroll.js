export const initSectionScroll = () => {
    let onScroll = true;
    let onSwipe = false;
    let offsetTop = 0;
    let xDown = null;
    let yDown = null;

    const updateActiveClass = (line) => {
        const sections = Array.from(line.children);
        const scrollBox = line.closest('.scroll_box');
        const scrollHeight = scrollBox.clientHeight;
        const activeIndex = Math.abs(offsetTop / scrollHeight);

        sections.forEach((section, index) => {
            section.classList.toggle('is-active', index === activeIndex);

            if (index === activeIndex) {
                section.classList.add('animated');
            }
        });
    };

    const handleScroll = (event) => {
        if (onScroll) {
            onScroll = false;
            const line = event.currentTarget;
            const scrollBox = line.closest('.scroll_box');
            const scrollHeight = scrollBox.clientHeight;
            const offsetTopMin = -(line.children.length - 1) * scrollHeight;
            const offsetTopMax = 0;

            if (event.deltaY > 0) {
                if (offsetTop <= offsetTopMin) {
                    onScroll = true;
                } else {
                    offsetTop -= scrollHeight;
                }
            } else {
                if (offsetTop >= offsetTopMax) {
                    onScroll = true;
                } else {
                    offsetTop += scrollHeight;
                }
            }

            line.style.top = `${offsetTop}px`;
            updateActiveClass(line);
        }
    };

    const handleTouchStart = (event) => {
        xDown = event.touches[0].clientX;
        yDown = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
        if (!xDown || !yDown) {
            return;
        }

        if (onScroll) {
            onScroll = false;
            const line = event.currentTarget;
            const scrollBox = line.closest('.scroll_box');
            const scrollHeight = scrollBox.clientHeight;
            const offsetTopMin = -(line.children.length - 1) * scrollHeight;
            const offsetTopMax = 0;

            const xDiff = xDown - event.touches[0].clientX;
            const yDiff = yDown - event.touches[0].clientY;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                onScroll = true;
            } else {
                if (yDiff > 0) {
                    if (offsetTop <= offsetTopMin) {
                        onScroll = true;
                    } else {
                        offsetTop -= scrollHeight;
                    }
                } else {
                    if (offsetTop >= offsetTopMax) {
                        onScroll = true;
                    } else {
                        offsetTop += scrollHeight;
                    }
                }

                line.style.top = `${offsetTop}px`;
                updateActiveClass(line);
            }
        }
    };

    const handleMouseDown = (event) => {
        onSwipe = true;
        xDown = event.clientX;
        yDown = event.clientY;
    };

    const handleMouseUp = () => {
        onSwipe = false;
    };

    const handleMouseMove = (event) => {
        if (onSwipe) {
            if (!xDown || !yDown) {
                return;
            }

            if (onScroll) {
                onScroll = false;
                const line = event.currentTarget;
                const scrollBox = line.closest('.scroll_box');
                const scrollHeight = scrollBox.clientHeight;
                const offsetTopMin = -(line.children.length - 1) * scrollHeight;
                const offsetTopMax = 0;

                const xDiff = xDown - event.clientX;
                const yDiff = yDown - event.clientY;

                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    onScroll = true;
                } else {
                    if (yDiff > 0) {
                        if (offsetTop <= offsetTopMin) {
                            onScroll = true;
                        } else {
                            offsetTop -= scrollHeight;
                        }
                    } else {
                        if (offsetTop >= offsetTopMax) {
                            onScroll = true;
                        } else {
                            offsetTop += scrollHeight;
                        }
                    }

                    line.style.top = `${offsetTop}px`;
                    updateActiveClass(line);
                }
            }
        }
    };

    const handleTransitionEnd = () => {
        onScroll = true;
    };

    document.querySelectorAll('.scroll_swipper').forEach((swipper) => {
        swipper.addEventListener('wheel', handleScroll);
        swipper.addEventListener('touchstart', handleTouchStart);
        swipper.addEventListener('touchmove', handleTouchMove);
        swipper.addEventListener('mousedown', handleMouseDown);
        swipper.addEventListener('mouseup', handleMouseUp);
        swipper.addEventListener('mousemove', handleMouseMove);
        swipper.addEventListener('transitionend', handleTransitionEnd);

        // Initialize the first section as active
        updateActiveClass(swipper);
    });
}

// scroll_box
//   scroll_swipper
//<section class="section">
//<div class="container"><h2>Экран 3</h2></div>
//</section>
//<section class="section">
//<div class="container"><h2>Экран 3</h2></div>
//</section>
//<section class="section">
//<div class="container"><h2>Экран 3</h2></div>
//</section>