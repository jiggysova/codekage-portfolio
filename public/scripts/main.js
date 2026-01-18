document.addEventListener("DOMContentLoaded", () => {
  let selectedTech = "all";
const savedTech = localStorage.getItem("selectedTech");
if (savedTech) selectedTecch = savedTech;

  const button = document.getElementById("view-projects");
  const projectsSection = document.getElementById("projects");
  const portfolio = document.getElementById("portfolio");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!projectsSection || !portfolio) return;

  const projects = [
    { name: "AI Assistant", tech: "Azure", link: "#" },
    { name: "CyberSecurity Dashboard", tech: "Cisco", link: "#" },
  ];

  if (button) {
    button.addEventListener("click", () => {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  function getFilteredProjects() {
    if (selectedTech === "all") return projects;
    return projects.filter((project) => project.tech === selectedTech);
  }

  function renderProjects(list) {
    portfolio.innerHTML = "";

    if (list.length == 0) {
      const msg = document.createElement("p");
      msg.textContent = "No projects found for theis filter.";
      portfolio.appendChild(msg);
      return;
    }

    list.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project-card");

      const title = document.createElement("h3");
      title.textContent = project.name;
      title.classList.add("project-title");
      projectDiv.appendChild(title);

      const tech = document.createElement("p");
      tech.textContent = "Tech: " + project.tech;
      tech.classList.add("project-tech");
      projectDiv.appendChild(tech);

      const link = document.createElement("a");
      link.textContent = "View Project";
      link.href = project.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.add("project-link");
      projectDiv.appendChild(link);

      portfolio.appendChild(projectDiv);
    });
  }

  function updateActiveFilterButton() {
    filterButtons.forEach((btn) => {
      const isActive = btn.dataset.tech === selectedTech;
      btn.classList.toggle("active", isActive);
    });
  }

  // Initial render
  renderProjects(getFilteredProjects());
  updateActiveFilterButton();

  // Wire up filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedTech = btn.dataset.tech;
      localStorage.setItem("selectedTech", selectedTech);
      renderProjects(getFilteredProjects());
      updateActiveFilterButton();
    });
  });
});
