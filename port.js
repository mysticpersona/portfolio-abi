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


const slider = document.querySelector('.slider');

function scrollToLeft() {
    slider.scrollBy({
        left: -320,
        behavior: 'smooth'
    });
}

function scrollToRight() {
    slider.scrollBy({
        left: 320,
        behavior: 'smooth'
    });
}
