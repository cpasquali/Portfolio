const proyects = [
  {
    nombre: "Landing Spotify",
    image: "./public/images/Landing-Spotify.jpeg",
    repositorio: "https://github.com/cpasquali/Landing-Spotify",
    tecnologias: ["HTML", "CSS"],
    deploy: "https://landing-spotify.vercel.app/",
  },
  {
    nombre: "Conifly",
    image: "./public/images/Conifly.jpeg",
    repositorio: "https://github.com/cpasquali/Conifly",
    tecnologias: ["HTML", "CSS", "SASS", "Bootstrap"],
    deploy: "https://conifly.netlify.app/",
  },
  {
    nombre: "Cinemania",
    image: "./public/images/Cinemania.jpeg",
    repositorio: "https://github.com/cpasquali/Cinemania",
    tecnologias: ["React", "CSS", "Tailwind", "Api TMDb"],
    deploy: "https://cinemania-umber.vercel.app/",
  },
  {
    nombre: "Pokeviewer",
    image: "./public/images/Pokeviewer.jpeg",
    repositorio: "https://github.com/cpasquali/Pokeviewer",
    tecnologias: ["React", "CSS", "Bootstrap", "Api Pokeapi"],
    deploy: "https://poke-viewer.vercel.app/",
  },
  {
    nombre: "Musical Instrument Simulator",
    image: "./public/images/Musical-Instrument-Simulator.jpeg",
    repositorio: "https://github.com/cpasquali/Musical-instrument-simulator",
    tecnologias: ["React", "CSS", "Tone.js"],
    deploy: "https://musical-instrument-simulator.vercel.app/",
  },
];

const imageTecnology = (tec) => {
  return tec.startsWith("Api")
    ? "Api"
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
            return ` <img src="./public/images/${imageTecnology(
              tec
            )}.png" alt="tailwind-logo"/>`;
          })
          .join(" ")}
      </div>
      <div class="btn-card-container">
        <a href="${
          proyect.deploy
        }" class="btn-card" target="_blank"><ion-icon name="globe-outline"></ion-icon></a>
        <a href="${
          proyect.repositorio
        }" class="btn-card" target="_blank"><ion-icon name="logo-github"></ion-icon
            ></a>
      </div>
    </div>
  </article>
  `;
    })
    .join(" ");
  proyectsSectionEl.innerHTML = proyectCard;
};

renderProyects();

const serviceID = "service_w7mdhlk";
const templateID = "template_54acddo";
const publicKey = "STrbs3B26pFLH6PFd";

emailjs.init(publicKey);

const formEl = document.getElementById("formulario-contacto");

formEl.addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    const response = await emailjs.sendForm(serviceID, templateID, this);
    alert("¡Mensaje enviado con éxito!", response);
    formEl.reset();
  } catch {
    alert(
      "Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo."
    );
  }
});

window.addEventListener("load", () => {
  document.querySelector(".fade-in").classList.add("loaded");
});

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
