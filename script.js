import { projects } from "./data/projects.js";
import { translations } from "./data/translations.js";

let currentLang = localStorage.getItem("lang") || "es";
const langEl = document.getElementById("lang");
const langMobileEl = document.getElementById("lang-mobile");

const changeLanguaje = (lang) => {
  document
    .querySelectorAll('a[href="#inicio"]')
    .forEach((el) => (el.textContent = translations[lang].home));
  document
    .querySelectorAll('a[href="#sobre-mi"]')
    .forEach((el) => (el.textContent = translations[lang].about));
  document
    .querySelectorAll('a[href="#projects"]')
    .forEach((el) => (el.textContent = translations[lang].projects));
  document
    .querySelectorAll('a[href="#contact"]')
    .forEach((el) => (el.textContent = translations[lang].contact));
  document
    .querySelectorAll('a[href="./docs/CV_Constantino_Pasquali.pdf"]')
    .forEach((el) => (el.textContent = translations[lang].more));

  langEl.textContent = translations[lang].lang;

  document.querySelector(".initial-banner h1").textContent =
    translations[lang].welcome;
  document.querySelector(".initial-banner p").textContent =
    translations[lang].intro;

  document.querySelector(".about-me h2").textContent =
    translations[lang].aboutTitle;
  document.querySelector(".about-me-p.one").textContent =
    translations[lang].aboutInfo1;
  document.querySelector(".about-me-p.two").textContent =
    translations[lang].aboutInfo2;

  document.querySelector(".lenguaje-container h2").textContent =
    translations[lang].lenguajesTitle;

  document.querySelector(".projects-container h2").textContent =
    translations[lang].projectsTitle;

  document.querySelector(".contact h2").textContent =
    translations[lang].contactTitle;
  document.getElementById("labelName").textContent =
    translations[lang].formName;
  document.getElementById("labelSubject").textContent =
    translations[lang].formSubject;
  document.getElementById("labelMessage").textContent =
    translations[lang].formMessage;
  document.querySelector(".btn-form").textContent = translations[lang].sendBtn;
};

langEl.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("lang", currentLang);
  changeLanguaje(currentLang);
});

langMobileEl.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("lang", currentLang);
  changeLanguaje(currentLang);
});

changeLanguaje(currentLang);

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

const btnNavbarEl = document.getElementById("btn-nav");
const menuEl = document.getElementById("menu-mobile");
btnNavbarEl.addEventListener("click", () => {
  if (menuEl.className.includes("active")) {
    menuEl.classList.remove("active");
  } else {
    menuEl.classList.add("active");
  }
});
