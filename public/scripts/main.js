document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("view-projects");
    const projects = document.getElementById("projects");
    
    const projects = [{ name: "AI Assistant", tech: "Azure", link: "gmail"}, 
        { name: "CyberSecurity Dashboard", tech: "Cisco", link: "Comptia A+"}      
    ];

    if (button) {
        button.addEventListener("click", () => {
        projects.scrollIntoView({ behavior: "smooth" });
    });
}


        projects.forEach((project) => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project-card");
            
            const title = document.createElement("h3");
            title.textContent = project.name;
            projectDiv.appendChild(title);
            projectDiv.classList.add("project-title");

            
            const tech = document.createElement("p");
            tech.textContent = "Tech" + project.tech;
            projectDiv.appendChild(tech);
            projectDiv.classList.add("project-tech");

            
            const link = document.createElement ("a");
            link.textContent = "View Project" + project.link;
            project.appendChild(link);
            projectDiv.classList.add("project.link");

            portfolio.appendChild(projectDiv);
        });
    
});

    
        
        
     