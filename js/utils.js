function initMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hbTop = document.getElementById('hb-top');
  const hbMid = document.getElementById('hb-mid');
  const hbBot = document.getElementById('hb-bot');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);

    if (isOpen) {
      hbTop.style.transform = 'rotate(45deg) translateY(8px)';
      hbMid.style.opacity = '0';
      hbBot.style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      hbTop.style.transform = 'none';
      hbMid.style.opacity = '1';
      hbBot.style.transform = 'none';
    }
  });
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger-btn');
  const hbTop = document.getElementById('hb-top');
  const hbMid = document.getElementById('hb-mid');
  const hbBot = document.getElementById('hb-bot');

  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    if (hbTop) hbTop.style.transform = 'none';
    if (hbMid) hbMid.style.opacity = '1';
    if (hbBot) hbBot.style.transform = 'none';
  }
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function copiarCupom(el) {
  const codigo = el.textContent.trim();
  navigator.clipboard.writeText(codigo).then(() => {
    const feedback = document.getElementById('cupom-feedback');
    feedback.style.opacity = '1';
    setTimeout(() => { feedback.style.opacity = '0'; }, 2500);
  }).catch(() => {
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
