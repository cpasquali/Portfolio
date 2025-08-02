const proyects = [
  {
    nombre: "Landing Spotify",
    image: "./images/Landing-Spotify.jpeg",
    repositorio: "https://github.com/cpasquali/Landing-Spotify",
    tecnologias: ["HTML", "CSS"],
    deploy: "https://landing-spotify.vercel.app/",
  },
  {
    nombre: "Conifly",
    image: "./images/Conifly.jpeg",
    repositorio: "https://github.com/cpasquali/Conifly",
    tecnologias: ["HTML", "CSS", "SASS", "Bootstrap"],
    deploy: "https://conifly.netlify.app/",
  },
  {
    nombre: "Cinemania",
    image: "./images/Cinemania.jpeg",
    repositorio: "https://github.com/cpasquali/Cinemania",
    tecnologias: ["React", "CSS", "Tailwind", "Api TMDb"],
    deploy: "https://cinemania-umber.vercel.app/",
  },
  {
    nombre: "Pokeviewer",
    image: "./images/Pokeviewer.jpeg",
    repositorio: "https://github.com/cpasquali/Pokeviewer",
    tecnologias: ["React", "CSS", "Bootstrap", "Api Pokeapi"],
    deploy: "https://poke-viewer.vercel.app/",
  },
  {
    nombre: "Musical Instrument Simulator",
    image: "./images/Musical-Instrument-Simulator.jpeg",
    repositorio: "https://github.com/cpasquali/Musical-instrument-simulator",
    tecnologias: ["React", "CSS", "Tone.js"],
    deploy: "https://musical-instrument-simulator.vercel.app/",
  },
  {
    nombre: "RedditClone Backend",
    image: "./images/redditclone.jpeg",
    repositorio: "https://github.com/cpasquali/RedditClone-Backend",
    tecnologias: ["Csharp", "SqlServer"],
  },
];

const imageTecnology = (tec) => {
  return tec.startsWith("Api")
    ? "api"
    : tec.includes(".js")
    ? "Java-Script"
    : tec;
};

const renderProyects = () => {
  const proyectsSectionEl = document.getElementById("proyects");
  let proyectCard = proyects
    .map((proyect) => {
      return `
  <article class="proyect-card">
    <img class="proyect-image" src="${proyect.image}" alt="foto de proyecto ${
        proyect.nombre
      } ">
    <div class="card-info">
      <h2>${proyect.nombre}</h2>
      <div class="card-tec">
        ${proyect.tecnologias
          .map((tec) => {
            return ` <img src="./images/${imageTecnology(
              tec
            )}.png" alt="tailwind-logo"/>`;
          })
          .join(" ")}
      </div>
      <div class="btn-card-container">
        <a href="${
          proyect.repositorio
        }" class="btn-card" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
        ${
          proyect.hasOwnProperty("deploy")
            ? `<a href="${proyect.deploy}" class="btn-card" target="_blank"><ion-icon name="globe-outline"></ion-icon
              ></a>`
            : ""
        }
      </div>
    </div>
  </article>
  `;
    })
    .join(" ");
  proyectsSectionEl.innerHTML = proyectCard;
};

renderProyects();

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

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const menuEl = document.getElementById("menu");
  const navEl = document.getElementById("nav");
  if (menuEl.className.includes("active")) {
    menuEl.classList.remove("active");
    navEl.classList.remove("active");
  } else {
    menuEl.classList.add("active");
    navEl.classList.add("active");
  }
}

btnMobile.addEventListener("click", toggleMenu);
