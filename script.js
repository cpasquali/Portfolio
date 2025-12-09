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

const renderProjects = () => {
  const projectsSectionEl = document.getElementById("projects");
  let projectsCards = projects.map(projectCard).join(" ");
  projectsSectionEl.innerHTML = projectsCards;
};

const projectCard = (project) => {
  return `
      <article class="projects-card">
        <img class="projects-image" src="${
          project.image
        }  " alt="foto de projectso ${project.name} "/>
      <div class="card-info">
        <h2>${project.name}</h2>
        <div class="card-tec">
        ${project.technologies
          .map((tec) => {
            return `<p class="lenjuage-card project">${tec}</p>`;
          })
          .join(" ")}
        </div>
          <div class="btn-card-container">
                    ${
                      project.hasOwnProperty("deploy")
                        ? `<a href="${project.deploy}" class="btn-card" target="_blank"><ion-icon name="globe-outline"></ion-icon
                >Visitar</a>`
                        : ""
                    }
          <a href="${
            project.repository
          }" class="btn-card" target="_blank"><ion-icon name="logo-github"></ion-icon> Repositorio</a>

          </div>
        </div>
      </article> 
  `;
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

const menuDesktopEl = document.getElementById("menu");

menuDesktopEl.addEventListener("click", (e) => {});
