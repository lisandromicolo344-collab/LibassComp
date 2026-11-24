// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});

// Modo escuro / claro
const themeBtn = document.getElementById('themeBtn');
const saved = localStorage.getItem('tema');
if (saved === 'dark') { document.body.classList.add('dark'); themeBtn.textContent = '☀️'; }
themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('tema', isDark ? 'dark' : 'light');
});

// Validação do formulário
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  if (!nome || !email || !mensagem) {
    msg.textContent = 'Preencha todos os campos.';
    msg.className = 'form-msg error';
    return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    msg.textContent = 'Digite um e-mail válido.';
    msg.className = 'form-msg error';
    return;
  }
  msg.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
  msg.className = 'form-msg success';
  form.reset();
});

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = '☀️';
  } else {
    themeBtn.textContent = '🌙';
  }
});