document.addEventListener("DOMContentLoaded", function () {
    function setupCarousel(wrapperSelector, trackSelector, prevBtnSelector, nextBtnSelector) {
        const wrapper = document.querySelector(wrapperSelector);
        if (!wrapper) return;

        const track = wrapper.querySelector(trackSelector);
        const prevBtn = wrapper.querySelector(prevBtnSelector);
        const nextBtn = wrapper.querySelector(nextBtnSelector);
        const images = wrapper.querySelectorAll(`${trackSelector} img`);

        if (!track || !prevBtn || !nextBtn || images.length === 0) return;

        const imgWidth = images[0].offsetWidth;

        track.style.transform = `translateX(-${imgWidth / 2}px)`;

        function moveNext() {
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(-${imgWidth * 1.5}px)`;

            setTimeout(() => {
                track.appendChild(track.firstElementChild); 
                track.style.transition = "none";
                track.style.transform = `translateX(-${imgWidth / 2}px)`;
            }, 500);
        }

        function movePrev() {
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(${imgWidth / 2}px)`;

            setTimeout(() => {
                track.prepend(track.lastElementChild); 
                track.style.transition = "none";
                track.style.transform = `translateX(-${imgWidth / 2}px)`;
            }, 500);
        }

        nextBtn.addEventListener("click", moveNext);
        prevBtn.addEventListener("click", movePrev);
    }
    setupCarousel(".carousel-slider-section", ".carousel-track", ".carousel-prev", ".carousel-next");
});