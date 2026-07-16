// ===========================================================
// ROCHA FIRME MODA — catálogo (dados de demonstração)
//
// Pra adicionar uma FOTO real a um produto: coloque o arquivo de
// imagem dentro da pasta /fotos e escreva o nome do arquivo no
// campo foto (ex: foto:"vestido-midi-1.jpg"). Sem foto, o produto
// continua mostrando o ícone ilustrado normalmente.
//
// slug = usado para gerar a página/imagem de compartilhamento
// (arquivo produto-<slug>.html). Não precisa mexer nisso.
// ===========================================================

const COR = {
  terracota: '#A6432F',
  preto:     '#221F1C',
  areia:     '#D8C9A8',
  verde:     '#4B5A45',
  offwhite:  '#F1EBDD',
  jeans:     '#4F6178',
  vinho:     '#5C2430',
  cinza:     '#8B8478',
  marrom:    '#6B4A32',
  dourado:   '#B98B34'
};
const NOME_COR = { terracota:'Terracota', preto:'Preto', areia:'Areia', verde:'Verde Musgo', offwhite:'Off-white', jeans:'Jeans', vinho:'Vinho', cinza:'Cinza Pedra', marrom:'Marrom Couro', dourado:'Dourado' };

const CATALOGO_PADRAO = {
  vestidos: { label:"Vestidos", icon:"ic-vestido", items:[
    { nome:"Vestido Midi Rocha", slug:"vestido-midi-rocha", foto:null, preco:229.9, tamanhos:["P","M","G"], cores:["terracota","vinho"], nova:true, desc:"Fenda lateral, tecido fluido." },
    { nome:"Vestido Alfaiataria Firme", slug:"vestido-alfaiataria-firme", foto:null, preco:249.9, tamanhos:["P","M","G","GG"], cores:["preto","areia"], nova:false, desc:"Cinto na cintura, corte reto." },
    { nome:"Vestido Curto Canelado", slug:"vestido-curto-canelado", foto:null, preco:159.9, tamanhos:["P","M","G"], cores:["preto","verde"], nova:false, desc:"Malha canelada, alças finas." },
    { nome:"Vestido Longo Envelope", slug:"vestido-longo-envelope", foto:null, preco:269.9, tamanhos:["P","M","G"], cores:["offwhite","terracota"], nova:false, desc:"Amarração frontal, caimento leve." },
    { nome:"Vestido Jeans Rocha", slug:"vestido-jeans-rocha", foto:null, preco:219.9, tamanhos:["36","38","40","42"], cores:["jeans"], nova:false, desc:"Botões frontais, cinto incluso." },
    { nome:"Vestido Tricô Firme", slug:"vestido-trico-firme", foto:null, preco:199.9, tamanhos:["P","M","G"], cores:["areia","vinho"], nova:true, desc:"Trama aconchegante, gola alta." }
  ]},

  blusas: { label:"Blusas", icon:"ic-blusa", items:[
    { nome:"Blusa Manga Bufante", slug:"blusa-manga-bufante", foto:null, preco:139.9, tamanhos:["P","M","G"], cores:["offwhite","terracota"], nova:true, desc:"Viscose leve, manga volumosa." },
    { nome:"Blusa Cropped Canelada", slug:"blusa-cropped-canelada", foto:null, preco:99.9, tamanhos:["P","M","G"], cores:["preto","vinho","verde"], nova:false, desc:"Malha canelada, caimento justo." },
    { nome:"Blusa Alfaiataria Firme", slug:"blusa-alfaiataria-firme", foto:null, preco:159.9, tamanhos:["P","M","G","GG"], cores:["areia","preto"], nova:false, desc:"Gola aberta, tecido estruturado." },
    { nome:"Blusa Ombro a Ombro", slug:"blusa-ombro-a-ombro", foto:null, preco:119.9, tamanhos:["P","M","G"], cores:["offwhite","areia"], nova:true, desc:"Decote canoa, toque macio." },
    { nome:"Blusa Amarração Rocha", slug:"blusa-amarracao-rocha", foto:null, preco:129.9, tamanhos:["P","M","G"], cores:["terracota","preto"], nova:false, desc:"Nó frontal ajustável." },
    { nome:"Blusa Regata Costela", slug:"blusa-regata-costela", foto:null, preco:79.9, tamanhos:["P","M","G"], cores:["preto","terracota","offwhite"], nova:false, desc:"Básica canelada para compor looks." }
  ]},

  calcas: { label:"Calças", icon:"ic-calca", items:[
    { nome:"Calça Alfaiataria Rocha", slug:"calca-alfaiataria-rocha", foto:null, preco:189.9, tamanhos:["36","38","40","42","44"], cores:["preto","areia","jeans"], nova:true, desc:"Corte reto, cintura alta, tecido encorpado." },
    { nome:"Calça Wide Leg Firme", slug:"calca-wide-leg-firme", foto:null, preco:169.9, tamanhos:["36","38","40","42"], cores:["jeans","preto"], nova:false, desc:"Pernas largas, caimento fluido." },
    { nome:"Calça Cargo Utilitária", slug:"calca-cargo-utilitaria", foto:null, preco:199.9, tamanhos:["38","40","42","44","46"], cores:["areia","verde"], nova:false, desc:"Bolsos funcionais, sarja pesada." },
    { nome:"Calça Reta Essencial", slug:"calca-reta-essencial", foto:null, preco:149.9, tamanhos:["36","38","40","42"], cores:["preto","offwhite","cinza"], nova:false, desc:"Básica versátil para o dia a dia." },
    { nome:"Calça Pantalona Vinho", slug:"calca-pantalona-vinho", foto:null, preco:194.9, tamanhos:["36","38","40"], cores:["vinho"], nova:false, desc:"Alfaiataria fluida em tom vinho." },
    { nome:"Calça Sarja Cargo Preta", slug:"calca-sarja-cargo-preta", foto:null, preco:184.9, tamanhos:["38","40","42","44"], cores:["preto"], nova:false, desc:"Sarja rígida, ajuste cargo." }
  ]},

  body: { label:"Body", icon:"ic-body", items:[
    { nome:"Body Canelado Básico", slug:"body-canelado-basico", foto:null, preco:89.9, tamanhos:["P","M","G"], cores:["preto","offwhite","vinho"], nova:true, desc:"Decote redondo, tecido canelado." },
    { nome:"Body Manga Longa Rocha", slug:"body-manga-longa-rocha", foto:null, preco:109.9, tamanhos:["P","M","G"], cores:["preto","terracota"], nova:false, desc:"Gola alta, fecho de pressão." },
    { nome:"Body Renda Firme", slug:"body-renda-firme", foto:null, preco:129.9, tamanhos:["P","M","G"], cores:["offwhite","areia"], nova:false, desc:"Detalhe em renda no decote." },
    { nome:"Body Alças Finas", slug:"body-alcas-finas", foto:null, preco:79.9, tamanhos:["P","M","G"], cores:["preto","vinho","verde"], nova:false, desc:"Básico versátil para compor looks." }
  ]},

  tricot: { label:"Tricot", icon:"ic-tricot", items:[
    { nome:"Tricô Trançado Rocha", slug:"trico-trancado-rocha", foto:null, preco:189.9, tamanhos:["P","M","G","GG"], cores:["areia","vinho"], nova:true, desc:"Trama trançada, gola redonda." },
    { nome:"Cardigã Firme Botões", slug:"cardiga-firme-botoes", foto:null, preco:209.9, tamanhos:["P","M","G"], cores:["marrom","preto"], nova:false, desc:"Abotoamento frontal, bolsos laterais." },
    { nome:"Tricô Gola Alta", slug:"trico-gola-alta", foto:null, preco:179.9, tamanhos:["P","M","G"], cores:["cinza","areia"], nova:false, desc:"Aconchegante, ideal para o friozinho." },
    { nome:"Colete Tricô Rocha", slug:"colete-trico-rocha", foto:null, preco:139.9, tamanhos:["P","M","G"], cores:["verde","terracota"], nova:false, desc:"Sem manga, ótimo para camadas." }
  ]},

  jaquetas: { label:"Jaquetas e Casacos", icon:"ic-jaqueta", items:[
    { nome:"Jaqueta Corta-Vento Rocha", slug:"jaqueta-corta-vento-rocha", foto:null, preco:249.9, tamanhos:["P","M","G","GG"], cores:["preto","verde"], nova:true, desc:"Impermeável leve, capuz destacável." },
    { nome:"Casaco Alfaiataria Firme", slug:"casaco-alfaiataria-firme", foto:null, preco:329.9, tamanhos:["P","M","G"], cores:["areia","preto"], nova:false, desc:"Lã sintética, corte reto longo." },
    { nome:"Bomber Rocha Firme", slug:"bomber-rocha-firme", foto:null, preco:259.9, tamanhos:["P","M","G"], cores:["preto","vinho"], nova:false, desc:"Punho canelado, forro macio." },
    { nome:"Trench Coat Firme", slug:"trench-coat-firme", foto:null, preco:379.9, tamanhos:["P","M","G","GG"], cores:["areia","offwhite"], nova:true, desc:"Cinto de amarrar, comprimento midi." },
    { nome:"Colete Acolchoado Rocha", slug:"colete-acolchoado-rocha", foto:null, preco:179.9, tamanhos:["P","M","G"], cores:["preto","verde","terracota"], nova:false, desc:"Leve e quentinho, ideal para camadas." }
  ]},

  blazers: { label:"Blazers", icon:"ic-blazer", items:[
    { nome:"Blazer Alfaiataria Rocha", slug:"blazer-alfaiataria-rocha", foto:null, preco:279.9, tamanhos:["P","M","G","GG"], cores:["preto","areia"], nova:true, desc:"Ombro estruturado, forro interno." },
    { nome:"Blazer Cropped Firme", slug:"blazer-cropped-firme", foto:null, preco:229.9, tamanhos:["P","M","G"], cores:["terracota","preto"], nova:false, desc:"Comprimento curto, botão único." },
    { nome:"Blazer Linho Verão", slug:"blazer-linho-verao", foto:null, preco:249.9, tamanhos:["P","M","G"], cores:["offwhite","areia"], nova:false, desc:"Tecido leve, caimento solto." },
    { nome:"Blazer Vinho Alongado", slug:"blazer-vinho-alongado", foto:null, preco:289.9, tamanhos:["P","M","G","GG"], cores:["vinho"], nova:false, desc:"Corte longo, fechamento cruzado." }
  ]},

  camisas: { label:"Camisas", icon:"ic-camisa", items:[
    { nome:"Camisa Social Firme", slug:"camisa-social-firme", foto:null, preco:159.9, tamanhos:["P","M","G","GG"], cores:["offwhite","preto"], nova:true, desc:"Algodão encorpado, corte clássico." },
    { nome:"Camisa Seda Rocha", slug:"camisa-seda-rocha", foto:null, preco:189.9, tamanhos:["P","M","G"], cores:["terracota","areia"], nova:false, desc:"Toque sedoso, caimento fluido." },
    { nome:"Camisa Xadrez Firme", slug:"camisa-xadrez-firme", foto:null, preco:169.9, tamanhos:["P","M","G","GG"], cores:["marrom","verde"], nova:false, desc:"Estampa xadrez, bolso frontal." },
    { nome:"Camisa Cropped Amarrar", slug:"camisa-cropped-amarrar", foto:null, preco:129.9, tamanhos:["P","M","G"], cores:["offwhite","vinho"], nova:false, desc:"Nó frontal, comprimento curto." }
  ]},

  tshirts: { label:"T-shirts", icon:"ic-camiseta", items:[
    { nome:"T-shirt Rocha Oversized", slug:"t-shirt-rocha-oversized", foto:null, preco:89.9, tamanhos:["P","M","G","GG"], cores:["preto","offwhite","areia"], nova:true, desc:"Malha 100% algodão penteado." },
    { nome:"T-shirt Firme Básica", slug:"t-shirt-firme-basica", foto:null, preco:69.9, tamanhos:["P","M","G","GG"], cores:["preto","offwhite","cinza","verde"], nova:false, desc:"Corte reto, essencial no armário." },
    { nome:"T-shirt Selo Estampada", slug:"t-shirt-selo-estampada", foto:null, preco:94.9, tamanhos:["P","M","G"], cores:["areia","terracota"], nova:true, desc:"Estampa do selo Rocha Firme no peito." },
    { nome:"T-shirt Longline", slug:"t-shirt-longline", foto:null, preco:99.9, tamanhos:["P","M","G","GG"], cores:["preto","cinza"], nova:false, desc:"Barra alongada, modelagem urbana." },
    { nome:"T-shirt Gola V Firme", slug:"t-shirt-gola-v-firme", foto:null, preco:74.9, tamanhos:["P","M","G"], cores:["offwhite","vinho"], nova:false, desc:"Gola V, toque macio." },
    { nome:"T-shirt Listrada Rocha", slug:"t-shirt-listrada-rocha", foto:null, preco:84.9, tamanhos:["P","M","G","GG"], cores:["preto","offwhite"], nova:false, desc:"Listras finas, algodão premium." }
  ]},

  jeans: { label:"Jeans", icon:"ic-calca", items:[
    { nome:"Jeans Mom Rocha", slug:"jeans-mom-rocha", foto:null, preco:179.9, tamanhos:["36","38","40","42"], cores:["jeans"], nova:true, desc:"Lavagem média, cintura super alta." },
    { nome:"Jeans Reto Firme", slug:"jeans-reto-firme", foto:null, preco:169.9, tamanhos:["36","38","40","42"], cores:["jeans"], nova:false, desc:"Corte reto clássico, five pockets." },
    { nome:"Jeans Skinny Rocha", slug:"jeans-skinny-rocha", foto:null, preco:159.9, tamanhos:["36","38","40"], cores:["jeans"], nova:false, desc:"Modelagem justa, elastano leve." },
    { nome:"Jaqueta Jeans Clássica", slug:"jaqueta-jeans-classica", foto:null, preco:229.9, tamanhos:["P","M","G","GG"], cores:["jeans"], nova:false, desc:"Lavagem média, botões metálicos." }
  ]},

  macacoes: { label:"Macacões", icon:"ic-macacao", items:[
    { nome:"Macacão Alfaiataria Firme", slug:"macacao-alfaiataria-firme", foto:null, preco:259.9, tamanhos:["P","M","G"], cores:["preto","areia"], nova:true, desc:"Cinto na cintura, perna reta." },
    { nome:"Macacão Jeans Rocha", slug:"macacao-jeans-rocha", foto:null, preco:239.9, tamanhos:["36","38","40"], cores:["jeans"], nova:false, desc:"Alças reguláveis, bolsos frontais." },
    { nome:"Macacão Curto Canelado", slug:"macacao-curto-canelado", foto:null, preco:169.9, tamanhos:["P","M","G"], cores:["preto","vinho"], nova:false, desc:"Malha canelada, alças finas." }
  ]},

  saias: { label:"Saias", icon:"ic-saia", items:[
    { nome:"Saia Midi Alfaiataria", slug:"saia-midi-alfaiataria", foto:null, preco:159.9, tamanhos:["P","M","G"], cores:["preto","areia"], nova:true, desc:"Fenda frontal, cintura alta." },
    { nome:"Saia Jeans Rocha", slug:"saia-jeans-rocha", foto:null, preco:139.9, tamanhos:["36","38","40","42"], cores:["jeans"], nova:false, desc:"Botões frontais, barra desfiada." },
    { nome:"Saia Plissada Firme", slug:"saia-plissada-firme", foto:null, preco:149.9, tamanhos:["P","M","G"], cores:["terracota","offwhite"], nova:false, desc:"Plissado fino, caimento leve." },
    { nome:"Saia Lápis Firme", slug:"saia-lapis-firme", foto:null, preco:144.9, tamanhos:["P","M","G","GG"], cores:["preto","vinho"], nova:false, desc:"Corte justo, fenda traseira." }
  ]},

  "bolsas-calcados": { label:"Bolsas e Calçados", icon:"ic-bolsa", items:[
    { nome:"Bolsa Tote Rocha", slug:"bolsa-tote-rocha", foto:null, preco:199.9, tamanhos:["Único"], cores:["marrom","preto"], nova:true, desc:"Couro sintético, alça de ombro." },
    { nome:"Bolsa Transversal Firme", slug:"bolsa-transversal-firme", foto:null, preco:159.9, tamanhos:["Único"], cores:["preto","terracota"], nova:false, desc:"Compacta, alça ajustável." },
    { nome:"Sandália Rasteira Rocha", slug:"sandalia-rasteira-rocha", foto:null, preco:129.9, tamanhos:["34","35","36","37","38","39"], cores:["dourado","preto"], nova:false, desc:"Solado leve, tiras finas." },
    { nome:"Bota Coturno Firme", slug:"bota-coturno-firme", foto:null, preco:249.9, tamanhos:["34","35","36","37","38","39"], cores:["preto","marrom"], nova:false, desc:"Cano curto, sola tratorada." }
  ]},

  acessorios: { label:"Acessórios", icon:"ic-acessorio", items:[
    { nome:"Cinto Couro Rocha", slug:"cinto-couro-rocha", foto:null, preco:79.9, tamanhos:["Único"], cores:["marrom","preto"], nova:false, desc:"Fivela metálica, couro legítimo." },
    { nome:"Brinco Argola Firme", slug:"brinco-argola-firme", foto:null, preco:59.9, tamanhos:["Único"], cores:["dourado"], nova:true, desc:"Banho a ouro, antialérgico." },
    { nome:"Óculos de Sol Rocha", slug:"oculos-de-sol-rocha", foto:null, preco:119.9, tamanhos:["Único"], cores:["preto","marrom"], nova:false, desc:"Proteção UV400, armação leve." },
    { nome:"Lenço Estampado Firme", slug:"lenco-estampado-firme", foto:null, preco:69.9, tamanhos:["Único"], cores:["terracota","areia"], nova:false, desc:"Seda toque macio, estampa exclusiva." }
  ]},

  "shorts-bermudas": { label:"Shorts e Bermudas", icon:"ic-short", items:[
    { nome:"Short Alfaiataria Rocha", slug:"short-alfaiataria-rocha", foto:null, preco:119.9, tamanhos:["36","38","40","42"], cores:["preto","areia"], nova:true, desc:"Cintura alta, caimento reto." },
    { nome:"Short Jeans Firme", slug:"short-jeans-firme", foto:null, preco:99.9, tamanhos:["36","38","40"], cores:["jeans"], nova:false, desc:"Barra desfiada, five pockets." },
    { nome:"Bermuda Cargo Rocha", slug:"bermuda-cargo-rocha", foto:null, preco:129.9, tamanhos:["38","40","42","44"], cores:["verde","areia"], nova:false, desc:"Bolsos funcionais, sarja leve." },
    { nome:"Short Moletom Firme", slug:"short-moletom-firme", foto:null, preco:89.9, tamanhos:["P","M","G"], cores:["preto","cinza"], nova:false, desc:"Conforto para o dia a dia." }
  ]},

  couro: { label:"Couro", icon:"ic-couro", items:[
    { nome:"Jaqueta Couro Rocha", slug:"jaqueta-couro-rocha", foto:null, preco:449.9, tamanhos:["P","M","G"], cores:["preto","marrom"], nova:true, desc:"Couro legítimo, forro interno." },
    { nome:"Saia Couro Firme", slug:"saia-couro-firme", foto:null, preco:259.9, tamanhos:["P","M","G"], cores:["preto"], nova:false, desc:"Corte reto, zíper traseiro." },
    { nome:"Colete Couro Rocha", slug:"colete-couro-rocha", foto:null, preco:229.9, tamanhos:["P","M","G"], cores:["marrom","preto"], nova:false, desc:"Sem manga, acabamento rústico." }
  ]}
};
function fmtPreco(v){
  return v.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
}

// Evita que texto digitado num produto (nome, descrição, cor...) seja
// interpretado como HTML/código ao ser exibido no site — proteção contra
// injeção de conteúdo malicioso via painel/planilha/banco de dados.
function escapeHTML(str){
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
}

// ===========================================================
// PRODUTOS VINDOS DE UMA PLANILHA DO GOOGLE (opcional)
//
// Se window.LOJA.planilhaUrl estiver preenchido (em main.js), o site
// busca os produtos direto da planilha a cada carregamento de página —
// a lojista adiciona/edita/remove linhas na planilha e o site atualiza
// sozinho, sem precisar mexer em código.
//
// Sem planilha configurada (ou se a busca falhar), o site usa o
// catálogo padrão acima normalmente. Nada quebra.
//
// IMPORTANTE: produtos adicionados pela planilha ainda funcionam com o
// botão "Comprar" (manda mensagem pro WhatsApp normalmente), mas só os
// 71 produtos originais têm página própria + prévia com imagem no
// WhatsApp (isso exige gerar arquivos extras, que não dá pra fazer
// sozinho pelo navegador). Veja PLANILHA-LEIAME.md pra mais detalhes.
// ===========================================================

let CATALOGO = CATALOGO_PADRAO;

// nomes/ícones de cada categoria, extraídos do catálogo padrão (fonte única)
const CATEGORIA_INFO = {};
Object.entries(CATALOGO_PADRAO).forEach(([key, cat]) => {
  CATEGORIA_INFO[key] = { label: cat.label, icon: cat.icon };
});

// slugs que já têm página própria (produto-<slug>.html) gerada — os 71 produtos-semente
const PAGINAS_PRONTAS = new Set();
Object.values(CATALOGO_PADRAO).forEach(cat => cat.items.forEach(p => PAGINAS_PRONTAS.add(p.slug)));

// paleta estendida pra reconhecer nomes de cor digitados livremente na planilha
const COR_EXTRA = {
  branco:'#FFFFFF', azul:'#3D5A80', 'azul marinho':'#1F2D45', vermelho:'#8C2F2F',
  rosa:'#C98895', roxo:'#5B4B79', amarelo:'#D9A93B', laranja:'#C46B33',
  bege:'#D8C9A8', prateado:'#B7B7B7', 'off white':'#F1EBDD', 'off-white':'#F1EBDD',
  cru:'#E8DFC9', chumbo:'#4A4A48'
};

function normalizaTexto(s){
  return (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function slugify(s){
  let out = normalizaTexto(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return out || 'produto';
}

function corHex(nomeCor){
  const chave = normalizaTexto(nomeCor);
  if(COR[chave]) return COR[chave];
  if(COR_EXTRA[chave]) return COR_EXTRA[chave];
  return '#A39A87'; // cor neutra de fallback pra nome não reconhecido
}
function nomeCorExibir(nomeCor){
  const chave = normalizaTexto(nomeCor);
  if(NOME_COR[chave]) return NOME_COR[chave];
  const txt = (nomeCor || '').trim();
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}

// mapa "vestidos"/"Vestidos"/"VESTIDOS " -> chave oficial da categoria
const CATEGORIA_POR_TEXTO = {};
Object.entries(CATEGORIA_INFO).forEach(([key, info]) => {
  CATEGORIA_POR_TEXTO[normalizaTexto(key)] = key;
  CATEGORIA_POR_TEXTO[normalizaTexto(info.label)] = key;
});
function resolveCategoria(valor){
  return CATEGORIA_POR_TEXTO[normalizaTexto(valor)] || null;
}

function textoParaBool(v, padrao){
  const t = normalizaTexto(v);
  if(['sim','s','true','1','verdadeiro','yes'].includes(t)) return true;
  if(['nao','não','n','false','0','falso','no'].includes(t)) return false;
  return padrao;
}

// parser de CSV simples (aceita campos entre aspas com vírgula/quebra de linha dentro)
function parseCSV(text){
  const rows = [];
  let row = [], field = '', dentroAspas = false;
  for(let i = 0; i < text.length; i++){
    const c = text[i], next = text[i+1];
    if(dentroAspas){
      if(c === '"' && next === '"'){ field += '"'; i++; }
      else if(c === '"'){ dentroAspas = false; }
      else field += c;
    } else {
      if(c === '"') dentroAspas = true;
      else if(c === ','){ row.push(field); field = ''; }
      else if(c === '\n'){ row.push(field); rows.push(row); row = []; field = ''; }
      else if(c === '\r'){ /* ignora */ }
      else field += c;
    }
  }
  if(field.length || row.length){ row.push(field); rows.push(row); }
  return rows.filter(r => r.some(c => c.trim() !== ''));
}

// transforma as linhas da planilha (CSV) no mesmo formato do CATALOGO_PADRAO
function parseCatalogoCSV(csvText){
  const rows = parseCSV(csvText);
  if(rows.length < 2) return null;

  const header = rows[0].map(h => normalizaTexto(h));
  const idx = campo => header.indexOf(campo);
  const iCat = idx('categoria'), iNome = idx('nome'), iPreco = idx('preco'),
        iTam = idx('tamanhos'), iCor = idx('cores'), iNovo = idx('novo'),
        iDesc = idx('descricao'), iFoto = idx('foto'), iAtivo = idx('ativo');

  if(iCat === -1 || iNome === -1 || iPreco === -1) return null;

  const catalogo = {};
  const slugsUsados = {};

  for(let r = 1; r < rows.length; r++){
    const linha = rows[r];
    if(!linha || !linha[iNome] || !linha[iNome].trim()) continue;

    const ativo = iAtivo > -1 ? textoParaBool(linha[iAtivo], true) : true;
    if(!ativo) continue;

    const catKey = resolveCategoria(linha[iCat]);
    if(!catKey){ console.warn('Categoria não reconhecida na planilha:', linha[iCat]); continue; }

    const nome = linha[iNome].trim();
    let precoTxt = (linha[iPreco] || '0').trim().replace(/[^\d.,]/g, '');
    if(precoTxt.includes(',') && !precoTxt.includes('.')) precoTxt = precoTxt.replace(',', '.');
    else precoTxt = precoTxt.replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.');
    const preco = parseFloat(precoTxt) || 0;

    const tamanhos = iTam > -1 ? (linha[iTam]||'').split(/[;,]/).map(s=>s.trim()).filter(Boolean) : ['Único'];
    const cores = iCor > -1 ? (linha[iCor]||'').split(/[;,]/).map(s=>normalizaTexto(s)).filter(Boolean) : [];
    const nova = iNovo > -1 ? textoParaBool(linha[iNovo], false) : false;
    const desc = iDesc > -1 ? (linha[iDesc]||'').trim() : '';
    const foto = iFoto > -1 ? (linha[iFoto]||'').trim() || null : null;

    let baseSlug = slugify(nome), slug = baseSlug, n = 2;
    while(slugsUsados[slug]){ slug = `${baseSlug}-${n}`; n++; }
    slugsUsados[slug] = true;

    if(!catalogo[catKey]) catalogo[catKey] = { label: CATEGORIA_INFO[catKey].label, icon: CATEGORIA_INFO[catKey].icon, items: [] };
    catalogo[catKey].items.push({ nome, slug, foto, preco, tamanhos: tamanhos.length?tamanhos:['Único'], cores, nova, desc });
  }

  return Object.keys(catalogo).length ? catalogo : null;
}

// registra na paleta COR/NOME_COR quaisquer cores novas vindas da planilha,
// pra os swatches funcionarem sem precisar editar código
function registrarCoresDaPlanilha(catalogo){
  Object.values(catalogo).forEach(cat => cat.items.forEach(p => {
    p.cores.forEach(c => {
      if(!COR[c]) COR[c] = corHex(c);
      if(!NOME_COR[c]) NOME_COR[c] = nomeCorExibir(c);
    });
  }));
}

// transforma as linhas vindas do Supabase no mesmo formato do CATALOGO_PADRAO
function parseCatalogoSupabase(linhas){
  const catalogo = {};
  linhas.forEach(row => {
    if(row.ativo === false) return;
    const catKey = resolveCategoria(row.categoria);
    if(!catKey){ console.warn('Categoria não reconhecida no banco:', row.categoria); return; }

    const tamanhos = (row.tamanhos || '').split(/[;,]/).map(s => s.trim()).filter(Boolean);
    const cores = (row.cores || '').split(/[;,]/).map(s => normalizaTexto(s)).filter(Boolean);

    if(!catalogo[catKey]) catalogo[catKey] = { label: CATEGORIA_INFO[catKey].label, icon: CATEGORIA_INFO[catKey].icon, items: [] };
    catalogo[catKey].items.push({
      id: row.id,
      nome: row.nome,
      slug: row.slug || slugify(row.nome),
      foto: row.foto || null,
      preco: parseFloat(row.preco) || 0,
      tamanhos: tamanhos.length ? tamanhos : ['Único'],
      cores,
      nova: !!row.novo,
      desc: row.descricao || ''
    });
  });
  return Object.keys(catalogo).length ? catalogo : null;
}

async function carregarCatalogoSupabase(){
  const url = window.LOJA && window.LOJA.supabaseUrl;
  const key = window.LOJA && window.LOJA.supabaseAnonKey;
  if(!url || !key) return null;
  try{
    const res = await fetch(`${url}/rest/v1/produtos?select=*`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: 'no-store'
    });
    if(!res.ok) throw new Error('falha ao buscar produtos no banco');
    const linhas = await res.json();
    const parsed = parseCatalogoSupabase(linhas);
    if(!parsed) throw new Error('banco sem produtos ativos');
    registrarCoresDaPlanilha(parsed);
    return parsed;
  }catch(err){
    console.warn('Não foi possível carregar produtos do banco de dados.', err);
    return null;
  }
}

let _catalogoCarregado = null;
async function carregarCatalogo(){
  if(_catalogoCarregado) return _catalogoCarregado;

  // 1) tenta o banco de dados (Supabase), se configurado
  const doBanco = await carregarCatalogoSupabase();
  if(doBanco){ _catalogoCarregado = doBanco; CATALOGO = doBanco; return doBanco; }

  // 2) tenta a planilha do Google, se configurada
  const url = window.LOJA && window.LOJA.planilhaUrl;
  if(url){
    try{
      const res = await fetch(url, { cache: 'no-store' });
      if(!res.ok) throw new Error('falha ao buscar a planilha');
      const texto = await res.text();
      const parsed = parseCatalogoCSV(texto);
      if(!parsed) throw new Error('planilha vazia ou em formato inesperado');
      registrarCoresDaPlanilha(parsed);
      _catalogoCarregado = parsed;
      CATALOGO = parsed;
      return parsed;
    }catch(err){
      console.warn('Não foi possível carregar a planilha de produtos.', err);
    }
  }

  // 3) usa o catálogo padrão embutido no site
  _catalogoCarregado = CATALOGO_PADRAO;
  CATALOGO = CATALOGO_PADRAO;
  return CATALOGO_PADRAO;
}

function productCardHTML(catKey, p){
  const icon = CATEGORIA_INFO[catKey] ? CATEGORIA_INFO[catKey].icon : 'ic-selo';
  const temPagina = PAGINAS_PRONTAS.has(p.slug);
  // produtos-semente (71 originais) têm página própria com prévia de imagem no
  // WhatsApp; qualquer outro produto (painel/planilha) usa a página genérica
  // produto.html, que funciona pra qualquer slug mas sem a prévia de imagem.
  const linkProduto = temPagina ? `produto-${p.slug}.html` : `produto.html?slug=${encodeURIComponent(p.slug)}`;
  const nomeSeguro = escapeHTML(p.nome);
  const descSeguro = escapeHTML(p.desc);
  const sizesHTML = p.tamanhos.map(t => `<span>${escapeHTML(t)}</span>`).join('');
  const swatchesHTML = p.cores.map(c => `<span class="swatch" style="background:${corHex(c)}" title="${escapeHTML(nomeCorExibir(c))}"></span>`).join('');
  const linkCompleto = temPagina ? produtoLink(p.slug) : `${window.LOJA.siteUrl}/${linkProduto}`;
  const msg = `Olá! Tenho interesse nesta peça da Rocha Firme Moda:\n${p.nome} - ${fmtPreco(p.preco)}\n${linkCompleto}\n\nAinda está disponível?`;
  const msgSegura = escapeHTML(msg);
  const fotoSrc = p.foto ? (/^https?:\/\//i.test(p.foto) ? p.foto : `fotos/${p.foto}`) : null;
  const midia = fotoSrc
    ? `<img src="${fotoSrc}" alt="${nomeSeguro}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
       <svg class="media-fallback" style="display:none"><use href="icons.svg#${icon}"></use></svg>`
    : `<svg><use href="icons.svg#${icon}"></use></svg>`;
  return `
  <article class="product-card reveal" data-sizes="${p.tamanhos.join(',')}" data-colors="${p.cores.join(',')}">
    <a class="product-media" href="${linkProduto}">
      ${p.nova ? '<span class="tag-new">Novo</span>' : ''}
      ${midia}
    </a>
    <div class="product-body">
      <a href="${linkProduto}" class="product-name-link"><h3 class="product-name">${nomeSeguro}</h3></a>
      <p class="product-desc">${descSeguro}</p>
      <div class="swatches">${swatchesHTML}</div>
      <div class="sizes">${sizesHTML}</div>
      <div class="product-price">${fmtPreco(p.preco)}</div>
      <a class="btn-buy" data-whats="${msgSegura}">
        <svg><use href="icons.svg#ic-whats"></use></svg>
        Comprar
      </a>
    </div>
  </article>`;
}

function renderGrid(containerId, catKey, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  const items = list || (CATALOGO[catKey] && CATALOGO[catKey].items) || [];
  el.innerHTML = items.length
    ? items.map(p => productCardHTML(catKey, p)).join('')
    : `<div class="empty-state">Nenhuma peça encontrada com esse filtro. <br>Tente outra combinação de tamanho/cor.</div>`;

  el.querySelectorAll('[data-whats]').forEach(a => {
    a.href = whatsLink(a.getAttribute('data-whats'));
    a.target = '_blank'; a.rel = 'noopener';
  });
  el.querySelectorAll('.reveal').forEach(card => card.classList.add('in'));
}

async function initTodasPage(gridId){
  document.getElementById(gridId).innerHTML = `<div class="empty-state">Carregando peças…</div>`;
  const catalogo = await carregarCatalogo();

  const all = [];
  Object.keys(catalogo).forEach(key => {
    catalogo[key].items.forEach(p => all.push({cat:key, p}));
  });

  function draw(list){
    const el = document.getElementById(gridId);
    el.innerHTML = list.length
      ? list.map(d => productCardHTML(d.cat, d.p)).join('')
      : `<div class="empty-state">Nenhuma peça encontrada nessa categoria.</div>`;
    el.querySelectorAll('[data-whats]').forEach(a => { a.href = whatsLink(a.getAttribute('data-whats')); a.target='_blank'; a.rel='noopener'; });
    el.querySelectorAll('.reveal').forEach(c => c.classList.add('in'));
  }
  draw(all);

  const catButtons = document.querySelectorAll('[data-filter-cat]');
  let activeCat = null;
  catButtons.forEach(btn => btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-filter-cat');
    activeCat = (activeCat === val) ? null : val;
    catButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-cat') === activeCat));
    draw(activeCat ? all.filter(d => d.cat === activeCat) : all);
  }));
}

async function initCategoryPage(catKey, gridId){
  document.getElementById(gridId).innerHTML = `<div class="empty-state">Carregando peças…</div>`;
  await carregarCatalogo();
  renderGrid(gridId, catKey);

  const sizeButtons = document.querySelectorAll('[data-filter-size]');
  const colorButtons = document.querySelectorAll('[data-filter-color]');
  let activeSize = null, activeColor = null;

  function apply(){
    const all = (CATALOGO[catKey] && CATALOGO[catKey].items) || [];
    const filtered = all.filter(p =>
      (!activeSize || p.tamanhos.includes(activeSize)) &&
      (!activeColor || p.cores.includes(activeColor))
    );
    renderGrid(gridId, catKey, filtered);
  }

  sizeButtons.forEach(btn => btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-filter-size');
    activeSize = (activeSize === val) ? null : val;
    sizeButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-size') === activeSize));
    apply();
  }));

  colorButtons.forEach(btn => btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-filter-color');
    activeColor = (activeColor === val) ? null : val;
    colorButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-color') === activeColor));
    apply();
  }));
}
