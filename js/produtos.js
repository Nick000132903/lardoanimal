// ========================================
// PRODUTOS.JS - VareiShop
// ========================================

let allProducts = [];
let filteredProducts = [];
let currentPage = 1;
const productsPerPage = 12;

// Estado dos filtros
const filters = {
  searchTerm: '',
  badge: 'todos',
  priceMin: null,
  priceMax: null
};

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  setupEventListeners();
  setupBackToTop();
  setupMobileMenu();
});

// ========================================
// CARREGAR PRODUTOS DA API
// ========================================

async function loadProducts() {
  try {
    const response = await fetch('/api/produtos');
    if (!response.ok) throw new Error('Erro ao carregar produtos');

    const data = await response.json();

    if (data.success && data.produtos) {
      allProducts = data.produtos;
      filteredProducts = [...allProducts];
      renderProducts();
      updateResultCount();
    } else {
      throw new Error(data.error || 'Erro desconhecido');
    }
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    document.getElementById('product-grid').innerHTML = `
      <div class="col-span-full text-center py-20">
        <div class="text-6xl mb-4">⚠️</div>
        <h3 class="text-xl font-bold mb-2">Erro ao carregar produtos</h3>
        <p class="text-muted text-sm">Tente recarregar a página.</p>
      </div>
    `;
  }
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
  // Busca
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    filters.searchTerm = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // Filtros de badge
  document.querySelectorAll('.badge-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.badge-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filters.badge = btn.dataset.badge;
      applyFilters();
    });
  });

  // Filtros de preço
  document.getElementById('apply-price-filter').addEventListener('click', () => {
    const minInput = document.getElementById('price-min');
    const maxInput = document.getElementById('price-max');

    filters.priceMin = minInput.value ? parseFloat(minInput.value) : null;
    filters.priceMax = maxInput.value ? parseFloat(maxInput.value) : null;

    applyFilters();
  });

  document.getElementById('clear-price-filter').addEventListener('click', () => {
    document.getElementById('price-min').value = '';
    document.getElementById('price-max').value = '';
    filters.priceMin = null;
    filters.priceMax = null;
    applyFilters();
  });

  // Paginação
  document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts();
      scrollToTop();
    }
  });

  document.getElementById('next-page').addEventListener('click', () => {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderProducts();
      scrollToTop();
    }
  });
}

// ========================================
// APLICAR FILTROS
// ========================================

function applyFilters() {
  filteredProducts = allProducts.filter(product => {
    // Filtro de busca por nome
    if (filters.searchTerm && !product.nome.toLowerCase().includes(filters.searchTerm)) {
      return false;
    }

    // Filtro de badge
    if (filters.badge !== 'todos' && product.badge !== filters.badge) {
      return false;
    }

    // Extrair valor numérico do preço
    const preco = extractPrice(product.preco);

    // Filtro de preço mínimo
    if (filters.priceMin !== null && preco < filters.priceMin) {
      return false;
    }

    // Filtro de preço máximo
    if (filters.priceMax !== null && preco > filters.priceMax) {
      return false;
    }

    return true;
  });

  currentPage = 1;
  renderProducts();
  updateResultCount();
}

// ========================================
// EXTRAIR PREÇO NUMÉRICO
// ========================================

function extractPrice(precoString) {
  if (typeof precoString === 'number') return precoString;

  const match = precoString.match(/[\d.,]+/);
  if (match) {
    return parseFloat(match[0].replace(',', '.'));
  }
  return 0;
}

// ========================================
// RENDERIZAR PRODUTOS
// ========================================

function renderProducts() {
  const grid = document.getElementById('product-grid');
  const noResults = document.getElementById('no-results');

  if (filteredProducts.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    document.getElementById('pagination').classList.add('hidden');
    return;
  }

  noResults.classList.add('hidden');
  document.getElementById('pagination').classList.remove('hidden');

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  grid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');

  // Event listeners para botões de compra
  document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', function () {
      const url = this.dataset.link;
      const nome = this.dataset.nome;
      console.log(`🛒 Clique em [${nome}] — link: ${url}`);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  renderPagination();
}

// ========================================
// CRIAR CARD DE PRODUTO
// ========================================

function createProductCard(product) {
  const badgeColors = {
    'Shopee': 'bg-orange-100 text-orange-700',
    'Amazon': 'bg-yellow-100 text-yellow-700',
    'Mercado Livre': 'bg-yellow-100 text-yellow-600',
    'Magalu': 'bg-blue-100 text-blue-700'
  };

  const badgeClass = badgeColors[product.badge] || 'bg-gray-100 text-gray-700';

  return `
    <article class="product-card bg-white rounded-2xl border border-bord shadow-card overflow-hidden flex flex-col">
      <div class="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src="${product.img}"
          alt="${product.nome}"
          class="w-full h-full object-cover"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x400/F2EDE6/AAAAAA?text=Sem+imagem'"
        />
        ${product.badge ? `<span class="absolute top-3 left-3 ${badgeClass} text-[10px] font-bold px-3 py-1 rounded-full">${product.badge}</span>` : ''}
      </div>
      <div class="p-5 flex flex-col flex-grow">
        <h3 class="font-bold text-base text-ink mb-2 line-clamp-2 leading-snug min-h-[3rem]">
          ${product.nome}
        </h3>
        <p class="text-muted text-xs mb-4 line-clamp-2 flex-grow">
          ${product.descricao}
        </p>
        <div class="mt-auto">
          <p class="text-2xl font-extrabold text-[#6366F1] mb-4">
            ${product.preco}
          </p>
          <button
            class="btn-comprar block w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white text-center font-bold text-sm py-3 rounded-xl transition-all hover:shadow-lg"
            data-link="${product.link}"
            data-nome="${product.nome}">
            Ver oferta →
          </button>
        </div>
      </div>
    </article>
  `;
}

// ========================================
// RENDERIZAR PAGINAÇÃO
// ========================================

function renderPagination() {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pageNumbersContainer = document.getElementById('page-numbers');
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;

  // Gerar números de página
  pageNumbersContainer.innerHTML = '';

  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // Botão primeira página
  if (startPage > 1) {
    pageNumbersContainer.innerHTML += createPageButton(1);
    if (startPage > 2) {
      pageNumbersContainer.innerHTML += '<span class="px-2 text-muted">...</span>';
    }
  }

  // Botões de páginas visíveis
  for (let i = startPage; i <= endPage; i++) {
    pageNumbersContainer.innerHTML += createPageButton(i);
  }

  // Botão última página
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pageNumbersContainer.innerHTML += '<span class="px-2 text-muted">...</span>';
    }
    pageNumbersContainer.innerHTML += createPageButton(totalPages);
  }

  // Adicionar event listeners
  document.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = parseInt(btn.dataset.page);
      renderProducts();
      scrollToTop();
    });
  });
}

function createPageButton(pageNumber) {
  const isActive = pageNumber === currentPage;
  const activeClass = isActive
    ? 'bg-[#6366F1] text-white border-[#6366F1]'
    : 'bg-white text-ink border-bord hover:border-[#6366F1] hover:text-[#6366F1]';

  return `
    <button
      class="page-btn w-10 h-10 ${activeClass} border rounded-full text-sm font-semibold transition-all ${isActive ? '' : 'hover:shadow-md'}"
      data-page="${pageNumber}"
      ${isActive ? 'disabled' : ''}>
      ${pageNumber}
    </button>
  `;
}

// ========================================
// ATUALIZAR CONTADOR DE RESULTADOS
// ========================================

function updateResultCount() {
  const count = filteredProducts.length;
  const total = allProducts.length;
  const countEl = document.getElementById('result-count');

  if (count === total) {
    countEl.textContent = `Mostrando ${count} produtos`;
  } else {
    countEl.textContent = `${count} de ${total} produtos encontrados`;
  }
}

// ========================================
// SCROLL TO TOP
// ========================================

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', scrollToTop);
}

// ========================================
// MENU MOBILE
// ========================================

function setupMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hbTop = document.getElementById('hb-top');
  const hbMid = document.getElementById('hb-mid');
  const hbBot = document.getElementById('hb-bot');

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);

    if (isOpen) {
      hbTop.style.transform = 'rotate(45deg) translateY(8px)';
      hbMid.style.opacity = '0';
      hbBot.style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      hbTop.style.transform = '';
      hbMid.style.opacity = '';
      hbBot.style.transform = '';
    }
  });
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const hbTop = document.getElementById('hb-top');
  const hbMid = document.getElementById('hb-mid');
  const hbBot = document.getElementById('hb-bot');

  mobileMenu.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  hbTop.style.transform = '';
  hbMid.style.opacity = '';
  hbBot.style.transform = '';
}

window.closeMobileMenu = closeMobileMenu;
