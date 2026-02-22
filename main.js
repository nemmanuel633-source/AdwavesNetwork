document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".slide-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active"); 
                // remove this line if you want animation only once
            }
        });
    }, {
        threshold: 0.3
    });

    elements.forEach(el => observer.observe(el));

});