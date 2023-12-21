// Script.js

document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('.smooth-scroll');

    scrollLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const startTime = performance.now();
            const duration = 2000; // Set the duration to 2 seconds

            function scrollAnimation(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const ease = easeInOutQuad(progress);
                window.scrollTo(0, startPosition + distance * ease);

                if (elapsedTime < duration) {
                    requestAnimationFrame(scrollAnimation);
                }
            }

            function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }

            requestAnimationFrame(scrollAnimation);
        }
    }
});