import { projects } from "./data/projects.js";

const urlParams = new URLSearchParams(window.location.search);
const nameProject = urlParams.get("name");

const imageTecnology = (tec) => {
  return tec.startsWith("Api")
    ? "api"
    : tec.includes(".js")
    ? "Java-Script"
    : tec;
};

const renderProject = () => {
  const mainEl = document.getElementById("main");
  const project = projects.find((p) => p.name === nameProject);
  console.log(project.image);

  const projectHtml = `
  <section class="project-info-container">
    <img class="banner-project-img" src=${project.image} src="imagen de ${
    project.name
  }" />
    <section class="project-data">
      <h2>${project.name}</h2>
      <p>${project?.resume}</p>
      <h2>Tecnologias utilizadas</h2>
      <section class="card-tec">
        ${project.technologies
          .map((tec) => {
            return ` <img class="${
              tec === "expressjs" && "background-image"
            }" src="./images/${imageTecnology(tec)}.png" alt="tailwind-logo"/>`;
          })
          .join(" ")}
      </section>
    </section>
  </section>
  `;
  mainEl.innerHTML = projectHtml;
};

renderProject();
