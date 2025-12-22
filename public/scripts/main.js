document.addEventListener("DOMContentLoaded", () => {
    const portfolio = document.getElementById("portfolio");
    if (!portfolio) return;
    const button = document.getElementById("view-projects");
    const projectsSection = document.getElementById("projects");
    
    const projects = [{ name: "AI Assistant", tech: "Azure", link: "gmail"}, 
        { name: "CyberSecurity Dashboard", tech: "Cisco", link: "Comptia A+"}      
    ];

    if (button) {
        button.addEventListener("click", () => {
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });
}


        projects.forEach((project) => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project-card");
            
            const title = document.createElement("h3");
            title.textContent = project.name;
            projectDiv.appendChild(title);
            title.classList.add("project-title");

            
            const tech = document.createElement("p");
            tech.textContent = "Tech: " + project.tech;
            projectDiv.appendChild(tech);
            tech.classList.add("project-tech");

            
            const link = document.createElement ("a");
            link.textContent = "View Project";
            link.href = project.link;
            projectDiv.appendChild(link);
            link.classList.add("project-link");

            portfolio.appendChild(projectDiv);
        });
    
});

    
        
        
     