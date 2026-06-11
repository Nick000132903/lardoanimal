const produtos = [
    {
    id: 1,
    nome: "Arranhador para Gatos Redondo com Bolinha Interativa",
    preco: "R$ 18,98",
    descricao: "Arranhador redondo com bolinha interativa. Ideal para gatos afiarem as unhas e se divertirem por horas.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/1BJsWaFmUq",
    img:  "src/products/imgProduto1.png"
    },
    {
    id: 2,
    nome: "Bola Brinquedo Elétrico para Gatos e Cães",
    preco: "R$ 10,00",
    descricao: "Bola elétrica interativa que se move sozinha. Estimula instintos e garante diversão para cães e gatos.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/3qKdiJoPBO",
    img:  "src/products/imgProduto2.png"
    },
    {
    id: 3,
    nome: "Pá Higiênica De Areia para Gatos",
    preco: "R$ 15,99",
    descricao: "Pá higiênica resistente para limpeza da caixa de areia. Remove fezes e torrões com facilidade e rapidez.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/8Kn34wpP8V",
    img:  "src/products/imgProduto3.png"
    },
    {
    id: 4,
    nome: "Escova A Vapor para Gatos Cães 3 Em 1",
    preco: "R$ 12,99",
    descricao: "Escova a vapor 3 em 1 hidrata, desembaraça e remove pelos mortos. Ideal para cães e gatos. Super prática!",
    badge: "Shopee",
    link: "https://s.shopee.com.br/1LdIkFGPgw",
    img:  "src/products/imgProduto4.png"
    },
    {
    id: 5,
    nome: "Tapete Arranhador para Gatos Proteção Sofá",
    preco: "R$ 20,87",
    descricao: "Tapete arranhador para proteger o sofá. Mantém os móveis seguros enquanto seu gato afia as unhas.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/6fep6Bjfs3",
    img:  "src/products/imgProduto5.png"
    },
    {
    id: 6,
    nome: "Coleira Peitoral Cachorro E Gato",
    preco: "R$ 15,99",
    descricao: "Coleira peitoral ajustável para cães e gatos. Distribui pressão, evita sufocamento e garante mais segurança nos passeios.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/50Wb7Fj0Ut",
    img:  "src/products/imgProduto6.png"
    },
    {
    id: 7,
    nome: "Comedouro Personalizado Inclinável com Tampas",
    preco: "R$ 35,34",
    descricao: "Comedouro inclinável personalizado com tampas. Ergonômico, evita bagunça e mantém a ração fresca por mais tempo.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/gNbxPj4aU",
    img:  "src/products/imgProduto7.png"
    },
    {
    id: 8,
    nome: "Plaquinha de Identificação Pet Pingente",
    preco: "R$ 8,70",
    descricao: "Placa de identificação personalizada em pingente. Segurança para seu pet com nome e telefone do tutor.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/5fmHukZbML",
    img:  "src/products/imgProduto8.png"
    },
    {
    id: 9,
    nome: "Portão Para Cães / Grade De Proteção Para Crianças",
    preco: "R$ 62,79",
    descricao: "Portão de segurança regulável para cães e crianças. Ideal para bloquear escadas e corredores com proteção.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/4ftkj4mZHw",
    img:  "src/products/imgProduto9.png"
    },
    {
    id: 10,
    nome: "Remedio Carrapato Pulgas Para Cachorro",
    preco: "R$ 18,99",
    descricao: "Remédio antipulgas e carrapatos para cachorro. Ação rápida e prolongada, protege seu pet por semanas.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/1qZZLxqOU7",
    img:  "src/products/imgProduto10.png"
    },
    {
    id: 11,
    nome: "Caminha Pet Suede Enchimento Siliconado",
    preco: "R$ 54,99",
    descricao: "Caminha macia em suede com enchimento siliconado. Conforto e aconchego para o sono do seu pet.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/1LdIlEVMyf",
    img:  "src/products/imgProduto11.png"
    },
    {
    id: 12,
    nome: "Roupinha Pet Personalizada Brasil",
    preco: "R$ 32,90",
    descricao: "Roupinha personalizada para cães e gatos. Feita no Brasil, tecido macio e estampa exclusiva para seu pet.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/4ftkjc8IY5",
    img:  "src/products/imgProduto12.png"
    },
    {
    id: 13,
    nome: "Bebedouro Automatico Pet Fonte",
    preco: "R$ 48,99",
    descricao: "Bebedouro automático com fonte filtrante. Água fresca e circulante para hidratar seu pet o dia todo.",
    badge: "Shopee",
    link: "https://s.shopee.com.br/30lWkfKcBd",
    img:  "src/products/imgProduto13.png"
    },
    {
    id: 14,
    nome: "Alimentador Automático para Gatos para 3",
    preco: "R$ 289,96",
    descricao: "Alimentador automático para até 3 gatos. Ração programada em horários certos, porção controlada e prática.",
    badge: "Amazon",
    link: "https://amzn.to/4eyADSq",
    img:  "src/products/imgProduto14.png"
    },
    {
    id: 15,
    nome: "Guia Longa Adestramento 3 Metros",
    preco: "R$ 78,90",
    descricao: "Guia longa de adestramento com 3 metros. Liberdade controlada para treinos e passeios com segurança.",
    badge: "Amazon",
    link: "https://amzn.to/4aGI3k5",
    img:  "src/products/imgProduto15.png"
    },
];





// ── Copiar código do cupom ───────────────────────────────────────
function copiarCupom(el) {
  const codigo = el.textContent.trim();
  navigator.clipboard.writeText(codigo).then(() => {
    const feedback = document.getElementById('cupom-feedback');
    feedback.style.opacity = '1';
    setTimeout(() => { feedback.style.opacity = '0'; }, 2500);
  }).catch(() => {
    // Fallback para navegadores sem clipboard API
    const tmp = document.createElement('textarea');
    tmp.value = codigo;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    const feedback = document.getElementById('cupom-feedback');
    feedback.style.opacity = '1';
    setTimeout(() => { feedback.style.opacity = '0'; }, 2500);
  });
}

// Renderiza os cards dinamicamente
function renderProdutos() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    if (!produtos.length) {
    grid.innerHTML = '<p class="col-span-full text-center text-muted py-12">Nenhum produto cadastrado. Adicione itens ao array <code>produtos</code>.</p>';
    return;
    }

    produtos.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card bg-white rounded-2xl border border-[#EDE8E0] shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col';

    card.innerHTML = `
        <div class="relative overflow-hidden aspect-[4/3] bg-[#F2EDE6]">
        <img
            src="${p.img}"
            alt="${p.nome}"
            loading="lazy"
            onerror="this.src='https://via.placeholder.com/400x300/F2EDE6/AAAAAA?text=Imagem+indispon%C3%ADvel'"
        />
        ${p.badge ? `<span class="absolute top-3 left-3 bg-[#FF8C42] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">${p.badge}</span>` : ''}
        </div>
        <div class="flex flex-col flex-1 p-5">
        <h3 class="font-bold text-base leading-snug mb-2">${p.nome}</h3>
        <p class="text-[#6B7280] text-xs leading-relaxed flex-1 mb-4">${p.descricao}</p>
        <div class="flex items-center justify-between gap-3 mt-auto">
            <span class="text-[#4CAF50] font-extrabold text-xl">${p.preco}</span>
            <button
            class="btn-comprar bg-[#FF8C42] hover:bg-[#E07030] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-[0_3px_12px_rgba(255,140,66,0.3)] hover:shadow-[0_5px_18px_rgba(255,140,66,0.4)] transition-all hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            data-link="${p.link}"
            data-nome="${p.nome}"
            >Ver oferta →</button>
        </div>
        </div>`;

    grid.appendChild(card);
    });

    // Eventos de clique — rastreio no console do navegador
    document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', function () {
        const url  = this.dataset.link;
        const nome = this.dataset.nome;
        console.log(`\uD83D\uDED2 Clique em [${nome}] \u2014 link: ${url}`);
        window.open(url, '_blank', 'noopener,noreferrer');
    });
    });
}

// Hambúrguer
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu   = document.getElementById('mobile-menu');
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

function closeMobileMenu() {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hbTop.style.cssText = hbMid.style.cssText = hbBot.style.cssText = '';
}

// Botão voltar ao topo
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Init
renderProdutos();