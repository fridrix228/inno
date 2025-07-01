/* ---------------- MODAL --------------------------- */
const btnOrder   = document.getElementById('sale');
const modal      = document.getElementById('orderModal');
const modalClose = modal?.querySelector('.modal__close');

if (btnOrder) {
  btnOrder.addEventListener('click', e => {
    e.preventDefault();
    modal?.classList.add('show');
  });
}

if (modalClose) {
  modalClose.addEventListener('click', () => modal?.classList.remove('show'));
}

if (modal) {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('show');
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') modal?.classList.remove('show');
});

/* ---------------- BURGER --------------------------- */
const burger    = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger?.addEventListener('click', () => {
  mobileNav?.classList.toggle('active');
});

mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav?.classList.remove('active'));
});

/* ---------------- PAGE READY ----------------------- */
window.addEventListener('load', () => {
  document.body.classList.remove('loading');
});
