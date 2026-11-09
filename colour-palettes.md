# Cloud Club colour palettes

62 ready-to-use colour themes for light and dark mode, in 6 groups. Each is one set of CSS custom properties, so a palette can be dropped into any project that styles itself with variables.

Source: `theme-picker.js` in the CloudClub Mockup project. Brand hex codes for the recruiting, enterprise and technical groups come from `enterprise-saas-website-design-references.md`.

## How to use in another project

1. Pick a palette below and copy its CSS block into your global stylesheet.
2. Style components with the variables, never with hard-coded hex values:
   - Buttons and links: `var(--brand-d)`, hover `var(--brand-h)`, text on white buttons `var(--brand-dd)`
   - Highlights on dark hero banners: `var(--brand-hi)`, `var(--brand-hi2)`
   - Soft fills, chips, selected rows: `var(--slate-tint)`, `var(--slate-tint-2)`, `var(--accent-tint)`
   - Page and card surfaces: `var(--bg)`, `var(--surface)`, borders `var(--line)`, `var(--line-2)`
   - Text: `var(--ink)`, `var(--body)`, `var(--muted)`
3. Dark mode: put the dark block under `:root[data-theme="dark"]` (or a `prefers-color-scheme: dark` query).
4. To switch palettes at runtime, swap the variable block or set a `data-palette` attribute and scope each block to it.

## How the colours are built

Most palettes come from one main hex. The strong shade (buttons) is about 22% darker, the deep shade (text on white buttons) about 45% darker, and tints, borders and backgrounds are low-saturation versions of the same hue. "Light & soft" palettes use gentler shades. Palettes with a different accent (Zendesk, ServiceNow) set some values by hand.

Contrast note: white text on the strong shade (`--brand-d`) was checked for the original palettes. The exact brand colours of Asana, Snowflake, HubSpot and ServiceNow were not re-checked for contrast.

## Overview

### Our palettes

| Palette | Main colour | Swatches | Character |
|---|---|---|---|
| Slate | `#547691` | `#547691` | Original |
| Graphite | `#3b4450` | `#3b4450` | Neutral, minimal |
| Amber | `#c2620a` | `#c2620a` | Warm, energetic |
| Gold | `#9a6f06` | `#9a6f06` | Rich, optimistic |
| Forest | `#2f6b3f` | `#2f6b3f` | Grounded, steady |
| Emerald | `#1f9462` | `#1f9462` | Growth, finance |
| Teal | `#0f8f90` | `#0f8f90` | Fresh, calm |
| Ocean | `#0b6a8f` | `#0b6a8f` | Deep, confident |
| Sky | `#0a78bd` | `#0a78bd` | Open, friendly |
| Navy | `#24427f` | `#24427f` | Trusted, formal |
| Cobalt | `#2f5fd0` | `#2f5fd0` | Classic enterprise |
| Indigo | `#5b52d9` | `#5b52d9` | Modern, creative |
| Violet | `#7a3fe0` | `#7a3fe0` | Premium, vibrant |
| Plum | `#6b3a7a` | `#6b3a7a` | Refined, boutique |
| Berry | `#b83280` | `#b83280` | Bold, distinctive |
| Rose | `#cf3f67` | `#cf3f67` | Warm, approachable |

### Recruiting & talent platforms

| Palette | Main colour | Swatches | Character |
|---|---|---|---|
| Greenhouse | `#008561` | `#031c17` `#008561` `#e6fff8` | Evergreen + mint, recruiting |
| Workday | `#005cb9` | `#005cb9` `#f38b00` `#e6f0fa` | Enterprise blue, orange accent |
| Ashby | `#1863dc` | `#1863dc` `#f3f2ff` `#fcfcfe` | Clear blue, pale lavender |

### Enterprise products & workflows

| Palette | Main colour | Swatches | Character |
|---|---|---|---|
| Asana | `#f06a6a` | `#f06a6a` `#c94444` `#fde8e8` | Approachable coral |
| HubSpot | `#ff5c35` | `#ff5c35` `#33475b` `#00a4bd` | Warm coral, marketing & CRM |
| Zendesk | `#2d4c33` | `#203524` `#2d4c33` `#d1f470` | Forest green + lime, warm neutrals |
| Shopify | `#008060` | `#008060` | Commerce green |
| ServiceNow | `#032d42` | `#032d42` `#0a4a63` `#62d84e` | Deep teal + bright green |
| Salesforce | `#0176d3` | `#0176d3` | Cloud blue, CRM standard |
| Atlassian | `#1868db` | `#1868db` | Deep blue, team software |
| Intercom | `#286efa` | `#286efa` `#0a2a66` `#e6eeff` | Conversational blue |
| monday.com | `#6161ff` | `#6161ff` `#ffffff` `#e8e8ff` | Playful purple-blue |
| Docusign | `#4c00ff` | `#26065d` `#4c00ff` `#ebe3ff` | Electric indigo, deep purple |
| Slack | `#4a154b` | `#4a154b` `#36c5f0` `#ecb22e` | Aubergine, friendly workspace |

### Landing pages & technical products

| Palette | Main colour | Swatches | Character |
|---|---|---|---|
| Vercel | `#171717` | `#000000` `#171717` `#ffffff` | Pure black and white |
| Notion | `#37352f` | `#37352f` | Warm charcoal, minimal |
| Snowflake | `#29b5e8` | `#29b5e8` `#0f7fae` `#11567f` | Sky blue, deep-sea ink |
| Webflow | `#146ef5` | `#146ef5` `#080808` `#e8f0ff` | Bold blue, big type |
| Linear | `#5e6ad2` | `#5e6ad2` | Calm violet-blue, product teams |
| Stripe | `#635bff` | `#635bff` | Blurple, payments-grade polish |
| Datadog | `#632ca6` | `#632ca6` | Purple, observability dashboards |

### Neutral & grey

| Palette | Main colour | Swatches | Character |
|---|---|---|---|
| Charcoal | `#2f3438` | `#2f3438` | Deep, serious |
| Mocha | `#5a4a42` | `#5a4a42` | Rich, earthy |
| Zinc | `#52525b` | `#52525b` | Cool, technical |
| Stone | `#6f675e` | `#6f675e` | Warm, natural |
| Cool Grey | `#5f6b7a` | `#5f6b7a` | Calm, corporate |
| Taupe | `#7d6b5d` | `#7d6b5d` | Gentle, refined |
| Pewter | `#6e7b85` | `#6e7b85` | Soft blue-grey |
| Sand | `#9a8467` | `#9a8467` | Light, sunlit neutral |

### Light & soft

| Palette | Main colour | Swatches | Character |
|---|---|---|---|
| Peach | `#e8643f` | `#e8643f` | Warm, welcoming coral |
| Apricot | `#d9772a` | `#d9772a` | Warm, friendly orange |
| Linen | `#a08462` | `#a08462` | Soft, natural tan |
| Oat | `#8f7f66` | `#8f7f66` | Muted, creamy |
| Honey | `#b9790c` | `#b9790c` | Sunny, optimistic amber |
| Pistachio | `#5d9a3c` | `#5d9a3c` | Fresh, gentle green |
| Sage | `#5f9078` | `#5f9078` | Muted, calming |
| Mint | `#1c9f7b` | `#1c9f7b` | Soft, modern green |
| Aqua | `#1a9fbb` | `#1a9fbb` | Fresh and clear |
| Ice | `#3d9fc4` | `#3d9fc4` | Crisp, cool blue |
| Sky Light | `#3b94dc` | `#3b94dc` | Airy, open blue |
| Pearl | `#7a8aa0` | `#7a8aa0` | Quiet blue-grey |
| Periwinkle | `#6a85ee` | `#6a85ee` | Light blue-violet |
| Lavender | `#8a73e6` | `#8a73e6` | Gentle, creative |
| Lilac | `#8e6fd0` | `#8e6fd0` | Soft, creative violet |
| Blush | `#e05a85` | `#e05a85` | Soft, friendly pink |
| Rosewater | `#cc6177` | `#cc6177` | Delicate rose |

## CSS for each palette

The slate palette is the original default. Every block lists the tokens that matter; the rest of the app's variables follow the same pattern.

### Our palettes

#### Slate

_Original_

```css
/* Slate light */
:root {
  --brand: #547691;
  --brand-d: #425c71;
  --brand-dd: #2e4150;
  --brand-h: #4d6d85;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #547691;
  --slate-d: #425c71;
  --slate-dd: #2e4150;
  --slate-tint: #f2f4f5;
  --slate-tint-2: #e4e9ec;
  --accent: #547691;
  --accent-tint: #e4e9ec;
  --bg: #f8f9f9;
  --surface-2: #f8f9f9;
  --line: #e0e2e3;
  --line-2: #d6d9db;
  --track: #e5e7e8;
}

/* Slate dark */
:root[data-theme="dark"] {
  --brand: #547691;
  --brand-d: #425c71;
  --brand-dd: #2e4150;
  --brand-h: #4d6d85;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #9dafbe;
  --slate-d: #627584;
  --slate-dd: #dee6ed;
  --slate-tint: #242c33;
  --slate-tint-2: #2d3943;
  --accent: #9dafbe;
  --accent-tint: #2d3943;
  --bg: #121517;
  --surface: #1a1e21;
  --surface-2: #1e2327;
  --line: #292e33;
  --line-2: #32393e;
  --track: #272c30;
}
```

#### Graphite

_Neutral, minimal_

```css
/* Graphite light */
:root {
  --brand: #3b4450;
  --brand-d: #2e353e;
  --brand-dd: #20252c;
  --brand-h: #363f4a;
  --brand-hi: #cbd9eb;
  --brand-hi2: #d4d9ed;
  --brand-soft: #c1cad7;
  --slate: #3b4450;
  --slate-d: #2e353e;
  --slate-dd: #20252c;
  --slate-tint: #f2f3f5;
  --slate-tint-2: #e4e7ec;
  --accent: #3b4450;
  --accent-tint: #e4e7ec;
  --bg: #f8f9f9;
  --surface-2: #f8f9f9;
  --line: #e0e1e3;
  --line-2: #d6d8db;
  --track: #e5e7e8;
}

/* Graphite dark */
:root[data-theme="dark"] {
  --brand: #3b4450;
  --brand-d: #2e353e;
  --brand-dd: #20252c;
  --brand-h: #363f4a;
  --brand-hi: #cbd9eb;
  --brand-hi2: #d4d9ed;
  --brand-soft: #c1cad7;
  --slate: #9dabbe;
  --slate-d: #627084;
  --slate-dd: #dee4ed;
  --slate-tint: #242a33;
  --slate-tint-2: #2d3643;
  --accent: #9dabbe;
  --accent-tint: #2d3643;
  --bg: #121417;
  --surface: #1a1d21;
  --surface-2: #1e2227;
  --line: #292d33;
  --line-2: #32373e;
  --track: #272b30;
}
```

#### Amber

_Warm, energetic_

```css
/* Amber light */
:root {
  --brand: #c2620a;
  --brand-d: #974c08;
  --brand-dd: #6b3606;
  --brand-h: #b25a09;
  --brand-hi: #ebdbcb;
  --brand-hi2: #ede6d4;
  --brand-soft: #d7ccc1;
  --slate: #c2620a;
  --slate-d: #974c08;
  --slate-dd: #6b3606;
  --slate-tint: #faf3ed;
  --slate-tint-2: #f6e7db;
  --accent: #c2620a;
  --accent-tint: #f6e7db;
  --bg: #faf9f7;
  --surface-2: #faf9f7;
  --line: #e6e1dd;
  --line-2: #dfd8d3;
  --track: #ebe7e2;
}

/* Amber dark */
:root[data-theme="dark"] {
  --brand: #c2620a;
  --brand-d: #974c08;
  --brand-dd: #6b3606;
  --brand-h: #b25a09;
  --brand-hi: #ebdbcb;
  --brand-hi2: #ede6d4;
  --brand-soft: #d7ccc1;
  --slate: #ddab7e;
  --slate-d: #a17144;
  --slate-dd: #ede5de;
  --slate-tint: #332b24;
  --slate-tint-2: #43382d;
  --accent: #ddab7e;
  --accent-tint: #43382d;
  --bg: #171412;
  --surface: #211d1a;
  --surface-2: #27221e;
  --line: #332e29;
  --line-2: #3e3832;
  --track: #302b27;
}
```

#### Gold

_Rich, optimistic_

```css
/* Gold light */
:root {
  --brand: #9a6f06;
  --brand-d: #785705;
  --brand-dd: #553d03;
  --brand-h: #8e6606;
  --brand-hi: #ebe2cb;
  --brand-hi2: #edebd4;
  --brand-soft: #d7d1c1;
  --slate: #9a6f06;
  --slate-d: #785705;
  --slate-dd: #553d03;
  --slate-tint: #faf6ed;
  --slate-tint-2: #f6eeda;
  --accent: #9a6f06;
  --accent-tint: #f6eeda;
  --bg: #faf9f7;
  --surface-2: #faf9f7;
  --line: #e7e4dd;
  --line-2: #dfdbd2;
  --track: #ebe9e2;
}

/* Gold dark */
:root[data-theme="dark"] {
  --brand: #9a6f06;
  --brand-d: #785705;
  --brand-dd: #553d03;
  --brand-h: #8e6606;
  --brand-hi: #ebe2cb;
  --brand-hi2: #edebd4;
  --brand-soft: #d7d1c1;
  --slate: #dec27c;
  --slate-d: #a38743;
  --slate-dd: #ede9de;
  --slate-tint: #332f24;
  --slate-tint-2: #433d2d;
  --accent: #dec27c;
  --accent-tint: #433d2d;
  --bg: #171612;
  --surface: #211f1a;
  --surface-2: #27241e;
  --line: #333029;
  --line-2: #3e3b32;
  --track: #302d27;
}
```

#### Forest

_Grounded, steady_

```css
/* Forest light */
:root {
  --brand: #2f6b3f;
  --brand-d: #255331;
  --brand-dd: #1a3b23;
  --brand-h: #2b623a;
  --brand-hi: #cbebd4;
  --brand-hi2: #d4ede0;
  --brand-soft: #c1d7c7;
  --slate: #2f6b3f;
  --slate-d: #255331;
  --slate-dd: #1a3b23;
  --slate-tint: #f1f6f2;
  --slate-tint-2: #e2eee5;
  --accent: #2f6b3f;
  --accent-tint: #e2eee5;
  --bg: #f8f9f8;
  --surface-2: #f8f9f8;
  --line: #e0e4e1;
  --line-2: #d6dbd7;
  --track: #e5e9e6;
}

/* Forest dark */
:root[data-theme="dark"] {
  --brand: #2f6b3f;
  --brand-d: #255331;
  --brand-dd: #1a3b23;
  --brand-h: #2b623a;
  --brand-hi: #cbebd4;
  --brand-hi2: #d4ede0;
  --brand-soft: #c1d7c7;
  --slate: #99c2a4;
  --slate-d: #5f8769;
  --slate-dd: #deede2;
  --slate-tint: #243328;
  --slate-tint-2: #2d4333;
  --accent: #99c2a4;
  --accent-tint: #2d4333;
  --bg: #121713;
  --surface: #1a211c;
  --surface-2: #1e2720;
  --line: #29332c;
  --line-2: #323e35;
  --track: #273029;
}
```

#### Emerald

_Growth, finance_

```css
/* Emerald light */
:root {
  --brand: #1f9462;
  --brand-d: #18734c;
  --brand-dd: #115136;
  --brand-h: #1d885a;
  --brand-hi: #cbebde;
  --brand-hi2: #d4ede8;
  --brand-soft: #c1d7ce;
  --slate: #1f9462;
  --slate-d: #18734c;
  --slate-dd: #115136;
  --slate-tint: #eff8f4;
  --slate-tint-2: #def2e9;
  --accent: #1f9462;
  --accent-tint: #def2e9;
  --bg: #f7faf9;
  --surface-2: #f7faf9;
  --line: #dee5e2;
  --line-2: #d4ddd9;
  --track: #e4eae7;
}

/* Emerald dark */
:root[data-theme="dark"] {
  --brand: #1f9462;
  --brand-d: #18734c;
  --brand-dd: #115136;
  --brand-h: #1d885a;
  --brand-hi: #cbebde;
  --brand-hi2: #d4ede8;
  --brand-soft: #c1d7ce;
  --slate: #8bd0b2;
  --slate-d: #519578;
  --slate-dd: #deede7;
  --slate-tint: #24332c;
  --slate-tint-2: #2d433a;
  --accent: #8bd0b2;
  --accent-tint: #2d433a;
  --bg: #121715;
  --surface: #1a211e;
  --surface-2: #1e2723;
  --line: #29332f;
  --line-2: #323e39;
  --track: #27302c;
}
```

#### Teal

_Fresh, calm_

```css
/* Teal light */
:root {
  --brand: #0f8f90;
  --brand-d: #0c7070;
  --brand-dd: #084f4f;
  --brand-h: #0e8484;
  --brand-hi: #cbebeb;
  --brand-hi2: #d4e7ed;
  --brand-soft: #c1d7d7;
  --slate: #0f8f90;
  --slate-d: #0c7070;
  --slate-dd: #084f4f;
  --slate-tint: #eef9f9;
  --slate-tint-2: #dcf4f4;
  --accent: #0f8f90;
  --accent-tint: #dcf4f4;
  --bg: #f7fafa;
  --surface-2: #f7fafa;
  --line: #dde6e6;
  --line-2: #d3dede;
  --track: #e3ebeb;
}

/* Teal dark */
:root[data-theme="dark"] {
  --brand: #0f8f90;
  --brand-d: #0c7070;
  --brand-dd: #084f4f;
  --brand-h: #0e8484;
  --brand-hi: #cbebeb;
  --brand-hi2: #d4e7ed;
  --brand-soft: #c1d7d7;
  --slate: #82d8d8;
  --slate-d: #499c9d;
  --slate-dd: #deeded;
  --slate-tint: #243333;
  --slate-tint-2: #2d4343;
  --accent: #82d8d8;
  --accent-tint: #2d4343;
  --bg: #121717;
  --surface: #1a2121;
  --surface-2: #1e2727;
  --line: #293333;
  --line-2: #323e3e;
  --track: #273030;
}
```

#### Ocean

_Deep, confident_

```css
/* Ocean light */
:root {
  --brand: #0b6a8f;
  --brand-d: #095370;
  --brand-dd: #063a4f;
  --brand-h: #0a6284;
  --brand-hi: #cbe2eb;
  --brand-hi2: #d4e0ed;
  --brand-soft: #c1d1d7;
  --slate: #0b6a8f;
  --slate-d: #095370;
  --slate-dd: #063a4f;
  --slate-tint: #eef6f9;
  --slate-tint-2: #dbeef5;
  --accent: #0b6a8f;
  --accent-tint: #dbeef5;
  --bg: #f7f9fa;
  --surface-2: #f7f9fa;
  --line: #dde4e6;
  --line-2: #d3dbdf;
  --track: #e3e9eb;
}

/* Ocean dark */
:root[data-theme="dark"] {
  --brand: #0b6a8f;
  --brand-d: #095370;
  --brand-dd: #063a4f;
  --brand-h: #0a6284;
  --brand-hi: #cbe2eb;
  --brand-hi2: #d4e0ed;
  --brand-soft: #c1d1d7;
  --slate: #80c1db;
  --slate-d: #46869f;
  --slate-dd: #dee9ed;
  --slate-tint: #242f33;
  --slate-tint-2: #2d3d43;
  --accent: #80c1db;
  --accent-tint: #2d3d43;
  --bg: #121617;
  --surface: #1a1f21;
  --surface-2: #1e2427;
  --line: #293033;
  --line-2: #323b3e;
  --track: #272d30;
}
```

#### Sky

_Open, friendly_

```css
/* Sky light */
:root {
  --brand: #0a78bd;
  --brand-d: #085e93;
  --brand-dd: #054268;
  --brand-h: #096eae;
  --brand-hi: #cbdfeb;
  --brand-hi2: #d4dded;
  --brand-soft: #c1cfd7;
  --slate: #0a78bd;
  --slate-d: #085e93;
  --slate-dd: #054268;
  --slate-tint: #edf5fa;
  --slate-tint-2: #dbebf5;
  --accent: #0a78bd;
  --accent-tint: #dbebf5;
  --bg: #f7f9fa;
  --surface-2: #f7f9fa;
  --line: #dde3e6;
  --line-2: #d3dadf;
  --track: #e2e8eb;
}

/* Sky dark */
:root[data-theme="dark"] {
  --brand: #0a78bd;
  --brand-d: #085e93;
  --brand-dd: #054268;
  --brand-h: #096eae;
  --brand-hi: #cbdfeb;
  --brand-hi2: #d4dded;
  --brand-soft: #c1cfd7;
  --slate: #7eb8dd;
  --slate-d: #447da1;
  --slate-dd: #dee7ed;
  --slate-tint: #242d33;
  --slate-tint-2: #2d3b43;
  --accent: #7eb8dd;
  --accent-tint: #2d3b43;
  --bg: #121517;
  --surface: #1a1e21;
  --surface-2: #1e2327;
  --line: #292f33;
  --line-2: #323a3e;
  --track: #272c30;
}
```

#### Navy

_Trusted, formal_

```css
/* Navy light */
:root {
  --brand: #24427f;
  --brand-d: #1c3363;
  --brand-dd: #142446;
  --brand-h: #213d75;
  --brand-hi: #cbd6eb;
  --brand-hi2: #d4d7ed;
  --brand-soft: #c1c8d7;
  --slate: #24427f;
  --slate-d: #1c3363;
  --slate-dd: #142446;
  --slate-tint: #f0f2f7;
  --slate-tint-2: #e0e5f0;
  --accent: #24427f;
  --accent-tint: #e0e5f0;
  --bg: #f8f8fa;
  --surface-2: #f8f8fa;
  --line: #dfe1e5;
  --line-2: #d5d7dd;
  --track: #e4e6e9;
}

/* Navy dark */
:root[data-theme="dark"] {
  --brand: #24427f;
  --brand-d: #1c3363;
  --brand-dd: #142446;
  --brand-h: #213d75;
  --brand-hi: #cbd6eb;
  --brand-hi2: #d4d7ed;
  --brand-soft: #c1c8d7;
  --slate: #90a3cb;
  --slate-d: #566990;
  --slate-dd: #dee3ed;
  --slate-tint: #242933;
  --slate-tint-2: #2d3443;
  --accent: #90a3cb;
  --accent-tint: #2d3443;
  --bg: #121317;
  --surface: #1a1c21;
  --surface-2: #1e2127;
  --line: #292c33;
  --line-2: #32363e;
  --track: #272a30;
}
```

#### Cobalt

_Classic enterprise_

```css
/* Cobalt light */
:root {
  --brand: #2f5fd0;
  --brand-d: #254aa2;
  --brand-dd: #1a3472;
  --brand-h: #2b57bf;
  --brand-hi: #cbd5eb;
  --brand-hi2: #d4d6ed;
  --brand-soft: #c1c7d7;
  --slate: #2f5fd0;
  --slate-d: #254aa2;
  --slate-dd: #1a3472;
  --slate-tint: #eff2f8;
  --slate-tint-2: #dfe4f1;
  --accent: #2f5fd0;
  --accent-tint: #dfe4f1;
  --bg: #f7f8fa;
  --surface-2: #f7f8fa;
  --line: #dee0e5;
  --line-2: #d4d7dd;
  --track: #e4e6ea;
}

/* Cobalt dark */
:root[data-theme="dark"] {
  --brand: #2f5fd0;
  --brand-d: #254aa2;
  --brand-dd: #1a3472;
  --brand-h: #2b57bf;
  --brand-hi: #cbd5eb;
  --brand-hi2: #d4d6ed;
  --brand-soft: #c1c7d7;
  --slate: #8ca0cf;
  --slate-d: #526693;
  --slate-dd: #dee2ed;
  --slate-tint: #242833;
  --slate-tint-2: #2d3443;
  --accent: #8ca0cf;
  --accent-tint: #2d3443;
  --bg: #121317;
  --surface: #1a1c21;
  --surface-2: #1e2127;
  --line: #292c33;
  --line-2: #32363e;
  --track: #272930;
}
```

#### Indigo

_Modern, creative_

```css
/* Indigo light */
:root {
  --brand: #5b52d9;
  --brand-d: #342abf;
  --brand-dd: #251e87;
  --brand-h: #483ed5;
  --brand-hi: #cdcbeb;
  --brand-hi2: #dcd4ed;
  --brand-soft: #c2c1d7;
  --slate: #5b52d9;
  --slate-d: #342abf;
  --slate-dd: #251e87;
  --slate-tint: #f0eff8;
  --slate-tint-2: #e0dff2;
  --accent: #5b52d9;
  --accent-tint: #e0dff2;
  --bg: #f8f7fa;
  --surface-2: #f8f7fa;
  --line: #dfdee5;
  --line-2: #d5d4dd;
  --track: #e4e4ea;
}

/* Indigo dark */
:root[data-theme="dark"] {
  --brand: #5b52d9;
  --brand-d: #342abf;
  --brand-dd: #251e87;
  --brand-h: #483ed5;
  --brand-hi: #cdcbeb;
  --brand-hi2: #dcd4ed;
  --brand-soft: #c2c1d7;
  --slate: #908bcf;
  --slate-d: #565294;
  --slate-dd: #dfdeed;
  --slate-tint: #252433;
  --slate-tint-2: #2e2d43;
  --accent: #908bcf;
  --accent-tint: #2e2d43;
  --bg: #121217;
  --surface: #1a1a21;
  --surface-2: #1f1e27;
  --line: #2a2933;
  --line-2: #33323e;
  --track: #272730;
}
```

#### Violet

_Premium, vibrant_

```css
/* Violet light */
:root {
  --brand: #7a3fe0;
  --brand-d: #5a1fc1;
  --brand-dd: #401688;
  --brand-h: #6c2bdd;
  --brand-hi: #d7cbeb;
  --brand-hi2: #e3d4ed;
  --brand-soft: #c9c1d7;
  --slate: #7a3fe0;
  --slate-d: #5a1fc1;
  --slate-dd: #401688;
  --slate-tint: #f2eff8;
  --slate-tint-2: #e5ddf3;
  --accent: #7a3fe0;
  --accent-tint: #e5ddf3;
  --bg: #f8f7fa;
  --surface-2: #f8f7fa;
  --line: #e1dee5;
  --line-2: #d7d4de;
  --track: #e6e3ea;
}

/* Violet dark */
:root[data-theme="dark"] {
  --brand: #7a3fe0;
  --brand-d: #5a1fc1;
  --brand-dd: #401688;
  --brand-h: #6c2bdd;
  --brand-hi: #d7cbeb;
  --brand-hi2: #e3d4ed;
  --brand-soft: #c9c1d7;
  --slate: #a387d4;
  --slate-d: #694d98;
  --slate-dd: #e3deed;
  --slate-tint: #292433;
  --slate-tint-2: #352d43;
  --accent: #a387d4;
  --accent-tint: #352d43;
  --bg: #141217;
  --surface: #1c1a21;
  --surface-2: #211e27;
  --line: #2d2933;
  --line-2: #36323e;
  --track: #2a2730;
}
```

#### Plum

_Refined, boutique_

```css
/* Plum light */
:root {
  --brand: #6b3a7a;
  --brand-d: #532d5f;
  --brand-dd: #3b2043;
  --brand-h: #623570;
  --brand-hi: #e4cbeb;
  --brand-hi2: #edd4ed;
  --brand-soft: #d2c1d7;
  --slate: #6b3a7a;
  --slate-d: #532d5f;
  --slate-dd: #3b2043;
  --slate-tint: #f5f1f6;
  --slate-tint-2: #ebe3ed;
  --accent: #6b3a7a;
  --accent-tint: #ebe3ed;
  --bg: #f9f8f9;
  --surface-2: #f9f8f9;
  --line: #e3e0e4;
  --line-2: #dad6db;
  --track: #e8e5e8;
}

/* Plum dark */
:root[data-theme="dark"] {
  --brand: #6b3a7a;
  --brand-d: #532d5f;
  --brand-dd: #3b2043;
  --brand-h: #623570;
  --brand-hi: #e4cbeb;
  --brand-hi2: #edd4ed;
  --brand-soft: #d2c1d7;
  --slate: #b79bc0;
  --slate-d: #7d6085;
  --slate-dd: #eadeed;
  --slate-tint: #2f2433;
  --slate-tint-2: #3e2d43;
  --accent: #b79bc0;
  --accent-tint: #3e2d43;
  --bg: #161217;
  --surface: #1f1a21;
  --surface-2: #251e27;
  --line: #312933;
  --line-2: #3b323e;
  --track: #2e2730;
}
```

#### Berry

_Bold, distinctive_

```css
/* Berry light */
:root {
  --brand: #b83280;
  --brand-d: #902764;
  --brand-dd: #651b46;
  --brand-h: #a92e76;
  --brand-hi: #ebcbde;
  --brand-hi2: #edd4dd;
  --brand-soft: #d7c1ce;
  --slate: #b83280;
  --slate-d: #902764;
  --slate-dd: #651b46;
  --slate-tint: #f7f0f4;
  --slate-tint-2: #f1e0e9;
  --accent: #b83280;
  --accent-tint: #f1e0e9;
  --bg: #faf8f9;
  --surface-2: #faf8f9;
  --line: #e5dfe2;
  --line-2: #ddd5d9;
  --track: #eae4e7;
}

/* Berry dark */
:root[data-theme="dark"] {
  --brand: #b83280;
  --brand-d: #902764;
  --brand-dd: #651b46;
  --brand-h: #a92e76;
  --brand-hi: #ebcbde;
  --brand-hi2: #edd4dd;
  --brand-soft: #d7c1ce;
  --slate: #cc8fb2;
  --slate-d: #905578;
  --slate-dd: #eddee7;
  --slate-tint: #33242d;
  --slate-tint-2: #432d3a;
  --accent: #cc8fb2;
  --accent-tint: #432d3a;
  --bg: #171215;
  --surface: #211a1e;
  --surface-2: #271e23;
  --line: #33292f;
  --line-2: #3e3239;
  --track: #30272c;
}
```

#### Rose

_Warm, approachable_

```css
/* Rose light */
:root {
  --brand: #cf3f67;
  --brand-d: #a82a4d;
  --brand-dd: #771e36;
  --brand-h: #c7325b;
  --brand-hi: #ebcbd4;
  --brand-hi2: #edd4d5;
  --brand-soft: #d7c1c7;
  --slate: #cf3f67;
  --slate-d: #a82a4d;
  --slate-dd: #771e36;
  --slate-tint: #f8eff2;
  --slate-tint-2: #f1dfe4;
  --accent: #cf3f67;
  --accent-tint: #f1dfe4;
  --bg: #faf7f8;
  --surface-2: #faf7f8;
  --line: #e5dfe0;
  --line-2: #ddd5d7;
  --track: #eae4e5;
}

/* Rose dark */
:root[data-theme="dark"] {
  --brand: #cf3f67;
  --brand-d: #a82a4d;
  --brand-dd: #771e36;
  --brand-h: #c7325b;
  --brand-hi: #ebcbd4;
  --brand-hi2: #edd4d5;
  --brand-soft: #d7c1c7;
  --slate: #cd8e9f;
  --slate-d: #925465;
  --slate-dd: #eddee2;
  --slate-tint: #332428;
  --slate-tint-2: #432d33;
  --accent: #cd8e9f;
  --accent-tint: #432d33;
  --bg: #171213;
  --surface: #211a1c;
  --surface-2: #271e20;
  --line: #33292c;
  --line-2: #3e3235;
  --track: #302729;
}
```

### Recruiting & talent platforms

#### Greenhouse

_Evergreen + mint, recruiting_

```css
/* Greenhouse light */
:root {
  --brand: #008561;
  --brand-d: #00684c;
  --brand-dd: #004935;
  --brand-h: #007a59;
  --brand-hi: #cbebe3;
  --brand-hi2: #d4edec;
  --brand-soft: #c1d7d1;
  --slate: #008561;
  --slate-d: #00684c;
  --slate-dd: #004935;
  --slate-tint: #edfaf7;
  --slate-tint-2: #d9f7ef;
  --accent: #008561;
  --accent-tint: #d9f7ef;
  --bg: #f7fbfa;
  --surface-2: #f7fbfa;
  --line: #dce7e4;
  --line-2: #d2e0dc;
  --track: #e2ece9;
}

/* Greenhouse dark */
:root[data-theme="dark"] {
  --brand: #008561;
  --brand-d: #00684c;
  --brand-dd: #004935;
  --brand-h: #007a59;
  --brand-hi: #cbebe3;
  --brand-hi2: #d4edec;
  --brand-soft: #c1d7d1;
  --slate: #78e2c6;
  --slate-d: #3fa68a;
  --slate-dd: #deede9;
  --slate-tint: #24332f;
  --slate-tint-2: #2d433d;
  --accent: #78e2c6;
  --accent-tint: #2d433d;
  --bg: #121716;
  --surface: #1a211f;
  --surface-2: #1e2724;
  --line: #293330;
  --line-2: #323e3b;
  --track: #27302e;
}
```

#### Workday

_Enterprise blue, orange accent_

```css
/* Workday light */
:root {
  --brand: #005cb9;
  --brand-d: #004890;
  --brand-dd: #003366;
  --brand-h: #0055aa;
  --brand-hi: #cbdbeb;
  --brand-hi2: #d4dbed;
  --brand-soft: #c1ccd7;
  --slate: #005cb9;
  --slate-d: #004890;
  --slate-dd: #003366;
  --slate-tint: #edf3fa;
  --slate-tint-2: #d9e8f7;
  --accent: #005cb9;
  --accent-tint: #d9e8f7;
  --bg: #f7f9fb;
  --surface-2: #f7f9fb;
  --line: #dce2e7;
  --line-2: #d2d9e0;
  --track: #e2e7ec;
}

/* Workday dark */
:root[data-theme="dark"] {
  --brand: #005cb9;
  --brand-d: #004890;
  --brand-dd: #003366;
  --brand-h: #0055aa;
  --brand-hi: #cbdbeb;
  --brand-hi2: #d4dbed;
  --brand-soft: #c1ccd7;
  --slate: #78ade2;
  --slate-d: #3f72a6;
  --slate-dd: #dee5ed;
  --slate-tint: #242b33;
  --slate-tint-2: #2d3843;
  --accent: #78ade2;
  --accent-tint: #2d3843;
  --bg: #121417;
  --surface: #1a1d21;
  --surface-2: #1e2227;
  --line: #292e33;
  --line-2: #32383e;
  --track: #272b30;
}
```

#### Ashby

_Clear blue, pale lavender_

```css
/* Ashby light */
:root {
  --brand: #1863dc;
  --brand-d: #134dac;
  --brand-dd: #0d3679;
  --brand-h: #165bca;
  --brand-hi: #cbd8eb;
  --brand-hi2: #d4d8ed;
  --brand-soft: #c1c9d7;
  --slate: #1863dc;
  --slate-d: #134dac;
  --slate-dd: #0d3679;
  --slate-tint: #eef2f9;
  --slate-tint-2: #dce5f4;
  --accent: #1863dc;
  --accent-tint: #dce5f4;
  --bg: #f7f8fa;
  --surface-2: #f7f8fa;
  --line: #dde1e6;
  --line-2: #d3d7de;
  --track: #e3e6eb;
}

/* Ashby dark */
:root[data-theme="dark"] {
  --brand: #1863dc;
  --brand-d: #134dac;
  --brand-dd: #0d3679;
  --brand-h: #165bca;
  --brand-hi: #cbd8eb;
  --brand-hi2: #d4d8ed;
  --brand-soft: #c1c9d7;
  --slate: #83a3d8;
  --slate-d: #49699c;
  --slate-dd: #dee4ed;
  --slate-tint: #242a33;
  --slate-tint-2: #2d3543;
  --accent: #83a3d8;
  --accent-tint: #2d3543;
  --bg: #121417;
  --surface: #1a1c21;
  --surface-2: #1e2127;
  --line: #292d33;
  --line-2: #32373e;
  --track: #272a30;
}
```

### Enterprise products & workflows

#### Asana

_Approachable coral_

```css
/* Asana light */
:root {
  --brand: #f06a6a;
  --brand-d: #e92525;
  --brand-dd: #ad1111;
  --brand-h: #ed5151;
  --brand-hi: #ebcbcb;
  --brand-hi2: #eddad4;
  --brand-soft: #d7c1c1;
  --slate: #f06a6a;
  --slate-d: #e92525;
  --slate-dd: #ad1111;
  --slate-tint: #f9eeee;
  --slate-tint-2: #f4dcdc;
  --accent: #f06a6a;
  --accent-tint: #f4dcdc;
  --bg: #faf7f7;
  --surface-2: #faf7f7;
  --line: #e6dddd;
  --line-2: #ded3d3;
  --track: #ebe3e3;
}

/* Asana dark */
:root[data-theme="dark"] {
  --brand: #f06a6a;
  --brand-d: #e92525;
  --brand-dd: #ad1111;
  --brand-h: #ed5151;
  --brand-hi: #ebcbcb;
  --brand-hi2: #eddad4;
  --brand-soft: #d7c1c1;
  --slate: #d98282;
  --slate-d: #9d4949;
  --slate-dd: #eddede;
  --slate-tint: #332424;
  --slate-tint-2: #432d2d;
  --accent: #d98282;
  --accent-tint: #432d2d;
  --bg: #171212;
  --surface: #211a1a;
  --surface-2: #271e1e;
  --line: #332929;
  --line-2: #3e3232;
  --track: #302727;
}
```

#### HubSpot

_Warm coral, marketing & CRM_

```css
/* HubSpot light */
:root {
  --brand: #ff5c35;
  --brand-d: #f02e00;
  --brand-dd: #a92100;
  --brand-h: #ff481c;
  --brand-hi: #ebd1cb;
  --brand-hi2: #eddfd4;
  --brand-soft: #d7c5c1;
  --slate: #ff5c35;
  --slate-d: #f02e00;
  --slate-dd: #a92100;
  --slate-tint: #faefed;
  --slate-tint-2: #f7dfd9;
  --accent: #ff5c35;
  --accent-tint: #f7dfd9;
  --bg: #fbf7f7;
  --surface-2: #fbf7f7;
  --line: #e7dedc;
  --line-2: #e0d5d2;
  --track: #ece4e2;
}

/* HubSpot dark */
:root[data-theme="dark"] {
  --brand: #ff5c35;
  --brand-d: #f02e00;
  --brand-dd: #a92100;
  --brand-h: #ff481c;
  --brand-hi: #ebd1cb;
  --brand-hi2: #eddfd4;
  --brand-soft: #d7c5c1;
  --slate: #e28d78;
  --slate-d: #a6533f;
  --slate-dd: #ede1de;
  --slate-tint: #332724;
  --slate-tint-2: #43312d;
  --accent: #e28d78;
  --accent-tint: #43312d;
  --bg: #171312;
  --surface: #211b1a;
  --surface-2: #27201e;
  --line: #332b29;
  --line-2: #3e3432;
  --track: #302827;
}
```

#### Zendesk

_Forest green + lime, warm neutrals_

```css
/* Zendesk light */
:root {
  --brand: #2d4c33;
  --brand-d: #203524;
  --brand-dd: #11110d;
  --brand-h: #355e34;
  --brand-hi: #d1f470;
  --brand-hi2: #e9fbb0;
  --brand-soft: #d5d5d2;
  --slate: #2d4c33;
  --slate-d: #203524;
  --slate-dd: #11110d;
  --slate-tint: #eef2e8;
  --slate-tint-2: #e1e9d6;
  --accent: #4e8336;
  --accent-tint: #eaf4cc;
  --bg: #f5f5f2;
  --surface-2: #f5f5f2;
  --line: #e4e4e0;
  --line-2: #d5d5d2;
  --track: #e8e8e4;
  --ink: #11110d;
  --body: #4b4b39;
  --muted: #6b6b60;
}

/* Zendesk dark */
:root[data-theme="dark"] {
  --brand: #2d4c33;
  --brand-d: #203524;
  --brand-dd: #11110d;
  --brand-h: #355e34;
  --brand-hi: #d1f470;
  --brand-hi2: #e9fbb0;
  --brand-soft: #d5d5d2;
  --slate: #b9d95a;
  --slate-d: #4e8336;
  --slate-dd: #f5f5f2;
  --slate-tint: #1d261a;
  --slate-tint-2: #26331f;
  --accent: #d1f470;
  --accent-tint: #26331f;
  --bg: #11110d;
  --surface: #1a1a14;
  --surface-2: #1f1f18;
  --line: #2e2e23;
  --line-2: #3c3c2e;
  --track: #26261c;
  --ink: #f5f5f2;
  --body: #d5d5d2;
  --muted: #90918c;
}
```

#### Shopify

_Commerce green_

```css
/* Shopify light */
:root {
  --brand: #008060;
  --brand-d: #00644b;
  --brand-dd: #004635;
  --brand-h: #007658;
  --brand-hi: #cbebe3;
  --brand-hi2: #d4edec;
  --brand-soft: #c1d7d2;
  --slate: #008060;
  --slate-d: #00644b;
  --slate-dd: #004635;
  --slate-tint: #edfaf7;
  --slate-tint-2: #d9f7f0;
  --accent: #008060;
  --accent-tint: #d9f7f0;
  --bg: #f7fbfa;
  --surface-2: #f7fbfa;
  --line: #dce7e4;
  --line-2: #d2e0dc;
  --track: #e2ece9;
}

/* Shopify dark */
:root[data-theme="dark"] {
  --brand: #008060;
  --brand-d: #00644b;
  --brand-dd: #004635;
  --brand-h: #007658;
  --brand-hi: #cbebe3;
  --brand-hi2: #d4edec;
  --brand-soft: #c1d7d2;
  --slate: #78e2c8;
  --slate-d: #3fa68d;
  --slate-dd: #deede9;
  --slate-tint: #24332f;
  --slate-tint-2: #2d433e;
  --accent: #78e2c8;
  --accent-tint: #2d433e;
  --bg: #121716;
  --surface: #1a211f;
  --surface-2: #1e2725;
  --line: #293330;
  --line-2: #323e3b;
  --track: #27302e;
}
```

#### ServiceNow

_Deep teal + bright green_

```css
/* ServiceNow light */
:root {
  --brand: #032d42;
  --brand-d: #032d42;
  --brand-dd: #021f2e;
  --brand-h: #0a4a63;
  --brand-hi: #62d84e;
  --brand-hi2: #c9f5c1;
  --brand-soft: #c1d0d7;
  --slate: #032d42;
  --slate-d: #022333;
  --slate-dd: #021924;
  --slate-tint: #edf6fa;
  --slate-tint-2: #daedf6;
  --accent: #032d42;
  --accent-tint: #daedf6;
  --bg: #f7f9fa;
  --surface-2: #f7f9fa;
  --line: #dde3e6;
  --line-2: #d2dbdf;
  --track: #e2e8eb;
}

/* ServiceNow dark */
:root[data-theme="dark"] {
  --brand: #032d42;
  --brand-d: #0a4a63;
  --brand-dd: #021f2e;
  --brand-h: #0e5f80;
  --brand-hi: #62d84e;
  --brand-hi2: #c9f5c1;
  --brand-soft: #c1d0d7;
  --slate: #7dbede;
  --slate-d: #4482a2;
  --slate-dd: #dee8ed;
  --slate-tint: #242e33;
  --slate-tint-2: #2d3c43;
  --accent: #7dbede;
  --accent-tint: #2d3c43;
  --bg: #121517;
  --surface: #1a1f21;
  --surface-2: #1e2427;
  --line: #293033;
  --line-2: #323a3e;
  --track: #272d30;
}
```

#### Salesforce

_Cloud blue, CRM standard_

```css
/* Salesforce light */
:root {
  --brand: #0176d3;
  --brand-d: #015ca5;
  --brand-dd: #014174;
  --brand-h: #016dc2;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #0176d3;
  --slate-d: #015ca5;
  --slate-dd: #014174;
  --slate-tint: #edf4fa;
  --slate-tint-2: #d9eaf7;
  --accent: #0176d3;
  --accent-tint: #d9eaf7;
  --bg: #f7f9fb;
  --surface-2: #f7f9fb;
  --line: #dce2e7;
  --line-2: #d2dae0;
  --track: #e2e7ec;
}

/* Salesforce dark */
:root[data-theme="dark"] {
  --brand: #0176d3;
  --brand-d: #015ca5;
  --brand-dd: #014174;
  --brand-h: #016dc2;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #79b3e2;
  --slate-d: #4079a6;
  --slate-dd: #dee6ed;
  --slate-tint: #242c33;
  --slate-tint-2: #2d3943;
  --accent: #79b3e2;
  --accent-tint: #2d3943;
  --bg: #121517;
  --surface: #1a1e21;
  --surface-2: #1e2327;
  --line: #292e33;
  --line-2: #32393e;
  --track: #272c30;
}
```

#### Atlassian

_Deep blue, team software_

```css
/* Atlassian light */
:root {
  --brand: #1868db;
  --brand-d: #1351ab;
  --brand-dd: #0d3978;
  --brand-h: #1660c9;
  --brand-hi: #cbd8eb;
  --brand-hi2: #d4d8ed;
  --brand-soft: #c1cad7;
  --slate: #1868db;
  --slate-d: #1351ab;
  --slate-dd: #0d3978;
  --slate-tint: #eef3f9;
  --slate-tint-2: #dce6f4;
  --accent: #1868db;
  --accent-tint: #dce6f4;
  --bg: #f7f8fa;
  --surface-2: #f7f8fa;
  --line: #dde1e6;
  --line-2: #d3d8de;
  --track: #e3e6eb;
}

/* Atlassian dark */
:root[data-theme="dark"] {
  --brand: #1868db;
  --brand-d: #1351ab;
  --brand-dd: #0d3978;
  --brand-h: #1660c9;
  --brand-hi: #cbd8eb;
  --brand-hi2: #d4d8ed;
  --brand-soft: #c1cad7;
  --slate: #83a6d8;
  --slate-d: #496b9c;
  --slate-dd: #dee4ed;
  --slate-tint: #242a33;
  --slate-tint-2: #2d3643;
  --accent: #83a6d8;
  --accent-tint: #2d3643;
  --bg: #121417;
  --surface: #1a1d21;
  --surface-2: #1e2227;
  --line: #292d33;
  --line-2: #32373e;
  --track: #272a30;
}
```

#### Intercom

_Conversational blue_

```css
/* Intercom light */
:root {
  --brand: #286efa;
  --brand-d: #054ddd;
  --brand-dd: #04369c;
  --brand-h: #115ff9;
  --brand-hi: #cbd6eb;
  --brand-hi2: #d4d7ed;
  --brand-soft: #c1c8d7;
  --slate: #286efa;
  --slate-d: #054ddd;
  --slate-dd: #04369c;
  --slate-tint: #edf1fa;
  --slate-tint-2: #dae3f6;
  --accent: #286efa;
  --accent-tint: #dae3f6;
  --bg: #f7f8fa;
  --surface-2: #f7f8fa;
  --line: #dde0e7;
  --line-2: #d2d7df;
  --track: #e2e5eb;
}

/* Intercom dark */
:root[data-theme="dark"] {
  --brand: #286efa;
  --brand-d: #054ddd;
  --brand-dd: #04369c;
  --brand-h: #115ff9;
  --brand-hi: #cbd6eb;
  --brand-hi2: #d4d7ed;
  --brand-soft: #c1c8d7;
  --slate: #7b9de0;
  --slate-d: #4162a4;
  --slate-dd: #dee3ed;
  --slate-tint: #242933;
  --slate-tint-2: #2d3443;
  --accent: #7b9de0;
  --accent-tint: #2d3443;
  --bg: #121317;
  --surface: #1a1c21;
  --surface-2: #1e2127;
  --line: #292c33;
  --line-2: #32363e;
  --track: #272a30;
}
```

#### monday.com

_Playful purple-blue_

```css
/* monday.com light */
:root {
  --brand: #6161ff;
  --brand-d: #1414ff;
  --brand-dd: #0000c2;
  --brand-h: #4545ff;
  --brand-hi: #cbcbeb;
  --brand-hi2: #dad4ed;
  --brand-soft: #c1c1d7;
  --slate: #6161ff;
  --slate-d: #1414ff;
  --slate-dd: #0000c2;
  --slate-tint: #ededfa;
  --slate-tint-2: #d9d9f7;
  --accent: #6161ff;
  --accent-tint: #d9d9f7;
  --bg: #f7f7fb;
  --surface-2: #f7f7fb;
  --line: #dcdce7;
  --line-2: #d2d2e0;
  --track: #e2e2ec;
}

/* monday.com dark */
:root[data-theme="dark"] {
  --brand: #6161ff;
  --brand-d: #1414ff;
  --brand-dd: #0000c2;
  --brand-h: #4545ff;
  --brand-hi: #cbcbeb;
  --brand-hi2: #dad4ed;
  --brand-soft: #c1c1d7;
  --slate: #7878e2;
  --slate-d: #3f3fa6;
  --slate-dd: #dedeed;
  --slate-tint: #242433;
  --slate-tint-2: #2d2d43;
  --accent: #7878e2;
  --accent-tint: #2d2d43;
  --bg: #121217;
  --surface: #1a1a21;
  --surface-2: #1e1e27;
  --line: #292933;
  --line-2: #32323e;
  --track: #272730;
}
```

#### Docusign

_Electric indigo, deep purple_

```css
/* Docusign light */
:root {
  --brand: #4c00ff;
  --brand-d: #3b00c7;
  --brand-dd: #2a008c;
  --brand-h: #4600eb;
  --brand-hi: #d5cbeb;
  --brand-hi2: #e1d4ed;
  --brand-soft: #c7c1d7;
  --slate: #4c00ff;
  --slate-d: #3b00c7;
  --slate-dd: #2a008c;
  --slate-tint: #f1edfa;
  --slate-tint-2: #e2d9f7;
  --accent: #4c00ff;
  --accent-tint: #e2d9f7;
  --bg: #f8f7fb;
  --surface-2: #f8f7fb;
  --line: #e0dce7;
  --line-2: #d6d2e0;
  --track: #e5e2ec;
}

/* Docusign dark */
:root[data-theme="dark"] {
  --brand: #4c00ff;
  --brand-d: #3b00c7;
  --brand-dd: #2a008c;
  --brand-h: #4600eb;
  --brand-hi: #d5cbeb;
  --brand-hi2: #e1d4ed;
  --brand-soft: #c7c1d7;
  --slate: #9878e2;
  --slate-d: #5e3fa6;
  --slate-dd: #e2deed;
  --slate-tint: #282433;
  --slate-tint-2: #342d43;
  --accent: #9878e2;
  --accent-tint: #342d43;
  --bg: #131217;
  --surface: #1c1a21;
  --surface-2: #211e27;
  --line: #2c2933;
  --line-2: #36323e;
  --track: #292730;
}
```

#### Slack

_Aubergine, friendly workspace_

```css
/* Slack light */
:root {
  --brand: #4a154b;
  --brand-d: #3a103b;
  --brand-dd: #290c29;
  --brand-h: #441345;
  --brand-hi: #ebcbeb;
  --brand-hi2: #edd4e7;
  --brand-soft: #d7c1d7;
  --slate: #4a154b;
  --slate-d: #3a103b;
  --slate-dd: #290c29;
  --slate-tint: #f7f0f7;
  --slate-tint-2: #f0e0f0;
  --accent: #4a154b;
  --accent-tint: #f0e0f0;
  --bg: #faf8fa;
  --surface-2: #faf8fa;
  --line: #e5dfe5;
  --line-2: #dcd5dd;
  --track: #e9e4ea;
}

/* Slack dark */
:root[data-theme="dark"] {
  --brand: #4a154b;
  --brand-d: #3a103b;
  --brand-dd: #290c29;
  --brand-h: #441345;
  --brand-hi: #ebcbeb;
  --brand-hi2: #edd4e7;
  --brand-soft: #d7c1d7;
  --slate: #ca90cb;
  --slate-d: #8f5690;
  --slate-dd: #eddeed;
  --slate-tint: #332433;
  --slate-tint-2: #432d43;
  --accent: #ca90cb;
  --accent-tint: #432d43;
  --bg: #171217;
  --surface: #211a21;
  --surface-2: #271e27;
  --line: #332933;
  --line-2: #3e323e;
  --track: #302730;
}
```

### Landing pages & technical products

#### Vercel

_Pure black and white_

```css
/* Vercel light */
:root {
  --brand: #171717;
  --brand-d: #121212;
  --brand-dd: #0d0d0d;
  --brand-h: #151515;
  --brand-hi: #ebcbcb;
  --brand-hi2: #eddad4;
  --brand-soft: #d7c1c1;
  --slate: #171717;
  --slate-d: #121212;
  --slate-dd: #0d0d0d;
  --slate-tint: #f5f2f2;
  --slate-tint-2: #ece4e4;
  --accent: #171717;
  --accent-tint: #ece4e4;
  --bg: #f9f8f8;
  --surface-2: #f9f8f8;
  --line: #e3e0e0;
  --line-2: #dbd6d6;
  --track: #e8e5e5;
}

/* Vercel dark */
:root[data-theme="dark"] {
  --brand: #171717;
  --brand-d: #121212;
  --brand-dd: #0d0d0d;
  --brand-h: #151515;
  --brand-hi: #ebcbcb;
  --brand-hi2: #eddad4;
  --brand-soft: #d7c1c1;
  --slate: #be9d9d;
  --slate-d: #846262;
  --slate-dd: #eddede;
  --slate-tint: #332424;
  --slate-tint-2: #432d2d;
  --accent: #be9d9d;
  --accent-tint: #432d2d;
  --bg: #171212;
  --surface: #211a1a;
  --surface-2: #271e1e;
  --line: #332929;
  --line-2: #3e3232;
  --track: #302727;
}
```

#### Notion

_Warm charcoal, minimal_

```css
/* Notion light */
:root {
  --brand: #37352f;
  --brand-d: #2b2925;
  --brand-dd: #1e1d1a;
  --brand-h: #33312b;
  --brand-hi: #ebe3cb;
  --brand-hi2: #edecd4;
  --brand-soft: #d7d2c1;
  --slate: #37352f;
  --slate-d: #2b2925;
  --slate-dd: #1e1d1a;
  --slate-tint: #f5f4f2;
  --slate-tint-2: #eceae4;
  --accent: #37352f;
  --accent-tint: #eceae4;
  --bg: #f9f9f8;
  --surface-2: #f9f9f8;
  --line: #e3e3e0;
  --line-2: #dbdad6;
  --track: #e8e8e5;
}

/* Notion dark */
:root[data-theme="dark"] {
  --brand: #37352f;
  --brand-d: #2b2925;
  --brand-dd: #1e1d1a;
  --brand-h: #33312b;
  --brand-hi: #ebe3cb;
  --brand-hi2: #edecd4;
  --brand-soft: #d7d2c1;
  --slate: #beb69d;
  --slate-d: #847b62;
  --slate-dd: #ede9de;
  --slate-tint: #332f24;
  --slate-tint-2: #433e2d;
  --accent: #beb69d;
  --accent-tint: #433e2d;
  --bg: #171612;
  --surface: #211f1a;
  --surface-2: #27251e;
  --line: #333029;
  --line-2: #3e3b32;
  --track: #302e27;
}
```

#### Snowflake

_Sky blue, deep-sea ink_

```css
/* Snowflake light */
:root {
  --brand: #29b5e8;
  --brand-d: #1592c0;
  --brand-dd: #0f6788;
  --brand-h: #18ade3;
  --brand-hi: #cbe3eb;
  --brand-hi2: #d4e0ed;
  --brand-soft: #c1d1d7;
  --slate: #29b5e8;
  --slate-d: #1592c0;
  --slate-dd: #0f6788;
  --slate-tint: #eef6f9;
  --slate-tint-2: #dceef4;
  --accent: #29b5e8;
  --accent-tint: #dceef4;
  --bg: #f7f9fa;
  --surface-2: #f7f9fa;
  --line: #dde4e6;
  --line-2: #d3dbde;
  --track: #e3e9eb;
}

/* Snowflake dark */
:root[data-theme="dark"] {
  --brand: #29b5e8;
  --brand-d: #1592c0;
  --brand-dd: #0f6788;
  --brand-h: #18ade3;
  --brand-hi: #cbe3eb;
  --brand-hi2: #d4e0ed;
  --brand-soft: #c1d1d7;
  --slate: #83c1d8;
  --slate-d: #49869c;
  --slate-dd: #dee9ed;
  --slate-tint: #242f33;
  --slate-tint-2: #2d3d43;
  --accent: #83c1d8;
  --accent-tint: #2d3d43;
  --bg: #121617;
  --surface: #1a1f21;
  --surface-2: #1e2527;
  --line: #293033;
  --line-2: #323b3e;
  --track: #272e30;
}
```

#### Webflow

_Bold blue, big type_

```css
/* Webflow light */
:root {
  --brand: #146ef5;
  --brand-d: #0854c6;
  --brand-dd: #063b8c;
  --brand-h: #0a64ea;
  --brand-hi: #cbd8eb;
  --brand-hi2: #d4d8ed;
  --brand-soft: #c1cad7;
  --slate: #146ef5;
  --slate-d: #0854c6;
  --slate-dd: #063b8c;
  --slate-tint: #edf2fa;
  --slate-tint-2: #dae5f6;
  --accent: #146ef5;
  --accent-tint: #dae5f6;
  --bg: #f7f8fa;
  --surface-2: #f7f8fa;
  --line: #dde1e7;
  --line-2: #d2d7df;
  --track: #e2e6eb;
}

/* Webflow dark */
:root[data-theme="dark"] {
  --brand: #146ef5;
  --brand-d: #0854c6;
  --brand-dd: #063b8c;
  --brand-h: #0a64ea;
  --brand-hi: #cbd8eb;
  --brand-hi2: #d4d8ed;
  --brand-soft: #c1cad7;
  --slate: #7da4de;
  --slate-d: #4369a2;
  --slate-dd: #dee4ed;
  --slate-tint: #242a33;
  --slate-tint-2: #2d3643;
  --accent: #7da4de;
  --accent-tint: #2d3643;
  --bg: #121417;
  --surface: #1a1d21;
  --surface-2: #1e2227;
  --line: #292d33;
  --line-2: #32373e;
  --track: #272a30;
}
```

#### Linear

_Calm violet-blue, product teams_

```css
/* Linear light */
:root {
  --brand: #5e6ad2;
  --brand-d: #3442b9;
  --brand-dd: #252e83;
  --brand-h: #4b58cd;
  --brand-hi: #cbcfeb;
  --brand-hi2: #d7d4ed;
  --brand-soft: #c1c3d7;
  --slate: #5e6ad2;
  --slate-d: #3442b9;
  --slate-dd: #252e83;
  --slate-tint: #f0f0f7;
  --slate-tint-2: #e0e1f0;
  --accent: #5e6ad2;
  --accent-tint: #e0e1f0;
  --bg: #f8f8fa;
  --surface-2: #f8f8fa;
  --line: #dfdfe5;
  --line-2: #d5d6dd;
  --track: #e4e5ea;
}

/* Linear dark */
:root[data-theme="dark"] {
  --brand: #5e6ad2;
  --brand-d: #3442b9;
  --brand-dd: #252e83;
  --brand-h: #4b58cd;
  --brand-hi: #cbcfeb;
  --brand-hi2: #d7d4ed;
  --brand-soft: #c1c3d7;
  --slate: #9096cb;
  --slate-d: #565c90;
  --slate-dd: #dedfed;
  --slate-tint: #242533;
  --slate-tint-2: #2d2f43;
  --accent: #9096cb;
  --accent-tint: #2d2f43;
  --bg: #121217;
  --surface: #1a1a21;
  --surface-2: #1e1f27;
  --line: #292a33;
  --line-2: #32333e;
  --track: #272830;
}
```

#### Stripe

_Blurple, payments-grade polish_

```css
/* Stripe light */
:root {
  --brand: #635bff;
  --brand-d: #1b0fff;
  --brand-dd: #0900be;
  --brand-h: #493fff;
  --brand-hi: #cdcbeb;
  --brand-hi2: #dbd4ed;
  --brand-soft: #c2c1d7;
  --slate: #635bff;
  --slate-d: #1b0fff;
  --slate-dd: #0900be;
  --slate-tint: #ededfa;
  --slate-tint-2: #dbd9f7;
  --accent: #635bff;
  --accent-tint: #dbd9f7;
  --bg: #f7f7fb;
  --surface-2: #f7f7fb;
  --line: #dddce7;
  --line-2: #d3d2e0;
  --track: #e2e2ec;
}

/* Stripe dark */
:root[data-theme="dark"] {
  --brand: #635bff;
  --brand-d: #1b0fff;
  --brand-dd: #0900be;
  --brand-h: #493fff;
  --brand-hi: #cdcbeb;
  --brand-hi2: #dbd4ed;
  --brand-soft: #c2c1d7;
  --slate: #7e78e2;
  --slate-d: #443fa6;
  --slate-dd: #dfdeed;
  --slate-tint: #242433;
  --slate-tint-2: #2e2d43;
  --accent: #7e78e2;
  --accent-tint: #2e2d43;
  --bg: #121217;
  --surface: #1a1a21;
  --surface-2: #1e1e27;
  --line: #292933;
  --line-2: #33323e;
  --track: #272730;
}
```

#### Datadog

_Purple, observability dashboards_

```css
/* Datadog light */
:root {
  --brand: #632ca6;
  --brand-d: #4d2281;
  --brand-dd: #36185b;
  --brand-h: #5b2899;
  --brand-hi: #dacbeb;
  --brand-hi2: #e5d4ed;
  --brand-soft: #cbc1d7;
  --slate: #632ca6;
  --slate-d: #4d2281;
  --slate-dd: #36185b;
  --slate-tint: #f3f0f8;
  --slate-tint-2: #e7dff1;
  --accent: #632ca6;
  --accent-tint: #e7dff1;
  --bg: #f9f8fa;
  --surface-2: #f9f8fa;
  --line: #e1dfe5;
  --line-2: #d8d5dd;
  --track: #e6e4ea;
}

/* Datadog dark */
:root[data-theme="dark"] {
  --brand: #632ca6;
  --brand-d: #4d2281;
  --brand-dd: #36185b;
  --brand-h: #5b2899;
  --brand-hi: #dacbeb;
  --brand-hi2: #e5d4ed;
  --brand-soft: #cbc1d7;
  --slate: #aa8fcc;
  --slate-d: #705591;
  --slate-dd: #e5deed;
  --slate-tint: #2b2433;
  --slate-tint-2: #372d43;
  --accent: #aa8fcc;
  --accent-tint: #372d43;
  --bg: #141217;
  --surface: #1d1a21;
  --surface-2: #221e27;
  --line: #2d2933;
  --line-2: #37323e;
  --track: #2b2730;
}
```

### Neutral & grey

#### Charcoal

_Deep, serious_

```css
/* Charcoal light */
:root {
  --brand: #2f3438;
  --brand-d: #25292c;
  --brand-dd: #1a1d1f;
  --brand-h: #2b3034;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #2f3438;
  --slate-d: #25292c;
  --slate-dd: #1a1d1f;
  --slate-tint: #f2f4f5;
  --slate-tint-2: #e4e9ec;
  --accent: #2f3438;
  --accent-tint: #e4e9ec;
  --bg: #f8f9f9;
  --surface-2: #f8f9f9;
  --line: #e0e2e3;
  --line-2: #d6d9db;
  --track: #e5e7e8;
}

/* Charcoal dark */
:root[data-theme="dark"] {
  --brand: #2f3438;
  --brand-d: #25292c;
  --brand-dd: #1a1d1f;
  --brand-h: #2b3034;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #9dafbe;
  --slate-d: #627584;
  --slate-dd: #dee6ed;
  --slate-tint: #242c33;
  --slate-tint-2: #2d3943;
  --accent: #9dafbe;
  --accent-tint: #2d3943;
  --bg: #121517;
  --surface: #1a1e21;
  --surface-2: #1e2327;
  --line: #292e33;
  --line-2: #32393e;
  --track: #272c30;
}
```

#### Mocha

_Rich, earthy_

```css
/* Mocha light */
:root {
  --brand: #5a4a42;
  --brand-d: #463a33;
  --brand-dd: #322924;
  --brand-h: #53443d;
  --brand-hi: #ebd6cb;
  --brand-hi2: #ede2d4;
  --brand-soft: #d7c8c1;
  --slate: #5a4a42;
  --slate-d: #463a33;
  --slate-dd: #322924;
  --slate-tint: #f5f3f2;
  --slate-tint-2: #ece7e4;
  --accent: #5a4a42;
  --accent-tint: #ece7e4;
  --bg: #f9f8f8;
  --surface-2: #f9f8f8;
  --line: #e3e1e0;
  --line-2: #dbd8d6;
  --track: #e8e6e5;
}

/* Mocha dark */
:root[data-theme="dark"] {
  --brand: #5a4a42;
  --brand-d: #463a33;
  --brand-dd: #322924;
  --brand-h: #53443d;
  --brand-hi: #ebd6cb;
  --brand-hi2: #ede2d4;
  --brand-soft: #d7c8c1;
  --slate: #bea89d;
  --slate-d: #846d62;
  --slate-dd: #ede3de;
  --slate-tint: #332924;
  --slate-tint-2: #43342d;
  --accent: #bea89d;
  --accent-tint: #43342d;
  --bg: #171312;
  --surface: #211c1a;
  --surface-2: #27211e;
  --line: #332c29;
  --line-2: #3e3632;
  --track: #302a27;
}
```

#### Zinc

_Cool, technical_

```css
/* Zinc light */
:root {
  --brand: #52525b;
  --brand-d: #404047;
  --brand-dd: #2d2d32;
  --brand-h: #4b4b54;
  --brand-hi: #cbcbeb;
  --brand-hi2: #dad4ed;
  --brand-soft: #c1c1d7;
  --slate: #52525b;
  --slate-d: #404047;
  --slate-dd: #2d2d32;
  --slate-tint: #f2f2f5;
  --slate-tint-2: #e4e4ec;
  --accent: #52525b;
  --accent-tint: #e4e4ec;
  --bg: #f8f8f9;
  --surface-2: #f8f8f9;
  --line: #e0e0e3;
  --line-2: #d6d6db;
  --track: #e5e5e8;
}

/* Zinc dark */
:root[data-theme="dark"] {
  --brand: #52525b;
  --brand-d: #404047;
  --brand-dd: #2d2d32;
  --brand-h: #4b4b54;
  --brand-hi: #cbcbeb;
  --brand-hi2: #dad4ed;
  --brand-soft: #c1c1d7;
  --slate: #9d9dbe;
  --slate-d: #626284;
  --slate-dd: #dedeed;
  --slate-tint: #242433;
  --slate-tint-2: #2d2d43;
  --accent: #9d9dbe;
  --accent-tint: #2d2d43;
  --bg: #121217;
  --surface: #1a1a21;
  --surface-2: #1e1e27;
  --line: #292933;
  --line-2: #32323e;
  --track: #272730;
}
```

#### Stone

_Warm, natural_

```css
/* Stone light */
:root {
  --brand: #6f675e;
  --brand-d: #575049;
  --brand-dd: #3d3934;
  --brand-h: #665f56;
  --brand-hi: #ebdccb;
  --brand-hi2: #ede7d4;
  --brand-soft: #d7cdc1;
  --slate: #6f675e;
  --slate-d: #575049;
  --slate-dd: #3d3934;
  --slate-tint: #f5f4f2;
  --slate-tint-2: #ece8e4;
  --accent: #6f675e;
  --accent-tint: #ece8e4;
  --bg: #f9f9f8;
  --surface-2: #f9f9f8;
  --line: #e3e2e0;
  --line-2: #dbd9d6;
  --track: #e8e7e5;
}

/* Stone dark */
:root[data-theme="dark"] {
  --brand: #6f675e;
  --brand-d: #575049;
  --brand-dd: #3d3934;
  --brand-h: #665f56;
  --brand-hi: #ebdccb;
  --brand-hi2: #ede7d4;
  --brand-soft: #d7cdc1;
  --slate: #beae9d;
  --slate-d: #847462;
  --slate-dd: #ede6de;
  --slate-tint: #332c24;
  --slate-tint-2: #43392d;
  --accent: #beae9d;
  --accent-tint: #43392d;
  --bg: #171512;
  --surface: #211e1a;
  --surface-2: #27231e;
  --line: #332e29;
  --line-2: #3e3832;
  --track: #302c27;
}
```

#### Cool Grey

_Calm, corporate_

```css
/* Cool Grey light */
:root {
  --brand: #5f6b7a;
  --brand-d: #4a535f;
  --brand-dd: #343b43;
  --brand-h: #576270;
  --brand-hi: #cbdaeb;
  --brand-hi2: #d4d9ed;
  --brand-soft: #c1cbd7;
  --slate: #5f6b7a;
  --slate-d: #4a535f;
  --slate-dd: #343b43;
  --slate-tint: #f2f3f5;
  --slate-tint-2: #e4e8ec;
  --accent: #5f6b7a;
  --accent-tint: #e4e8ec;
  --bg: #f8f9f9;
  --surface-2: #f8f9f9;
  --line: #e0e1e3;
  --line-2: #d6d8db;
  --track: #e5e7e8;
}

/* Cool Grey dark */
:root[data-theme="dark"] {
  --brand: #5f6b7a;
  --brand-d: #4a535f;
  --brand-dd: #343b43;
  --brand-h: #576270;
  --brand-hi: #cbdaeb;
  --brand-hi2: #d4d9ed;
  --brand-soft: #c1cbd7;
  --slate: #9dacbe;
  --slate-d: #627184;
  --slate-dd: #dee5ed;
  --slate-tint: #242a33;
  --slate-tint-2: #2d3743;
  --accent: #9dacbe;
  --accent-tint: #2d3743;
  --bg: #121417;
  --surface: #1a1d21;
  --surface-2: #1e2227;
  --line: #292d33;
  --line-2: #32373e;
  --track: #272b30;
}
```

#### Taupe

_Gentle, refined_

```css
/* Taupe light */
:root {
  --brand: #7d6b5d;
  --brand-d: #625349;
  --brand-dd: #453b33;
  --brand-h: #736256;
  --brand-hi: #ebd9cb;
  --brand-hi2: #ede5d4;
  --brand-soft: #d7cbc1;
  --slate: #7d6b5d;
  --slate-d: #625349;
  --slate-dd: #453b33;
  --slate-tint: #f5f3f2;
  --slate-tint-2: #ece8e4;
  --accent: #7d6b5d;
  --accent-tint: #ece8e4;
  --bg: #f9f9f8;
  --surface-2: #f9f9f8;
  --line: #e3e1e0;
  --line-2: #dbd8d6;
  --track: #e8e7e5;
}

/* Taupe dark */
:root[data-theme="dark"] {
  --brand: #7d6b5d;
  --brand-d: #625349;
  --brand-dd: #453b33;
  --brand-h: #736256;
  --brand-hi: #ebd9cb;
  --brand-hi2: #ede5d4;
  --brand-soft: #d7cbc1;
  --slate: #beab9d;
  --slate-d: #847162;
  --slate-dd: #ede5de;
  --slate-tint: #332a24;
  --slate-tint-2: #43372d;
  --accent: #beab9d;
  --accent-tint: #43372d;
  --bg: #171412;
  --surface: #211d1a;
  --surface-2: #27221e;
  --line: #332d29;
  --line-2: #3e3732;
  --track: #302b27;
}
```

#### Pewter

_Soft blue-grey_

```css
/* Pewter light */
:root {
  --brand: #6e7b85;
  --brand-d: #566068;
  --brand-dd: #3d4449;
  --brand-h: #65717a;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #6e7b85;
  --slate-d: #566068;
  --slate-dd: #3d4449;
  --slate-tint: #f2f4f5;
  --slate-tint-2: #e4e9ec;
  --accent: #6e7b85;
  --accent-tint: #e4e9ec;
  --bg: #f8f9f9;
  --surface-2: #f8f9f9;
  --line: #e0e2e3;
  --line-2: #d6d9db;
  --track: #e5e7e8;
}

/* Pewter dark */
:root[data-theme="dark"] {
  --brand: #6e7b85;
  --brand-d: #566068;
  --brand-dd: #3d4449;
  --brand-h: #65717a;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #9db0be;
  --slate-d: #627584;
  --slate-dd: #dee6ed;
  --slate-tint: #242c33;
  --slate-tint-2: #2d3a43;
  --accent: #9db0be;
  --accent-tint: #2d3a43;
  --bg: #121517;
  --surface: #1a1e21;
  --surface-2: #1e2327;
  --line: #292f33;
  --line-2: #32393e;
  --track: #272c30;
}
```

#### Sand

_Light, sunlit neutral_

```css
/* Sand light */
:root {
  --brand: #9a8467;
  --brand-d: #786750;
  --brand-dd: #554938;
  --brand-h: #8e795e;
  --brand-hi: #ebdecb;
  --brand-hi2: #ede8d4;
  --brand-soft: #d7cec1;
  --slate: #9a8467;
  --slate-d: #786750;
  --slate-dd: #554938;
  --slate-tint: #f5f4f2;
  --slate-tint-2: #ece9e4;
  --accent: #9a8467;
  --accent-tint: #ece9e4;
  --bg: #f9f9f8;
  --surface-2: #f9f9f8;
  --line: #e3e2e0;
  --line-2: #dbd9d6;
  --track: #e8e7e5;
}

/* Sand dark */
:root[data-theme="dark"] {
  --brand: #9a8467;
  --brand-d: #786750;
  --brand-dd: #554938;
  --brand-h: #8e795e;
  --brand-hi: #ebdecb;
  --brand-hi2: #ede8d4;
  --brand-soft: #d7cec1;
  --slate: #beb09d;
  --slate-d: #847562;
  --slate-dd: #ede7de;
  --slate-tint: #332c24;
  --slate-tint-2: #433a2d;
  --accent: #beb09d;
  --accent-tint: #433a2d;
  --bg: #171512;
  --surface: #211e1a;
  --surface-2: #27231e;
  --line: #332f29;
  --line-2: #3e3932;
  --track: #302c27;
}
```

### Light & soft

#### Peach

_Warm, welcoming coral_

```css
/* Peach light */
:root {
  --brand: #e8643f;
  --brand-d: #e44a1f;
  --brand-dd: #c33d17;
  --brand-h: #e65932;
  --brand-hi: #ebd2cb;
  --brand-hi2: #eddfd4;
  --brand-soft: #d7c6c1;
  --slate: #e8643f;
  --slate-d: #e44a1f;
  --slate-dd: #c33d17;
  --slate-tint: #fbedea;
  --slate-tint-2: #f8dbd3;
  --accent: #e8643f;
  --accent-tint: #f8dbd3;
  --bg: #f9f3f1;
  --surface-2: #f9f3f1;
  --line: #e7d9d5;
  --line-2: #e0cdc8;
  --track: #ecdeda;
}

/* Peach dark */
:root[data-theme="dark"] {
  --brand: #e8643f;
  --brand-d: #e44a1f;
  --brand-dd: #c33d17;
  --brand-h: #e65932;
  --brand-hi: #ebd2cb;
  --brand-hi2: #eddfd4;
  --brand-soft: #d7c6c1;
  --slate: #d79684;
  --slate-d: #9b5c4a;
  --slate-dd: #ede1de;
  --slate-tint: #332724;
  --slate-tint-2: #43322d;
  --accent: #d79684;
  --accent-tint: #43322d;
  --bg: #171312;
  --surface: #211b1a;
  --surface-2: #27201e;
  --line: #332b29;
  --line-2: #3e3532;
  --track: #302927;
}
```

#### Apricot

_Warm, friendly orange_

```css
/* Apricot light */
:root {
  --brand: #d9772a;
  --brand-d: #c16823;
  --brand-dd: #a3581d;
  --brand-h: #d17125;
  --brand-hi: #ebd9cb;
  --brand-hi2: #ede5d4;
  --brand-soft: #d7cbc1;
  --slate: #d9772a;
  --slate-d: #c16823;
  --slate-dd: #a3581d;
  --slate-tint: #faf1eb;
  --slate-tint-2: #f6e4d5;
  --accent: #d9772a;
  --accent-tint: #f6e4d5;
  --bg: #f9f5f2;
  --surface-2: #f9f5f2;
  --line: #e6ddd6;
  --line-2: #ded2c9;
  --track: #ebe2db;
}

/* Apricot dark */
:root[data-theme="dark"] {
  --brand: #d9772a;
  --brand-d: #c16823;
  --brand-dd: #a3581d;
  --brand-h: #d17125;
  --brand-hi: #ebd9cb;
  --brand-hi2: #ede5d4;
  --brand-soft: #d7cbc1;
  --slate: #d2a988;
  --slate-d: #976e4f;
  --slate-dd: #ede5de;
  --slate-tint: #332a24;
  --slate-tint-2: #43372d;
  --accent: #d2a988;
  --accent-tint: #43372d;
  --bg: #171412;
  --surface: #211d1a;
  --surface-2: #27221e;
  --line: #332d29;
  --line-2: #3e3732;
  --track: #302b27;
}
```

#### Linen

_Soft, natural tan_

```css
/* Linen light */
:root {
  --brand: #a08462;
  --brand-d: #8d7456;
  --brand-dd: #776248;
  --brand-h: #997d5c;
  --brand-hi: #ebddcb;
  --brand-hi2: #ede7d4;
  --brand-soft: #d7cdc1;
  --slate: #a08462;
  --slate-d: #8d7456;
  --slate-dd: #776248;
  --slate-tint: #f5f3f0;
  --slate-tint-2: #ebe6e0;
  --accent: #a08462;
  --accent-tint: #ebe6e0;
  --bg: #f7f5f4;
  --surface-2: #f7f5f4;
  --line: #e1dedb;
  --line-2: #d7d4d0;
  --track: #e6e3e0;
}

/* Linen dark */
:root[data-theme="dark"] {
  --brand: #a08462;
  --brand-d: #8d7456;
  --brand-dd: #776248;
  --brand-h: #997d5c;
  --brand-hi: #ebddcb;
  --brand-hi2: #ede7d4;
  --brand-soft: #d7cdc1;
  --slate: #beaf9d;
  --slate-d: #847462;
  --slate-dd: #ede6de;
  --slate-tint: #332c24;
  --slate-tint-2: #43392d;
  --accent: #beaf9d;
  --accent-tint: #43392d;
  --bg: #171512;
  --surface: #211e1a;
  --surface-2: #27231e;
  --line: #332e29;
  --line-2: #3e3932;
  --track: #302c27;
}
```

#### Oat

_Muted, creamy_

```css
/* Oat light */
:root {
  --brand: #8f7f66;
  --brand-d: #7e705a;
  --brand-dd: #6a5e4b;
  --brand-h: #887961;
  --brand-hi: #ebdfcb;
  --brand-hi2: #ede9d4;
  --brand-soft: #d7cec1;
  --slate: #8f7f66;
  --slate-d: #7e705a;
  --slate-dd: #6a5e4b;
  --slate-tint: #f4f3f0;
  --slate-tint-2: #eae7e1;
  --accent: #8f7f66;
  --accent-tint: #eae7e1;
  --bg: #f6f6f4;
  --surface-2: #f6f6f4;
  --line: #e0dedc;
  --line-2: #d6d4d1;
  --track: #e5e3e1;
}

/* Oat dark */
:root[data-theme="dark"] {
  --brand: #8f7f66;
  --brand-d: #7e705a;
  --brand-dd: #6a5e4b;
  --brand-h: #887961;
  --brand-hi: #ebdfcb;
  --brand-hi2: #ede9d4;
  --brand-soft: #d7cec1;
  --slate: #beb19d;
  --slate-d: #847762;
  --slate-dd: #ede7de;
  --slate-tint: #332d24;
  --slate-tint-2: #433b2d;
  --accent: #beb19d;
  --accent-tint: #433b2d;
  --bg: #171512;
  --surface: #211e1a;
  --surface-2: #27231e;
  --line: #332f29;
  --line-2: #3e3932;
  --track: #302c27;
}
```

#### Honey

_Sunny, optimistic amber_

```css
/* Honey light */
:root {
  --brand: #b9790c;
  --brand-d: #a36a0b;
  --brand-dd: #895a09;
  --brand-h: #b0730b;
  --brand-hi: #ebdfcb;
  --brand-hi2: #ede9d4;
  --brand-soft: #d7cfc1;
  --slate: #b9790c;
  --slate-d: #a36a0b;
  --slate-dd: #895a09;
  --slate-tint: #fcf5e9;
  --slate-tint-2: #faebd1;
  --accent: #b9790c;
  --accent-tint: #faebd1;
  --bg: #faf7f1;
  --surface-2: #faf7f1;
  --line: #e8e1d4;
  --line-2: #e1d7c6;
  --track: #ede6d9;
}

/* Honey dark */
:root[data-theme="dark"] {
  --brand: #b9790c;
  --brand-d: #a36a0b;
  --brand-dd: #895a09;
  --brand-h: #b0730b;
  --brand-hi: #ebdfcb;
  --brand-hi2: #ede9d4;
  --brand-soft: #d7cfc1;
  --slate: #dcba7f;
  --slate-d: #a07f45;
  --slate-dd: #ede7de;
  --slate-tint: #332d24;
  --slate-tint-2: #433b2d;
  --accent: #dcba7f;
  --accent-tint: #433b2d;
  --bg: #171512;
  --surface: #211e1a;
  --surface-2: #27241e;
  --line: #332f29;
  --line-2: #3e3a32;
  --track: #302d27;
}
```

#### Pistachio

_Fresh, gentle green_

```css
/* Pistachio light */
:root {
  --brand: #5d9a3c;
  --brand-d: #528835;
  --brand-dd: #45722c;
  --brand-h: #589239;
  --brand-hi: #d7ebcb;
  --brand-hi2: #d7edd4;
  --brand-soft: #c9d7c1;
  --slate: #5d9a3c;
  --slate-d: #528835;
  --slate-dd: #45722c;
  --slate-tint: #f1f7ed;
  --slate-tint-2: #e2f0db;
  --accent: #5d9a3c;
  --accent-tint: #e2f0db;
  --bg: #f5f8f3;
  --surface-2: #f5f8f3;
  --line: #dce3d9;
  --line-2: #d2dacd;
  --track: #e1e8de;
}

/* Pistachio dark */
:root[data-theme="dark"] {
  --brand: #5d9a3c;
  --brand-d: #528835;
  --brand-dd: #45722c;
  --brand-h: #589239;
  --brand-hi: #d7ebcb;
  --brand-hi2: #d7edd4;
  --brand-soft: #c9d7c1;
  --slate: #a6c596;
  --slate-d: #6c895c;
  --slate-dd: #e3edde;
  --slate-tint: #293324;
  --slate-tint-2: #35432d;
  --accent: #a6c596;
  --accent-tint: #35432d;
  --bg: #141712;
  --surface: #1c211a;
  --surface-2: #21271e;
  --line: #2c3329;
  --line-2: #363e32;
  --track: #2a3027;
}
```

#### Sage

_Muted, calming_

```css
/* Sage light */
:root {
  --brand: #5f9078;
  --brand-d: #547f6a;
  --brand-dd: #466b59;
  --brand-h: #5a8972;
  --brand-hi: #cbebdc;
  --brand-hi2: #d4ede6;
  --brand-soft: #c1d7cc;
  --slate: #5f9078;
  --slate-d: #547f6a;
  --slate-dd: #466b59;
  --slate-tint: #f0f4f2;
  --slate-tint-2: #e1eae6;
  --accent: #5f9078;
  --accent-tint: #e1eae6;
  --bg: #f4f6f5;
  --surface-2: #f4f6f5;
  --line: #dbe0de;
  --line-2: #d1d7d4;
  --track: #e1e5e3;
}

/* Sage dark */
:root[data-theme="dark"] {
  --brand: #5f9078;
  --brand-d: #547f6a;
  --brand-dd: #466b59;
  --brand-h: #5a8972;
  --brand-hi: #cbebdc;
  --brand-hi2: #d4ede6;
  --brand-soft: #c1d7cc;
  --slate: #9dbeae;
  --slate-d: #628473;
  --slate-dd: #deede6;
  --slate-tint: #24332c;
  --slate-tint-2: #2d4338;
  --accent: #9dbeae;
  --accent-tint: #2d4338;
  --bg: #121714;
  --surface: #1a211d;
  --surface-2: #1e2723;
  --line: #29332e;
  --line-2: #323e38;
  --track: #27302b;
}
```

#### Mint

_Soft, modern green_

```css
/* Mint light */
:root {
  --brand: #1c9f7b;
  --brand-d: #198c6c;
  --brand-dd: #15765b;
  --brand-h: #1b9775;
  --brand-hi: #cbebe3;
  --brand-hi2: #d4edec;
  --brand-soft: #c1d7d1;
  --slate: #1c9f7b;
  --slate-d: #198c6c;
  --slate-dd: #15765b;
  --slate-tint: #ebfaf6;
  --slate-tint-2: #d5f6ed;
  --accent: #1c9f7b;
  --accent-tint: #d5f6ed;
  --bg: #f2f9f7;
  --surface-2: #f2f9f7;
  --line: #d6e6e2;
  --line-2: #c9ded8;
  --track: #dbebe6;
}

/* Mint dark */
:root[data-theme="dark"] {
  --brand: #1c9f7b;
  --brand-d: #198c6c;
  --brand-dd: #15765b;
  --brand-h: #1b9775;
  --brand-hi: #cbebe3;
  --brand-hi2: #d4edec;
  --brand-soft: #c1d7d1;
  --slate: #88d3be;
  --slate-d: #4f9783;
  --slate-dd: #deede9;
  --slate-tint: #24332f;
  --slate-tint-2: #2d433d;
  --accent: #88d3be;
  --accent-tint: #2d433d;
  --bg: #121716;
  --surface: #1a211f;
  --surface-2: #1e2724;
  --line: #293330;
  --line-2: #323e3b;
  --track: #27302d;
}
```

#### Aqua

_Fresh and clear_

```css
/* Aqua light */
:root {
  --brand: #1a9fbb;
  --brand-d: #178ca5;
  --brand-dd: #13768a;
  --brand-h: #1997b2;
  --brand-hi: #cbe6eb;
  --brand-hi2: #d4e3ed;
  --brand-soft: #c1d3d7;
  --slate: #1a9fbb;
  --slate-d: #178ca5;
  --slate-dd: #13768a;
  --slate-tint: #eaf8fa;
  --slate-tint-2: #d4f1f7;
  --accent: #1a9fbb;
  --accent-tint: #d4f1f7;
  --bg: #f1f8f9;
  --surface-2: #f1f8f9;
  --line: #d5e4e7;
  --line-2: #c8dbdf;
  --track: #dae8eb;
}

/* Aqua dark */
:root[data-theme="dark"] {
  --brand: #1a9fbb;
  --brand-d: #178ca5;
  --brand-dd: #13768a;
  --brand-h: #1997b2;
  --brand-hi: #cbe6eb;
  --brand-hi2: #d4e3ed;
  --brand-soft: #c1d3d7;
  --slate: #85c8d5;
  --slate-d: #4c8c9a;
  --slate-dd: #deeaed;
  --slate-tint: #243033;
  --slate-tint-2: #2d3f43;
  --accent: #85c8d5;
  --accent-tint: #2d3f43;
  --bg: #121617;
  --surface: #1a2021;
  --surface-2: #1e2527;
  --line: #293133;
  --line-2: #323c3e;
  --track: #272e30;
}
```

#### Ice

_Crisp, cool blue_

```css
/* Ice light */
:root {
  --brand: #3d9fc4;
  --brand-d: #358cad;
  --brand-dd: #2c7692;
  --brand-h: #3998bb;
  --brand-hi: #cbe3eb;
  --brand-hi2: #d4e0ed;
  --brand-soft: #c1d1d7;
  --slate: #3d9fc4;
  --slate-d: #358cad;
  --slate-dd: #2c7692;
  --slate-tint: #ecf5f8;
  --slate-tint-2: #d9ebf2;
  --accent: #3d9fc4;
  --accent-tint: #d9ebf2;
  --bg: #f2f7f8;
  --surface-2: #f2f7f8;
  --line: #d8e1e4;
  --line-2: #ccd7dc;
  --track: #dde6e9;
}

/* Ice dark */
:root[data-theme="dark"] {
  --brand: #3d9fc4;
  --brand-d: #358cad;
  --brand-dd: #2c7692;
  --brand-h: #3998bb;
  --brand-hi: #cbe3eb;
  --brand-hi2: #d4e0ed;
  --brand-soft: #c1d1d7;
  --slate: #91baca;
  --slate-d: #577f8e;
  --slate-dd: #dee9ed;
  --slate-tint: #242f33;
  --slate-tint-2: #2d3d43;
  --accent: #91baca;
  --accent-tint: #2d3d43;
  --bg: #121617;
  --surface: #1a1f21;
  --surface-2: #1e2427;
  --line: #293033;
  --line-2: #323b3e;
  --track: #272e30;
}
```

#### Sky Light

_Airy, open blue_

```css
/* Sky Light light */
:root {
  --brand: #3b94dc;
  --brand-d: #2584d0;
  --brand-dd: #1f6faf;
  --brand-h: #2f8eda;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #3b94dc;
  --slate-d: #2584d0;
  --slate-dd: #1f6faf;
  --slate-tint: #ebf3fa;
  --slate-tint-2: #d6e7f5;
  --accent: #3b94dc;
  --accent-tint: #d6e7f5;
  --bg: #f2f6f9;
  --surface-2: #f2f6f9;
  --line: #d6dfe6;
  --line-2: #c9d5de;
  --track: #dbe4eb;
}

/* Sky Light dark */
:root[data-theme="dark"] {
  --brand: #3b94dc;
  --brand-d: #2584d0;
  --brand-dd: #1f6faf;
  --brand-h: #2f8eda;
  --brand-hi: #cbddeb;
  --brand-hi2: #d4dced;
  --brand-soft: #c1cdd7;
  --slate: #88b1d2;
  --slate-d: #4f7797;
  --slate-dd: #dee6ed;
  --slate-tint: #242c33;
  --slate-tint-2: #2d3943;
  --accent: #88b1d2;
  --accent-tint: #2d3943;
  --bg: #121517;
  --surface: #1a1e21;
  --surface-2: #1e2327;
  --line: #292e33;
  --line-2: #32393e;
  --track: #272c30;
}
```

#### Pearl

_Quiet blue-grey_

```css
/* Pearl light */
:root {
  --brand: #7a8aa0;
  --brand-d: #677991;
  --brand-dd: #57667a;
  --brand-h: #72839a;
  --brand-hi: #cbd9eb;
  --brand-hi2: #d4d9ed;
  --brand-soft: #c1cad7;
  --slate: #7a8aa0;
  --slate-d: #677991;
  --slate-dd: #57667a;
  --slate-tint: #f0f2f4;
  --slate-tint-2: #e1e5ea;
  --accent: #7a8aa0;
  --accent-tint: #e1e5ea;
  --bg: #f4f5f6;
  --surface-2: #f4f5f6;
  --line: #dcdee0;
  --line-2: #d1d3d6;
  --track: #e1e3e5;
}

/* Pearl dark */
:root[data-theme="dark"] {
  --brand: #7a8aa0;
  --brand-d: #677991;
  --brand-dd: #57667a;
  --brand-h: #72839a;
  --brand-hi: #cbd9eb;
  --brand-hi2: #d4d9ed;
  --brand-soft: #c1cad7;
  --slate: #9dabbe;
  --slate-d: #627084;
  --slate-dd: #dee4ed;
  --slate-tint: #242a33;
  --slate-tint-2: #2d3643;
  --accent: #9dabbe;
  --accent-tint: #2d3643;
  --bg: #121417;
  --surface: #1a1d21;
  --surface-2: #1e2227;
  --line: #292d33;
  --line-2: #32373e;
  --track: #272b30;
}
```

#### Periwinkle

_Light blue-violet_

```css
/* Periwinkle light */
:root {
  --brand: #6a85ee;
  --brand-d: #4567ea;
  --brand-dd: #1a43e4;
  --brand-h: #5b78ec;
  --brand-hi: #cbd2eb;
  --brand-hi2: #d5d4ed;
  --brand-soft: #c1c5d7;
  --slate: #6a85ee;
  --slate-d: #4567ea;
  --slate-dd: #1a43e4;
  --slate-tint: #eaedfb;
  --slate-tint-2: #d3dbf8;
  --accent: #6a85ee;
  --accent-tint: #d3dbf8;
  --bg: #f1f3fa;
  --surface-2: #f1f3fa;
  --line: #d5d8e7;
  --line-2: #c8cde0;
  --track: #dadeec;
}

/* Periwinkle dark */
:root[data-theme="dark"] {
  --brand: #6a85ee;
  --brand-d: #4567ea;
  --brand-dd: #1a43e4;
  --brand-h: #5b78ec;
  --brand-hi: #cbd2eb;
  --brand-hi2: #d5d4ed;
  --brand-soft: #c1c5d7;
  --slate: #8394d8;
  --slate-d: #4a5a9c;
  --slate-dd: #dee1ed;
  --slate-tint: #242733;
  --slate-tint-2: #2d3143;
  --accent: #8394d8;
  --accent-tint: #2d3143;
  --bg: #121317;
  --surface: #1a1b21;
  --surface-2: #1e2027;
  --line: #292b33;
  --line-2: #32343e;
  --track: #272930;
}
```

#### Lavender

_Gentle, creative_

```css
/* Lavender light */
:root {
  --brand: #8a73e6;
  --brand-d: #6d50e0;
  --brand-dd: #4a27d8;
  --brand-h: #7e64e3;
  --brand-hi: #d2cbeb;
  --brand-hi2: #dfd4ed;
  --brand-soft: #c5c1d7;
  --slate: #8a73e6;
  --slate-d: #6d50e0;
  --slate-dd: #4a27d8;
  --slate-tint: #eeebfa;
  --slate-tint-2: #dcd6f5;
  --accent: #8a73e6;
  --accent-tint: #dcd6f5;
  --bg: #f3f2f9;
  --surface-2: #f3f2f9;
  --line: #d9d6e6;
  --line-2: #cdc9de;
  --track: #dedbeb;
}

/* Lavender dark */
:root[data-theme="dark"] {
  --brand: #8a73e6;
  --brand-d: #6d50e0;
  --brand-dd: #4a27d8;
  --brand-h: #7e64e3;
  --brand-hi: #d2cbeb;
  --brand-hi2: #dfd4ed;
  --brand-soft: #c5c1d7;
  --slate: #9788d2;
  --slate-d: #5d4f97;
  --slate-dd: #e1deed;
  --slate-tint: #272433;
  --slate-tint-2: #312d43;
  --accent: #9788d2;
  --accent-tint: #312d43;
  --bg: #131217;
  --surface: #1b1a21;
  --surface-2: #201e27;
  --line: #2b2933;
  --line-2: #34323e;
  --track: #282730;
}
```

#### Lilac

_Soft, creative violet_

```css
/* Lilac light */
:root {
  --brand: #8e6fd0;
  --brand-d: #7752c7;
  --brand-dd: #603ab2;
  --brand-h: #8563cc;
  --brand-hi: #d6cbeb;
  --brand-hi2: #e2d4ed;
  --brand-soft: #c8c1d7;
  --slate: #8e6fd0;
  --slate-d: #7752c7;
  --slate-dd: #603ab2;
  --slate-tint: #f0edf8;
  --slate-tint-2: #e1daf1;
  --accent: #8e6fd0;
  --accent-tint: #e1daf1;
  --bg: #f4f3f8;
  --surface-2: #f4f3f8;
  --line: #dcd8e4;
  --line-2: #d1ccdb;
  --track: #e1dde9;
}

/* Lilac dark */
:root[data-theme="dark"] {
  --brand: #8e6fd0;
  --brand-d: #7752c7;
  --brand-dd: #603ab2;
  --brand-h: #8563cc;
  --brand-hi: #d6cbeb;
  --brand-hi2: #e2d4ed;
  --brand-soft: #c8c1d7;
  --slate: #a492c8;
  --slate-d: #69598d;
  --slate-dd: #e3deed;
  --slate-tint: #292433;
  --slate-tint-2: #342d43;
  --accent: #a492c8;
  --accent-tint: #342d43;
  --bg: #131217;
  --surface: #1c1a21;
  --surface-2: #211e27;
  --line: #2c2933;
  --line-2: #36323e;
  --track: #2a2730;
}
```

#### Blush

_Soft, friendly pink_

```css
/* Blush light */
:root {
  --brand: #e05a85;
  --brand-d: #da3a6e;
  --brand-dd: #c42558;
  --brand-h: #de4d7b;
  --brand-hi: #ebcbd6;
  --brand-hi2: #edd4d6;
  --brand-soft: #d7c1c8;
  --slate: #e05a85;
  --slate-d: #da3a6e;
  --slate-dd: #c42558;
  --slate-tint: #faebf0;
  --slate-tint-2: #f5d6e0;
  --accent: #e05a85;
  --accent-tint: #f5d6e0;
  --bg: #f9f2f4;
  --surface-2: #f9f2f4;
  --line: #e6d6db;
  --line-2: #dec9d0;
  --track: #ebdbe0;
}

/* Blush dark */
:root[data-theme="dark"] {
  --brand: #e05a85;
  --brand-d: #da3a6e;
  --brand-dd: #c42558;
  --brand-h: #de4d7b;
  --brand-hi: #ebcbd6;
  --brand-hi2: #edd4d6;
  --brand-soft: #d7c1c8;
  --slate: #d289a0;
  --slate-d: #964f66;
  --slate-dd: #eddee3;
  --slate-tint: #332429;
  --slate-tint-2: #432d34;
  --accent: #d289a0;
  --accent-tint: #432d34;
  --bg: #171213;
  --surface: #211a1c;
  --surface-2: #271e21;
  --line: #33292c;
  --line-2: #3e3236;
  --track: #30272a;
}
```

#### Rosewater

_Delicate rose_

```css
/* Rosewater light */
:root {
  --brand: #cc6177;
  --brand-d: #c3465f;
  --brand-dd: #a8364e;
  --brand-h: #c8566d;
  --brand-hi: #ebcbd2;
  --brand-hi2: #edd5d4;
  --brand-soft: #d7c1c5;
  --slate: #cc6177;
  --slate-d: #c3465f;
  --slate-dd: #a8364e;
  --slate-tint: #f8edef;
  --slate-tint-2: #f1dadf;
  --accent: #cc6177;
  --accent-tint: #f1dadf;
  --bg: #f8f3f4;
  --surface-2: #f8f3f4;
  --line: #e4d8da;
  --line-2: #dbcccf;
  --track: #e9dde0;
}

/* Rosewater dark */
:root[data-theme="dark"] {
  --brand: #cc6177;
  --brand-d: #c3465f;
  --brand-dd: #a8364e;
  --brand-h: #c8566d;
  --brand-hi: #ebcbd2;
  --brand-hi2: #edd5d4;
  --brand-soft: #d7c1c5;
  --slate: #c9929d;
  --slate-d: #8d5863;
  --slate-dd: #eddee1;
  --slate-tint: #332427;
  --slate-tint-2: #432d31;
  --accent: #c9929d;
  --accent-tint: #432d31;
  --bg: #171213;
  --surface: #211a1b;
  --surface-2: #271e20;
  --line: #33292b;
  --line-2: #3e3234;
  --track: #302729;
}
```

