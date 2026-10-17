// Motion layer: smooth scrolling, word-by-word headings, counters, magnetic
// buttons, gentle tilt and scroll-reactive marquees. Everything is skipped
// when the visitor prefers reduced motion.
import Lenis from 'lenis';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const root = document.documentElement;

/* ---------- Smooth scrolling ---------- */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 0.9 });
  (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
  const raf = (t: number) => { lenis!.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);

  // In-page anchors (/#a-propos, #contact…) glide instead of jumping
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a[href*="#"]') as HTMLAnchorElement | null;
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = document.querySelector(url.hash);
    if (!target) return;
    e.preventDefault();
    lenis!.scrollTo(target as HTMLElement, { offset: -90 });
    history.replaceState(null, '', url.hash);
  });
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) setTimeout(() => lenis!.scrollTo(target as HTMLElement, { offset: -90, immediate: true }), 50);
  }
}

/* ---------- Run a callback once an element enters the viewport ---------- */
const watchers: { el: Element; cb: () => void }[] = [];
const checkVisible = () => {
  const limit = window.innerHeight * 0.88;
  for (let i = watchers.length - 1; i >= 0; i--) {
    if (watchers[i].el.getBoundingClientRect().top < limit) { watchers[i].cb(); watchers.splice(i, 1); }
  }
};
const onVisible = (el: Element, cb: () => void) => { watchers.push({ el, cb }); };
window.addEventListener('scroll', () => requestAnimationFrame(checkVisible), { passive: true });

/* ---------- Headings revealed word by word ---------- */
const splitWords = (el: HTMLElement) => {
  let i = 0;
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent || '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          const w = document.createElement('span');
          w.className = 'w';
          const inner = document.createElement('span');
          inner.textContent = part;
          inner.style.setProperty('--wi', String(i++));
          w.appendChild(inner);
          frag.appendChild(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  walk(el);
  el.classList.add('split');
};
if (!reduce) {
  document.querySelectorAll<HTMLElement>('.section-head h2, .about-statement, .stage-card h2').forEach(splitWords);
  document.querySelectorAll<HTMLElement>('.page-head h1').forEach((h) => {
    splitWords(h);
    requestAnimationFrame(() => setTimeout(() => h.classList.add('in'), 120));
  });
}

/* ---------- Counters in the « À propos » figures ---------- */
document.querySelectorAll<HTMLElement>('.stat b').forEach((b) => {
  const textNode = b.firstChild;
  const target = textNode ? parseInt(textNode.textContent || '', 10) : NaN;
  if (!textNode || Number.isNaN(target) || reduce) return;
  textNode.textContent = '0';
  onVisible(b, () => {
    const start = performance.now();
    const dur = 1300;
    const step = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      textNode.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
});

/* ---------- Magnetic buttons & gentle tilt (mouse only) ---------- */
if (finePointer && !reduce) {
  document.querySelectorAll<HTMLElement>('.btn, .badge-rot, .socials a, .icon-btn, .card .go').forEach((el) => {
    el.classList.add('magnetic');
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.transform = `translate(${dx * 10}px, ${dy * 8}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  const tilt = (el: HTMLElement, max: number) => {
    el.classList.add('tilt');
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ry', `${px * max}deg`);
      el.style.setProperty('--rx', `${-py * max}deg`);
    });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg'); });
  };
  document.querySelectorAll<HTMLElement>('.hero-photo .disc').forEach((el) => tilt(el, 10));
  document.querySelectorAll<HTMLElement>('.card .visual, .work .visual').forEach((el) => tilt(el, 4));
}

/* ---------- Marquees that follow the scroll ---------- */
const marquees = Array.from(document.querySelectorAll<HTMLElement>('.marquee-track, .call-row'));
if (marquees.length && !reduce) {
  root.classList.add('js-marquee');
  let lastY = window.scrollY;
  let velocity = 0;
  let direction = 1;
  const state = marquees.map((el) => ({
    el,
    x: 0,
    sign: el.classList.contains('rev') ? -1 : 1,
    secs: el.classList.contains('call-row') ? (el.classList.contains('rev') ? 36 : 30) : 38,
    hover: false,
  }));
  state.forEach((s) => {
    const host = s.el.closest('.marquee, .call') as HTMLElement | null;
    host?.addEventListener('pointerenter', () => { s.hover = true; });
    host?.addEventListener('pointerleave', () => { s.hover = false; });
  });
  let last = performance.now();
  const loop = (t: number) => {
    const dt = Math.min((t - last) / 1000, 0.05);
    last = t;
    const y = window.scrollY;
    const dy = y - lastY;
    lastY = y;
    if (Math.abs(dy) > 0.5) direction = dy > 0 ? 1 : -1;
    velocity += (Math.min(Math.abs(dy), 60) - velocity) * 0.08;
    state.forEach((s) => {
      const half = s.el.scrollWidth / 2;
      if (!half) return;
      const base = half / s.secs;
      const speed = base * (1 + velocity * 0.12) * (s.hover ? 0.25 : 1);
      s.x -= speed * dt * s.sign * direction;
      if (s.x <= -half) s.x += half;
      if (s.x > 0) s.x -= half;
      s.el.style.transform = `translate3d(${s.x}px, 0, 0)`;
    });
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

checkVisible();
