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

let indexImage = 0;

const renderProject = () => {
  const mainEl = document.getElementById("main");
  const project = projects.find((p) => p.name === nameProject);

  const projectHtml = `
  <section class="project-info-container">
  ${
    project.images.length > 1
      ? `
      <section class="carousell">
        <button class="btn-carousell back" id="btn-back"><ion-icon name="caret-back-outline"></ion-icon></button>
            <img class="banner-project-img relative" src=${project.images[indexImage]} src="imagen de ${project.name}" />
         <button class="btn-carousell next" id="btn-next"><ion-icon name="caret-forward-outline"></ion-icon></button>
      </section>
    `
      : `<img class="banner-project-img" src=${project.images[0]} src="imagen de ${project.name}" />`
  }
    
    <section class="project-data">
      <h2>${project.name}</h2>
      <p class="project-resume">${project?.resume}</p>
      <h2>Tecnologias utilizadas</h2>
      <section class="card-tec">
        ${project.technologies
          .map((tec) => {
            return ` <img src="./images/${imageTecnology(
              tec
            )}.png" alt="tailwind-logo"/>`;
          })
          .join(" ")}
      </section>
      <h2>Mira el proyecto</h2>
      <div class="project-links">
      ${
        project.deploy
          ? `<a class="project-info-a deploy" href=${project.deploy} target="_blank" rel="noopener noreferrer">
        🌐 Ver Deploy
        </a>`
          : ""
      }
      ${
        project.repository.length > 1
          ? `<a class="project-info-a repository" href=${project.repository[0]} target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-github"></ion-icon> Ver Código Frontend
        </a> 
        <a class="project-info-a repository" href=${project.repository[1]} target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-github"></ion-icon> Ver Código Backend
        </a>`
          : `<a class="project-info-a repository" href=${project.repository} target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-github"></ion-icon> Ver Código
        </a> `
      }
      </div>
  </section>
  `;
  mainEl.innerHTML = projectHtml;

  const btnBackEl = document.getElementById("btn-back");
  const btnNextEl = document.getElementById("btn-next");

  btnBackEl.style.display = indexImage === 0 && "none";
  btnNextEl.style.display = indexImage === project.images.length - 1 && "none";

  btnBackEl?.addEventListener("click", () => {
    indexImage--;
    renderProject();
  });
  btnNextEl?.addEventListener("click", () => {
    indexImage++;
    renderProject();
  });
};

renderProject();
