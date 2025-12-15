document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("view-projects");
    const projects = document.getElementById("projects");

    if (!button || !projects) return;

    button.addEventListener("click", () => {
        projects.scrollIntoView({ behavior: "smooth" });
    });
});
