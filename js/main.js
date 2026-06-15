async function fetchProdutos() {
  try {
    const response = await fetch('/api/produtos');
    const data = await response.json();

    if (data.success) {
      const produtos = data.produtos.map(p => ({
        ...p,
        categorias: Array.isArray(p.categorias) ? p.categorias : JSON.parse(p.categorias || '[]')
      }));
      renderProdutos(produtos);
    } else {
      console.error('Erro ao carregar produtos:', data.error);
      showError();
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    showError();
  }
}

function showError() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '<p class="col-span-full text-center text-muted py-12">Erro ao carregar produtos.</p>';
}

function renderProdutos(produtos) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';

  if (!produtos.length) {
    grid.innerHTML = '<p class="col-span-full text-center text-muted py-12">Nenhum produto cadastrado.</p>';
    return;
  }

  const produtosDestaque = produtos.slice(0, 6);

  produtosDestaque.forEach(p => {
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
        ${p.badge ? `<span class="absolute top-3 left-3 bg-[#6366F1] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">${p.badge}</span>` : ''}
      </div>
      <div class="flex flex-col flex-1 p-5">
        <h3 class="font-bold text-base leading-snug mb-2">${p.nome}</h3>
        <p class="text-[#6B7280] text-xs leading-relaxed flex-1 mb-4">${p.descricao}</p>
        <div class="flex items-center justify-between gap-3 mt-auto">
          <span class="text-[#10B981] font-extrabold text-xl">${p.preco}</span>
          <button
            class="btn-comprar bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-[0_3px_12px_rgba(99,102,241,0.3)] hover:shadow-[0_5px_18px_rgba(99,102,241,0.4)] transition-all hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            data-link="${p.link}"
            data-nome="${p.nome}"
          >Ver oferta →</button>
        </div>
      </div>`;

    grid.appendChild(card);
  });

  document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', function () {
      const url = this.dataset.link;
      const nome = this.dataset.nome;
      console.log(`🛒 Clique em [${nome}] — link: ${url}`);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}

fetchProdutos();
