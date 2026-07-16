// ===========================================================
// ROCHA FIRME MODA — layout compartilhado (header, footer, painel de categorias)
// Cada página só precisa de <div id="site-header"></div> e <div id="site-footer"></div>
// ===========================================================

const CATEGORIAS_MENU = [
  ['vestidos', 'Vestidos'],
  ['blusas', 'Blusas'],
  ['calcas', 'Calças'],
  ['body', 'Body'],
  ['tricot', 'Tricot'],
  ['jaquetas', 'Jaquetas e Casacos'],
  ['blazers', 'Blazers'],
  ['camisas', 'Camisas'],
  ['tshirts', 'T-shirts'],
  ['jeans', 'Jeans'],
  ['macacoes', 'Macacões'],
  ['saias', 'Saias'],
  ['bolsas-calcados', 'Bolsas e Calçados'],
  ['acessorios', 'Acessórios'],
  ['shorts-bermudas', 'Shorts e Bermudas'],
  ['couro', 'Couro']
];

function categoriaHref(key){ return key + '.html'; }

function headerHTML(activeKey){
  const panelLinks = CATEGORIAS_MENU.map(([key, label]) =>
    `<a href="${categoriaHref(key)}" class="${activeKey===key?'is-active':''}">${label}</a>`
  ).join('');

  return `
  <div class="announce">
    <a href="#" data-whats="Olá! Quero saber mais sobre o atendimento Personal Shopper da Rocha Firme Moda.">PERSONAL SHOPPER ROCHA FIRME &nbsp;|&nbsp; atendimento exclusivo no WhatsApp. <strong>CONSULTAR &gt;</strong></a>
  </div>

  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand">
        <svg class="brand-mark"><use href="icons.svg#ic-selo"></use></svg>
        <span class="brand-name">Rocha Firme<span>Moda que se firma em você</span></span>
      </a>

      <nav class="main-nav" id="mainNav">
        <a href="index.html" ${activeKey==='home' ? 'aria-current="page"' : ''}>Início</a>
        <button type="button" class="nav-cat-trigger" id="catTrigger">Categorias <svg><use href="icons.svg#ic-chevron"></use></svg></button>
        <a href="todas.html" ${activeKey==='todas' ? 'aria-current="page"' : ''}>Novidades</a>
        <a href="contato.html" ${activeKey==='contato' ? 'aria-current="page"' : ''}>Contato</a>
      </nav>

      <div class="header-actions">
        <button type="button" class="icon-btn" id="searchTrigger" aria-label="Buscar">
          <svg><use href="icons.svg#ic-search"></use></svg>
        </button>
        <a class="icon-btn icon-btn-text" href="conta.html" ${activeKey==='conta' ? 'aria-current="page"' : ''}>
          <svg><use href="icons.svg#ic-user"></use></svg>
          <span>Minha conta</span>
        </a>
        <a class="icon-btn" data-whats="Olá! Quero ver minha lista de favoritos na Rocha Firme Moda." aria-label="Favoritos">
          <svg><use href="icons.svg#ic-heart"></use></svg>
        </a>
        <a class="icon-btn" data-whats="Olá! Quero fechar um pedido na Rocha Firme Moda." aria-label="Sacola">
          <svg><use href="icons.svg#ic-bag"></use></svg>
        </a>
        <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>

  <div class="search-overlay" id="searchOverlay" aria-hidden="true">
    <form class="search-box" id="searchForm">
      <svg><use href="icons.svg#ic-search"></use></svg>
      <input type="text" id="searchInput" placeholder="O que você busca? Ex: vestido midi, jaqueta jeans..." autocomplete="off">
      <button type="button" class="search-close" id="searchClose" aria-label="Fechar busca"><svg><use href="icons.svg#ic-close"></use></svg></button>
    </form>
  </div>

  <div class="cat-panel-backdrop" id="catBackdrop"></div>
  <aside class="cat-panel" id="catPanel" aria-hidden="true">
    <button class="cat-panel-close" id="catClose" aria-label="Fechar categorias">
      <svg><use href="icons.svg#ic-close"></use></svg>
    </button>
    <nav class="cat-panel-nav">
      <a href="todas.html" class="cat-panel-all ${activeKey==='todas'?'is-active':''}">Todas as peças</a>
      ${panelLinks}
    </nav>
  </aside>
  `;
}

function footerHTML(){
  const cols1 = CATEGORIAS_MENU.slice(0,8).map(([key,label]) => `<li><a href="${categoriaHref(key)}">${label}</a></li>`).join('');
  const cols2 = CATEGORIAS_MENU.slice(8).map(([key,label]) => `<li><a href="${categoriaHref(key)}">${label}</a></li>`).join('');
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="brand">
          <svg class="brand-mark"><use href="icons.svg#ic-selo"></use></svg>
          <span class="brand-name">Rocha Firme</span>
        </a>
        <p>Moda com corte firme e acabamento que dura. Peças pensadas pra rotina de verdade.</p>
      </div>
      <div class="footer-col">
        <h5>Categorias</h5>
        <ul>${cols1}</ul>
      </div>
      <div class="footer-col">
        <h5>&nbsp;</h5>
        <ul>${cols2}</ul>
      </div>
      <div class="footer-col">
        <h5>Loja</h5>
        <ul>
          <li><a href="contato.html">Contato</a></li>
          <li><a href="contato.html#trocas">Trocas e devoluções</a></li>
          <li><a href="contato.html#entregas">Entregas</a></li>
          <li><a href="#" data-whats="Olá! Vim do site da Rocha Firme Moda.">WhatsApp</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Rocha Firme Moda. Todos os direitos reservados.</span>
      <span>CNPJ 00.000.000/0001-00 · Feito com firmeza em Pernambuco</span>
    </div>
  </footer>`;
}

function mountLayout(activeKey){
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if(h) h.outerHTML = headerHTML(activeKey);
  if(f) f.outerHTML = footerHTML();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Painel de categorias
  const catTrigger = document.getElementById('catTrigger');
  const catPanel = document.getElementById('catPanel');
  const catBackdrop = document.getElementById('catBackdrop');
  const catClose = document.getElementById('catClose');
  function openCat(){
    catPanel.classList.add('open');
    catBackdrop.classList.add('open');
    catPanel.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeCat(){
    catPanel.classList.remove('open');
    catBackdrop.classList.remove('open');
    catPanel.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  if(catTrigger){
    catTrigger.addEventListener('click', openCat);
    catClose.addEventListener('click', closeCat);
    catBackdrop.addEventListener('click', closeCat);
    document.addEventListener('keydown', e => { if(e.key === 'Escape') closeCat(); });
  }

  // Busca
  const searchTrigger = document.getElementById('searchTrigger');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  if(searchTrigger){
    searchTrigger.addEventListener('click', () => {
      searchOverlay.classList.add('open');
      searchOverlay.setAttribute('aria-hidden','false');
      setTimeout(() => searchInput.focus(), 100);
    });
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('open');
      searchOverlay.setAttribute('aria-hidden','true');
    });
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const termo = searchInput.value.trim();
      if(!termo) return;
      window.open(whatsLink(`Olá! Estou procurando: "${termo}" na Rocha Firme Moda. Vocês têm disponível?`), '_blank', 'noopener');
    });
  }

  // Recoloca os data-whats recém-injetados
  document.querySelectorAll('[data-whats]').forEach(el => {
    el.href = whatsLink(el.getAttribute('data-whats'));
    if(!el.target){ el.target = '_blank'; el.rel = 'noopener'; }
  });
}
