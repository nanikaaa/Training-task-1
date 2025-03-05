document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const cards = document.querySelectorAll(".carousel-track .card");

    const cardWidth = cards[0].offsetWidth; // Get one card's width
    const totalCards = cards.length;

    // Ensure that the first and last items appear in the correct place at the start
    track.style.transform = `translateX(-${cardWidth / 2}px)`;

    function moveNext() {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${cardWidth * 1.5}px)`;

        setTimeout(() => {
            track.appendChild(track.firstElementChild); // Move first card to the end
            track.style.transition = "none";
            track.style.transform = `translateX(-${cardWidth / 2}px)`; // Reset position
        }, 500);
    }

    function movePrev() {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(${cardWidth / 2}px)`;

        setTimeout(() => {
            track.prepend(track.lastElementChild); // Move last card to the front
            track.style.transition = "none";
            track.style.transform = `translateX(-${cardWidth / 2}px)`; // Reset position
        }, 500);
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);
});

document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".review-track");
    const prevBtn = document.querySelector(".review-prev");
    const nextBtn = document.querySelector(".review-next");
    const images = document.querySelectorAll(".review-track img");

    const imgWidth = images[0].offsetWidth; // Get image width
    const totalImages = images.length;

    // Initial position: slightly offset to show half of the first & last images
    track.style.transform = `translateX(-${imgWidth / 2}px)`;

    function moveNext() {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${imgWidth * 1.5}px)`;

        setTimeout(() => {
            track.appendChild(track.firstElementChild); // Move first image to end
            track.style.transition = "none";
            track.style.transform = `translateX(-${imgWidth / 2}px)`; // Reset position
        }, 500);
    }

    function movePrev() {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(${imgWidth / 2}px)`;

        setTimeout(() => {
            track.prepend(track.lastElementChild); // Move last image to front
            track.style.transition = "none";
            track.style.transform = `translateX(-${imgWidth / 2}px)`; // Reset position
        }, 500);
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);
});
