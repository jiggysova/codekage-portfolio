document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("view-projects");

  if (!button) return;

  button.addEventListener("click", () => {
    alert("Projects dropping soon. Stay locked in.");
  });
});
