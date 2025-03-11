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
    const slider = document.querySelector('.slider');
    slider.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollToRight() {
    const slider = document.querySelector('.slider');
    slider.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}
