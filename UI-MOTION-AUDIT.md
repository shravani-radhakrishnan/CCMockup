# UI & Motion Audit — Cloud Club mockups

Scope: `index.html` (onboarding), `client-portal.html`, `consultant-portal.html`.
Stack: standalone HTML, vanilla JS, no framework, no dependencies. No animation library was added; everything is CSS + a small DOM-morph helper.

## 1. Audit: what felt abrupt or choppy
| # | Problem | Where | Fix |
|---|---|---|---|
| 1 | `transition: .2s` shorthands animate *all* properties with default `ease` | ~100 rules, all files | Explicit property lists + one `--ease-out` curve (forced globally) |
| 2 | `up` keyframe wiped `translateX(-50%)` → toast / selection bar jumped sideways when animation ended | `.toast`, `.selbar` | Dedicated `toastIn` / `dockIn` keyframes |
| 3 | Bouncy `pop` (scale 0.7→1.05→1) on chips, popovers, checks | all | Subtle scale .96→1, no overshoot |
| 4 | Onboarding rebuilt the whole step/sidebar/ring with `innerHTML` on every change → no hover/selected/progress transitions | `index.html` `render()` | Ported the portals' DOM morph; fresh render only on step change |
| 5 | Dialogs, popovers, toasts disappeared instantly on close | portals | `_leave()` in the morph keeps an inert, id-free copy for an exit animation, then removes it |
| 6 | Step change always slid the same direction | onboarding | Forward slides from right, Back from left |
| 7 | Page switch had no entrance | portals | `.page[data-f]` opacity fade (opacity only — a transform would re-parent `position:fixed` children) |
| 8 | Every table row animated on every view | `tbody tr` | Removed |
| 9 | Heavy gradients/shadows/20px radii read as consumer UI | `.btn.p`, `.cta`, `.mbox`, `--shadow`, `--r` | Flatter, quieter tokens |
| 10 | No loading / validation feedback pattern | buttons, fields | `.btn.loading` / `[aria-busy]` spinner; error text eases in |
| 11 | Hero buttons overflowed at 390px (consultant) | `.hero2 .acts` | `flex-wrap` |

## 2. Files changed
- `client-portal.html`, `consultant-portal.html`: "MOTION SYSTEM" block at end of `<style>`; `_leave()` + keyed-leaving logic in the morph helper.
- `index.html`: lighter motion block; morph helper; `render(transition, dir)`; `go()` passes direction.
- No backend, routes, data model, selectors or validation were changed.

## 3. Design tokens / utilities
`--ease-out`, `--ease-io`, `--dur-1/2/3`, `--lift`; keyframes `up pop slideL slideR pageIn modalIn toastIn dockIn railIn errIn fadeOut modalOut popOut toastOut dockOut enter enterBack ringRipple`; classes `.leaving`, `.loading`.
Reduced motion: durations collapse to ~0 and smooth-scroll is disabled.

## 4. Validation (headless Chrome)
- No JS errors loading or navigating every sidebar view, collapse/expand, New Job Posting.
- Onboarding: morph output is byte-identical to a fresh render on all 12 screens (data/inputs preserved).
- Popover/modal: open → close → 9 rapid toggles leaves exactly the expected nodes; 0 `.leaving` nodes and 0 duplicate ids afterwards.
- Overflow check at 390px / 820px: no horizontal overflow except decorative hero orbs (clipped).

## 5. Limitations
- Motion *feel* could not be judged headlessly — review in a real browser.
- Sidebar collapse still animates width (labels hide instantly on collapse; they fade in on expand).
- Mockups are not a framework app: if these move into React/Vue, port the tokens and use the framework's enter/exit mechanism instead of `_leave()`.
- No lint/type-check/test suite exists in this repo.
