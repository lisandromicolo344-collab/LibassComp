Portfólio — Lisandro Micolo
Portfólio de Lisandro Micolo, estudante de programação.
Site feito para mostrar meu hobby de estudar programação e meus projetos feitos estudando, errando e corrigindo.

Tecnologias: HTML • CSS • JavaScript • C • MySQL • Git / GitHub

O que o site tem
Início com foto, nome, frase e botões
Sobre mim — como eu aprendo
Habilidades com barras de progresso
Projetos — BIBLIOTECA, Senha Clínica e Conexão Sem Fronteiras
Contato com formulário com validação
Modo escuro / claro (salva no navegador)
Menu mobile
Animação ao rolar a página
Rolagem suave
Layout responsivo: celular, tablet e computador
Arquitetura — pastas e arquivos
meu-portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── perfil-lisandro.webp
    ├── projeto-biblioteca.webp
    ├── projeto-clinica.webp
    └── projeto-conexao.webp
Arquivo	O que faz
index.html	Conteúdo do site: início, sobre, habilidades, projetos e contato
css/style.css	Cores, layout, botões, cards e responsivo
js/script.js	Menu mobile, modo escuro, animação e validação do formulário
img/	Imagens do perfil e dos 3 projetos
Importante: para ficar igual ao projeto, mantenha essa estrutura. Se mudar as pastas, os links css/style.css, js/script.js e img/... quebram.

Como rodar
Opção 1 — 2 cliques (mais fácil)
Baixe / copie toda a pasta meu-portfolio
Dê 2 cliques no arquivo index.html
Opção 2 — VS Code com Live Server (recomendado)
Abra a pasta meu-portfolio no VS Code
Clique com o botão direito no index.html
Clique em Open with Live Server
Como publicar no GitHub Pages
Crie um repositório no GitHub, ex: meu-portfolio
Suba todos os arquivos e pastas mantendo a estrutura acima
Vá em Settings > Pages
Em Branch, escolha main e pasta / (root)
Salve e abra o link gerado, ex:
https://seu-usuario.github.io/meu-portfolio/
Código — HTML (index.html)
Estrutura principal do site:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lisandro Micolo | Estudante de Programação</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="header">
    <nav class="nav">
      <a href="#inicio" class="logo">Lisandro<span>Micolo</span></a>
      <button class="menu-btn" id="menuBtn">☰</button>
      <ul class="nav-links" id="navLinks">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <button class="theme-btn" id="themeBtn">🌙</button>
    </nav>
  </header>

  <main>
    <section id="inicio" class="hero">
      <img class="hero-photo" src="img/perfil-lisandro.webp" alt="Lisandro Micolo estudando programação">
      <h1>Lisandro<br><em>Micolo</em></h1>
      <h2>Estudante de <span>Programação</span></h2>
    </section>

    <section id="sobre" class="section">...</section>
    <section id="habilidades" class="section">...</section>

    <section id="projetos" class="section">
      <article class="project">
        <div class="project-img">
          <img src="img/projeto-biblioteca.webp" alt="Projeto BIBLIOTECA">
        </div>
        <div class="project-body">
          <h3>BIBLIOTECA</h3>
          <p>Sistema de biblioteca em MySQL...</p>
        </div>
      </article>
    </section>

    <section id="contato" class="section">
      <form id="contactForm" class="form" novalidate>
        <label>Nome<input type="text" id="nome" required></label>
        <label>E-mail<input type="email" id="email" required></label>
        <label>Mensagem<textarea id="mensagem" required></textarea></label>
        <button type="submit" class="btn btn-primary">Enviar mensagem</button>
      </form>
    </section>
  </main>

  <footer><p>© 2026 Lisandro Micolo • Feito com HTML, CSS e JavaScript</p></footer>
  <script src="js/script.js"></script>
</body>
</html>
Código — CSS (css/style.css)
Base do visual: variáveis de cor, modo escuro e responsivo.

/* Cores do site */
:root {
  --bg: #f8fafc;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #64748b;
  --primary: #2563eb;
  --primary2: #7c3aed;
  --accent: #f97316;
  --border: #e2e8f0;
  --radius: 18px;
}

/* Modo escuro - troca as cores */
body.dark {
  --bg: #0f172a;
  --card: #1e293b;
  --text: #f1f5f9;
  --muted: #94a3b8;
  --border: #334155;
}

/* Foto do início - redonda */
.hero-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  display: block;
  margin-bottom: 14px;
}

/* Imagem dos cards de projeto */
.project-img img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;
}

/* Animação ao rolar */
.reveal { opacity: 0; transform: translateY(18px); transition: .6s; }
.reveal.visible { opacity: 1; transform: none; }

/* Responsivo - celular */
@media (max-width: 768px) {
  .menu-btn, .theme-btn { display: block; }
  .nav-links { display: none; }
  .nav-links.open { display: flex; }
  .hero { grid-template-columns: 1fr; }
  .hero h1 { font-size: 42px; }
  .about-grid, .skills-grid, .projects-grid { grid-template-columns: 1fr; }
  .hero-photo { width: 96px; height: 96px; }
  .project-img img { height: 180px; }
}
Código — JavaScript (js/script.js)
O que o JS faz: menu, tema, animação, formulário e rolagem suave.

// 1. Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.textContent = open ? '✕' : '☰';
});

// 2. Modo escuro / claro - salva no navegador
const themeBtn = document.getElementById('themeBtn');
if (localStorage.getItem('tema') === 'dark') {
  document.body.classList.add('dark');
  themeBtn.textContent = '☀️';
}
themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('tema', isDark ? 'dark' : 'light');
});

// 3. Animação ao rolar a página
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 4. Validação do formulário
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

// 5. Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
Projetos mostrados no site
Projeto	Linguagem / Ferramenta	O que é
BIBLIOTECA	MySQL	Sistema de biblioteca com tabelas de categorias, livros, leitores e funcionários. Prática de CREATE TABLE, INSERT, SELECT e JOIN
Sistema de Senha Clínica	C	Sistema modularizado, com fila por prioridade. Arquivos separados: main, paciente e fila
Conexão Sem Fronteiras	HTML + CSS + Figma	Portal para emigrantes no Brasil sobre documentos, acolhimento, vagas e doações
Como testar
 Clicar no 🌙 → site fica escuro e continua escuro ao recarregar
 Diminuir a janela → aparece o botão ☰ e o menu abre/fecha
 Clicar em Projetos → desce suave e os cards aparecem com animação
 Enviar formulário vazio → aparece "Preencha todos os campos."
 Enviar e-mail sem @ → aparece "Digite um e-mail válido."
 Enviar tudo certo → aparece "Obrigado, [nome]! Sua mensagem foi enviada."
 Celular: 1 coluna / Tablet: 2 colunas / Computador: 3 colunas nos projetos
Autor
Lisandro Micolo — Estudante de Programação
Feito com HTML, CSS e JavaScript • © 2026
