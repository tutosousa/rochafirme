// ===========================================================
// ROCHA FIRME MODA — configuração da loja
// Troque os valores abaixo pelos reais da loja
// ===========================================================
window.LOJA = {
  whatsapp: '5581997163769', // <-- SUBSTITUA pelo WhatsApp real (DDI+DDD+número)
  nome: 'Rocha Firme Moda',

  // <-- SUBSTITUA pelo domínio real da loja DEPOIS de publicar o site.
  // É esse endereço que entra no link enviado ao WhatsApp, e é ele que
  // o WhatsApp acessa pra buscar a imagem do produto e montar a prévia
  // na conversa. Sem publicar o site com esse domínio, o link não abre
  // nada e a prévia com imagem não aparece.
  siteUrl: 'https://rochafirmemoda.com.br',

  // <-- COLE AQUI a "Project URL" e a chave "anon public" do seu projeto
  // Supabase (Project Settings → API), depois de rodar o supabase-setup.sql.
  // Veja o passo a passo em BANCO-DE-DADOS-LEIAME.md.
  // Preenchendo isso, o site passa a usar o banco de dados como fonte
  // principal dos produtos (tem prioridade sobre a planilha e sobre o
  // catálogo padrão).
  supabaseUrl: '',
  supabaseAnonKey: '',

  // <-- COLE AQUI o link "Publicar na web" (formato CSV) da planilha de
  // produtos, se você quiser que a lojista adicione/remova produtos
  // direto pela planilha, sem mexer em código. Veja o passo a passo em
  // PLANILHA-LEIAME.md. Deixe em branco ('') pra usar só o catálogo
  // padrão do arquivo products.js.
  planilhaUrl: ''
};

function whatsLink(mensagem){
  const msg = encodeURIComponent(mensagem);
  return `https://wa.me/${window.LOJA.whatsapp}?text=${msg}`;
}

// URL pública da página do produto (usada na mensagem do WhatsApp para
// gerar a prévia com a imagem do produto na conversa)
function produtoLink(slug){
  return `${window.LOJA.siteUrl}/produto-${slug}.html`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Generic WhatsApp CTA buttons: <a data-whats="Mensagem">
  document.querySelectorAll('[data-whats]').forEach(el => {
    el.href = whatsLink(el.getAttribute('data-whats'));
    el.target = '_blank';
    el.rel = 'noopener';
  });

  // Scroll reveal
  const items = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && items.length){
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    }, {threshold:.15});
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('in'));
  }
});
