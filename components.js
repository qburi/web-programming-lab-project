document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("navbar-placeholder");

    // Get the base path we set in the HTML, default to "." if missing
    const basePath = placeholder.getAttribute("data-basepath") || ".";

    // Fetch the navbar relative to the current file's depth
    fetch(`${basePath}/navbar.html`)
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch navbar");
            return response.text();
        })
        .then(htmlData => {
            // Find every instance of %BASE% in the navbar and replace it with the correct relative path
            const updatedHtml = htmlData.replace(/%BASE%/g, basePath);
            placeholder.innerHTML = updatedHtml;
        })
        .catch(error => console.error("Error loading navbar:", error));
});