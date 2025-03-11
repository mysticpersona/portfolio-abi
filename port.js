document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll(".animate");

    paragraphs.forEach((p, pIndex) => {
        const text = p.innerText;
        p.innerHTML = ""; // Clear the original text

        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
            span.textContent = char;
            p.appendChild(span);

            // Apply animation with delay for each letter
            setTimeout(() => {
                span.classList.add("show");
            }, index * 100 + pIndex * 1000); // Delay based on letter position and paragraph index
        });
    });
});


function scrollToLeft() {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const scrollAmount = 320; // Adjust this value based on how much you want to scroll each time

    // Scroll left by the specified amount
    scrollWrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}

function scrollToRight() {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const scrollAmount = 320; // Adjust this value based on how much you want to scroll each time

    // Scroll right by the specified amount
    scrollWrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

