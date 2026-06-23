// ========================================
// UTILS.JS - Funções Utilitárias
// ========================================

// ========================================
// MENU MOBILE
// ========================================

function initMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);

    // Animar hamburger
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translateY(7px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Fechar menu ao clicar em um link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger-btn');

  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    
    const spans = hamburger?.querySelectorAll('span');
    if (spans) {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }
}

// ========================================
// BACK TO TOP
// ========================================

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
      btn.style.display = 'flex';
    } else {
      btn.classList.remove('visible');
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========================================
// COPIAR CUPOM
// ========================================

function copiarCupom(el) {
  const codigo = el.textContent.trim();
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(codigo).then(() => {
      mostrarFeedback();
    }).catch(() => {
      fallbackCopiar(codigo);
    });
  } else {
    fallbackCopiar(codigo);
  }
}

function fallbackCopiar(codigo) {
  const tmp = document.createElement('textarea');
  tmp.value = codigo;
  tmp.style.position = 'fixed';
  tmp.style.opacity = '0';
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
  mostrarFeedback();
}

function mostrarFeedback() {
  const feedback = document.getElementById('cupom-feedback');
  if (feedback) {
    feedback.style.opacity = '1';
    setTimeout(() => { feedback.style.opacity = '0'; }, 2500);
  }
}

// ========================================
// INICIALIZAR - EXECUTA TODAS AS FUNÇÕES
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initBackToTop();
});