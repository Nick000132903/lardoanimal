const produtos = [
  {
    id: 1,
    nome: "Arranhador para Gatos Redondo com Bolinha Interativa",
    preco: "R$ 18,98",
    descricao: "Arranhador redondo com bolinha interativa. Ideal para gatos afiarem as unhas e se divertirem por horas.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/1BJsWaFmUq",
    img: "src/products/imgProduto1.png",
    categorias: ["gatos", "brinquedos"]
  },
  {
    id: 2,
    nome: "Bola Brinquedo Elétrico para Gatos e Cães",
    preco: "R$ 10,00",
    descricao: "Bola elétrica interativa que se move sozinha. Estimula instintos e garante diversão para cães e gatos.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/3qKdiJoPBO",
    img: "src/products/imgProduto2.png",
    categorias: ["gatos", "cães", "brinquedos"]
  },
  {
    id: 3,
    nome: "Pá Higiênica De Areia para Gatos",
    preco: "R$ 15,99",
    descricao: "Pá higiênica resistente para limpeza da caixa de areia. Remove fezes e torrões com facilidade e rapidez.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/8Kn34wpP8V",
    img: "src/products/imgProduto3.png",
    categorias: ["gatos", "higiene"]
  },
  {
    id: 4,
    nome: "Escova A Vapor para Gatos Cães 3 Em 1",
    preco: "R$ 12,99",
    descricao: "Escova a vapor 3 em 1 hidrata, desembaraça e remove pelos mortos. Ideal para cães e gatos. Super prática!",
    badge: "Shopee",
    link: "https://s.shopee.com.br/1LdIkFGPgw",
    img: "src/products/imgProduto4.png",
    categorias: ["gatos", "cães", "higiene"]
  },
  {
    id: 5,
    nome: "Tapete Arranhador para Gatos Proteção Sofá",
    preco: "R$ 20,87",
    descricao: "Tapete arranhador para proteger o sofá. Mantém os móveis seguros enquanto seu gato afia as unhas.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/6fep6Bjfs3",
    img: "src/products/imgProduto5.png",
    categorias: ["gatos"]
  },
  {
    id: 6,
    nome: "Coleira Peitoral Cachorro E Gato",
    preco: "R$ 15,99",
    descricao: "Coleira peitoral ajustável para cães e gatos. Distribui pressão, evita sufocamento e garante mais segurança nos passeios.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/50Wb7Fj0Ut",
    img: "src/products/imgProduto6.png",
    categorias: ["gatos", "cães"]
  },
  {
    id: 7,
    nome: "Comedouro Personalizado Inclinável com Tampas",
    preco: "R$ 35,34",
    descricao: "Comedouro inclinável personalizado com tampas. Ergonômico, evita bagunça e mantém a ração fresca por mais tempo.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/gNbxPj4aU",
    img: "src/products/imgProduto7.png",
    categorias: ["gatos", "cães", "alimentação"]
  },
  {
    id: 8,
    nome: "Plaquinha de Identificação Pet Pingente",
    preco: "R$ 8,70",
    descricao: "Placa de identificação personalizada em pingente. Segurança para seu pet com nome e telefone do tutor.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/5fmHukZbML",
    img: "src/products/imgProduto8.png",
    categorias: ["gatos", "cães"]
  },
  {
    id: 9,
    nome: "Portão Para Cães / Grade De Proteção Para Crianças",
    preco: "R$ 62,79",
    descricao: "Portão de segurança regulável para cães e crianças. Ideal para bloquear escadas e corredores com proteção.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/4ftkj4mZHw",
    img: "src/products/imgProduto9.png",
    categorias: ["cães"]
  },
  {
    id: 10,
    nome: "Remedio Carrapato Pulgas Para Cachorro",
    preco: "R$ 18,99",
    descricao: "Remédio antipulgas e carrapatos para cachorro. Ação rápida e prolongada, protege seu pet por semanas.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/1qZZLxqOU7",
    img: "src/products/imgProduto10.png",
    categorias: ["cães", "higiene"]
  },
  {
    id: 11,
    nome: "Caminha Pet Suede Enchimento Siliconado",
    preco: "R$ 54,99",
    descricao: "Caminha macia em suede com enchimento siliconado. Conforto e aconchego para o sono do seu pet.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/1LdIlEVMyf",
    img: "src/products/imgProduto11.png",
    categorias: ["gatos", "cães"]
  },
  {
    id: 12,
    nome: "Roupinha Pet Personalizada Brasil",
    preco: "R$ 32,90",
    descricao: "Roupinha personalizada para cães e gatos. Feita no Brasil, tecido macio e estampa exclusiva para seu pet.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/4ftkjc8IY5",
    img: "src/products/imgProduto12.png",
    categorias: ["gatos", "cães"]
  },
  {
    id: 13,
    nome: "Bebedouro Automatico Pet Fonte",
    preco: "R$ 48,99",
    descricao: "Bebedouro automático com fonte filtrante. Água fresca e circulante para hidratar seu pet o dia todo.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/30lWkfKcBd",
    img: "src/products/imgProduto13.png",
    categorias: ["gatos", "cães", "alimentação"]
  },
  {
    id: 14,
    nome: "Alimentador Automático para Gatos para 3",
    preco: "R$ 289,96",
    descricao: "Alimentador automático para até 3 gatos. Ração programada em horários certos, porção controlada e prática.",
    badge: "Amazon",
    link: "https://amzn.to/4eyADSq",
    img: "src/products/imgProduto14.png",
    categorias: ["gatos", "alimentação"]
  },
  {
    id: 15,
    nome: "Guia Longa Adestramento 3 Metros",
    preco: "R$ 78,90",
    descricao: "Guia longa de adestramento com 3 metros. Liberdade controlada para treinos e passeios com segurança.",
    badge: "Amazon",
    link: "https://amzn.to/4aGI3k5",
    img: "src/products/imgProduto15.png",
    categorias: ["cães"]
  },
];

function initMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hbTop = document.getElementById('hb-top');
  const hbMid = document.getElementById('hb-mid');
  const hbBot = document.getElementById('hb-bot');
  let menuOpen = false;

  hamburgerBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    hamburgerBtn.setAttribute('aria-expanded', menuOpen);
    if (menuOpen) {
      hbTop.style.cssText = 'transform:translateY(8px) rotate(45deg)';
      hbMid.style.cssText = 'opacity:0';
      hbBot.style.cssText = 'transform:translateY(-8px) rotate(-45deg)';
    } else {
      hbTop.style.cssText = hbMid.style.cssText = hbBot.style.cssText = '';
    }
  });

  window.closeMobileMenu = function() {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hbTop.style.cssText = hbMid.style.cssText = hbBot.style.cssText = '';
  };
}

function initBackToTop() {
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
