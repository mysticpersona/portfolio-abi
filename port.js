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


document.addEventListener("DOMContentLoaded", function() {
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const scrollAmount = 320; // Adjust based on card width + gap

    document.querySelector(".left-btn").addEventListener("click", function() {
        scrollWrapper.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    document.querySelector(".right-btn").addEventListener("click", function() {
        scrollWrapper.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});
