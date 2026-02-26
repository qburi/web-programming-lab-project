document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("assignment-track");

    const assignments = [
        { img: "./images/s1.png", link: "assignment1.html", title: "Assignment 1" },
        { img: "./images/s2.png", link: "assignment2.html", title: "Assignment 2" },
        { img: "./images/s3.png", link: "assignment3.html", title: "Assignment 3" },
        { img: "./images/s4.png", link: "assignment4.html", title: "Assignment 4" },
        { img: "./images/s5.png", link: "assignment5.html", title: "Assignment 5" },
        { img: "./images/s6.png", link: "assignment6.html", title: "Assignment 6" },
        { img: "./images/s7.png", link: "assignment7.html", title: "Assignment 7" },
        { img: "./images/s8.png", link: "assignment8.html", title: "Assignment 8" },
        { img: "./images/s9.png", link: "assignment9.html", title: "Assignment 9" },
        { img: "./images/s10.png", link: "assignment10.html", title: "Assignment 10" }
    ];

    // 1. Dynamically create the HTML for the original 10 cards
    assignments.forEach((assign) => {
        const li = document.createElement("li");

        // Utilizing Bootstrap classes for consistent styling
        li.innerHTML = `
            <a href="${assign.link}" class="card text-decoration-none text-white bg-dark border-secondary scroller-card">
                <img src="${assign.img}" class="card-img-top" alt="${assign.title}">
                <div class="card-body p-2 text-center">
                    <h6 class="card-title m-0">${assign.title}</h6>
                </div>
            </a>
        `;
        track.appendChild(li);
    });

    // 2. Force clone the entire set of 10 cards for the infinite loop
    const scrollerContent = Array.from(track.children);
    scrollerContent.forEach((item) => {
        const duplicate = item.cloneNode(true);
        duplicate.setAttribute("aria-hidden", "true"); // Hides from screen readers
        track.appendChild(duplicate);
    });
});