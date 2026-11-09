/* Cloud Club mockups — shared colour palettes.
   Add <script src="theme-picker.js"></script> to <head>. Pick a palette from the colour handle on the
   right edge of the page, or open any page with ?palette=teal. The choice is remembered across pages.
   To add or change a palette, edit PALETTES below: one main colour is enough, the rest is derived. */
(function () {
  'use strict';
  var GROUPS = ['Our palettes', 'Recruiting & talent platforms', 'Enterprise products & workflows', 'Landing pages & technical products', 'Neutral & grey', 'Light & soft'];
  var PALETTES = [
    { id: 'slate', g: 0,   name: 'Slate',   note: 'Original',            c: '#547691' },
    { id: 'graphite',name: 'Graphite',note: 'Neutral, minimal',    c: '#3b4450' },
    { id: 'amber', g: 0,   name: 'Amber',   note: 'Warm, energetic',     c: '#c2620a' },
    { id: 'gold', g: 0,    name: 'Gold',    note: 'Rich, optimistic',    c: '#9a6f06' },
    { id: 'forest', g: 0,  name: 'Forest',  note: 'Grounded, steady',    c: '#2f6b3f' },
    { id: 'emerald', g: 0, name: 'Emerald', note: 'Growth, finance',     c: '#1f9462' },
    { id: 'teal', g: 0,    name: 'Teal',    note: 'Fresh, calm',         c: '#0f8f90' },
    { id: 'ocean', g: 0,   name: 'Ocean',   note: 'Deep, confident',     c: '#0b6a8f' },
    { id: 'sky', g: 0,     name: 'Sky',     note: 'Open, friendly',      c: '#0a78bd' },
    { id: 'navy', g: 0,    name: 'Navy',    note: 'Trusted, formal',     c: '#24427f' },
    { id: 'cobalt', g: 0,  name: 'Cobalt',  note: 'Classic enterprise',  c: '#2f5fd0' },
    { id: 'indigo', g: 0,  name: 'Indigo',  note: 'Modern, creative',    c: '#5b52d9' },
    { id: 'violet', g: 0,  name: 'Violet',  note: 'Premium, vibrant',    c: '#7a3fe0' },
    { id: 'plum', g: 0,    name: 'Plum',    note: 'Refined, boutique',   c: '#6b3a7a' },
    { id: 'berry', g: 0,   name: 'Berry',   note: 'Bold, distinctive',   c: '#b83280' },
    { id: 'rose', g: 0,    name: 'Rose',    note: 'Warm, approachable',  c: '#cf3f67' },
{ id: 'greenhouse', g: 1, name: 'Greenhouse', note: 'Evergreen + mint, recruiting', c: '#008561', sw: ['#031c17', '#008561', '#e6fff8'] },
{ id: 'workday', g: 1, name: 'Workday', note: 'Enterprise blue, orange accent', c: '#005cb9', sw: ['#005cb9', '#f38b00', '#e6f0fa'] },
{ id: 'ashby', g: 1, name: 'Ashby', note: 'Clear blue, pale lavender', c: '#1863dc', sw: ['#1863dc', '#f3f2ff', '#fcfcfe'] },
{ id: 'asana', g: 2, name: 'Asana', note: 'Approachable coral', c: '#f06a6a', sw: ['#f06a6a', '#c94444', '#fde8e8'] },
    { id: 'hubspot', g: 2,    name: 'HubSpot',    note: 'Warm coral, marketing & CRM',     c: '#ff5c35', sw: ['#ff5c35', '#33475b', '#00a4bd'] },
    { id: 'zendesk', g: 2,    name: 'Zendesk',    note: 'Forest green + lime, warm neutrals', c: '#2d4c33', sw: ['#203524', '#2d4c33', '#d1f470'],
      x: {
        light: { '--brand-d': '#203524', '--brand-dd': '#11110d', '--brand-h': '#355e34', '--brand-hi': '#d1f470', '--brand-hi2': '#e9fbb0', '--brand-soft': '#d5d5d2',
          '--slate-d': '#203524', '--slate-dd': '#11110d', '--slate-text': '#355e34', '--slate-tint': '#eef2e8', '--slate-tint-2': '#e1e9d6', '--accent': '#4e8336', '--accent-tint': '#eaf4cc', '--pc-3': '#4e8336', '--pc-4': '#70a32a',
          '--bg': '#f5f5f2', '--surface-2': '#f5f5f2', '--line': '#e4e4e0', '--line-2': '#d5d5d2', '--track': '#e8e8e4', '--card-border': '#e4e4e0',
          '--ink': '#11110d', '--body': '#4b4b39', '--muted': '#6b6b60', '--faint': '#90918c' },
        dark: { '--brand-d': '#203524', '--brand-dd': '#11110d', '--brand-h': '#355e34', '--brand-hi': '#d1f470', '--brand-hi2': '#e9fbb0', '--brand-soft': '#d5d5d2',
          '--slate': '#b9d95a', '--slate-d': '#4e8336', '--slate-dd': '#f5f5f2', '--slate-tint': '#1d261a', '--slate-tint-2': '#26331f', '--accent': '#d1f470', '--accent-tint': '#26331f', '--pc-3': '#b9d95a', '--pc-4': '#70a32a',
          '--bg': '#11110d', '--surface': '#1a1a14', '--surface-2': '#1f1f18', '--line': '#2e2e23', '--line-2': '#3c3c2e', '--track': '#26261c',
          '--ink': '#f5f5f2', '--body': '#d5d5d2', '--muted': '#90918c', '--faint': '#70716b' } } },
    { id: 'shopify', g: 2,    name: 'Shopify',    note: 'Commerce green',                  c: '#008060' },
{ id: 'servicenow', g: 2, name: 'ServiceNow', note: 'Deep teal + bright green', c: '#032d42', sw: ['#032d42', '#0a4a63', '#62d84e'],
      x: { light: { '--brand-d': '#032d42', '--brand-dd': '#021f2e', '--brand-h': '#0a4a63', '--brand-hi': '#62d84e', '--brand-hi2': '#c9f5c1' }, dark: { '--brand-d': '#0a4a63', '--brand-dd': '#021f2e', '--brand-h': '#0e5f80', '--brand-hi': '#62d84e', '--brand-hi2': '#c9f5c1' } } },
    { id: 'salesforce', g: 2, name: 'Salesforce', note: 'Cloud blue, CRM standard',        c: '#0176d3' },
    { id: 'atlassian', g: 2,  name: 'Atlassian',  note: 'Deep blue, team software',        c: '#1868db' },
{ id: 'intercom', g: 2, name: 'Intercom', note: 'Conversational blue', c: '#286efa', sw: ['#286efa', '#0a2a66', '#e6eeff'] },
{ id: 'monday', g: 2, name: 'monday.com', note: 'Playful purple-blue', c: '#6161ff', sw: ['#6161ff', '#ffffff', '#e8e8ff'] },
{ id: 'docusign', g: 2, name: 'Docusign', note: 'Electric indigo, deep purple', c: '#4c00ff', sw: ['#26065d', '#4c00ff', '#ebe3ff'] },
    { id: 'slack', g: 2,      name: 'Slack',      note: 'Aubergine, friendly workspace',   c: '#4a154b', sw: ['#4a154b', '#36c5f0', '#ecb22e'] },
{ id: 'vercel', g: 3, name: 'Vercel', note: 'Pure black and white', c: '#171717', sw: ['#000000', '#171717', '#ffffff'] },
    { id: 'notion', g: 3,     name: 'Notion',     note: 'Warm charcoal, minimal',          c: '#37352f' },
{ id: 'snowflake', g: 3, name: 'Snowflake', note: 'Sky blue, deep-sea ink', c: '#29b5e8', sw: ['#29b5e8', '#0f7fae', '#11567f'] },
{ id: 'webflow', g: 3, name: 'Webflow', note: 'Bold blue, big type', c: '#146ef5', sw: ['#146ef5', '#080808', '#e8f0ff'] },
    { id: 'linear', g: 3,     name: 'Linear',     note: 'Calm violet-blue, product teams', c: '#5e6ad2' },
    { id: 'stripe', g: 3,     name: 'Stripe',     note: 'Blurple, payments-grade polish',  c: '#635bff' },
    { id: 'datadog', g: 3,    name: 'Datadog',    note: 'Purple, observability dashboards', c: '#632ca6' },
    { id: 'charcoal', g: 4, name: 'Charcoal', note: 'Deep, serious', c: '#2f3438' },
    { id: 'mocha', g: 4, name: 'Mocha', note: 'Rich, earthy', c: '#5a4a42' },
    { id: 'zinc', g: 4, name: 'Zinc', note: 'Cool, technical', c: '#52525b' },
    { id: 'stone', g: 4, name: 'Stone', note: 'Warm, natural', c: '#6f675e' },
    { id: 'coolgrey', g: 4, name: 'Cool Grey', note: 'Calm, corporate', c: '#5f6b7a' },
    { id: 'taupe', g: 4, name: 'Taupe', note: 'Gentle, refined', c: '#7d6b5d' },
    { id: 'pewter', g: 4, name: 'Pewter', note: 'Soft blue-grey', c: '#6e7b85' },
    { id: 'sand', g: 4, name: 'Sand', note: 'Light, sunlit neutral', c: '#9a8467' },
    { id: 'peach', g: 5,      lt: 1, name: 'Peach',      note: 'Warm, welcoming coral',    c: '#e8643f' },
    { id: 'apricot', g: 5, lt: 1, name: 'Apricot', note: 'Warm, friendly orange', c: '#d9772a' },
    { id: 'linen', g: 5, lt: 1, name: 'Linen', note: 'Soft, natural tan', c: '#a08462' },
    { id: 'oat', g: 5, lt: 1, name: 'Oat', note: 'Muted, creamy', c: '#8f7f66' },
    { id: 'honey', g: 5,      lt: 1, name: 'Honey',      note: 'Sunny, optimistic amber',  c: '#b9790c' },
    { id: 'pistachio', g: 5, lt: 1, name: 'Pistachio', note: 'Fresh, gentle green', c: '#5d9a3c' },
    { id: 'sage', g: 5,       lt: 1, name: 'Sage',       note: 'Muted, calming',           c: '#5f9078' },
    { id: 'mint', g: 5,       lt: 1, name: 'Mint',       note: 'Soft, modern green',       c: '#1c9f7b' },
    { id: 'aqua', g: 5,       lt: 1, name: 'Aqua',       note: 'Fresh and clear',          c: '#1a9fbb' },
    { id: 'ice', g: 5, lt: 1, name: 'Ice', note: 'Crisp, cool blue', c: '#3d9fc4' },
    { id: 'skylight', g: 5,   lt: 1, name: 'Sky Light',  note: 'Airy, open blue',          c: '#3b94dc' },
    { id: 'pearl', g: 5, lt: 1, name: 'Pearl', note: 'Quiet blue-grey', c: '#7a8aa0' },
    { id: 'periwinkle', g: 5, lt: 1, name: 'Periwinkle', note: 'Light blue-violet',        c: '#6a85ee' },
    { id: 'lavender', g: 5,   lt: 1, name: 'Lavender',   note: 'Gentle, creative',         c: '#8a73e6' },
    { id: 'lilac', g: 5, lt: 1, name: 'Lilac', note: 'Soft, creative violet', c: '#8e6fd0' },
    { id: 'blush', g: 5,      lt: 1, name: 'Blush',      note: 'Soft, friendly pink',      c: '#e05a85' },
    { id: 'rosewater', g: 5, lt: 1, name: 'Rosewater', note: 'Delicate rose', c: '#cc6177' }
  ];
  var KEY = 'cc_palette', root = document.documentElement;

  /* ---------- colour maths ---------- */
  function hexToHsl(hex) {
    var n = parseInt(hex.slice(1), 16), r = (n >> 16) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, h = 0, s = 0;
    if (mx !== mn) {
      var d = mx - mn; s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn);
      h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60;
    }
    return [h, s, l];
  }
  function hslToRgb(h, s, l) {
    h = ((h % 360) + 360) % 360 / 360;
    function f(p, q, t) { if (t < 0) t += 1; if (t > 1) t -= 1; return t < 1 / 6 ? p + (q - p) * 6 * t : t < .5 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p }
    var r, g, b;
    if (s === 0) { r = g = b = l } else { var q = l < .5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q; r = f(p, q, h + 1 / 3); g = f(p, q, h); b = f(p, q, h - 1 / 3) }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  function hex(rgb) { return '#' + rgb.map(function (v) { return ('0' + v.toString(16)).slice(-2) }).join('') }
  function col(h, s, l) { return hex(hslToRgb(h, Math.max(0, Math.min(1, s)), Math.max(0, Math.min(1, l)))) }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)) }

  function build(p) {
    var hsl = hexToHsl(p.c), h = hsl[0], s = hsl[1], l = hsl[2];
    var lt = !!p.lt, primary = p.c, strong = col(h, s, l * (lt ? .88 : .78)), deep = col(h, s, l * (lt ? .74 : .55)), hover = col(h, s, l * (lt ? .95 : .92));
    var rgb = function (hx) { var n = parseInt(hx.slice(1), 16); return (n >> 16) + ', ' + ((n >> 8) & 255) + ', ' + (n & 255) };
    var brand = { '--brand': primary, '--brand-d': strong, '--brand-dd': deep, '--brand-h': hover, '--brand-rgb': rgb(primary), '--brand-d-rgb': rgb(strong), '--brand-dd-rgb': rgb(deep), '--brand-hi': col(h, .45, .86), '--brand-hi2': col(h + 14, .4, .88), '--brand-soft': col(h, .22, .8) };
    var tint = col(h, clamp(s * (lt ? .85 : .6), .15, .85), lt ? .95 : .955), tint2 = col(h, clamp(s * (lt ? .9 : .65), .18, .9), lt ? .9 : .91);
    var light = Object.assign({}, brand, {
      '--slate': primary, '--slate-d': strong, '--slate-dd': deep, '--slate-text': hover, '--slate-tint': tint, '--slate-tint-2': tint2,
      '--accent': primary, '--accent-tint': tint2, '--pc-3': primary, '--pc-4': col(h, s, l * .92),
      '--bg': col(h, clamp(s * (lt ? .55 : .3), .08, .6), lt ? .962 : .975), '--surface-2': col(h, clamp(s * (lt ? .55 : .3), .08, .6), lt ? .962 : .975),
      '--line': col(h, clamp(s * (lt ? .35 : .18), .06, .4), lt ? .87 : .885), '--line-2': col(h, clamp(s * (lt ? .35 : .18), .06, .4), lt ? .83 : .85), '--track': col(h, clamp(s * (lt ? .4 : .2), .06, .45), lt ? .89 : .905), '--card-border': col(h, clamp(s * (lt ? .35 : .18), .06, .4), lt ? .875 : .89)
    });
    var dTint2 = col(h, .2, .22);
    var dark = Object.assign({}, brand, {
      '--slate': col(h, clamp(s * .65, .2, .7), .68), '--slate-d': col(h, clamp(s * .45, .15, .5), .45), '--slate-dd': col(h, .3, .9),
      '--slate-tint': col(h, .18, .17), '--slate-tint-2': dTint2, '--accent': col(h, clamp(s * .65, .2, .7), .68), '--accent-tint': dTint2, '--pc-3': col(h, clamp(s * .65, .2, .7), .68), '--pc-4': col(h, clamp(s * .6, .2, .7), .62),
      '--bg': col(h, .14, .08), '--surface': col(h, .13, .115), '--surface-2': col(h, .13, .135), '--line': col(h, .11, .18), '--line-2': col(h, .11, .22), '--track': col(h, .11, .17)
    });
    if (p.x) { Object.assign(light, p.x.light || {}); Object.assign(dark, p.x.dark || {}) }
    return { light: light, dark: dark };
  }
  function decl(o) { return Object.keys(o).map(function (k) { return k + ':' + o[k] }).join(';') }

  /* ---------- apply ---------- */
  function apply(id, silent) {
    var p = PALETTES.filter(function (x) { return x.id === id })[0] || PALETTES[0], st = document.getElementById('cc-palette-css');
    if (!st) { st = document.createElement('style'); st.id = 'cc-palette-css'; (document.head || root).appendChild(st) }
    if (p.id === 'slate') { st.textContent = ''; root.removeAttribute('data-palette') }
    else {
      var b = build(p);
      st.textContent = 'html:root:not([data-theme=dark]){' + decl(b.light) + '}html:root[data-theme=dark]{' + decl(b.dark) + '}';
      root.setAttribute('data-palette', p.id);
    }
    if (!silent) { try { localStorage.setItem(KEY, p.id) } catch (e) { } }
    var dots = document.querySelectorAll('[data-ccpal]');
    for (var i = 0; i < dots.length; i++) { var on = dots[i].getAttribute('data-ccpal') === p.id; dots[i].classList.toggle('on', on); dots[i].setAttribute('aria-checked', on) }
    var cur = document.getElementById('ccp-cur'); if (cur) cur.style.background = p.c;
    return p;
  }
  function initial() {
    var q = /[?&]palette=([\w-]+)/.exec(location.search), v = null;
    if (q) v = q[1]; else { try { v = localStorage.getItem(KEY) } catch (e) { } }
    return PALETTES.some(function (x) { return x.id === v }) ? v : 'slate';
  }
  var current = initial();
  apply(current, !/[?&]palette=/.test(location.search) ? true : false);

  /* ---------- picker UI ---------- */
  function ui() {
    if (document.getElementById('ccp')) return;
    var css = document.createElement('style');
    css.textContent =
      '#ccp{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:2147483000;font:13px/1.4 "DM Sans",system-ui,sans-serif}' +
      '#ccp-btn{display:flex;align-items:center;gap:8px;border:1px solid var(--line-2,#d3dade);border-right:0;background:var(--surface,#fff);color:var(--ink,#262b2f);padding:10px 10px 10px 12px;border-radius:14px 0 0 14px;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.14);font:600 12.5px "DM Sans",system-ui,sans-serif}' +
      '#ccp-btn:hover{background:var(--slate-tint,#eef3f6)}' +
      '#ccp-cur{width:18px;height:18px;border-radius:50%;box-shadow:inset 0 0 0 2px rgba(255,255,255,.65),0 0 0 1px rgba(0,0,0,.12);flex:none}' +
      '#ccp-btn span.t{writing-mode:vertical-rl;transform:rotate(180deg);letter-spacing:.04em}' +
      '#ccp-btn{flex-direction:column;padding:12px 9px}' +
      '#ccp-panel{position:absolute;right:44px;top:50%;transform:translateY(-50%);width:292px;max-height:86vh;overflow:auto;background:var(--surface,#fff);color:var(--ink,#262b2f);border:1px solid var(--line-2,#d3dade);border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.22);padding:14px;display:none}' +
      '#ccp.open #ccp-panel{display:block}' +
      '#ccp-panel h4{margin:0 0 2px;font:700 15px Manrope,"DM Sans",system-ui,sans-serif}' +
      '#ccp-panel p{margin:0 0 10px;color:var(--muted,#68727a);font-size:12px}' +
      '.ccp-row{display:flex;align-items:center;gap:12px;width:100%;text-align:left;border:1px solid transparent;background:none;color:inherit;border-radius:12px;padding:8px 10px;cursor:pointer;font:inherit}' +
      '.ccp-row:hover{background:var(--slate-tint,#eef3f6)}' +
      '.ccp-row.on{border-color:var(--slate,#547691);background:var(--slate-tint,#eef3f6)}' +
      '.ccp-g{margin:10px 4px 4px;font:700 11px "DM Sans",system-ui,sans-serif;letter-spacing:.07em;text-transform:uppercase;color:var(--muted,#68727a)}.ccp-g:first-of-type{margin-top:2px}' +
      '.ccp-sw{display:flex;flex:none;border-radius:8px;overflow:hidden;box-shadow:0 0 0 1px rgba(0,0,0,.1)}' +
      '.ccp-sw i{display:block;width:16px;height:30px}' +
      '.ccp-row b{display:block;font-size:13px}.ccp-row small{display:block;color:var(--muted,#68727a);font-size:11.5px}' +
      '.ccp-row .ck{margin-left:auto;opacity:0;font-weight:700;color:var(--slate-d,#3e566a)}.ccp-row.on .ck{opacity:1}' +
      '@media (max-width:640px){#ccp-panel{width:min(292px,calc(100vw - 64px))}}';
    document.head.appendChild(css);
    var box = document.createElement('div'); box.id = 'ccp';
    var lastG = null;
    var rows = PALETTES.map(function (p) {
      var gname = GROUPS[p.g || 0], head = '';
      if (gname !== lastG) { lastG = gname; head = '<div class="ccp-g">' + gname + '</div>' }
      var d = build(p).light;
      return head + '<button type="button" class="ccp-row" role="radio" data-ccpal="' + p.id + '" aria-checked="false"><span class="ccp-sw"><i style="background:' + (p.sw ? p.sw[0] : p.id === 'slate' ? '#3e566a' : d['--slate-d']) + '"></i><i style="background:' + (p.sw ? p.sw[1] : p.c) + '"></i><i style="background:' + (p.sw ? p.sw[2] : p.id === 'slate' ? '#e2ebf0' : d['--slate-tint-2']) + '"></i></span><span><b>' + p.name + '</b><small>' + p.note + '</small></span><span class="ck">✓</span></button>';
    }).join('');
    box.innerHTML = '<button type="button" id="ccp-btn" aria-haspopup="true" aria-expanded="false" title="Change colour theme"><span id="ccp-cur"></span><span class="t">Colours</span></button>' +
      '<div id="ccp-panel" role="radiogroup" aria-label="Colour theme"><h4>Colour theme</h4><p>Pick a palette. It applies to every page and dashboard, light and dark.</p>' + rows + '</div>';
    document.body.appendChild(box);
    function set(open) { box.classList.toggle('open', open); document.getElementById('ccp-btn').setAttribute('aria-expanded', open) }
    box.addEventListener('click', function (e) {
      var r = e.target.closest('[data-ccpal]');
      if (r) { current = apply(r.getAttribute('data-ccpal')).id; return }
      if (e.target.closest('#ccp-btn')) set(!box.classList.contains('open'));
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('#ccp')) set(false) });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false) });
    apply(current, true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ui); else ui();
  window.addEventListener('storage', function (e) { if (e.key === KEY && e.newValue) { current = apply(e.newValue, true).id } });
  window.CCPalette = { groups: GROUPS, apply: function (id) { return apply(id) }, list: PALETTES, build: build };
})();
