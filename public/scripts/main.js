document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("view-projects");
    const projects = document.getElementById("projects");

    if (!button || !projects) return;

    button.addEventListener("click", () => {
        projects.scrollIntoView({ behavior: "smooth" });
    });
});

    const projects = [{ name: "AI Assistant", tech: "Azure", link: "gmail"}, { name: "CyberSecurity Dashboard", tech: "Cisco", link: "Comptia A+"}      
    ];
        projects.forEach((project) => {
            console.log(project);
        });
        
     