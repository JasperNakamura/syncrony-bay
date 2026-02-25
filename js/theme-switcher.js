/**
 * theme-switcher.js
 * Injects the floating theme picker and handles switching.
 * Drop <script src="theme-switcher.js"></script> before </body>.
 *
 * Themes: tron | cp77 | drip | terminal
 * Persists choice to localStorage under key "nc-theme"
 */

(function () {
  'use strict';

  const THEMES = [
    { id: 'tron',     name: 'Neo-Tokyo',  sub: 'TRON / GRID'      },
    { id: 'cp77',     name: 'Night City', sub: 'CP2077 FAITHFUL'  },
    { id: 'drip',     name: 'DRIP',       sub: 'STREETWEAR'       },
    { id: 'terminal', name: 'Terminal',   sub: 'HACKATHON / CRT'  },
  ];

  const STORAGE_KEY = 'nc-theme';
  const DEFAULT     = 'cp77';

  /* ── Inject HTML ── */
  function inject() {
    const el = document.createElement('div');
    el.id = 'theme-switcher';
    el.innerHTML = `
      <div id="theme-panel">
        <div class="theme-panel-label">// UI THEME</div>
        ${THEMES.map(t => `
          <button class="theme-opt" data-theme="${t.id}" title="${t.sub}">
            <span class="theme-dot"></span>
            <span class="theme-opt-name">${t.name}</span>
            <span class="theme-opt-sub">${t.sub}</span>
          </button>
        `).join('')}
      </div>
      <button id="theme-toggle-btn">// THEME</button>
    `;
    document.body.appendChild(el);

    /* Events */
    const panel  = el.querySelector('#theme-panel');
    const toggle = el.querySelector('#theme-toggle-btn');

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!el.contains(e.target)) panel.classList.remove('open');
    });

    el.querySelectorAll('.theme-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        applyTheme(btn.dataset.theme);
        panel.classList.remove('open');
      });
    });
  }

  /* ── Apply theme ── */
  function applyTheme(id) {
    const html = document.documentElement;

    /* Flash transition */
    document.body.classList.add('theme-switching');
    setTimeout(() => document.body.classList.remove('theme-switching'), 300);

    html.setAttribute('data-theme', id);
    localStorage.setItem(STORAGE_KEY, id);

    /* Update active states */
    document.querySelectorAll('.theme-opt').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === id);
    });

    /* Update toggle label */
    const active = THEMES.find(t => t.id === id);
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn && active) {
      toggleBtn.textContent = `// ${active.name.toUpperCase()}`;
    }

    /* Theme-specific body class for CRT effects etc */
    document.body.className = document.body.className
      .replace(/\btheme-\S+/g, '')
      .trim();
    document.body.classList.add(`theme-${id}`);
  }

  /* ── Init ── */
  function init() {
    inject();
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT;
    applyTheme(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
