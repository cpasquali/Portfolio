import { projects } from "./data/projects.js";

const imageTecnology = (tec) => {
  return tec.startsWith("Api")
    ? "api"
    : tec.includes(".js")
    ? "Java-Script"
    : tec;
};

const renderProjects = () => {
  const projectsSectionEl = document.getElementById("projects");
  let projectsCard = projects
    .map((projects) => {
      return `
      <article class="projects-card">
        <img onclick="location.href='project-info.html?name=${
          projects.name
        }'" class="projects-image" src="${
        projects.images[0]
      }  " alt="foto de projectso ${projects.name} "/>
      <div class="card-info">
      <h2>${projects.name}</h2>
      <div class="card-tec">
        ${projects.technologies
          .map((tec) => {
            return ` <img src="./images/${imageTecnology(
              tec
            )}.png" alt="tailwind-logo"/>`;
          })
          .join(" ")}
      </div>
        <div class="btn-card-container">
          <a href="${
            projects.repository
          }" class="btn-card" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
          ${
            projects.hasOwnProperty("deploy")
              ? `<a href="${projects.deploy}" class="btn-card" target="_blank"><ion-icon name="globe-outline"></ion-icon
                ></a>`
              : ""
          }
        </div>
      </div>
      </article> 
  `;
    })
    .join(" ");
  projectsSectionEl.innerHTML = projectsCard;
};

renderProjects();

const serviceID = "service_pcvstt6";
const templateID = "template_dwy41t4";
const publicKey = "yKzh8RpzVSy0OquS5";

emailjs.init(publicKey);

const formEl = document.getElementById("formulario-contacto");

formEl.addEventListener("submit", async function (e) {
  e.preventDefault();
  const inputNameEl = document.getElementById("inputName");
  const inputTitleEl = document.getElementById("inputTitle");
  const inputMessageEl = document.getElementById("inputMessage");

  try {
    await emailjs.send(serviceID, templateID, {
      name: inputNameEl.value,
      title: inputTitleEl.value,
      message: inputMessageEl.value,
    });

    const messageSendEl = document.getElementById("message-send");
    messageSendEl.textContent = "Mensaje enviado con exito!!";
    setTimeout(() => {
      messageSendEl.textContent = "";
    }, 3000);
    formEl.reset();
  } catch (e) {
    console.error("EmailJS error:", e);
    alert(
      "Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo."
    );
  }
});

window.addEventListener("load", () => {
  document.querySelector(".fade-in").classList.add("loaded");
});
