/* Mountain Estate Partners — site script (no dependencies) */
(() => {
  'use strict';
  const M = window.MEP || {};
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get: (k, s = sessionStorage) => { try { return JSON.parse(s.getItem(k)); } catch { return null; } },
    set: (k, v, s = sessionStorage) => { try { s.setItem(k, JSON.stringify(v)); } catch {} },
  };
  const track = (name, params = {}) => {
    if (window.gtag) window.gtag('event', name, { page: M.page, ...params });
    (window.dataLayer = window.dataLayer || []).push({ event: name, page: M.page, ...params });
  };

  /* ── Header: solid on scroll, hide on scroll down ───────────── */
  const header = $('[data-header]');
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    if (header) {
      header.classList.toggle('is-scrolled', y > 40);
      const menuOpen = header.classList.contains('is-open') || $('.has-mega.is-open');
      header.classList.toggle('is-hidden', !menuOpen && y > 500 && y > lastY + 4);
      if (y < lastY - 4) header.classList.remove('is-hidden');
    }
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mega menu (desktop) ───────────────────────────────────── */
  $$('[data-mega]').forEach((li) => {
    const link = $('[data-mega-toggle]', li);
    let t;
    const open = (v) => { li.classList.toggle('is-open', v); link.setAttribute('aria-expanded', v); };
    li.addEventListener('mouseenter', () => { clearTimeout(t); open(true); });
    li.addEventListener('mouseleave', () => { t = setTimeout(() => open(false), 160); });
    li.addEventListener('focusin', () => open(true));
    li.addEventListener('focusout', (e) => { if (!li.contains(e.relatedTarget)) open(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') open(false); });
  });

  /* ── Mobile menu ───────────────────────────────────────────── */
  const menuBtn = $('[data-menu-toggle]');
  const menu = $('[data-menu]');
  if (menuBtn && menu) {
    const set = (v) => {
      menuBtn.setAttribute('aria-expanded', v);
      menuBtn.setAttribute('aria-label', v ? 'Close menu' : 'Open menu');
      header.classList.toggle('is-open', v);
      document.body.style.overflow = v ? 'hidden' : '';
      if (v) { menu.hidden = false; requestAnimationFrame(() => menu.classList.add('is-open')); }
      else { menu.classList.remove('is-open'); setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 550); }
    };
    menuBtn.addEventListener('click', () => set(menuBtn.getAttribute('aria-expanded') !== 'true'));
    $$('a', menu).forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-open')) set(false); });
    $$('[data-acc]', menu).forEach((b) => b.addEventListener('click', () => {
      const v = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', v);
      b.nextElementSibling.hidden = !v;
    }));
  }

  /* ── Hero video: load only when it makes sense ─────────────── */
  const conn = navigator.connection || {};
  const allowVideo = !reduce && !conn.saveData && !/(^|-)2g$/.test(conn.effectiveType || '');
  $$('video[data-src]').forEach((v) => {
    if (!allowVideo) return;
    const load = () => {
      v.src = v.dataset.src;
      v.load();
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    'requestIdleCallback' in window ? requestIdleCallback(load, { timeout: 1200 }) : setTimeout(load, 300);
    // pause when off-screen to save battery
    new IntersectionObserver(([e]) => { if (!v.src) return; e.isIntersecting ? v.play().catch(() => {}) : v.pause(); }).observe(v);
  });

  /* ── Reveal on scroll ──────────────────────────────────────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  $$('[data-reveal]').forEach((el) => io.observe(el));

  // Steps progress line
  $$('[data-steps]').forEach((el) => {
    new IntersectionObserver(([e], o) => {
      if (e.isIntersecting) { el.style.setProperty('--progress', 1); o.disconnect(); }
    }, { threshold: 0.4 }).observe(el);
  });

  /* ── Counters ──────────────────────────────────────────────── */
  const counterIO = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    counterIO.unobserve(e.target);
    const el = e.target, end = parseFloat(el.dataset.count), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = pre + end + suf; return; }
    const t0 = performance.now(), dur = 1600;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 4)));
      el.textContent = pre + v + suf;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  $$('[data-count]').forEach((el) => counterIO.observe(el));

  /* ── Scroll-linked effects: parallax, word highlight, progress ─ */
  const parallax = reduce ? [] : $$('[data-parallax] img');
  const statements = $$('[data-words]');
  statements.forEach((el) => {
    // wrap words while keeping inline tags (em) intact
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((w) => {
            if (!w.trim()) return frag.appendChild(document.createTextNode(w));
            const s = document.createElement('span'); s.className = 'sw'; s.textContent = w; frag.appendChild(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(el);
    el.classList.add('split-words');
  });
  const progress = $('[data-progress]');
  const article = $('[data-article]');
  let ticking = false;
  const frame = () => {
    ticking = false;
    const vh = innerHeight;
    parallax.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
      img.style.transform = `translate3d(0, ${(-p * 9 - 6).toFixed(2)}%, 0)`;
    });
    statements.forEach((el) => {
      const r = el.getBoundingClientRect();
      const words = $$('.sw', el);
      const k = reduce ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const n = Math.round(k * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < n));
    });
    if (progress && article) {
      const r = article.getBoundingClientRect();
      const k = Math.min(1, Math.max(0, -r.top / (r.height - vh)));
      progress.style.transform = `scaleX(${k})`;
    }
  };
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  if (parallax.length || statements.length || progress) {
    addEventListener('scroll', req, { passive: true });
    addEventListener('resize', req);
    frame();
  }

  /* ── Floating WhatsApp button ──────────────────────────────── */
  const waFloat = $('.wa-float');
  if (waFloat) {
    const show = () => waFloat.classList.add('is-visible');
    setTimeout(show, 1800);
    addEventListener('scroll', () => { if (scrollY > 280) show(); }, { passive: true, once: true });
  }
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-track="whatsapp"]');
    if (a) track('whatsapp_click', { location: a.className });
    const t = e.target.closest('a[href^="tel:"]');
    if (t) track('phone_click');
  });

  /* ── FAQ: animate close too ────────────────────────────────── */
  $$('.faq__item').forEach((d) => {
    const s = $('summary', d);
    s.addEventListener('click', (e) => {
      if (!d.open || reduce) return;
      e.preventDefault();
      d.classList.add('is-closing');
      const a = $('.faq__a', d);
      a.style.gridTemplateRows = '0fr';
      setTimeout(() => { d.open = false; a.style.gridTemplateRows = ''; d.classList.remove('is-closing'); }, 420);
    });
  });

  /* ── Testimonial slider ────────────────────────────────────── */
  $$('[data-slider]').forEach((root) => {
    const track = $('[data-slider-track]', root);
    const cards = [...track.children];
    const dots = $('[data-slider-dots]', root);
    const perView = () => Math.max(1, Math.round(track.clientWidth / cards[0].getBoundingClientRect().width));
    let pages = 1, timer;
    const build = () => {
      pages = Math.max(1, cards.length - perView() + 1);
      dots.innerHTML = '';
      for (let i = 0; i < pages; i++) {
        const b = document.createElement('button');
        b.type = 'button'; b.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        b.addEventListener('click', () => go(i));
        dots.appendChild(b);
      }
      sync();
    };
    const index = () => Math.round(track.scrollLeft / (cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : 1));
    const go = (i) => { i = (i + pages) % pages; track.scrollTo({ left: cards[i].offsetLeft - cards[0].offsetLeft, behavior: reduce ? 'auto' : 'smooth' }); };
    const sync = () => $$('button', dots).forEach((b, i) => b.setAttribute('aria-current', i === Math.min(index(), pages - 1)));
    $('[data-slider-prev]', root).addEventListener('click', () => { go(index() - 1); restart(); });
    $('[data-slider-next]', root).addEventListener('click', () => { go(index() + 1); restart(); });
    track.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
    const restart = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => go(index() + 1), 6500); };
    root.addEventListener('mouseenter', () => clearInterval(timer));
    root.addEventListener('mouseleave', restart);
    root.addEventListener('focusin', () => clearInterval(timer));
    addEventListener('resize', build);
    build(); restart();
  });

  /* ── Before / after slider ─────────────────────────────────── */
  $$('[data-ba]').forEach((el) => {
    const r = $('input', el);
    const set = () => el.style.setProperty('--pos', r.value + '%');
    r.addEventListener('input', set); set();
  });

  /* ── Clocks / time zones ───────────────────────────────────── */
  const userTZ = (() => { try { const z = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata'; return z === 'Asia/Calcutta' ? 'Asia/Kolkata' : z; } catch { return 'Asia/Kolkata'; } })();
  const fmt = (tz, opts = {}) => {
    try { return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz, ...opts }).format(new Date()); }
    catch { return '--:--'; }
  };
  const hourIn = (tz) => parseInt(fmt(tz, { minute: undefined, hour: '2-digit' }), 10);
  const tickClocks = () => {
    $$('[data-clock]').forEach((el) => {
      const tz = el.dataset.clock === 'local' ? (el.closest('[data-booking]')?.dataset.tz || userTZ) : el.dataset.clock;
      el.textContent = fmt(tz);
    });
  };
  if ($('[data-clock]')) { tickClocks(); setInterval(tickClocks, 15000); }

  /* ── Country / dial code from time zone ────────────────────── */
  const TZ_MAP = [
    [/^Asia\/(Dubai|Muscat)/, 'United Arab Emirates', '+971'], [/^Asia\/Kolkata|^Asia\/Calcutta/, 'India', '+91'],
    [/^America\/(Toronto|Vancouver|Edmonton|Winnipeg|Halifax|Regina|St_Johns)/, 'Canada', '+1'], [/^America\//, 'United States', '+1'],
    [/^Europe\/London/, 'United Kingdom', '+44'], [/^Asia\/Singapore/, 'Singapore', '+65'], [/^Australia\//, 'Australia', '+61'],
    [/^Asia\/Riyadh/, 'Saudi Arabia', '+966'], [/^Asia\/Qatar/, 'Qatar', '+974'], [/^Asia\/Kuwait/, 'Kuwait', '+965'],
    [/^Asia\/Bahrain/, 'Bahrain', '+973'], [/^Europe\/Berlin/, 'Germany', '+49'], [/^Pacific\/Auckland/, 'New Zealand', '+64'], [/^Asia\/Hong_Kong/, 'Hong Kong', '+852'],
  ];
  const guess = TZ_MAP.find(([re]) => re.test(userTZ));

  /* ── UTM / attribution (first touch per session) ───────────── */
  const qs = new URLSearchParams(location.search);
  const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  if (!store.get('mep_attr')) {
    const attr = { landing_page: location.pathname, referrer: document.referrer || 'direct' };
    UTM_KEYS.forEach((k) => { if (qs.get(k)) attr[k] = qs.get(k); });
    store.set('mep_attr', attr);
  } else if (UTM_KEYS.some((k) => qs.get(k))) {
    const attr = store.get('mep_attr');
    UTM_KEYS.forEach((k) => { if (qs.get(k)) attr[k] = qs.get(k); });
    store.set('mep_attr', attr);
  }

  /* ── Lead forms ────────────────────────────────────────────── */
  $$('[data-lead-form]').forEach((form) => {
    if (guess) {
      const c = $('[data-country]', form), d = $('[data-dial]', form);
      if (c && !c.value) c.value = guess[1];
      if (d) d.value = guess[2];
    }
    const err = $('.lead-form__error', form);
    const fieldErr = (input, msg) => {
      const f = input.closest('.field');
      f.classList.toggle('is-invalid', !!msg);
      let m = $('.field__err', f);
      if (msg) { if (!m) { m = document.createElement('span'); m.className = 'field__err'; f.appendChild(m); } m.textContent = msg; input.setAttribute('aria-invalid', 'true'); }
      else { m && m.remove(); input.removeAttribute('aria-invalid'); }
    };
    const validate = () => {
      let ok = true, first;
      $$('[required]', form).forEach((i) => {
        let msg = '';
        if (!i.value.trim()) msg = 'Required';
        else if (i.type === 'tel' && i.value.replace(/\D/g, '').length < 6) msg = 'Please enter a valid number';
        fieldErr(i, msg);
        if (msg) { ok = false; first = first || i; }
      });
      if (first) first.focus();
      return ok;
    };
    $$('input, select', form).forEach((i) => i.addEventListener('change', () => i.closest('.field')?.classList.contains('is-invalid') && fieldErr(i, '')));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      err.hidden = true;
      if (!validate()) return;
      if (form.website && form.website.value) return; // honeypot
      const fd = new FormData(form);
      const data = Object.fromEntries(fd.entries());
      delete data.website;
      Object.assign(data, store.get('mep_attr') || {}, {
        whatsapp: `${data.dial_code} ${data.phone}`.trim(),
        form_id: form.dataset.leadForm,
        source_page: M.page,
        page_url: location.href.split('?')[0],
        timezone: userTZ,
        submitted_at: new Date().toISOString(),
      });
      store.set('mep_last_lead', { name: data.name, service: data.service, location: data.location, country: data.country });
      form.classList.add('is-sending');
      track('generate_lead', { form_id: data.form_id, service: data.service });
      try {
        if (M.formEndpoint) {
          await fetch(M.formEndpoint, {
            method: 'POST', mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data).toString(),
          });
        }
        location.href = `${M.thankYou}?form=${encodeURIComponent(data.form_id)}&page=${encodeURIComponent(M.page)}`;
      } catch (ex) {
        form.classList.remove('is-sending');
        err.textContent = 'Something went wrong sending your enquiry. Please message us on WhatsApp instead. We reply fast.';
        err.hidden = false;
      }
    });
  });

  /* ── Thank-you page: WhatsApp hand-off with lead summary ───── */
  const tyWa = $('[data-ty-wa]');
  if (tyWa) {
    const l = store.get('mep_last_lead');
    if (l) {
      const msg = `Hi, I'm ${l.name}. I just sent an enquiry on your website about ${l.service || 'your services'}${l.location ? ` (${l.location})` : ''}. I live in ${l.country || 'India'}.`;
      tyWa.href = `https://wa.me/${M.whatsapp}?text=${encodeURIComponent(msg)}`;
      const n = $('[data-ty-name]'); if (n) n.textContent = `, ${l.name.split(' ')[0]}`;
    }
  }

  /* ── Booking widget (time-zone aware, Calendly popup) ──────── */
  $$('[data-booking]').forEach((b) => {
    const sel = $('[data-tz-select]', b);
    const zones = ['Asia/Kolkata', 'Asia/Dubai', 'Asia/Riyadh', 'Asia/Qatar', 'Asia/Singapore', 'Asia/Hong_Kong', 'Europe/London', 'Europe/Berlin',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Toronto', 'America/Vancouver', 'Australia/Sydney', 'Australia/Perth', 'Pacific/Auckland'];
    if (!zones.includes(userTZ)) zones.unshift(userTZ);
    sel.innerHTML = zones.map((z) => `<option value="${z}"${z === userTZ ? ' selected' : ''}>${z.replace(/_/g, ' ')} · ${fmt(z)}</option>`).join('');
    const overlap = $('[data-overlap]', b);
    const update = () => {
      const tz = sel.value;
      b.dataset.tz = tz;
      $('[data-tz-name]', b).textContent = tz.replace(/_/g, ' ');
      // IST office hours 9:30–19:00; find user-local window
      const offset = (() => { // minutes difference user − IST
        const now = new Date();
        const toMin = (z) => { const [h, m] = fmt(z).split(':').map(Number); return h * 60 + m; };
        let d = toMin(tz) - toMin('Asia/Kolkata');
        if (d > 720) d -= 1440; if (d < -720) d += 1440;
        return d;
      })();
      const toLocal = (istMin) => { let m = (istMin + offset + 1440) % 1440; const h = Math.floor(m / 60), mm = m % 60; const ap = h >= 12 ? 'pm' : 'am'; return `${((h + 11) % 12) + 1}${mm ? ':' + String(mm).padStart(2, '0') : ''} ${ap}`; };
      overlap.textContent = tz === 'Asia/Kolkata'
        ? 'Our team is available 9:30 am – 7 pm IST, Monday to Saturday.'
        : `Our office hours (9:30 am – 7 pm IST) are ${toLocal(570)} – ${toLocal(1140)} your time. We also take early and late calls for NRI clients on request.`;
      tickClocks();
    };
    sel.addEventListener('change', update);
    update();
    $('[data-book]', b).addEventListener('click', () => {
      track('book_call_click', { tz: sel.value });
      if (M.calendly) {
        const open = () => window.Calendly.initPopupWidget({ url: `${M.calendly}?hide_gdpr_banner=1&utm_source=website&utm_content=${encodeURIComponent(M.page)}` });
        if (window.Calendly) return open();
        const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'https://assets.calendly.com/assets/external/widget.css'; document.head.appendChild(css);
        const s = document.createElement('script'); s.src = 'https://assets.calendly.com/assets/external/widget.js'; s.onload = open; document.head.appendChild(s);
      } else {
        const msg = `${b.dataset.wa} My time zone is ${sel.value.replace(/_/g, ' ')} (currently ${fmt(sel.value)}).`;
        window.open(`https://wa.me/${M.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
      }
    });
  });

  /* ── Guide table of contents: active section ───────────────── */
  const tocLinks = $$('.toc a[href^="#"]');
  if (tocLinks.length) {
    const map = new Map(tocLinks.map((a) => [a.getAttribute('href').slice(1), a]));
    const tio = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { tocLinks.forEach((a) => a.classList.remove('is-active')); map.get(e.target.id)?.classList.add('is-active'); }
    }), { rootMargin: '-20% 0px -70% 0px' });
    map.forEach((a, id) => { const t = document.getElementById(id); if (t) tio.observe(t); });
  }

  /* ── Hero local-time chip ──────────────────────────────────── */
  const greet = $('[data-greet]');
  if (greet) {
    const h = hourIn('Asia/Kolkata');
    greet.textContent = h < 5 ? 'Night in the valley' : h < 12 ? 'Morning in the valley' : h < 17 ? 'Afternoon in the valley' : h < 20 ? 'Evening in the valley' : 'Night in the valley';
  }
})();
