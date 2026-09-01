
// CONFIGURACIÓN: cambia únicamente este número por el WhatsApp real de Rosh Ópticas.
// Debe escribirse con código de país, SIN "+" ni espacios. Ejemplo Guatemala: 50255555555
const WHATSAPP_NUMBER = "50200000000";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("active"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("active")));

// Carrusel
const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];
const prev = document.getElementById("prevSlide");
const next = document.getElementById("nextSlide");
let current = 0;
let auto;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle("active", i === current));
  dots.forEach((d, i) => d.classList.toggle("active", i === current));
}
function restartAuto() {
  clearInterval(auto);
  auto = setInterval(() => showSlide(current + 1), 6000);
}
prev.addEventListener("click", () => { showSlide(current - 1); restartAuto(); });
next.addEventListener("click", () => { showSlide(current + 1); restartAuto(); });
dots.forEach((d, i) => d.addEventListener("click", () => { showSlide(i); restartAuto(); }));
restartAuto();

// WhatsApp general
document.querySelectorAll(".wa-general").forEach(a => {
  a.href = waLink("Hola Rosh Ópticas, vi su página web y me gustaría recibir información sobre sus productos y servicios.");
});

document.querySelectorAll(".wa-promo-749").forEach(a => {
  a.href = waLink("Hola Rosh Ópticas, vi su promoción Todas las graduaciones Q749 y me gustaría conocer las condiciones y disponibilidad.");
});

document.querySelectorAll(".wa-transitions").forEach(a => {
  a.href = waLink("Hola Rosh Ópticas, vi en su página los lentes Transitions y me gustaría recibir más información y conocer disponibilidad.");
});

document.querySelectorAll(".wa-tenidos").forEach(a => {
  a.href = waLink("Hola Rosh Ópticas, vi Rosh Color’s en su página y me gustaría conocer colores, opciones y disponibilidad.");
});

document.querySelectorAll(".wa-referidos").forEach(a => {
  a.href = waLink("Hola Rosh Ópticas, ya compré con ustedes y me gustaría conocer cómo participar en el Programa de Referidos.");
});

document.querySelectorAll(".wa-catalogo").forEach(a => {
  a.href = waLink("Hola Rosh Ópticas, vi el catálogo de su página web. ¿Me pueden compartir más modelos disponibles?");
});

document.querySelectorAll(".wa-examen").forEach(a => {
  a.href = waLink("Hola Rosh Ópticas, vi en su página el servicio de exámenes visuales. Me gustaría consultar horarios, ubicación y disponibilidad.");
});

document.querySelectorAll(".wa-jornadas").forEach(a => {
  a.href = waLink("Hola Rosh Ópticas, vi en su página la información de Jornadas Empresariales. Me gustaría recibir información para coordinar una jornada para nuestra empresa.");
});

// Producto seleccionado
document.querySelectorAll(".product-card").forEach(card => {
  const button = card.querySelector(".product-wa");
  button.addEventListener("click", () => {
    const model = card.dataset.model;
    const message = `Hola Rosh Ópticas, vi en su página web el modelo ${model} y me interesa. ¿Me pueden confirmar disponibilidad, precio y opciones de graduación?`;
    window.open(waLink(message), "_blank", "noopener");
  });
});

// Promociones
document.querySelectorAll(".promo-wa").forEach(a => {
  const topic = a.dataset.topic;
  a.href = waLink(`Hola Rosh Ópticas, vi en su página información sobre ${topic}. Me gustaría conocer precio, condiciones y disponibilidad.`);
});
