document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("assignment-track");

    const assignments = [
        { img: "./images/assignment 23.png", link: "./assignments/lab assignment 23/index.html", title: "Assignment 1" },
        { img: "./images/assignment 25.png", link: "./assignments/lab assignment 25/index.html", title: "Assignment 2" },
        { img: "./images/assignment 34.png", link: "./assignments/lab assignment 34/index.html", title: "Assignment 3" },
        { img: "./images/assignment 40.png", link: "./assignments/lab assignment 40/index.html", title: "Assignment 4" },
        { img: "./images/assignment 41.png", link: "./assignments/lab assignment 41/index.html", title: "Assignment 5" },
        { img: "./images/assignment 42.png", link: "./assignments/lab assignment 42/index.html", title: "Assignment 6" },
        { img: "./images/assignment 13.png", link: "./assignments/lab assignment 13/index.html", title: "Assignment 7" },
        { img: "./images/assignment 14.png", link: "./assignments/lab assignment 14/index.html", title: "Assignment 8" },
        { img: "./images/assignment 16.png", link: "./assignments/lab assignment 16/index.html", title: "Assignment 9" },
        { img: "./images/assignment 22.png", link: "./assignments/lab assignment 22/index.html", title: "Assignment 10" }
    ];

    assignments.forEach((assign) => {
        const li = document.createElement("li");

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

    const scrollerContent = Array.from(track.children);
    scrollerContent.forEach((item) => {
        const duplicate = item.cloneNode(true);
        duplicate.setAttribute("aria-hidden", "true");
        track.appendChild(duplicate);
    });
});