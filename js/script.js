document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const icon = hamburger.querySelector("i");

    hamburger.addEventListener("click", function () {
        if (mobileNav.style.display === "flex") {
            mobileNav.style.display = "none";
            icon.classList.remove("fa-times"); // Change back to bars icon
            icon.classList.add("fa-bars");
        } else {
            mobileNav.style.display = "flex";
            icon.classList.remove("fa-bars"); // Change to X icon
            icon.classList.add("fa-times");
        }
    });

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.style.display = "none";
            icon.classList.remove("fa-times"); // Reset to bars when menu is closed
            icon.classList.add("fa-bars");
        }
    });

    // Carousel Functionality
    function setupCarousel(wrapperSelector, trackSelector, prevBtnSelector, nextBtnSelector) {
        const wrapper = document.querySelector(wrapperSelector);
        if (!wrapper) return;

        const track = wrapper.querySelector(trackSelector);
        const prevBtn = wrapper.querySelector(prevBtnSelector);
        const nextBtn = wrapper.querySelector(nextBtnSelector);
        const images = wrapper.querySelectorAll(`${trackSelector} img`);

        if (!track || !prevBtn || !nextBtn || images.length === 0) return;

        let index = 0;
        let imgWidth = images[0].offsetWidth;
        let visibleImages = window.innerWidth < 768 ? 1 : 3; // Show 1 image on mobile, 3 on desktop

        function updateSlidePosition() {
            imgWidth = images[0].offsetWidth;
            visibleImages = window.innerWidth < 768 ? 1 : 3;
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(-${index * imgWidth}px)`;
        }

        function moveNext() {
            if (index < images.length - visibleImages) {
                index++;
            } else {
                index = 0;
            }
            updateSlidePosition();
        }

        function movePrev() {
            if (index > 0) {
                index--;
            } else {
                index = images.length - visibleImages;
            }
            updateSlidePosition();
        }

        nextBtn.addEventListener("click", moveNext);
        prevBtn.addEventListener("click", movePrev);
        window.addEventListener("resize", updateSlidePosition);

        // Initial positioning
        updateSlidePosition();
    }

    setupCarousel(".carousel-slider-section", ".carousel-track", ".carousel-prev", ".carousel-next");
});