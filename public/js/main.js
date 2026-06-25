/* =========================================================
   3Dk Impressões — JavaScript do front-end (site estático)
   ========================================================= */

// Número de WhatsApp para onde vão os pedidos (formato internacional, só dígitos)
const WHATSAPP = "5511940094766";

// Catálogo de serviços (montado no front)
const SERVICOS = [
  { icone: "◈", titulo: "Impressão 3D", descricao: "Produção de peças exclusivas sob encomenda, com acabamento profissional em diversos materiais e cores." },
  { icone: "✦", titulo: "Projetos Personalizados", descricao: "Desenvolvimento e modelagem 3D conforme a sua necessidade — da ideia ao arquivo pronto para impressão." },
  { icone: "⌂", titulo: "Decoração e Organização", descricao: "Produtos criativos para casa, escritório e presentes que unem design e funcionalidade." },
  { icone: "⚙", titulo: "Prototipagem Rápida", descricao: "Validação de protótipos funcionais com agilidade para o seu produto sair do papel mais rápido." },
];

// ---------- Menu mobile ----------
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");
  navToggle.classList.toggle("open", aberto);
  navToggle.setAttribute("aria-expanded", String(aberto));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- Ano no rodapé ----------
document.getElementById("ano").textContent = new Date().getFullYear();

// ---------- Animação de entrada ao rolar ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${Math.min(i * 80, 240)}ms`;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------- Monta os cards de serviços ----------
const containerServicos = document.getElementById("cardsServicos");
containerServicos.innerHTML = SERVICOS.map(
  (s) => `
    <article class="card">
      <div class="card-ico">${s.icone}</div>
      <h3>${s.titulo}</h3>
      <p>${s.descricao}</p>
    </article>`
).join("");

// ---------- Envio do formulário → WhatsApp ----------
const form = document.getElementById("formOrcamento");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  feedback.className = "form-feedback";

  const d = Object.fromEntries(new FormData(form).entries());
  const nome = (d.nome || "").trim();
  const email = (d.email || "").trim();
  const telefone = (d.telefone || "").trim();
  const mensagem = (d.mensagem || "").trim();

  // Validação simples
  const erros = [];
  if (nome.length < 2) erros.push("Informe seu nome.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.push("Informe um e-mail válido.");
  if (telefone.replace(/\D/g, "").length < 10) erros.push("Informe um telefone com DDD.");
  if (mensagem.length < 5) erros.push("Descreva um pouco mais a sua ideia.");

  if (erros.length) {
    feedback.classList.add("erro");
    feedback.textContent = erros.join(" ");
    return;
  }

  // Monta a mensagem do WhatsApp
  const texto =
    `*Novo pedido de orçamento — 3Dk Impressões*\n\n` +
    `*Nome:* ${nome}\n` +
    `*E-mail:* ${email}\n` +
    `*Telefone:* ${telefone}\n` +
    `*Serviço:* ${d.servico || "Não informado"}\n` +
    `*Ideia:* ${mensagem}`;

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank", "noopener");

  feedback.classList.add("ok");
  feedback.textContent = "Abrindo o WhatsApp com seu pedido… é só apertar enviar!";
  form.reset();
});
