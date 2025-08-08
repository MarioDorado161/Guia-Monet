import { __esmMin as e, __export as t } from "./rolldown-runtime.C9Kc6TlB.mjs";
import {
  B as n,
  Ga as r,
  X as i,
  Y as a,
  Z as o,
  ae as s,
  d as c,
  init_client as l,
  init_jsx_runtime as u,
  init_npm_react_18_2 as d,
  init_npm_react_dom_18_2 as f,
  init_ssg_sandbox_shims as p,
  navigator as m,
  p as h,
  pe as g,
  r as _,
  re as v,
  se as y,
  te as b,
  u as x,
  ue as ee,
  window as S,
  x as C,
  ye as te,
} from "./react.OhegqizP.mjs";
import {
  LayoutGroup as ne,
  MotionConfigContext as w,
  init_framer_motion_5EXT2AMG as T,
  motion as E,
} from "./motion.CTL6yPek.mjs";
import {
  ComponentViewportProvider as D,
  Container as re,
  ControlType as O,
  ErrorPlaceholder as ie,
  GeneratedComponentContext as ae,
  GracefullyDegradingErrorBoundary as k,
  Image2 as oe,
  LibraryFeaturesProvider as se,
  Link as ce,
  PageEffectsProvider as le,
  PageRoot as ue,
  PropertyOverrides2 as de,
  RenderTarget as fe,
  ResolveLinks as A,
  RichText as j,
  SVG as M,
  SmartComponentScopedContainer as N,
  addFonts as pe,
  addPropertyControls as me,
  cx as P,
  getFonts as he,
  getLoadingLazyAtYPosition as F,
  inferInitialRouteFromPath as ge,
  init_framer_4GECUXCI as I,
  installFlexboxGapWorkaroundIfNeeded as _e,
  lazy as L,
  markHydrationStart as ve,
  patchRoutesForABTesting as ye,
  removeHiddenBreakpointLayersV2 as be,
  turnOffReactEventHandling as xe,
  useActiveVariantCallback as Se,
  useComponentViewport as Ce,
  useCurrentRoute as we,
  useCustomCursors as Te,
  useHydratedBreakpointVariants as Ee,
  useIsOnFramerCanvas as De,
  useLocaleInfo as R,
  useRouter as Oe,
  useVariantState as ke,
  withCSS as Ae,
  withCodeBoundaryForOverrides as z,
  withMappedReactProps as B,
  withPerformanceMarks as je,
  yieldToMain as Me,
} from "./framer.C3w4cjYZ.mjs";
import { CookieBanner as Ne, init_Cookies as Pe } from "./Cookies.DzZTrjCC.mjs";
import {
  init_Amplitude as Fe,
  trackInAmplitude as V,
} from "./shared.BCC929G4.mjs";
var H = {};
t(H, { __FramerMetadata__: () => qe, default: () => W });
function Ie(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  U,
  W,
  qe,
  Je = e(() => {
    u(),
      I(),
      T(),
      d(),
      (Le = { KEP_8ISOA: { hover: !0 } }),
      (Re = `framer-pUrlg`),
      (ze = { KEP_8ISOA: `framer-v-zuj1ak` }),
      (Be = { duration: 0, type: `tween` }),
      (Ve = ({ value: e, children: t }) => {
        let n = v(w),
          r = e ?? n.transition,
          i = y(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (He = E.create(C)),
      (Ue = ({
        amplitudeFrom: e,
        amplitudeLabel: t,
        amplitudeName: n,
        amplitudeTrackingTrigger: r,
        height: i,
        id: a,
        link: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        LUKED0nUd: e ?? l.LUKED0nUd,
        ODP5_uJNT: t ?? l.ODP5_uJNT,
        pTfAhPQyo: s ?? l.pTfAhPQyo ?? `Title`,
        utKWDiXhM: n ?? l.utKWDiXhM,
        X0sEbNfLK: o ?? l.X0sEbNfLK,
        xPZlaG4dF: r ?? l.xPZlaG4dF,
      })),
      (We = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Ge = a(function (e, t) {
        let n = g(null),
          r = t ?? n,
          i = s(),
          { activeLocale: a, setLocale: o } = R(),
          c = Ce(),
          {
            style: l,
            className: u,
            layoutId: d,
            variant: f,
            pTfAhPQyo: p,
            X0sEbNfLK: m,
            utKWDiXhM: _,
            ODP5_uJNT: v,
            LUKED0nUd: y,
            xPZlaG4dF: b,
            ...ee
          } = Ue(e),
          {
            baseVariant: S,
            classNames: te,
            clearLoadingGesture: w,
            gestureHandlers: T,
            gestureVariant: D,
            isLoading: re,
            setGestureState: O,
            setVariant: ie,
            variants: ae,
          } = ke({
            defaultVariant: `KEP_8ISOA`,
            enabledGestures: Le,
            ref: r,
            variant: f,
            variantClassNames: ze,
          }),
          k = We(e, ae),
          { activeVariantCallback: oe, delay: se } = Se(S),
          le = oe(async (...e) => {
            if ((O({ isPressed: !0 }), b)) {
              let t = await b(...e);
              if (t === !1) return !1;
            }
          }),
          ue = [],
          de = P(Re, ...ue);
        return h(ne, {
          id: d ?? i,
          children: h(He, {
            animate: ae,
            initial: !1,
            children: h(Ve, {
              value: Be,
              children: h(ce, {
                href: m,
                motionChild: !0,
                nodeId: `KEP_8ISOA`,
                scopeId: `Cs3lNYIlY`,
                children: x(E.a, {
                  ...ee,
                  ...T,
                  className: `${P(de, `framer-zuj1ak`, u, te)} framer-1psiwqa`,
                  "data-framer-name": `default`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `KEP_8ISOA`,
                  onTapStart: le,
                  ref: r,
                  style: { ...l },
                  ...Ie(
                    { "KEP_8ISOA-hover": { "data-framer-name": void 0 } },
                    S,
                    D
                  ),
                  children: [
                    h(E.div, {
                      className: `framer-1mutl74`,
                      "data-border": !0,
                      "data-framer-name": `Text wrapper`,
                      layoutDependency: k,
                      layoutId: `gJuIMV2Wt`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(196, 198, 204, 0)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      variants: {
                        "KEP_8ISOA-hover": {
                          "--border-color": `var(--token-7b2454e0-881c-4d72-8c0e-667517be8160, rgb(196, 198, 204))`,
                        },
                      },
                      children: h(j, {
                        __fromCanvasComponent: !0,
                        children: h(C, {
                          children: h(E.p, {
                            style: {
                              "--font-selector": `Q1VTVE9NO0FCQyBGYXZvcml0IFJlZ3VsYXI=`,
                              "--framer-font-family": `"ABC Favorit Regular", "ABC Favorit Regular Placeholder", sans-serif`,
                              "--framer-font-size": `14px`,
                              "--framer-line-height": `150%`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-5e9ed8bf-e4e7-4c6f-8fd1-ee56b519c36b, rgb(101, 105, 115)))`,
                            },
                            children: `Title`,
                          }),
                        }),
                        className: `framer-1n6j8xp`,
                        "data-framer-name": `GitBook product docs`,
                        fonts: [`CUSTOM;ABC Favorit Regular`],
                        layoutDependency: k,
                        layoutId: `r3z9yFnnN`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-5e9ed8bf-e4e7-4c6f-8fd1-ee56b519c36b, rgb(101, 105, 115))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: p,
                        variants: {
                          "KEP_8ISOA-hover": {
                            "--extracted-r6o4lv": `var(--token-52f119b3-c695-48cb-b353-9260c7d083b0, rgb(38, 41, 48))`,
                          },
                        },
                        verticalAlignment: `center`,
                        withExternalLayout: !0,
                        ...Ie(
                          {
                            "KEP_8ISOA-hover": {
                              children: h(C, {
                                children: h(E.p, {
                                  style: {
                                    "--font-selector": `Q1VTVE9NO0FCQyBGYXZvcml0IFJlZ3VsYXI=`,
                                    "--framer-font-family": `"ABC Favorit Regular", "ABC Favorit Regular Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-line-height": `150%`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52f119b3-c695-48cb-b353-9260c7d083b0, rgb(38, 41, 48)))`,
                                  },
                                  children: `Title`,
                                }),
                              }),
                            },
                          },
                          S,
                          D
                        ),
                      }),
                    }),
                    x(E.div, {
                      className: `framer-rxj3pj`,
                      "data-framer-name": `Amplitude tracking`,
                      layoutDependency: k,
                      layoutId: `JZo5AfTKK`,
                      children: [
                        h(j, {
                          __fromCanvasComponent: !0,
                          children: h(C, {
                            children: h(E.p, {
                              children: h(E.br, {
                                className: `trailing-break`,
                              }),
                            }),
                          }),
                          className: `framer-kubu0v`,
                          "data-framer-name": `Amplitude From`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `eXJ3ZDyjp`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        h(j, {
                          __fromCanvasComponent: !0,
                          children: h(C, {
                            children: h(E.p, {
                              children: h(E.br, {
                                className: `trailing-break`,
                              }),
                            }),
                          }),
                          className: `framer-4s87hy`,
                          "data-framer-name": `Amplitude Label`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `fkEfBpigF`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        h(j, {
                          __fromCanvasComponent: !0,
                          children: h(C, {
                            children: h(E.p, {
                              children: h(E.br, {
                                className: `trailing-break`,
                              }),
                            }),
                          }),
                          className: `framer-t8uu99`,
                          "data-framer-name": `Amplitude Name`,
                          fonts: [`Inter`],
                          layoutDependency: k,
                          layoutId: `ow0PXCYeu`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Ke = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-pUrlg.framer-1psiwqa, .framer-pUrlg .framer-1psiwqa { display: block; }`,
        `.framer-pUrlg.framer-zuj1ak { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 6px 0px 6px 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-pUrlg .framer-1mutl74 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-pUrlg .framer-1n6j8xp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-pUrlg .framer-rxj3pj { flex: none; height: 1px; left: calc(50.00000000000002% - 1px / 2); overflow: visible; position: absolute; top: -100px; width: 1px; z-index: 1; }`,
        `.framer-pUrlg .framer-kubu0v, .framer-pUrlg .framer-4s87hy, .framer-pUrlg .framer-t8uu99 { flex: none; height: 11px; left: 13px; position: absolute; top: 7px; white-space: pre-wrap; width: 98px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-pUrlg[data-border="true"]::after, .framer-pUrlg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (U = Ae(Ge, Ke, `framer-pUrlg`)),
      (W = U),
      (U.displayName = `2025/Nav item`),
      (U.defaultProps = { height: 33, width: 29 }),
      me(U, {
        pTfAhPQyo: {
          defaultValue: `Title`,
          displayTextArea: !1,
          title: `Title`,
          type: O.String,
        },
        X0sEbNfLK: { title: `Link`, type: O.Link },
        utKWDiXhM: {
          defaultValue: ``,
          displayTextArea: !1,
          title: `Amplitude Name`,
          type: O.String,
        },
        ODP5_uJNT: {
          defaultValue: ``,
          displayTextArea: !1,
          title: `Amplitude Label`,
          type: O.String,
        },
        LUKED0nUd: {
          defaultValue: ``,
          displayTextArea: !1,
          title: `Amplitude From`,
          type: O.String,
        },
        xPZlaG4dF: {
          title: `Amplitude Tracking Trigger`,
          type: O.EventHandler,
        },
      }),
      pe(
        U,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `ABC Favorit Regular`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/YWayyt1Iml0BqgKTFrny98dORY.otf`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (qe = {
        exports: {
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `reactComponent`,
            name: `FramerCs3lNYIlY`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerIntrinsicWidth: `29`,
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `33`,
              framerComponentViewportWidth: `true`,
              framerVariables: `{"pTfAhPQyo":"title","X0sEbNfLK":"link","utKWDiXhM":"amplitudeName","ODP5_uJNT":"amplitudeLabel","LUKED0nUd":"amplitudeFrom","xPZlaG4dF":"amplitudeTrackingTrigger"}`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"UhdM9ezXQ":{"layout":["auto","auto"]}}}`,
              framerDisplayContentsDiv: `false`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
function G(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  K,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  q,
  Pt,
  Ft = e(() => {
    u(),
      I(),
      T(),
      d(),
      Pe(),
      Fe(),
      Je(),
      (Ye = he(W)),
      (Xe = B(
        z(W, { nodeId: `s1te9tb_r`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (Ze = B(
        z(W, { nodeId: `NGBcCtmmH`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (Qe = B(
        z(W, { nodeId: `spTsAmZ1j`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      ($e = B(
        z(W, { nodeId: `YDIiXIGPU`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (et = B(
        z(W, { nodeId: `p9MX3qB48`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (tt = B(
        z(W, { nodeId: `deT6L01Se`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (nt = B(
        z(W, { nodeId: `LxMEw_sZx`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (rt = B(
        z(W, { nodeId: `JKJgvU36U`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (it = B(
        z(W, { nodeId: `HSA02qEJV`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (at = B(
        z(W, { nodeId: `z_Zzmex3T`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (ot = B(
        z(W, { nodeId: `y9wDWzc5S`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (st = B(
        z(W, { nodeId: `mR8Znt6Xh`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (ct = B(
        z(W, { nodeId: `z7AWE8phR`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (lt = B(
        z(W, { nodeId: `bb4sjgvtl`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (ut = B(
        z(W, { nodeId: `rrj5_ZkQ0`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (dt = B(
        z(W, { nodeId: `K4n20pjqy`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (ft = B(
        z(W, { nodeId: `ZtoYwLUgv`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (pt = B(
        z(W, { nodeId: `zRHx0Uxd9`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (mt = B(
        z(W, { nodeId: `kt0R9ggpo`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (ht = B(
        z(W, { nodeId: `Jw6kfnQD_`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (gt = B(
        z(W, { nodeId: `bQDY5o0t6`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (_t = B(
        z(W, { nodeId: `KHXSIRFKY`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (vt = B(
        z(W, { nodeId: `kzOG1c1kF`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (yt = B(
        z(W, { nodeId: `rHt90s88P`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (bt = B(
        z(W, { nodeId: `XTBoPsM3d`, override: V, scopeId: `F3xvXn3dp` }),
        H
      )),
      (xt = he(Ne)),
      (St = [`VLH_EfjEd`, `Zt2kSiUz7`, `gJXMtPbfA`]),
      (Ct = `framer-qalEx`),
      (wt = {
        gJXMtPbfA: `framer-v-17n4ldq`,
        VLH_EfjEd: `framer-v-14hfzvl`,
        Zt2kSiUz7: `framer-v-mnkd8i`,
      }),
      (Tt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Et = { bounce: 0.25, delay: 0, duration: 0.45, type: `spring` }),
      (K = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        transition: Et,
      }),
      (Dt = ({ value: e, children: t }) => {
        let n = v(w),
          r = e ?? n.transition,
          i = y(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(w.Provider, { value: i, children: t });
      }),
      (Ot = E.create(C)),
      (kt = { Desktop: `VLH_EfjEd`, Phone: `gJXMtPbfA`, Tablet: `Zt2kSiUz7` }),
      (At = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: kt[r.variant] ?? r.variant ?? `VLH_EfjEd`,
      })),
      (jt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Mt = a(function (e, t) {
        let n = g(null),
          r = t ?? n,
          i = s(),
          { activeLocale: a, setLocale: o } = R(),
          c = Ce(),
          { style: l, className: u, layoutId: d, variant: f, ...p } = At(e),
          {
            baseVariant: m,
            classNames: _,
            clearLoadingGesture: v,
            gestureHandlers: y,
            gestureVariant: b,
            isLoading: ee,
            setGestureState: S,
            setVariant: te,
            variants: w,
          } = ke({
            cycleOrder: St,
            defaultVariant: `VLH_EfjEd`,
            ref: r,
            variant: f,
            variantClassNames: wt,
          }),
          T = jt(e, w),
          re = [],
          O = P(Ct, ...re),
          ie = Oe();
        return h(ne, {
          id: d ?? i,
          children: h(Ot, {
            animate: w,
            initial: !1,
            children: h(Dt, {
              value: Tt,
              children: x(E.div, {
                ...p,
                ...y,
                className: P(O, `framer-14hfzvl`, u, _),
                "data-border": !0,
                "data-framer-name": `Desktop`,
                layoutDependency: T,
                layoutId: `VLH_EfjEd`,
                ref: r,
                style: {
                  "--border-bottom-width": `0px`,
                  "--border-color": `rgb(234, 235, 238)`,
                  "--border-left-width": `0px`,
                  "--border-right-width": `0px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `var(--token-cf5b9a94-340d-4e06-9e57-e779166bd151, rgb(255, 255, 255))`,
                  ...l,
                },
                ...G(
                  {
                    gJXMtPbfA: { "data-framer-name": `Phone` },
                    Zt2kSiUz7: { "data-framer-name": `Tablet` },
                  },
                  m,
                  b
                ),
                children: [
                  x(E.div, {
                    className: `framer-1f8pwx8`,
                    "data-framer-name": `Frame 33`,
                    layoutDependency: T,
                    layoutId: `HdKAam3S3`,
                    children: [
                      h(ce, {
                        href: { webPageId: `G9z51JAdl` },
                        motionChild: !0,
                        nodeId: `qcVhKzCcI`,
                        openInNewTab: !1,
                        scopeId: `F3xvXn3dp`,
                        children: h(E.a, {
                          className: `framer-1sniu86 framer-9se9vx`,
                          "data-framer-name": `GitBook Logo`,
                          layoutDependency: T,
                          layoutId: `qcVhKzCcI`,
                          children: h(M, {
                            className: `framer-bgeyb9`,
                            "data-framer-name": `Logo`,
                            layout: `position`,
                            layoutDependency: T,
                            layoutId: `wbmCfcZkd`,
                            opacity: 1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 149 30"><path d="M 13.41 16.033 C 14.97 16.935 15.75 17.385 16.607 17.386 C 17.464 17.386 18.244 16.937 19.805 16.039 L 29.737 10.323 C 30.186 10.065 30.463 9.586 30.463 9.068 C 30.463 8.55 30.186 8.071 29.737 7.813 L 19.802 2.094 C 18.242 1.196 17.462 0.748 16.607 0.748 C 15.751 0.748 14.971 1.198 13.413 2.097 L 4.875 7.018 C 4.806 7.058 4.771 7.078 4.739 7.098 C 1.826 8.808 0.027 11.923 0 15.301 L 0 15.615 C 0.026 18.989 1.822 22.101 4.73 23.813 L 4.867 23.893 L 10.205 26.979 C 13.329 28.784 14.891 29.687 16.607 29.688 C 18.322 29.688 19.885 28.787 23.01 26.983 L 28.652 23.726 C 30.214 22.825 30.995 22.374 31.424 21.631 C 31.853 20.889 31.853 19.987 31.853 18.183 L 31.853 14.689 C 31.852 14.197 31.59 13.742 31.164 13.496 C 30.738 13.25 30.213 13.249 29.786 13.494 L 18.202 20.161 C 17.423 20.609 17.034 20.833 16.606 20.833 C 16.179 20.833 15.79 20.61 15.011 20.162 L 7.173 15.657 C 6.779 15.431 6.583 15.317 6.424 15.297 C 6.064 15.251 5.718 15.452 5.581 15.788 C 5.521 15.936 5.522 16.163 5.525 16.618 C 5.526 16.951 5.527 17.118 5.559 17.272 C 5.629 17.615 5.809 17.926 6.072 18.156 C 6.19 18.26 6.335 18.343 6.624 18.51 L 15.006 23.354 C 15.787 23.806 16.178 24.031 16.606 24.031 C 17.036 24.031 17.426 23.806 18.207 23.355 L 28.481 17.425 C 28.748 17.271 28.881 17.195 28.981 17.252 C 29.081 17.31 29.081 17.464 29.081 17.772 L 29.081 19.355 C 29.081 19.806 29.081 20.031 28.974 20.217 C 28.867 20.403 28.672 20.515 28.281 20.741 L 19.809 25.631 C 18.246 26.533 17.465 26.984 16.607 26.983 C 15.749 26.983 14.967 26.531 13.406 25.628 L 5.482 21.045 L 5.426 21.013 C 3.766 20.04 2.743 18.265 2.732 16.341 L 2.732 14.821 C 2.732 13.758 3.297 12.776 4.216 12.242 C 5.03 11.77 6.034 11.769 6.848 12.24 L 13.411 16.032 Z M 53.184 22.963 C 51.481 22.963 50.012 22.651 48.779 22.028 C 47.546 21.391 46.597 20.511 45.932 19.388 C 45.282 18.253 44.956 16.951 44.956 15.482 C 44.956 14.028 45.288 12.739 45.953 11.617 C 46.618 10.481 47.567 9.595 48.8 8.957 C 50.033 8.32 51.501 8.002 53.205 8.002 C 54.757 8.002 56.065 8.23 57.133 8.687 C 58.213 9.145 59.037 9.768 59.605 10.557 C 60.187 11.333 60.513 12.213 60.582 13.197 L 57.569 13.197 C 57.52 12.883 57.414 12.58 57.257 12.303 C 57.105 11.984 56.862 11.693 56.53 11.43 C 56.211 11.167 55.789 10.952 55.262 10.786 C 54.75 10.62 54.12 10.536 53.372 10.536 L 53.039 10.536 C 52 10.536 51.086 10.731 50.296 11.119 C 49.54 11.488 48.911 12.074 48.488 12.802 C 48.058 13.536 47.844 14.429 47.844 15.482 C 47.844 16.522 48.059 17.415 48.488 18.162 C 48.922 18.888 49.557 19.473 50.317 19.846 C 51.107 20.234 52.014 20.428 53.039 20.428 L 53.371 20.428 C 54.383 20.428 55.235 20.296 55.927 20.033 C 56.62 19.756 57.147 19.417 57.507 19.015 C 57.867 18.613 58.047 18.218 58.047 17.83 L 58.047 17.664 L 53.267 17.664 L 53.267 15.129 L 58.816 15.129 C 59.453 15.129 59.938 15.302 60.27 15.649 C 60.616 15.995 60.79 16.487 60.79 17.124 L 60.79 22.755 L 58.047 22.755 L 58.047 21.135 C 57.867 21.37 57.569 21.633 57.153 21.924 C 56.752 22.201 56.225 22.444 55.574 22.651 C 54.923 22.859 54.126 22.963 53.184 22.963 Z M 63.017 22.755 L 63.017 8.21 L 65.885 8.21 L 65.885 22.755 Z M 73.187 22.755 L 73.187 10.745 L 67.327 10.745 L 67.327 8.21 L 81.914 8.21 L 81.914 10.745 L 76.054 10.745 L 76.054 22.755 Z M 83.352 22.755 L 83.352 8.21 L 91.622 8.21 C 92.495 8.21 93.277 8.369 93.97 8.687 C 94.663 8.992 95.21 9.429 95.612 9.997 C 96.013 10.564 96.214 11.25 96.214 12.054 C 96.214 12.884 95.986 13.584 95.528 14.152 C 95.071 14.72 94.531 15.122 93.908 15.358 C 94.406 15.468 94.856 15.676 95.258 15.981 C 95.66 16.286 95.978 16.674 96.214 17.145 C 96.45 17.615 96.567 18.17 96.567 18.807 C 96.567 19.61 96.353 20.31 95.923 20.906 C 95.508 21.488 94.947 21.945 94.24 22.277 C 93.534 22.596 92.744 22.755 91.871 22.755 Z M 86.219 20.22 L 91.456 20.22 C 92.148 20.22 92.689 20.06 93.076 19.742 C 93.478 19.41 93.679 18.966 93.679 18.412 C 93.679 17.816 93.479 17.373 93.076 17.082 C 92.689 16.792 92.148 16.646 91.456 16.646 L 86.219 16.646 Z M 86.219 14.11 L 91.31 14.11 C 91.948 14.11 92.44 13.965 92.786 13.674 C 93.146 13.384 93.326 12.947 93.326 12.365 C 93.326 11.881 93.146 11.493 92.786 11.202 C 92.439 10.897 91.948 10.745 91.31 10.745 L 86.22 10.745 L 86.22 14.111 Z M 106.049 22.963 C 104.484 22.963 103.078 22.665 101.831 22.069 C 100.584 21.459 99.601 20.601 98.881 19.493 C 98.161 18.371 97.8 17.033 97.8 15.483 C 97.8 13.931 98.16 12.601 98.88 11.493 C 99.6 10.371 100.584 9.512 101.831 8.916 C 103.078 8.306 104.484 8.002 106.049 8.002 C 107.629 8.002 109.035 8.307 110.268 8.916 C 111.514 9.512 112.491 10.371 113.197 11.493 C 113.918 12.601 114.278 13.931 114.278 15.483 C 114.278 17.033 113.918 18.371 113.197 19.493 C 112.491 20.601 111.514 21.46 110.268 22.069 C 109.035 22.665 107.629 22.963 106.049 22.963 Z M 105.883 20.428 L 106.216 20.428 C 107.158 20.428 108.016 20.234 108.792 19.846 C 109.567 19.472 110.221 18.889 110.683 18.163 C 111.154 17.415 111.39 16.521 111.39 15.483 C 111.39 14.429 111.154 13.536 110.683 12.802 C 110.221 12.076 109.567 11.493 108.792 11.119 C 108.016 10.731 107.158 10.537 106.216 10.537 L 105.883 10.537 C 104.955 10.537 104.096 10.731 103.306 11.119 C 102.528 11.497 101.868 12.078 101.395 12.802 C 100.924 13.536 100.688 14.429 100.688 15.482 C 100.688 16.522 100.924 17.415 101.395 18.162 C 101.868 18.886 102.528 19.468 103.306 19.846 C 104.096 20.234 104.955 20.428 105.883 20.428 Z M 123.603 22.963 C 122.038 22.963 120.631 22.665 119.385 22.069 C 118.138 21.459 117.154 20.601 116.434 19.493 C 115.714 18.371 115.354 17.033 115.354 15.483 C 115.354 13.931 115.714 12.601 116.434 11.493 C 117.154 10.371 118.138 9.512 119.385 8.916 C 120.631 8.306 122.038 8.002 123.603 8.002 C 125.182 8.002 126.588 8.307 127.821 8.916 C 129.068 9.512 130.044 10.371 130.751 11.493 C 131.471 12.601 131.831 13.931 131.831 15.483 C 131.831 17.033 131.471 18.371 130.751 19.493 C 130.044 20.601 129.068 21.46 127.821 22.069 C 126.588 22.665 125.182 22.963 123.603 22.963 Z M 123.437 20.428 L 123.769 20.428 C 124.711 20.428 125.57 20.234 126.346 19.846 C 127.12 19.471 127.775 18.889 128.237 18.163 C 128.708 17.415 128.943 16.521 128.943 15.483 C 128.943 14.429 128.708 13.536 128.237 12.802 C 127.775 12.076 127.12 11.494 126.346 11.119 C 125.57 10.731 124.711 10.537 123.769 10.537 L 123.437 10.537 C 122.509 10.537 121.65 10.731 120.86 11.119 C 120.082 11.496 119.421 12.078 118.948 12.802 C 118.477 13.536 118.242 14.429 118.242 15.482 C 118.242 16.522 118.477 17.415 118.948 18.162 C 119.421 18.886 120.082 19.468 120.86 19.846 C 121.65 20.234 122.509 20.428 123.437 20.428 Z M 136.107 18.433 L 135.276 15.815 L 144.169 8.21 L 148.138 8.21 Z M 133.801 22.755 L 133.801 8.21 L 136.668 8.21 L 136.668 22.755 Z M 144.689 22.755 L 138.123 15.524 L 140.616 14.132 L 148.471 22.755 Z" fill="rgb(38,41,48)"></path></svg>`,
                            svgContentId: 10258487746,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                      x(E.div, {
                        className: `framer-znt0e`,
                        layoutDependency: T,
                        layoutId: `j9q2cuzB8`,
                        children: [
                          h(E.div, {
                            className: `framer-15ebxq7`,
                            "data-framer-name": `GitHub`,
                            layoutDependency: T,
                            layoutId: `qY1REEWtJ`,
                            whileHover: K,
                            children: h(M, {
                              className: `framer-16adz2i`,
                              "data-framer-name": `GitHub`,
                              layout: `position`,
                              layoutDependency: T,
                              layoutId: `JAKQvJSLC`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 18.351 5.603 C 17.5 4.131 16.278 2.909 14.806 2.058 C 13.314 1.187 11.684 0.751 9.916 0.751 C 8.149 0.751 6.519 1.187 5.026 2.058 C 3.554 2.909 2.332 4.131 1.481 5.603 C 0.611 7.096 0.175 8.726 0.175 10.493 C 0.175 12.616 0.795 14.524 2.033 16.22 C 3.272 17.915 4.873 19.089 6.834 19.74 C 7.062 19.782 7.231 19.752 7.341 19.65 C 7.449 19.553 7.509 19.415 7.506 19.27 L 7.5 18.586 C 7.495 18.209 7.493 17.833 7.493 17.456 L 7.202 17.507 C 6.969 17.544 6.734 17.559 6.498 17.552 C 6.202 17.547 5.907 17.517 5.616 17.463 C 5.306 17.406 5.015 17.276 4.766 17.083 C 4.505 16.886 4.31 16.614 4.208 16.303 L 4.081 16.011 C 3.974 15.78 3.84 15.563 3.681 15.364 C 3.5 15.127 3.316 14.967 3.131 14.882 L 3.041 14.819 C 2.98 14.775 2.925 14.723 2.876 14.666 C 2.829 14.613 2.791 14.553 2.762 14.489 C 2.737 14.429 2.758 14.381 2.826 14.342 C 2.893 14.304 3.016 14.286 3.194 14.286 L 3.447 14.324 C 3.617 14.358 3.826 14.459 4.075 14.628 C 4.325 14.798 4.53 15.017 4.69 15.288 C 4.885 15.634 5.12 15.898 5.394 16.08 C 5.669 16.262 5.946 16.353 6.224 16.353 C 6.504 16.353 6.744 16.332 6.948 16.29 C 7.151 16.247 7.341 16.184 7.518 16.1 C 7.595 15.533 7.802 15.097 8.14 14.793 C 7.701 14.75 7.267 14.673 6.84 14.564 C 6.424 14.449 6.023 14.283 5.648 14.069 C 5.255 13.855 4.908 13.566 4.627 13.219 C 4.357 12.882 4.134 12.437 3.961 11.888 C 3.788 11.338 3.701 10.704 3.701 9.985 C 3.701 8.962 4.035 8.091 4.703 7.372 C 4.39 6.602 4.42 5.74 4.792 4.785 C 5.037 4.709 5.401 4.765 5.882 4.955 C 6.365 5.146 6.718 5.309 6.942 5.445 C 7.166 5.579 7.346 5.694 7.481 5.787 C 8.274 5.566 9.093 5.455 9.916 5.457 C 10.739 5.455 11.559 5.566 12.352 5.787 L 12.834 5.482 C 13.164 5.279 13.553 5.093 14.001 4.924 C 14.449 4.755 14.791 4.709 15.028 4.784 C 15.408 5.74 15.443 6.603 15.13 7.372 C 15.798 8.092 16.132 8.962 16.132 9.985 C 16.132 10.705 16.045 11.34 15.872 11.895 C 15.699 12.448 15.475 12.892 15.2 13.226 C 14.914 13.57 14.565 13.856 14.172 14.07 C 13.797 14.284 13.396 14.45 12.98 14.564 C 12.553 14.673 12.119 14.75 11.68 14.793 C 12.12 15.173 12.34 15.773 12.34 16.594 L 12.34 19.27 C 12.34 19.422 12.392 19.55 12.498 19.65 C 12.604 19.752 12.771 19.782 12.998 19.74 C 14.961 19.088 16.561 17.915 17.8 16.22 C 19.039 14.524 19.658 12.615 19.658 10.493 C 19.658 8.726 19.222 7.096 18.351 5.603 Z" fill="rgb(101,105,115)"></path></svg>`,
                              svgContentId: 11600597649,
                              withExternalLayout: !0,
                            }),
                          }),
                          h(E.div, {
                            className: `framer-n1j5qy`,
                            "data-framer-name": `X`,
                            layoutDependency: T,
                            layoutId: `Lzqxir7LG`,
                            whileHover: K,
                            children: h(M, {
                              className: `framer-1hsh9yo`,
                              "data-framer-name": `X`,
                              layout: `position`,
                              layoutDependency: T,
                              layoutId: `mLpkkUVG7`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 17"><g transform="translate(0.658 0.232)"><path d="M 0 0 L 15.242 0 L 15.242 16.044 L 0 16.044 Z" fill="transparent"></path><path d="M 9.072 6.791 L 14.745 0.001 L 13.402 0.001 L 8.474 5.895 L 4.539 0 L 0 0 L 5.95 8.916 L 0 16.036 L 1.345 16.036 L 6.548 9.81 L 10.704 16.036 L 15.242 16.036 L 9.072 6.792 Z M 7.229 8.995 L 6.626 8.107 L 1.828 1.043 L 3.894 1.043 L 7.765 6.743 L 8.368 7.631 L 13.401 15.041 L 11.335 15.041 L 7.23 8.996 Z" fill="rgb(101,105,115)"></path></g></svg>`,
                              svgContentId: 9288689452,
                              withExternalLayout: !0,
                            }),
                          }),
                          h(E.div, {
                            className: `framer-kwqyji`,
                            "data-framer-name": `LinkedIn`,
                            layoutDependency: T,
                            layoutId: `SAiRc2UJm`,
                            whileHover: K,
                            children: h(M, {
                              className: `framer-1vbsbuz`,
                              "data-framer-name": `LinkedIn`,
                              layout: `position`,
                              layoutDependency: T,
                              layoutId: `ZXpOCCWF5`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 19"><path d="M 4.395 17.38 L 0.909 17.38 L 0.909 6.136 L 4.402 6.136 L 4.395 17.382 Z M 2.647 4.602 C 1.824 4.606 1.08 4.115 0.761 3.356 C 0.442 2.597 0.612 1.721 1.191 1.137 C 1.77 0.552 2.645 0.374 3.406 0.686 C 4.168 0.997 4.667 1.737 4.67 2.56 C 4.67 3.68 3.767 4.591 2.647 4.6 Z M 17.472 17.383 L 13.982 17.383 L 13.982 11.908 C 13.982 10.603 13.956 8.93 12.165 8.93 C 10.349 8.93 10.071 10.347 10.071 11.814 L 10.071 17.382 L 6.583 17.382 L 6.583 6.135 L 9.933 6.135 L 9.933 7.663 L 9.981 7.663 C 10.665 6.497 11.935 5.802 13.286 5.853 C 16.819 5.853 17.47 8.181 17.47 11.203 L 17.47 17.381 L 17.472 17.382 Z" fill="rgb(101,105,115)"></path></svg>`,
                              svgContentId: 9053929896,
                              withExternalLayout: !0,
                            }),
                          }),
                          h(E.div, {
                            className: `framer-12slw2y`,
                            "data-framer-name": `YouTube`,
                            layoutDependency: T,
                            layoutId: `Z6Gyl_eqT`,
                            whileHover: K,
                            children: h(M, {
                              className: `framer-1niapoi`,
                              "data-framer-name": `Youtube`,
                              layout: `position`,
                              layoutDependency: T,
                              layoutId: `SHIkgPTIy`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 15"><g transform="translate(0.747 0.436)"><path d="M 0 0 L 19.253 0 L 19.253 13.638 L 0 13.638 Z" fill="transparent"></path><path d="M 18.851 2.134 C 18.743 1.722 18.528 1.345 18.229 1.042 C 17.931 0.739 17.558 0.521 17.149 0.408 C 15.647 0 9.626 0 9.626 0 C 9.626 0 3.606 0 2.104 0.408 C 1.694 0.52 1.322 0.738 1.024 1.042 C 0.725 1.345 0.51 1.722 0.402 2.134 C 0 3.656 0 6.833 0 6.833 C 0 6.833 0 10.009 0.402 11.531 C 0.622 12.371 1.276 13.005 2.104 13.23 C 3.606 13.638 9.626 13.638 9.626 13.638 C 9.626 13.638 15.646 13.638 17.149 13.23 C 17.98 13.011 18.63 12.363 18.851 11.532 C 19.253 10.009 19.253 6.832 19.253 6.832 C 19.253 6.832 19.253 3.656 18.851 2.133 Z M 7.657 9.717 L 7.657 3.947 L 12.689 6.832 L 7.657 9.715 Z" fill="rgb(101,105,115)"></path></g></svg>`,
                              svgContentId: 12519563066,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  x(E.div, {
                    className: `framer-5938ak`,
                    "data-framer-name": `Frame 21`,
                    layoutDependency: T,
                    layoutId: `H7e6ukafU`,
                    children: [
                      x(E.div, {
                        className: `framer-9jjd8e`,
                        "data-framer-name": `Sidebar group`,
                        layoutDependency: T,
                        layoutId: `V3a0HCpbe`,
                        children: [
                          x(E.div, {
                            className: `framer-9zg9nz`,
                            "data-framer-name": `Group 14`,
                            layoutDependency: T,
                            layoutId: `G021hMgnh`,
                            children: [
                              h(j, {
                                __fromCanvasComponent: !0,
                                children: h(C, {
                                  children: h(E.p, {
                                    style: {
                                      "--font-selector": `Q1VTVE9NO0FCQyBGYXZvcml0IEJvbGQ=`,
                                      "--framer-font-family": `"ABC Favorit Bold", "ABC Favorit Bold Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-line-height": `150%`,
                                    },
                                    children: `Documentation`,
                                  }),
                                }),
                                className: `framer-dcrsya`,
                                "data-framer-name": `Group heading`,
                                fonts: [`CUSTOM;ABC Favorit Bold`],
                                layoutDependency: T,
                                layoutId: `Fk8BNT5Xb`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              x(E.div, {
                                className: `framer-70lmo4`,
                                "data-framer-name": `Navigation`,
                                layoutDependency: T,
                                layoutId: `hZcGhJ2xq`,
                                children: [
                                  h(D, {
                                    height: 33,
                                    y:
                                      (c?.y || 0) +
                                      32 +
                                      72 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      34 +
                                      0 +
                                      0,
                                    ...G(
                                      {
                                        gJXMtPbfA: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            34 +
                                            0 +
                                            0,
                                        },
                                        Zt2kSiUz7: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            34 +
                                            0 +
                                            0,
                                        },
                                      },
                                      m,
                                      b
                                    ),
                                    children: h(N, {
                                      className: `framer-1akm2w1-container`,
                                      layoutDependency: T,
                                      layoutId: `s1te9tb_r-container`,
                                      nodeId: `s1te9tb_r`,
                                      rendersWithMotion: !0,
                                      scopeId: `F3xvXn3dp`,
                                      children: h(Xe, {
                                        height: `100%`,
                                        id: `s1te9tb_r`,
                                        layoutId: `s1te9tb_r`,
                                        LUKED0nUd: `Footer`,
                                        ODP5_uJNT: `GitBook product docs`,
                                        pTfAhPQyo: `GitBook product docs`,
                                        utKWDiXhM: `gitbook_product_docs`,
                                        width: `100%`,
                                        X0sEbNfLK: `https://gitbook.com/docs`,
                                      }),
                                    }),
                                  }),
                                  h(D, {
                                    height: 33,
                                    y:
                                      (c?.y || 0) +
                                      32 +
                                      72 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      34 +
                                      0 +
                                      37,
                                    ...G(
                                      {
                                        gJXMtPbfA: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            34 +
                                            0 +
                                            37,
                                        },
                                        Zt2kSiUz7: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            34 +
                                            0 +
                                            37,
                                        },
                                      },
                                      m,
                                      b
                                    ),
                                    children: h(N, {
                                      className: `framer-1wgfloz-container`,
                                      layoutDependency: T,
                                      layoutId: `APmwOBxh5-container`,
                                      nodeId: `APmwOBxh5`,
                                      rendersWithMotion: !0,
                                      scopeId: `F3xvXn3dp`,
                                      children: h(W, {
                                        height: `100%`,
                                        id: `APmwOBxh5`,
                                        layoutId: `APmwOBxh5`,
                                        LUKED0nUd: `Footer`,
                                        ODP5_uJNT: `GitBook developer docs`,
                                        pTfAhPQyo: `GitBook developer docs`,
                                        utKWDiXhM: `gitbook_developer_docs`,
                                        width: `100%`,
                                        X0sEbNfLK: `https://gitbook.com/docs/developers`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          x(E.div, {
                            className: `framer-1uev25e`,
                            "data-framer-name": `Sidebar group`,
                            layoutDependency: T,
                            layoutId: `FBokzZvtp`,
                            children: [
                              h(j, {
                                __fromCanvasComponent: !0,
                                children: h(C, {
                                  children: h(E.p, {
                                    style: {
                                      "--font-selector": `Q1VTVE9NO0FCQyBGYXZvcml0IEJvbGQ=`,
                                      "--framer-font-family": `"ABC Favorit Bold", "ABC Favorit Bold Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-line-height": `150%`,
                                    },
                                    children: `Company`,
                                  }),
                                }),
                                className: `framer-56shmk`,
                                "data-framer-name": `Group heading`,
                                fonts: [`CUSTOM;ABC Favorit Bold`],
                                layoutDependency: T,
                                layoutId: `QkUiqIn1O`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                              x(E.div, {
                                className: `framer-115ite7`,
                                "data-framer-name": `Navigation`,
                                layoutDependency: T,
                                layoutId: `yJoA_hghE`,
                                children: [
                                  h(A, {
                                    links: [
                                      {
                                        href: { webPageId: `IyDLnvQ5n` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `IyDLnvQ5n` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `IyDLnvQ5n` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      h(D, {
                                        height: 33,
                                        y:
                                          (c?.y || 0) +
                                          32 +
                                          72 +
                                          0 +
                                          0 +
                                          147 +
                                          0 +
                                          37 +
                                          0 +
                                          0,
                                        ...G(
                                          {
                                            gJXMtPbfA: {
                                              y:
                                                (c?.y || 0) +
                                                32 +
                                                72 +
                                                0 +
                                                0 +
                                                0 +
                                                147 +
                                                0 +
                                                37 +
                                                0 +
                                                0,
                                            },
                                            Zt2kSiUz7: {
                                              y:
                                                (c?.y || 0) +
                                                32 +
                                                72 +
                                                0 +
                                                0 +
                                                0 +
                                                147 +
                                                0 +
                                                37 +
                                                0 +
                                                0,
                                            },
                                          },
                                          m,
                                          b
                                        ),
                                        children: h(N, {
                                          className: `framer-ajb7dd-container`,
                                          layoutDependency: T,
                                          layoutId: `NGBcCtmmH-container`,
                                          nodeId: `NGBcCtmmH`,
                                          rendersWithMotion: !0,
                                          scopeId: `F3xvXn3dp`,
                                          children: h(Ze, {
                                            height: `100%`,
                                            id: `NGBcCtmmH`,
                                            layoutId: `NGBcCtmmH`,
                                            LUKED0nUd: `Footer`,
                                            ODP5_uJNT: `About`,
                                            pTfAhPQyo: `About`,
                                            utKWDiXhM: `about_footer`,
                                            width: `100%`,
                                            X0sEbNfLK: e[0],
                                            ...G(
                                              {
                                                gJXMtPbfA: { X0sEbNfLK: e[2] },
                                                Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                              },
                                              m,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  h(A, {
                                    links: [
                                      {
                                        href: {
                                          hash: `:RYK_OVi2O`,
                                          webPageId: `IyDLnvQ5n`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:RYK_OVi2O`,
                                          webPageId: `IyDLnvQ5n`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          hash: `:RYK_OVi2O`,
                                          webPageId: `IyDLnvQ5n`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      h(D, {
                                        height: 33,
                                        y:
                                          (c?.y || 0) +
                                          32 +
                                          72 +
                                          0 +
                                          0 +
                                          147 +
                                          0 +
                                          37 +
                                          0 +
                                          37,
                                        ...G(
                                          {
                                            gJXMtPbfA: {
                                              y:
                                                (c?.y || 0) +
                                                32 +
                                                72 +
                                                0 +
                                                0 +
                                                0 +
                                                147 +
                                                0 +
                                                37 +
                                                0 +
                                                37,
                                            },
                                            Zt2kSiUz7: {
                                              y:
                                                (c?.y || 0) +
                                                32 +
                                                72 +
                                                0 +
                                                0 +
                                                0 +
                                                147 +
                                                0 +
                                                37 +
                                                0 +
                                                37,
                                            },
                                          },
                                          m,
                                          b
                                        ),
                                        children: h(N, {
                                          className: `framer-109aj6v-container`,
                                          layoutDependency: T,
                                          layoutId: `spTsAmZ1j-container`,
                                          nodeId: `spTsAmZ1j`,
                                          rendersWithMotion: !0,
                                          scopeId: `F3xvXn3dp`,
                                          children: h(Qe, {
                                            height: `100%`,
                                            id: `spTsAmZ1j`,
                                            layoutId: `spTsAmZ1j`,
                                            LUKED0nUd: `Footer`,
                                            ODP5_uJNT: `Careers`,
                                            pTfAhPQyo: `Careers`,
                                            utKWDiXhM: `careers_footer`,
                                            width: `100%`,
                                            X0sEbNfLK: e[0],
                                            ...G(
                                              {
                                                gJXMtPbfA: { X0sEbNfLK: e[2] },
                                                Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                              },
                                              m,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  h(A, {
                                    links: [
                                      {
                                        href: { webPageId: `z3VHfa2TI` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `z3VHfa2TI` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `z3VHfa2TI` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      h(D, {
                                        height: 33,
                                        y:
                                          (c?.y || 0) +
                                          32 +
                                          72 +
                                          0 +
                                          0 +
                                          147 +
                                          0 +
                                          37 +
                                          0 +
                                          74,
                                        ...G(
                                          {
                                            gJXMtPbfA: {
                                              y:
                                                (c?.y || 0) +
                                                32 +
                                                72 +
                                                0 +
                                                0 +
                                                0 +
                                                147 +
                                                0 +
                                                37 +
                                                0 +
                                                74,
                                            },
                                            Zt2kSiUz7: {
                                              y:
                                                (c?.y || 0) +
                                                32 +
                                                72 +
                                                0 +
                                                0 +
                                                0 +
                                                147 +
                                                0 +
                                                37 +
                                                0 +
                                                74,
                                            },
                                          },
                                          m,
                                          b
                                        ),
                                        children: h(N, {
                                          className: `framer-15knw4v-container`,
                                          layoutDependency: T,
                                          layoutId: `YDIiXIGPU-container`,
                                          nodeId: `YDIiXIGPU`,
                                          rendersWithMotion: !0,
                                          scopeId: `F3xvXn3dp`,
                                          children: h($e, {
                                            height: `100%`,
                                            id: `YDIiXIGPU`,
                                            layoutId: `YDIiXIGPU`,
                                            LUKED0nUd: `Footer`,
                                            ODP5_uJNT: `Contact and support`,
                                            pTfAhPQyo: `Contact and support`,
                                            utKWDiXhM: `contact_and_support`,
                                            width: `100%`,
                                            X0sEbNfLK: e[0],
                                            ...G(
                                              {
                                                gJXMtPbfA: { X0sEbNfLK: e[2] },
                                                Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                              },
                                              m,
                                              b
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  h(D, {
                                    height: 33,
                                    y:
                                      (c?.y || 0) +
                                      32 +
                                      72 +
                                      0 +
                                      0 +
                                      147 +
                                      0 +
                                      37 +
                                      0 +
                                      111,
                                    ...G(
                                      {
                                        gJXMtPbfA: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            0 +
                                            0 +
                                            147 +
                                            0 +
                                            37 +
                                            0 +
                                            111,
                                        },
                                        Zt2kSiUz7: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            0 +
                                            0 +
                                            147 +
                                            0 +
                                            37 +
                                            0 +
                                            111,
                                        },
                                      },
                                      m,
                                      b
                                    ),
                                    children: h(N, {
                                      className: `framer-rjxzey-container`,
                                      layoutDependency: T,
                                      layoutId: `p9MX3qB48-container`,
                                      nodeId: `p9MX3qB48`,
                                      rendersWithMotion: !0,
                                      scopeId: `F3xvXn3dp`,
                                      children: h(et, {
                                        height: `100%`,
                                        id: `p9MX3qB48`,
                                        layoutId: `p9MX3qB48`,
                                        LUKED0nUd: `Footer`,
                                        ODP5_uJNT: `Terms of service`,
                                        pTfAhPQyo: `Terms of service`,
                                        utKWDiXhM: `terms_of_service`,
                                        width: `100%`,
                                        X0sEbNfLK: `https://policies.gitbook.com/terms`,
                                      }),
                                    }),
                                  }),
                                  h(D, {
                                    height: 33,
                                    y:
                                      (c?.y || 0) +
                                      32 +
                                      72 +
                                      0 +
                                      0 +
                                      147 +
                                      0 +
                                      37 +
                                      0 +
                                      148,
                                    ...G(
                                      {
                                        gJXMtPbfA: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            0 +
                                            0 +
                                            147 +
                                            0 +
                                            37 +
                                            0 +
                                            148,
                                        },
                                        Zt2kSiUz7: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            0 +
                                            0 +
                                            147 +
                                            0 +
                                            37 +
                                            0 +
                                            148,
                                        },
                                      },
                                      m,
                                      b
                                    ),
                                    children: h(N, {
                                      className: `framer-1o8e2y4-container`,
                                      layoutDependency: T,
                                      layoutId: `deT6L01Se-container`,
                                      nodeId: `deT6L01Se`,
                                      rendersWithMotion: !0,
                                      scopeId: `F3xvXn3dp`,
                                      children: h(tt, {
                                        height: `100%`,
                                        id: `deT6L01Se`,
                                        layoutId: `deT6L01Se`,
                                        LUKED0nUd: `Footer`,
                                        ODP5_uJNT: `Privacy policy`,
                                        pTfAhPQyo: `Privacy policy`,
                                        utKWDiXhM: `privacy_policy`,
                                        width: `100%`,
                                        X0sEbNfLK: `https://policies.gitbook.com/privacy-and-security/statement`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      h(E.div, {
                        className: `framer-uga373`,
                        "data-framer-name": `Sidebar group`,
                        layoutDependency: T,
                        layoutId: `atmX3r80a`,
                        children: x(E.div, {
                          className: `framer-1p6sj6j`,
                          "data-framer-name": `Group 15`,
                          layoutDependency: T,
                          layoutId: `TfYimgyTW`,
                          children: [
                            h(j, {
                              __fromCanvasComponent: !0,
                              children: h(C, {
                                children: h(E.p, {
                                  style: {
                                    "--font-selector": `Q1VTVE9NO0FCQyBGYXZvcml0IEJvbGQ=`,
                                    "--framer-font-family": `"ABC Favorit Bold", "ABC Favorit Bold Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-line-height": `150%`,
                                  },
                                  children: `Product`,
                                }),
                              }),
                              className: `framer-8hsnfs`,
                              "data-framer-name": `Group heading`,
                              fonts: [`CUSTOM;ABC Favorit Bold`],
                              layoutDependency: T,
                              layoutId: `Yzs2qiwFE`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                            x(E.div, {
                              className: `framer-19908jt`,
                              "data-framer-name": `Navigation`,
                              layoutDependency: T,
                              layoutId: `snrNYG9KI`,
                              children: [
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `Img1aPiaN` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Img1aPiaN` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Img1aPiaN` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        31 +
                                        0 +
                                        0,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              429 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              0,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              0,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-12ound6-container`,
                                        layoutDependency: T,
                                        layoutId: `LxMEw_sZx-container`,
                                        nodeId: `LxMEw_sZx`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(nt, {
                                          height: `100%`,
                                          id: `LxMEw_sZx`,
                                          layoutId: `LxMEw_sZx`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Published docs`,
                                          pTfAhPQyo: `Published docs`,
                                          utKWDiXhM: `published_docs`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `siaJjNlJo` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `siaJjNlJo` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `siaJjNlJo` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        31 +
                                        0 +
                                        37,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              429 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              37,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              37,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-1g1h0f-container`,
                                        layoutDependency: T,
                                        layoutId: `JKJgvU36U-container`,
                                        nodeId: `JKJgvU36U`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(rt, {
                                          height: `100%`,
                                          id: `JKJgvU36U`,
                                          layoutId: `JKJgvU36U`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `API docs`,
                                          pTfAhPQyo: `API docs`,
                                          utKWDiXhM: `api_docs`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `CtsIaGDQX` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `CtsIaGDQX` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `CtsIaGDQX` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        31 +
                                        0 +
                                        74,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              429 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              74,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              74,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-1mm9v56-container`,
                                        layoutDependency: T,
                                        layoutId: `HSA02qEJV-container`,
                                        nodeId: `HSA02qEJV`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(it, {
                                          height: `100%`,
                                          id: `HSA02qEJV`,
                                          layoutId: `HSA02qEJV`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Internal docs`,
                                          pTfAhPQyo: `Internal docs`,
                                          utKWDiXhM: `internal_docs`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `BenVzo70l` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BenVzo70l` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BenVzo70l` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        31 +
                                        0 +
                                        111,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              429 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              111,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              111,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-rhi3ti-container`,
                                        layoutDependency: T,
                                        layoutId: `z_Zzmex3T-container`,
                                        nodeId: `z_Zzmex3T`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(at, {
                                          height: `100%`,
                                          id: `z_Zzmex3T`,
                                          layoutId: `z_Zzmex3T`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Enterprise`,
                                          pTfAhPQyo: `Enterprise`,
                                          utKWDiXhM: `enterprise`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `ZyGCvUf2K` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ZyGCvUf2K` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ZyGCvUf2K` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        31 +
                                        0 +
                                        148,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              429 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              148,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              148,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-13kiilc-container`,
                                        layoutDependency: T,
                                        layoutId: `y9wDWzc5S-container`,
                                        nodeId: `y9wDWzc5S`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(ot, {
                                          height: `100%`,
                                          id: `y9wDWzc5S`,
                                          layoutId: `y9wDWzc5S`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Open Source`,
                                          pTfAhPQyo: `Open Source`,
                                          utKWDiXhM: `open_source`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `UMBrHRs1N` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `UMBrHRs1N` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `UMBrHRs1N` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        31 +
                                        0 +
                                        185,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              429 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              185,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              185,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-azov7x-container`,
                                        layoutDependency: T,
                                        layoutId: `mR8Znt6Xh-container`,
                                        nodeId: `mR8Znt6Xh`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(st, {
                                          height: `100%`,
                                          id: `mR8Znt6Xh`,
                                          layoutId: `mR8Znt6Xh`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Showcase`,
                                          pTfAhPQyo: `Customer showcase`,
                                          utKWDiXhM: `showcase`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `ABzzm0cM2` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ABzzm0cM2` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ABzzm0cM2` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        31 +
                                        0 +
                                        222,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              429 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              222,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              222,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-fei3rx-container`,
                                        layoutDependency: T,
                                        layoutId: `z7AWE8phR-container`,
                                        nodeId: `z7AWE8phR`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(ct, {
                                          height: `100%`,
                                          id: `z7AWE8phR`,
                                          layoutId: `z7AWE8phR`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Preview docs`,
                                          pTfAhPQyo: `Preview docs`,
                                          utKWDiXhM: `preview_docs`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `LdltU0X1v` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `LdltU0X1v` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `LdltU0X1v` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        31 +
                                        0 +
                                        259,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              429 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              259,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              259,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-1vkhcko-container`,
                                        layoutDependency: T,
                                        layoutId: `bb4sjgvtl-container`,
                                        nodeId: `bb4sjgvtl`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(lt, {
                                          height: `100%`,
                                          id: `bb4sjgvtl`,
                                          layoutId: `bb4sjgvtl`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Product tour`,
                                          pTfAhPQyo: `Product tour`,
                                          utKWDiXhM: `product_tour`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `dSPYlRFJZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dSPYlRFJZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `dSPYlRFJZ` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        31 +
                                        0 +
                                        296,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              429 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              296,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              31 +
                                              0 +
                                              296,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-8soua7-container`,
                                        layoutDependency: T,
                                        layoutId: `rrj5_ZkQ0-container`,
                                        nodeId: `rrj5_ZkQ0`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(ut, {
                                          height: `100%`,
                                          id: `rrj5_ZkQ0`,
                                          layoutId: `rrj5_ZkQ0`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Pricing`,
                                          pTfAhPQyo: `Pricing`,
                                          utKWDiXhM: `pricing`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      h(E.div, {
                        className: `framer-hfz2lj`,
                        "data-framer-name": `Sidebar group`,
                        layoutDependency: T,
                        layoutId: `LZHOK971x`,
                        children: x(E.div, {
                          className: `framer-s3u41l`,
                          "data-framer-name": `Sidebar group`,
                          layoutDependency: T,
                          layoutId: `U1RCVh2yR`,
                          children: [
                            h(j, {
                              __fromCanvasComponent: !0,
                              children: h(C, {
                                children: h(E.p, {
                                  style: {
                                    "--font-selector": `Q1VTVE9NO0FCQyBGYXZvcml0IEJvbGQ=`,
                                    "--framer-font-family": `"ABC Favorit Bold", "ABC Favorit Bold Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-line-height": `150%`,
                                  },
                                  children: `Features`,
                                }),
                              }),
                              className: `framer-177g9gy`,
                              "data-framer-name": `Group heading`,
                              fonts: [`CUSTOM;ABC Favorit Bold`],
                              layoutDependency: T,
                              layoutId: `o3WG_MNKt`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                            x(E.div, {
                              className: `framer-a1fg1w`,
                              "data-framer-name": `Navigation`,
                              layoutDependency: T,
                              layoutId: `go57KUhHZ`,
                              children: [
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `vIFMHMfF9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vIFMHMfF9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vIFMHMfF9` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        37 +
                                        0 +
                                        0,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              853 +
                                              0 +
                                              0 +
                                              0 +
                                              37 +
                                              0 +
                                              0,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              467 +
                                              0 +
                                              0 +
                                              0 +
                                              37 +
                                              0 +
                                              0,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-1s1c9kk-container`,
                                        layoutDependency: T,
                                        layoutId: `K4n20pjqy-container`,
                                        nodeId: `K4n20pjqy`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(dt, {
                                          height: `100%`,
                                          id: `K4n20pjqy`,
                                          layoutId: `K4n20pjqy`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Authenticated access`,
                                          pTfAhPQyo: `Authenticated access`,
                                          utKWDiXhM: `authenticated_access`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `ndAjlx15U` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ndAjlx15U` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ndAjlx15U` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        37 +
                                        0 +
                                        37,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              853 +
                                              0 +
                                              0 +
                                              0 +
                                              37 +
                                              0 +
                                              37,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              467 +
                                              0 +
                                              0 +
                                              0 +
                                              37 +
                                              0 +
                                              37,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-113yoc6-container`,
                                        layoutDependency: T,
                                        layoutId: `ZtoYwLUgv-container`,
                                        nodeId: `ZtoYwLUgv`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(ft, {
                                          height: `100%`,
                                          id: `ZtoYwLUgv`,
                                          layoutId: `ZtoYwLUgv`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Git Sync`,
                                          pTfAhPQyo: `Git Sync`,
                                          utKWDiXhM: `git_sync`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `zOEBcwzEd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zOEBcwzEd` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zOEBcwzEd` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        37 +
                                        0 +
                                        74,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              853 +
                                              0 +
                                              0 +
                                              0 +
                                              37 +
                                              0 +
                                              74,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              467 +
                                              0 +
                                              0 +
                                              0 +
                                              37 +
                                              0 +
                                              74,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-1it3vkd-container`,
                                        layoutDependency: T,
                                        layoutId: `Z6A_HoZAD-container`,
                                        nodeId: `Z6A_HoZAD`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(W, {
                                          height: `100%`,
                                          id: `Z6A_HoZAD`,
                                          layoutId: `Z6A_HoZAD`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `GitBook AI`,
                                          pTfAhPQyo: `GitBook AI`,
                                          utKWDiXhM: `gitbook_ai`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                                h(A, {
                                  links: [
                                    {
                                      href: { webPageId: `F32oQjlbZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `F32oQjlbZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `F32oQjlbZ` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    h(D, {
                                      height: 33,
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        37 +
                                        0 +
                                        111,
                                      ...G(
                                        {
                                          gJXMtPbfA: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              853 +
                                              0 +
                                              0 +
                                              0 +
                                              37 +
                                              0 +
                                              111,
                                          },
                                          Zt2kSiUz7: {
                                            y:
                                              (c?.y || 0) +
                                              32 +
                                              72 +
                                              0 +
                                              467 +
                                              0 +
                                              0 +
                                              0 +
                                              37 +
                                              0 +
                                              111,
                                          },
                                        },
                                        m,
                                        b
                                      ),
                                      children: h(N, {
                                        className: `framer-bax0jz-container`,
                                        layoutDependency: T,
                                        layoutId: `zRHx0Uxd9-container`,
                                        nodeId: `zRHx0Uxd9`,
                                        rendersWithMotion: !0,
                                        scopeId: `F3xvXn3dp`,
                                        children: h(pt, {
                                          height: `100%`,
                                          id: `zRHx0Uxd9`,
                                          layoutId: `zRHx0Uxd9`,
                                          LUKED0nUd: `Footer`,
                                          ODP5_uJNT: `Integrations`,
                                          pTfAhPQyo: `Integrations`,
                                          utKWDiXhM: `integrations`,
                                          width: `100%`,
                                          X0sEbNfLK: e[0],
                                          ...G(
                                            {
                                              gJXMtPbfA: { X0sEbNfLK: e[2] },
                                              Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                            },
                                            m,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      x(E.div, {
                        className: `framer-vo2cyy`,
                        "data-framer-name": `Sidebar group`,
                        layoutDependency: T,
                        layoutId: `baeGhvIF2`,
                        children: [
                          h(j, {
                            __fromCanvasComponent: !0,
                            children: h(C, {
                              children: h(E.p, {
                                style: {
                                  "--font-selector": `Q1VTVE9NO0FCQyBGYXZvcml0IEJvbGQ=`,
                                  "--framer-font-family": `"ABC Favorit Bold", "ABC Favorit Bold Placeholder", sans-serif`,
                                  "--framer-font-size": `14px`,
                                  "--framer-line-height": `150%`,
                                },
                                children: `Resources`,
                              }),
                            }),
                            className: `framer-pr0t6u`,
                            "data-framer-name": `Group heading`,
                            fonts: [`CUSTOM;ABC Favorit Bold`],
                            layoutDependency: T,
                            layoutId: `L9ZPWD7rD`,
                            style: { "--framer-paragraph-spacing": `0px` },
                            verticalAlignment: `center`,
                            withExternalLayout: !0,
                          }),
                          x(E.div, {
                            className: `framer-1a3vf1m`,
                            "data-framer-name": `Navigation`,
                            layoutDependency: T,
                            layoutId: `yzz0nao_3`,
                            children: [
                              h(A, {
                                links: [
                                  {
                                    href: { webPageId: `kStOojbm2` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `kStOojbm2` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `kStOojbm2` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  h(D, {
                                    height: 33,
                                    y:
                                      (c?.y || 0) +
                                      32 +
                                      72 +
                                      0 +
                                      0 +
                                      37 +
                                      0 +
                                      0,
                                    ...G(
                                      {
                                        gJXMtPbfA: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            1098 +
                                            0 +
                                            37 +
                                            0 +
                                            0,
                                        },
                                        Zt2kSiUz7: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            467 +
                                            0 +
                                            37 +
                                            0 +
                                            0,
                                        },
                                      },
                                      m,
                                      b
                                    ),
                                    children: h(N, {
                                      className: `framer-1byroc6-container`,
                                      layoutDependency: T,
                                      layoutId: `kt0R9ggpo-container`,
                                      nodeId: `kt0R9ggpo`,
                                      rendersWithMotion: !0,
                                      scopeId: `F3xvXn3dp`,
                                      children: h(mt, {
                                        height: `100%`,
                                        id: `kt0R9ggpo`,
                                        layoutId: `kt0R9ggpo`,
                                        LUKED0nUd: `Footer`,
                                        ODP5_uJNT: `Blog`,
                                        pTfAhPQyo: `Blog`,
                                        utKWDiXhM: `blog`,
                                        width: `100%`,
                                        X0sEbNfLK: e[0],
                                        ...G(
                                          {
                                            gJXMtPbfA: { X0sEbNfLK: e[2] },
                                            Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                          },
                                          m,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              h(A, {
                                links: [
                                  {
                                    href: { webPageId: `BIK4JFLgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `BIK4JFLgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `BIK4JFLgS` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  h(D, {
                                    height: 33,
                                    y:
                                      (c?.y || 0) +
                                      32 +
                                      72 +
                                      0 +
                                      0 +
                                      37 +
                                      0 +
                                      37,
                                    ...G(
                                      {
                                        gJXMtPbfA: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            1098 +
                                            0 +
                                            37 +
                                            0 +
                                            37,
                                        },
                                        Zt2kSiUz7: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            467 +
                                            0 +
                                            37 +
                                            0 +
                                            37,
                                        },
                                      },
                                      m,
                                      b
                                    ),
                                    children: h(N, {
                                      className: `framer-13adhhv-container`,
                                      layoutDependency: T,
                                      layoutId: `Jw6kfnQD_-container`,
                                      nodeId: `Jw6kfnQD_`,
                                      rendersWithMotion: !0,
                                      scopeId: `F3xvXn3dp`,
                                      children: h(ht, {
                                        height: `100%`,
                                        id: `Jw6kfnQD_`,
                                        layoutId: `Jw6kfnQD_`,
                                        LUKED0nUd: `Footer`,
                                        ODP5_uJNT: `Videos`,
                                        pTfAhPQyo: `Videos`,
                                        utKWDiXhM: `videos`,
                                        width: `100%`,
                                        X0sEbNfLK: e[0],
                                        ...G(
                                          {
                                            gJXMtPbfA: { X0sEbNfLK: e[2] },
                                            Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                          },
                                          m,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              h(A, {
                                links: [
                                  {
                                    href: { webPageId: `K8TUpi7SY` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `K8TUpi7SY` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `K8TUpi7SY` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  h(D, {
                                    height: 33,
                                    y:
                                      (c?.y || 0) +
                                      32 +
                                      72 +
                                      0 +
                                      0 +
                                      37 +
                                      0 +
                                      74,
                                    ...G(
                                      {
                                        gJXMtPbfA: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            1098 +
                                            0 +
                                            37 +
                                            0 +
                                            74,
                                        },
                                        Zt2kSiUz7: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            467 +
                                            0 +
                                            37 +
                                            0 +
                                            74,
                                        },
                                      },
                                      m,
                                      b
                                    ),
                                    children: h(N, {
                                      className: `framer-f13wsu-container`,
                                      layoutDependency: T,
                                      layoutId: `bQDY5o0t6-container`,
                                      nodeId: `bQDY5o0t6`,
                                      rendersWithMotion: !0,
                                      scopeId: `F3xvXn3dp`,
                                      children: h(gt, {
                                        height: `100%`,
                                        id: `bQDY5o0t6`,
                                        layoutId: `bQDY5o0t6`,
                                        LUKED0nUd: `Footer`,
                                        ODP5_uJNT: `Events`,
                                        pTfAhPQyo: `Events`,
                                        utKWDiXhM: `events`,
                                        width: `100%`,
                                        X0sEbNfLK: e[0],
                                        ...G(
                                          {
                                            gJXMtPbfA: { X0sEbNfLK: e[2] },
                                            Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                          },
                                          m,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              h(D, {
                                height: 33,
                                y: (c?.y || 0) + 32 + 72 + 0 + 0 + 37 + 0 + 111,
                                ...G(
                                  {
                                    gJXMtPbfA: {
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        1098 +
                                        0 +
                                        37 +
                                        0 +
                                        111,
                                    },
                                    Zt2kSiUz7: {
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        467 +
                                        0 +
                                        37 +
                                        0 +
                                        111,
                                    },
                                  },
                                  m,
                                  b
                                ),
                                children: h(N, {
                                  className: `framer-qpd2jw-container`,
                                  layoutDependency: T,
                                  layoutId: `KHXSIRFKY-container`,
                                  nodeId: `KHXSIRFKY`,
                                  rendersWithMotion: !0,
                                  scopeId: `F3xvXn3dp`,
                                  children: h(_t, {
                                    height: `100%`,
                                    id: `KHXSIRFKY`,
                                    layoutId: `KHXSIRFKY`,
                                    LUKED0nUd: `Footer`,
                                    ODP5_uJNT: `Changelog`,
                                    pTfAhPQyo: `Changelog`,
                                    utKWDiXhM: `changelog`,
                                    width: `100%`,
                                    X0sEbNfLK: `https://gitbook.com/docs/changelog`,
                                  }),
                                }),
                              }),
                              h(D, {
                                height: 33,
                                y: (c?.y || 0) + 32 + 72 + 0 + 0 + 37 + 0 + 148,
                                ...G(
                                  {
                                    gJXMtPbfA: {
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        1098 +
                                        0 +
                                        37 +
                                        0 +
                                        148,
                                    },
                                    Zt2kSiUz7: {
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        467 +
                                        0 +
                                        37 +
                                        0 +
                                        148,
                                    },
                                  },
                                  m,
                                  b
                                ),
                                children: h(N, {
                                  className: `framer-1xlojl0-container`,
                                  layoutDependency: T,
                                  layoutId: `kzOG1c1kF-container`,
                                  nodeId: `kzOG1c1kF`,
                                  rendersWithMotion: !0,
                                  scopeId: `F3xvXn3dp`,
                                  children: h(vt, {
                                    height: `100%`,
                                    id: `kzOG1c1kF`,
                                    layoutId: `kzOG1c1kF`,
                                    LUKED0nUd: `Footer`,
                                    ODP5_uJNT: `Status`,
                                    pTfAhPQyo: `Status`,
                                    utKWDiXhM: `status`,
                                    width: `100%`,
                                    X0sEbNfLK: `https://www.gitbookstatus.com/`,
                                  }),
                                }),
                              }),
                              h(D, {
                                height: 33,
                                y: (c?.y || 0) + 32 + 72 + 0 + 0 + 37 + 0 + 185,
                                ...G(
                                  {
                                    gJXMtPbfA: {
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        1098 +
                                        0 +
                                        37 +
                                        0 +
                                        185,
                                    },
                                    Zt2kSiUz7: {
                                      y:
                                        (c?.y || 0) +
                                        32 +
                                        72 +
                                        0 +
                                        467 +
                                        0 +
                                        37 +
                                        0 +
                                        185,
                                    },
                                  },
                                  m,
                                  b
                                ),
                                children: h(N, {
                                  className: `framer-1fhfr0d-container`,
                                  layoutDependency: T,
                                  layoutId: `rHt90s88P-container`,
                                  nodeId: `rHt90s88P`,
                                  rendersWithMotion: !0,
                                  scopeId: `F3xvXn3dp`,
                                  children: h(yt, {
                                    height: `100%`,
                                    id: `rHt90s88P`,
                                    layoutId: `rHt90s88P`,
                                    LUKED0nUd: `Footer`,
                                    ODP5_uJNT: `Security and compliance`,
                                    pTfAhPQyo: `Security and compliance`,
                                    utKWDiXhM: `security_and_compliance`,
                                    width: `100%`,
                                    X0sEbNfLK: `https://security.gitbook.com/`,
                                  }),
                                }),
                              }),
                              h(A, {
                                links: [
                                  {
                                    href: { webPageId: `MCHiERLyG` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `MCHiERLyG` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `MCHiERLyG` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  h(D, {
                                    height: 33,
                                    y:
                                      (c?.y || 0) +
                                      32 +
                                      72 +
                                      0 +
                                      0 +
                                      37 +
                                      0 +
                                      222,
                                    ...G(
                                      {
                                        gJXMtPbfA: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            1098 +
                                            0 +
                                            37 +
                                            0 +
                                            222,
                                        },
                                        Zt2kSiUz7: {
                                          y:
                                            (c?.y || 0) +
                                            32 +
                                            72 +
                                            0 +
                                            467 +
                                            0 +
                                            37 +
                                            0 +
                                            222,
                                        },
                                      },
                                      m,
                                      b
                                    ),
                                    children: h(N, {
                                      className: `framer-3spfn5-container`,
                                      layoutDependency: T,
                                      layoutId: `XTBoPsM3d-container`,
                                      nodeId: `XTBoPsM3d`,
                                      rendersWithMotion: !0,
                                      scopeId: `F3xvXn3dp`,
                                      children: h(bt, {
                                        height: `100%`,
                                        id: `XTBoPsM3d`,
                                        layoutId: `XTBoPsM3d`,
                                        LUKED0nUd: `Footer`,
                                        ODP5_uJNT: `Newsletter`,
                                        pTfAhPQyo: `Newsletter`,
                                        utKWDiXhM: `newsletter`,
                                        width: `100%`,
                                        X0sEbNfLK: e[0],
                                        ...G(
                                          {
                                            gJXMtPbfA: { X0sEbNfLK: e[2] },
                                            Zt2kSiUz7: { X0sEbNfLK: e[1] },
                                          },
                                          m,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              h(D, {
                                children: h(N, {
                                  className: `framer-1awjd2v-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: T,
                                  layoutId: `iL0PXwlGF-container`,
                                  nodeId: `iL0PXwlGF`,
                                  rendersWithMotion: !0,
                                  scopeId: `F3xvXn3dp`,
                                  children: h(Ne, {
                                    banner: {
                                      animation: {
                                        scale: 1,
                                        transition: {
                                          damping: 60,
                                          delay: 0,
                                          mass: 1,
                                          stiffness: 500,
                                          type: `spring`,
                                        },
                                        x: 0,
                                        y: 10,
                                      },
                                      containerWidth: 0,
                                      inset: 20,
                                      insetBottom: 20,
                                      insetLeft: 20,
                                      insetPerSide: !1,
                                      insetRight: 20,
                                      insetTop: 20,
                                      padding: 20,
                                      paddingBottom: 20,
                                      paddingLeft: 20,
                                      paddingPerSide: !1,
                                      paddingRight: 20,
                                      paddingTop: 20,
                                      position: `bottom-right`,
                                      style: {
                                        backdrop: `rgba(0, 0, 0, 0.1)`,
                                        border: {
                                          color: `rgba(0, 0, 0, 0.05)`,
                                          radius: 14,
                                          width: 1,
                                        },
                                        colorBody: `rgb(68, 68, 68)`,
                                        colorTitle: `rgb(0, 0, 0)`,
                                        fill: `rgb(255, 255, 255)`,
                                        fontBody: {
                                          fontFamily: `"ABC Favorit Regular", "ABC Favorit Regular Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          letterSpacing: `0em`,
                                          lineHeight: `1.2em`,
                                        },
                                        fontTitle: {
                                          fontFamily: `"ABC Favorit Bold", "ABC Favorit Bold Placeholder", sans-serif`,
                                          fontSize: `16px`,
                                          letterSpacing: `0em`,
                                          lineHeight: `1em`,
                                        },
                                        link: `rgb(153, 153, 153)`,
                                      },
                                      width: 360,
                                      zIndex: 10,
                                    },
                                    button: {
                                      borderRadius: 8,
                                      direction: `row`,
                                      fluid: !0,
                                      font: {
                                        fontFamily: `"ABC Favorit Regular", "ABC Favorit Regular Placeholder", sans-serif`,
                                        fontSize: `16px`,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      labels: {
                                        accept: `Accept`,
                                        acceptAll: `Accept all`,
                                        confirm: `Okay`,
                                        customize: `Customize`,
                                        reject: `Reject`,
                                        rejectAll: `Reject all`,
                                        save: `Save Preferences`,
                                      },
                                      padding: 10,
                                      paddingBottom: 10,
                                      paddingLeft: 10,
                                      paddingPerSide: !1,
                                      paddingRight: 10,
                                      paddingTop: 10,
                                      primary: {
                                        color: `rgb(255, 255, 255)`,
                                        fill: `var(--token-fbf5ed05-e6e8-4e8e-920d-120af13ef1d7, rgb(63, 137, 161))`,
                                      },
                                      secondary: {
                                        color: `rgb(68, 68, 68)`,
                                        fill: `rgb(238, 238, 238)`,
                                      },
                                    },
                                    content: {
                                      euBlocking: !1,
                                      euDefaults: {
                                        analytics: !1,
                                        marketing: !1,
                                        necessary: !1,
                                        preferences: !1,
                                      },
                                      euDescription: `We use cookies to enhance your experience, analyze site traffic and deliver personalized content.`,
                                      euPolicy: {
                                        label: `Cookie Policy`,
                                        link: `https://policies.gitbook.com/privacy-and-security/statement/cookies`,
                                        prefix: `Read our`,
                                      },
                                      euTitle: `Cookie Settings`,
                                      euType: `medium`,
                                      isEU: !0,
                                      worldBlocking: !1,
                                      worldDefaults: {
                                        analytics: !0,
                                        marketing: !0,
                                        necessary: !0,
                                        preferences: !0,
                                      },
                                      worldDescription: `We use cookies to personalize content, run ads, and analyze traffic.`,
                                      worldPolicy: {
                                        label: `Cookie Policy`,
                                        prefix: `Read our`,
                                      },
                                      worldTitle: `Cookie Settings`,
                                      worldType: `simple`,
                                    },
                                    gtmId: ``,
                                    height: `100%`,
                                    id: `iL0PXwlGF`,
                                    layoutId: `iL0PXwlGF`,
                                    options: {
                                      analytics: {
                                        description: `Enables tracking of performance.`,
                                        title: `Analytics`,
                                      },
                                      marketing: {
                                        description: `Enables ads personalization and tracking.`,
                                        title: `Marketing`,
                                      },
                                      necessary: {
                                        description: `Enables security and basic functionality.`,
                                        title: `Necessary`,
                                      },
                                      preferences: {
                                        description: `Enables personalized content and settings.`,
                                        title: `Preferences`,
                                      },
                                      preview: !1,
                                      style: {
                                        background: `rgba(0, 0, 0, 0.02)`,
                                        border: {
                                          color: `rgba(0, 0, 0, 0.02)`,
                                          radius: 8,
                                          width: 0,
                                        },
                                        fontBody: {},
                                        fontTitle: {},
                                        padding: 12,
                                        paddingBottom: 12,
                                        paddingLeft: 12,
                                        paddingPerSide: !1,
                                        paddingRight: 12,
                                        paddingTop: 12,
                                        toggleColor: `rgb(0, 0, 0)`,
                                        toggleColorInactive: `rgba(0, 0, 0, 0.1)`,
                                      },
                                    },
                                    preview: !1,
                                    trigger: {
                                      color: `rgb(51, 51, 51)`,
                                      iconSize: 24,
                                      iconType: `default`,
                                      text: `Cookie Settings`,
                                      textFont: {},
                                      type: `none`,
                                    },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h(E.div, {
                    className: `framer-ez9wz0`,
                    "data-framer-name": `Group 17`,
                    layoutDependency: T,
                    layoutId: `YzPMVLto5`,
                    children: x(E.div, {
                      className: `framer-1ppgko6`,
                      "data-framer-name": `Frame 16`,
                      layoutDependency: T,
                      layoutId: `tlj_1Q7eK`,
                      children: [
                        x(E.div, {
                          className: `framer-1uef5p7`,
                          "data-framer-name": `Compliance logos`,
                          layoutDependency: T,
                          layoutId: `fTtVsT249`,
                          children: [
                            h(M, {
                              className: `framer-cfoqii`,
                              "data-framer-name": `ISO`,
                              layout: `position`,
                              layoutDependency: T,
                              layoutId: `hL0t6X2xP`,
                              opacity: 1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 59"><path d="M 29.397 8.83 C 40.407 8.84 49.324 17.797 49.313 28.835 C 49.303 39.873 40.369 48.813 29.358 48.802 C 18.362 48.792 9.45 39.856 9.442 28.831 C 9.432 17.794 18.346 8.841 29.354 8.83 Z M 22.695 39.078 C 27.017 37.538 31.739 37.537 36.062 39.076 L 36.682 36.732 C 36.97 36.732 37.232 36.725 37.497 36.735 C 37.77 36.712 38.044 36.728 38.312 36.782 C 38.126 37.755 37.889 38.717 37.604 39.665 C 38.34 40.073 39.072 40.442 39.767 40.87 C 40.463 41.297 41.121 41.78 41.794 42.237 C 49.877 34.811 49.373 22.181 41.763 15.377 C 40.479 16.39 39.079 17.248 37.593 17.932 C 37.876 18.934 38.145 19.895 38.323 20.886 L 36.668 20.886 C 36.567 20.486 36.475 20.104 36.374 19.726 C 36.287 19.331 36.172 18.942 36.028 18.564 C 31.715 20.096 27.006 20.094 22.695 18.557 L 22.071 20.907 C 21.784 20.907 21.519 20.909 21.256 20.907 C 20.986 20.905 20.716 20.901 20.396 20.896 L 21.148 17.924 C 19.666 17.243 18.271 16.386 16.993 15.372 C 8.961 22.715 9.299 35.343 16.993 42.253 C 18.28 41.239 19.682 40.38 21.169 39.694 C 20.87 38.724 20.623 37.739 20.429 36.743 L 22.079 36.743 Z M 35.489 17.004 C 35.48 16.939 35.466 16.874 35.449 16.811 C 34.942 15.444 34.249 14.153 33.387 12.977 C 32.833 12.205 32.134 11.548 31.329 11.044 C 30.207 10.314 28.771 10.275 27.611 10.942 C 26.864 11.362 26.205 11.924 25.672 12.595 C 24.815 13.658 24.116 14.839 23.598 16.102 C 23.476 16.384 23.365 16.672 23.235 16.992 C 27.195 18.417 31.527 18.421 35.489 17.004 Z M 23.254 40.628 C 23.282 40.723 23.294 40.779 23.314 40.831 C 23.787 42.099 24.418 43.302 25.194 44.411 C 25.701 45.144 26.322 45.791 27.034 46.327 C 28.529 47.42 30.15 47.434 31.66 46.369 C 32.177 45.998 32.645 45.562 33.05 45.072 C 34.081 43.792 34.894 42.35 35.454 40.804 C 35.471 40.744 35.481 40.684 35.487 40.624 C 31.531 39.213 27.209 39.214 23.254 40.628 Z M 34.041 46.508 C 36.385 45.917 38.58 44.846 40.489 43.363 C 39.44 42.546 38.302 41.85 37.097 41.29 C 36.64 42.225 36.219 43.137 35.753 44.024 C 35.271 44.909 34.697 45.741 34.041 46.507 Z M 24.733 46.514 C 24.07 45.757 23.494 44.928 23.013 44.044 C 22.537 43.15 22.117 42.227 21.66 41.289 C 20.454 41.85 19.316 42.546 18.267 43.363 C 20.182 44.847 22.384 45.92 24.733 46.514 Z M 37.037 16.334 C 37.919 16.036 40.13 14.663 40.437 14.224 C 38.537 12.758 36.355 11.7 34.027 11.115 C 35.371 12.658 36.291 14.433 37.037 16.335 Z M 24.7 11.128 C 22.369 11.716 20.185 12.779 18.285 14.252 C 18.968 14.888 21.082 16.16 21.727 16.321 C 22.419 14.435 23.424 12.679 24.7 11.128 Z M 39.999 54.352 C 40.003 54.957 39.874 55.556 39.622 56.107 C 39.148 57.169 38.114 57.87 36.952 57.917 C 36.538 57.956 36.12 57.922 35.718 57.816 C 34.686 57.557 33.865 56.776 33.554 55.758 C 33.241 54.842 33.236 53.848 33.54 52.929 C 33.916 51.685 35.027 50.807 36.325 50.73 C 37.019 50.655 37.718 50.794 38.33 51.13 C 39.148 51.593 39.716 52.397 39.878 53.323 C 39.946 53.659 39.961 54.009 39.999 54.352 Z M 35.677 54.314 L 35.735 54.318 C 35.735 54.584 35.717 54.85 35.738 55.115 C 35.742 55.578 35.84 56.035 36.028 56.458 C 36.134 56.696 36.367 56.852 36.628 56.86 C 36.903 56.878 37.159 56.722 37.268 56.469 C 37.362 56.284 37.429 56.087 37.468 55.883 C 37.625 54.96 37.643 54.018 37.52 53.09 C 37.479 52.794 37.402 52.503 37.29 52.226 C 37.204 51.964 36.958 51.788 36.682 51.793 C 36.397 51.782 36.134 51.949 36.022 52.211 C 35.945 52.353 35.891 52.507 35.865 52.666 C 35.79 53.215 35.737 53.764 35.677 54.314 Z M 32.684 54.35 C 32.722 54.964 32.601 55.578 32.334 56.132 C 31.841 57.212 30.767 57.91 29.58 57.922 C 29.049 57.961 28.516 57.877 28.023 57.675 C 27.186 57.33 26.547 56.63 26.279 55.765 C 25.971 54.86 25.961 53.88 26.252 52.969 C 26.625 51.67 27.796 50.763 29.147 50.727 C 30.202 50.674 31.129 50.964 31.849 51.782 C 32.342 52.356 32.634 53.076 32.679 53.832 C 32.696 54.002 32.684 54.176 32.684 54.35 Z M 30.343 54.413 C 30.311 53.923 30.31 53.551 30.258 53.188 C 30.214 52.869 30.137 52.555 30.029 52.252 C 29.946 51.975 29.691 51.786 29.402 51.788 C 29.102 51.776 28.829 51.963 28.733 52.248 C 28.628 52.478 28.559 52.726 28.531 52.978 C 28.485 53.726 28.466 54.475 28.473 55.224 C 28.465 55.654 28.563 56.08 28.755 56.464 C 28.86 56.704 29.095 56.862 29.357 56.868 C 29.62 56.875 29.862 56.729 29.979 56.494 C 30.089 56.304 30.163 56.096 30.194 55.879 C 30.265 55.352 30.302 54.824 30.341 54.413 Z M 13.048 52.349 C 13.087 52.365 13.127 52.377 13.168 52.386 C 13.57 52.382 13.901 52.704 13.906 53.106 C 13.906 53.13 13.906 53.154 13.904 53.177 C 13.938 53.648 13.618 54.071 13.156 54.166 C 12.996 54.193 12.834 54.201 12.673 54.19 C 12.164 54.177 11.747 53.782 11.707 53.274 C 11.613 52.619 11.854 51.961 12.349 51.522 C 12.871 51.057 13.536 50.782 14.234 50.742 C 15.076 50.626 15.933 50.796 16.668 51.224 C 17.48 51.691 17.877 52.646 17.634 53.551 C 17.516 54.017 17.211 54.414 16.79 54.648 C 16.31 54.928 15.797 55.143 15.263 55.292 C 14.877 55.41 14.486 55.515 14.108 55.657 C 13.754 55.757 13.45 55.988 13.256 56.302 C 13.331 56.284 13.406 56.262 13.479 56.235 C 14.1 55.942 14.805 55.878 15.469 56.055 C 15.681 56.112 15.896 56.159 16.112 56.195 C 16.58 56.265 16.767 56.11 16.822 55.628 C 16.83 55.559 16.834 55.491 16.844 55.378 C 17.203 55.353 17.563 55.355 17.922 55.383 C 17.964 56.013 17.964 56.617 17.656 57.178 C 17.369 57.703 16.875 57.872 16.326 57.92 C 15.795 57.955 15.262 57.891 14.754 57.73 C 14.422 57.634 14.091 57.527 13.753 57.457 C 13.42 57.389 13.075 57.346 12.867 57.713 L 11.72 57.713 C 11.669 57.189 11.768 56.661 12.004 56.19 C 12.301 55.65 12.731 55.195 13.252 54.868 C 13.642 54.599 14.05 54.358 14.448 54.102 C 14.595 54.011 14.738 53.912 14.874 53.805 C 15.171 53.573 15.337 53.211 15.32 52.834 C 15.327 52.488 15.122 52.173 14.804 52.038 C 14.211 51.762 13.509 51.886 13.047 52.348 Z M 20.483 50.917 L 20.52 51.537 C 20.566 51.501 20.609 51.461 20.649 51.418 C 21.076 50.832 21.673 50.695 22.339 50.811 C 22.677 50.886 23.009 50.983 23.334 51.099 C 23.531 51.159 23.727 51.229 23.923 51.297 C 24.084 51.362 24.268 51.324 24.391 51.201 L 24.507 50.931 L 25.38 50.931 C 25.442 51.122 25.432 51.328 25.353 51.512 C 25.15 51.977 24.949 52.444 24.713 52.891 C 24.409 53.461 24.061 54.008 23.751 54.575 C 23.31 55.432 23.076 56.381 23.067 57.345 L 23.048 57.703 L 20.815 57.703 C 20.761 57.443 20.753 57.176 20.791 56.913 C 20.856 55.921 21.285 54.988 21.996 54.293 C 22.466 53.831 22.953 53.389 23.43 52.936 C 23.537 52.834 23.636 52.723 23.797 52.556 C 23.66 52.586 23.602 52.594 23.547 52.612 C 23.07 52.755 22.565 52.777 22.077 52.675 C 21.817 52.625 21.555 52.589 21.291 52.569 C 21.117 52.548 20.941 52.597 20.803 52.705 C 20.666 52.814 20.577 52.973 20.556 53.147 L 20.555 53.157 C 20.522 53.327 20.501 53.497 20.492 53.671 C 20.482 53.783 20.482 53.897 20.475 54.027 L 19.278 54.027 L 19.278 50.931 C 19.477 50.927 19.668 50.92 19.86 50.916 Z M 41.795 51.801 C 42.437 51.699 43.075 51.602 43.402 50.931 L 45.135 50.931 C 45.141 51.06 45.149 51.182 45.15 51.305 L 45.15 56.022 C 45.15 56.103 45.148 56.184 45.15 56.265 C 45.161 56.619 45.27 56.737 45.63 56.759 C 45.801 56.769 45.973 56.761 46.162 56.761 C 46.2 57.063 46.209 57.366 46.192 57.669 C 45.916 57.738 42.368 57.761 41.8 57.701 L 41.8 56.803 C 42.119 56.701 42.488 56.854 42.848 56.618 C 42.895 56.495 42.925 56.366 42.938 56.236 C 42.948 55.138 42.944 54.039 42.943 52.941 C 42.936 52.884 42.924 52.828 42.907 52.773 L 41.794 52.773 L 41.794 51.801 Z M 29.165 0.445 L 29.674 2.525 L 29.748 2.525 L 30.311 0.477 L 31.703 0.477 L 31.703 4.014 L 30.84 4.014 L 30.84 1.51 C 30.526 2.32 30.337 3.162 30.08 4.003 L 29.286 4.003 L 28.671 1.458 L 28.598 1.46 C 28.595 1.666 28.59 1.872 28.588 2.078 C 28.585 2.284 28.584 2.495 28.582 2.703 C 28.58 2.923 28.583 3.143 28.574 3.363 C 28.564 3.569 28.541 3.773 28.522 4.01 L 27.754 3.968 C 27.678 3.715 27.681 0.978 27.755 0.445 Z M 47.168 11.568 L 46.413 10.89 L 46.721 8.588 L 46.661 8.563 L 45.391 9.958 L 44.645 9.268 L 47.044 6.616 L 47.788 7.312 L 47.469 9.618 L 47.526 9.649 L 48.811 8.243 L 49.569 8.923 L 47.169 11.568 Z M 14.33 7.039 L 13.232 5.539 L 14.045 4.928 L 16.165 7.801 L 15.349 8.416 L 13.077 7.626 C 13.465 8.213 13.861 8.698 14.235 9.232 L 13.424 9.84 L 11.3 6.966 L 12.115 6.361 L 14.27 7.11 Z M 55.516 30.188 C 55.109 30.648 54.746 30.873 53.906 31.181 L 53.906 30.006 L 55.036 29.426 C 55.213 29.362 55.348 29.217 55.4 29.036 C 55.406 28.966 55.407 28.896 55.4 28.826 L 53.993 28.826 C 53.956 28.463 53.955 28.097 53.989 27.733 C 55.177 27.691 56.343 27.808 57.533 27.793 C 57.533 28.142 57.539 28.452 57.532 28.761 C 57.522 29.143 57.502 29.524 57.484 29.905 C 57.481 29.973 57.48 30.043 57.469 30.112 C 57.394 30.632 57.117 30.932 56.675 30.979 C 56.187 31.082 55.702 30.793 55.561 30.314 C 55.547 30.271 55.532 30.229 55.516 30.187 Z M 56.64 29.852 C 56.832 29.574 56.858 29.372 56.769 28.887 L 56.119 28.844 C 56.041 29.051 56.025 29.276 56.073 29.492 C 56.147 29.864 56.233 29.922 56.64 29.852 Z M 23.256 1.074 C 23.884 0.969 24.472 0.869 25.062 0.776 C 25.255 0.741 25.45 0.721 25.645 0.716 C 26.066 0.684 26.45 0.957 26.557 1.365 C 26.698 1.785 26.546 2.248 26.182 2.501 C 26.119 2.546 26.054 2.585 25.98 2.633 C 26.504 2.933 26.737 3.187 27.255 4.022 C 27.056 4.059 26.869 4.096 26.681 4.129 C 26.488 4.163 26.295 4.192 26.081 4.227 C 25.815 3.884 25.545 3.54 25.278 3.194 C 25.159 2.985 24.899 2.903 24.681 3.004 L 24.897 4.419 L 23.836 4.597 Z M 25.543 1.899 C 25.51 1.615 25.383 1.464 25.157 1.479 C 24.91 1.471 24.666 1.523 24.443 1.629 L 24.572 2.319 C 24.966 2.258 25.35 2.294 25.542 1.899 Z M 18.98 3.498 C 18.986 2.288 20.09 1.778 21.012 1.755 C 22.161 1.725 22.718 2.755 22.751 3.783 C 22.786 4.924 21.8 5.486 20.691 5.523 C 19.629 5.56 19.033 4.556 18.98 3.498 Z M 21.692 3.933 C 21.676 3.563 21.556 3.205 21.344 2.901 C 21.152 2.642 20.809 2.546 20.511 2.669 C 20.213 2.764 20.016 3.047 20.031 3.359 C 20.046 3.741 20.18 4.11 20.413 4.413 C 20.601 4.663 20.937 4.747 21.22 4.617 C 21.521 4.532 21.72 4.245 21.692 3.933 Z M 45.453 6.28 C 45.413 7.055 44.974 7.755 44.293 8.128 C 43.94 8.314 43.526 8.344 43.15 8.21 C 42.717 8.077 42.327 7.83 42.023 7.494 C 41.663 7.116 41.527 6.577 41.665 6.074 C 41.777 5.597 42.036 5.168 42.405 4.847 C 42.829 4.449 43.444 4.329 43.987 4.539 C 44.428 4.684 44.819 4.953 45.112 5.314 C 45.342 5.583 45.462 5.926 45.452 6.279 Z M 44.444 6.142 C 44.444 5.639 43.861 5.146 43.374 5.45 C 42.959 5.697 42.686 6.127 42.64 6.608 C 42.589 7.115 43.194 7.548 43.633 7.314 C 44.066 7.065 44.364 6.635 44.444 6.142 Z M 3.189 34.038 C 2.277 34.038 1.694 33.602 1.494 32.755 C 1.417 32.453 1.392 32.141 1.419 31.831 C 1.506 31.043 1.909 30.609 2.678 30.415 C 3.001 30.327 3.338 30.302 3.67 30.343 C 4.274 30.402 4.783 30.819 4.959 31.4 C 5.091 31.773 5.138 32.17 5.093 32.563 C 5.047 33.119 4.698 33.603 4.186 33.824 C 3.876 33.974 3.534 34.048 3.189 34.037 Z M 3.455 31.397 C 3.142 31.389 2.833 31.46 2.555 31.604 C 2.303 31.762 2.174 32.059 2.231 32.351 C 2.262 32.651 2.491 32.891 2.787 32.937 C 3.153 33.007 3.53 32.961 3.869 32.809 C 4.148 32.699 4.32 32.416 4.289 32.117 C 4.269 31.648 3.982 31.399 3.455 31.397 Z M 57.483 26.398 C 57.229 26.441 57.006 26.482 56.782 26.515 C 56.303 26.585 55.824 26.658 55.344 26.717 C 54.652 26.804 53.91 26.491 53.738 25.636 C 53.666 25.297 53.63 24.952 53.63 24.606 C 53.609 24.088 53.937 23.621 54.431 23.464 C 54.793 23.352 55.165 23.272 55.541 23.224 C 56.007 23.148 56.476 23.095 56.944 23.032 C 57.079 23.367 57.134 23.73 57.106 24.089 C 56.614 24.162 56.114 24.233 55.614 24.306 C 55.396 24.337 55.177 24.354 54.964 24.401 C 54.764 24.427 54.59 24.551 54.498 24.731 C 54.407 24.911 54.41 25.124 54.507 25.301 C 54.585 25.529 54.811 25.672 55.05 25.645 C 55.349 25.62 55.645 25.58 55.942 25.539 C 56.319 25.488 56.695 25.427 57.071 25.376 C 57.156 25.37 57.241 25.37 57.327 25.375 Z M 53.404 18.325 L 52.634 16.775 L 51.979 17.099 L 52.819 18.806 L 52.139 19.154 C 52.107 19.114 52.077 19.072 52.05 19.028 L 50.784 16.467 L 53.99 14.883 L 55.29 17.529 L 54.635 17.86 L 53.799 16.198 L 53.269 16.455 L 54.026 18.005 Z M 52.538 14.351 L 51.955 13.609 C 52.147 13.151 52.098 12.847 51.817 12.683 C 51.661 12.592 51.592 12.617 51.407 12.85 L 51.561 13.32 C 51.655 13.605 51.767 13.885 51.839 14.175 C 51.955 14.54 51.845 14.938 51.559 15.192 C 51.258 15.479 50.82 15.57 50.43 15.427 C 50.278 15.374 50.136 15.295 50.011 15.194 C 49.606 14.862 49.308 14.417 49.156 13.916 C 49.012 13.436 49.202 12.918 49.621 12.643 L 50.225 13.406 C 50.063 13.64 49.905 13.876 50.039 14.169 C 50.113 14.382 50.298 14.537 50.521 14.571 C 50.831 14.451 50.91 14.326 50.833 14.029 C 50.787 13.85 50.695 13.684 50.652 13.506 C 50.573 13.218 50.518 12.923 50.488 12.626 C 50.447 12.036 51.079 11.636 51.608 11.779 C 51.732 11.807 51.849 11.857 51.956 11.926 C 52.476 12.284 52.834 12.833 52.955 13.453 C 53.015 13.764 52.875 14.043 52.538 14.351 Z M 2.942 35.115 L 3.283 36.044 C 3.024 36.238 2.883 36.47 3.031 36.792 C 3.117 36.981 3.181 37.018 3.439 37.01 C 3.625 36.867 3.574 36.664 3.571 36.47 C 3.555 36.114 3.558 35.757 3.581 35.401 C 3.663 34.55 4.681 34.291 5.287 34.755 C 5.417 34.852 5.527 34.971 5.614 35.108 C 5.928 35.599 6.066 36.184 6.005 36.765 C 5.95 37.225 5.63 37.475 5.208 37.674 L 4.857 36.746 C 5.417 36.26 5.411 35.774 4.851 35.525 C 4.543 35.615 4.484 35.675 4.474 35.969 C 4.466 36.199 4.49 36.433 4.479 36.663 C 4.477 36.882 4.452 37.101 4.405 37.315 C 4.334 37.607 4.123 37.845 3.841 37.949 C 3.56 38.054 3.244 38.012 3 37.837 C 2.875 37.754 2.767 37.647 2.683 37.522 C 2.361 37.049 2.216 36.478 2.272 35.908 C 2.321 35.535 2.583 35.226 2.942 35.115 Z M 35.893 4.81 L 34.81 4.6 L 34.717 3.983 L 33.487 3.748 L 33.162 4.292 L 32.104 4.082 L 34.081 0.829 L 35.241 1.05 C 35.477 2.283 35.684 3.516 35.894 4.81 Z M 34.633 3.208 C 34.628 2.773 34.559 2.34 34.428 1.925 L 33.841 3.042 Z M 6.66 17.733 C 6.471 17.688 6.277 17.659 6.093 17.597 C 5.644 17.446 5.227 17.214 4.861 16.914 C 4.381 16.587 4.211 15.958 4.463 15.434 C 4.543 15.231 4.649 15.037 4.78 14.863 C 5.038 14.491 5.497 14.314 5.938 14.419 C 6.563 14.547 7.141 14.842 7.612 15.273 C 8.067 15.615 8.197 16.243 7.915 16.738 C 7.817 16.947 7.695 17.142 7.551 17.322 C 7.331 17.586 7.004 17.736 6.661 17.732 Z M 6.795 16.823 C 7.05 16.833 7.189 16.763 7.255 16.603 C 7.333 16.426 7.281 16.219 7.128 16.101 C 6.694 15.719 6.179 15.442 5.622 15.29 C 5.437 15.229 5.236 15.31 5.145 15.482 C 5.06 15.626 5.075 15.808 5.183 15.935 C 5.216 15.983 5.255 16.025 5.301 16.061 C 5.701 16.373 6.147 16.619 6.624 16.791 C 6.68 16.807 6.737 16.818 6.795 16.823 Z M 54.43 21.637 L 54.43 22.527 C 53.848 22.677 53.241 22.392 52.986 21.848 C 52.816 21.518 52.716 21.156 52.694 20.786 C 52.64 20.192 52.944 19.624 53.468 19.339 C 53.872 19.086 54.343 18.959 54.82 18.972 C 55.218 18.972 55.598 19.142 55.863 19.44 C 56.253 19.877 56.456 20.45 56.43 21.035 C 56.407 21.494 56.155 21.91 55.76 22.144 L 55.286 21.321 C 55.33 21.271 55.369 21.23 55.406 21.187 C 55.6 20.972 55.64 20.659 55.506 20.402 C 55.372 20.145 55.092 19.999 54.805 20.035 C 54.478 20.097 54.16 20.202 53.861 20.349 C 53.592 20.467 53.454 20.768 53.542 21.049 C 53.587 21.332 53.81 21.554 54.094 21.598 C 54.193 21.616 54.296 21.621 54.43 21.638 Z M 5.09 20.909 C 4.441 20.84 3.823 20.599 3.298 20.211 C 2.945 19.965 2.78 19.528 2.883 19.11 C 2.933 18.862 3.011 18.621 3.115 18.392 C 3.315 17.928 3.806 17.659 4.305 17.742 C 4.916 17.798 5.502 18.011 6.007 18.36 C 6.49 18.635 6.703 19.22 6.509 19.742 C 6.466 19.897 6.409 20.049 6.342 20.195 C 6.114 20.69 5.717 20.912 5.091 20.909 Z M 5.329 20.009 C 5.608 20.008 5.755 19.914 5.819 19.738 C 5.883 19.569 5.821 19.378 5.671 19.278 C 5.567 19.188 5.451 19.112 5.327 19.052 C 5.051 18.936 4.771 18.829 4.488 18.732 C 4.357 18.688 4.222 18.656 4.085 18.638 C 3.873 18.599 3.662 18.712 3.578 18.91 C 3.51 19.08 3.561 19.235 3.752 19.39 C 3.83 19.46 3.918 19.515 4.013 19.557 C 4.366 19.696 4.722 19.827 5.079 19.954 C 5.162 19.978 5.246 19.996 5.332 20.008 L 5.329 20.01 Z M 2.427 26.786 L 2.263 27.693 C 1.56 27.548 1.247 27.168 1.264 26.467 C 1.271 26.178 1.312 25.891 1.386 25.612 C 1.464 25.278 1.708 25.007 2.032 24.895 C 2.355 24.782 2.714 24.843 2.983 25.056 C 3.244 25.266 3.459 25.528 3.615 25.826 L 4.036 26.5 C 4.203 26.24 4.128 25.992 4.166 25.764 C 4.203 25.526 4.219 25.285 4.249 25.001 L 5.022 25.043 L 4.757 28.012 C 4.416 27.94 4.103 27.769 3.859 27.52 C 3.629 27.263 3.429 26.978 3.224 26.7 C 3.101 26.532 2.994 26.353 2.878 26.182 C 2.839 26.124 2.796 26.07 2.748 26.02 C 2.622 25.862 2.415 25.793 2.22 25.844 C 2.051 25.904 1.936 26.061 1.93 26.24 C 1.923 26.443 2.048 26.628 2.24 26.696 C 2.293 26.717 2.343 26.744 2.427 26.786 Z M 18.025 4.35 L 18.345 4.956 L 17.121 5.62 L 17.787 6.915 L 16.835 7.425 L 15.175 4.258 L 17.575 2.996 L 17.93 3.642 L 16.502 4.408 L 16.792 4.988 Z M 53.048 39.625 L 51.684 39.026 L 52.114 38.039 L 53.495 38.627 L 55.941 38.193 L 55.464 39.279 L 54.055 39.472 L 54.871 40.634 L 54.4 41.732 Z M 37.793 5.493 L 36.776 5.146 L 37.629 2.616 C 37.311 2.404 36.929 2.372 36.579 2.187 L 36.853 1.396 L 40.018 2.475 L 39.744 3.282 L 38.669 2.932 L 37.793 5.492 Z M 53.285 34.41 L 55.897 35.094 L 56.201 34.005 L 57.021 34.221 L 56.178 37.451 L 55.348 37.249 L 55.627 36.151 L 53.018 35.454 L 53.285 34.409 Z M 2.389 23.974 L 1.618 23.79 L 2.248 20.983 L 2.874 21.12 C 3.451 22.066 4.367 22.758 5.435 23.053 L 5.229 23.976 C 4.263 23.674 3.419 23.07 2.822 22.252 C 2.627 22.839 2.57 23.4 2.389 23.974 Z M 7.565 12.837 C 7.497 13.182 7.44 13.475 7.378 13.767 C 7.358 13.827 7.332 13.885 7.3 13.94 L 6.685 13.488 C 6.855 12.963 6.927 12.443 6.637 11.931 L 7.117 11.276 L 10.033 13.431 L 9.459 14.225 Z M 12.795 10.408 L 12.05 11.207 L 9.598 8.621 L 10.349 7.837 Z M 40.362 6.605 L 39.386 6.135 L 40.906 2.907 L 41.891 3.366 L 40.361 6.605 Z M 6.596 37.925 L 7.023 38.923 L 3.752 40.34 L 3.323 39.343 Z M 53.628 32.715 L 53.783 31.665 C 54.958 31.808 56.108 31.985 57.298 32.164 L 57.153 33.217 C 55.975 33.069 54.8 32.902 53.628 32.715 Z" fill="rgb(101,105,115)"></path><path d="M 44.841 28.832 C 44.851 29.763 44.645 30.683 44.239 31.52 C 43.719 32.54 42.844 33.335 41.779 33.755 C 41.006 34.062 40.186 34.234 39.355 34.264 C 38.387 34.341 37.413 34.235 36.483 33.953 C 34.473 33.307 33.268 31.948 32.962 29.831 C 32.81 28.867 32.871 27.882 33.142 26.945 C 33.548 25.516 34.609 24.366 36 23.845 C 37.192 23.391 38.476 23.233 39.742 23.385 C 40.469 23.435 41.182 23.608 41.85 23.897 C 43.437 24.554 44.543 26.02 44.74 27.727 C 44.793 28.093 44.808 28.465 44.841 28.832 Z M 40.892 28.832 C 40.86 28.337 40.844 27.839 40.789 27.347 C 40.749 26.792 40.599 26.251 40.348 25.754 C 40.071 25.201 39.498 24.86 38.88 24.882 C 38.251 24.851 37.661 25.19 37.371 25.749 C 37.167 26.139 37.035 26.563 36.98 27 C 36.817 28.075 36.798 29.168 36.922 30.248 C 36.96 30.744 37.079 31.232 37.272 31.689 C 37.537 32.312 38.143 32.722 38.82 32.737 C 39.497 32.751 40.12 32.368 40.412 31.757 C 40.518 31.527 40.602 31.287 40.659 31.039 C 40.816 30.313 40.893 29.575 40.893 28.833 Z M 29.76 27.152 C 29.692 26.962 29.64 26.81 29.584 26.658 C 29.205 25.638 28.444 25.119 27.391 25.006 C 26.99 24.944 26.581 24.967 26.189 25.072 C 25.932 25.146 25.701 25.289 25.519 25.485 C 25.144 25.901 25.185 26.369 25.661 26.66 C 25.938 26.824 26.238 26.948 26.549 27.03 C 27.204 27.21 27.874 27.34 28.532 27.518 C 29.296 27.703 30.026 28.008 30.694 28.422 C 31.413 28.871 31.874 29.638 31.932 30.484 C 32.054 31.343 31.814 32.214 31.268 32.888 C 30.854 33.376 30.315 33.742 29.708 33.946 C 28.897 34.219 28.04 34.328 27.186 34.266 C 26.181 34.211 25.197 33.957 24.292 33.517 C 24.252 33.498 24.208 33.487 24.141 33.464 L 23.755 34.007 L 22.394 34.007 L 22.394 30.234 C 22.629 30.198 22.868 30.188 23.104 30.204 C 23.334 30.199 23.564 30.204 23.824 30.204 C 23.871 30.328 23.914 30.444 23.961 30.559 C 24.435 31.69 25.23 32.449 26.458 32.685 C 26.865 32.779 27.289 32.77 27.692 32.658 C 27.912 32.593 28.118 32.488 28.301 32.347 C 28.507 32.199 28.629 31.96 28.629 31.706 C 28.629 31.453 28.506 31.214 28.299 31.067 C 28.003 30.848 27.675 30.676 27.326 30.557 C 26.651 30.321 25.956 30.149 25.276 29.931 C 24.801 29.788 24.334 29.619 23.877 29.426 C 23.01 29.039 22.374 28.411 22.182 27.455 C 21.874 25.928 22.514 24.601 23.91 23.863 C 24.508 23.558 25.165 23.386 25.836 23.359 C 27.108 23.265 28.384 23.496 29.542 24.032 C 29.584 24.052 29.628 24.066 29.703 24.095 L 29.986 23.622 L 31.419 23.622 L 31.419 27.144 C 31.153 27.146 30.881 27.151 30.61 27.152 Z M 21.177 32.53 L 21.177 33.948 L 15.123 33.948 L 15.123 32.53 C 15.31 32.53 15.493 32.534 15.673 32.529 C 15.799 32.529 15.925 32.519 16.051 32.497 C 16.243 32.478 16.396 32.327 16.418 32.135 C 16.446 31.988 16.464 31.839 16.471 31.689 C 16.475 29.769 16.475 27.846 16.471 25.925 C 16.471 25.245 16.309 25.09 15.631 25.079 C 15.471 25.077 15.309 25.079 15.123 25.079 L 15.123 23.667 L 21.135 23.667 C 21.215 24.125 21.221 24.594 21.155 25.056 C 21.071 25.064 20.983 25.074 20.894 25.08 C 20.804 25.086 20.709 25.08 20.616 25.082 C 19.998 25.104 19.852 25.237 19.852 25.848 C 19.846 27.816 19.846 29.783 19.852 31.751 C 19.854 32.382 20.002 32.518 20.635 32.531 L 21.177 32.531 Z" fill="rgb(101,105,115)"></path></svg>`,
                              svgContentId: 10329519600,
                              withExternalLayout: !0,
                            }),
                            h(ce, {
                              href: `https://www.gitbook.com/blog/gitbook-security-soc2-iso27001`,
                              motionChild: !0,
                              nodeId: `Ceqe8WLjq`,
                              scopeId: `F3xvXn3dp`,
                              children: h(oe, {
                                as: `a`,
                                background: {
                                  alt: `The SOC 2 logo`,
                                  fit: `fill`,
                                  intrinsicHeight: 60,
                                  intrinsicWidth: 60,
                                  loading: F(
                                    (c?.y || 0) + 32 + 608 + 0 + 0 + 16 + 0 + 0
                                  ),
                                  pixelHeight: 60,
                                  pixelWidth: 60,
                                  src: `https://framerusercontent.com/images/3vCnccFnfLn8iONRaVJFrNyuqE.svg`,
                                },
                                className: `framer-jcns31 framer-9se9vx`,
                                "data-framer-name": `SOC2`,
                                layoutDependency: T,
                                layoutId: `Ceqe8WLjq`,
                                ...G(
                                  {
                                    gJXMtPbfA: {
                                      background: {
                                        alt: `The SOC 2 logo`,
                                        fit: `fill`,
                                        intrinsicHeight: 60,
                                        intrinsicWidth: 60,
                                        loading: F(
                                          (c?.y || 0) +
                                            32 +
                                            1706 +
                                            0 +
                                            0 +
                                            16 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 60,
                                        pixelWidth: 60,
                                        src: `https://framerusercontent.com/images/3vCnccFnfLn8iONRaVJFrNyuqE.svg`,
                                      },
                                    },
                                    Zt2kSiUz7: {
                                      background: {
                                        alt: `The SOC 2 logo`,
                                        fit: `fill`,
                                        intrinsicHeight: 60,
                                        intrinsicWidth: 60,
                                        loading: F(
                                          (c?.y || 0) +
                                            32 +
                                            1075 +
                                            0 +
                                            0 +
                                            16 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 60,
                                        pixelWidth: 60,
                                        src: `https://framerusercontent.com/images/3vCnccFnfLn8iONRaVJFrNyuqE.svg`,
                                      },
                                    },
                                  },
                                  m,
                                  b
                                ),
                              }),
                            }),
                          ],
                        }),
                        x(E.div, {
                          className: `framer-zch4mo`,
                          "data-framer-name": `Group 16`,
                          layoutDependency: T,
                          layoutId: `bynM0Vjta`,
                          children: [
                            h(E.div, {
                              className: `framer-1vvdrl5`,
                              "data-framer-name": `Frame 18`,
                              layoutDependency: T,
                              layoutId: `Xf9urW58C`,
                              children: h(j, {
                                __fromCanvasComponent: !0,
                                children: h(C, {
                                  children: h(E.p, {
                                    style: {
                                      "--font-selector": `R0Y7QUJDIEZhdm9yaXQgVmFyaWFibGUtcmVndWxhcg==`,
                                      "--framer-font-family": `"ABC Favorit Variable", "ABC Favorit Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(101, 105, 115))`,
                                    },
                                    children: `Â© 2025 Copyright GitBook INC.`,
                                  }),
                                }),
                                className: `framer-1j6pilp`,
                                "data-framer-name": `Â© 2025 Copyright GitBook INC.`,
                                fonts: [`GF;ABC Favorit Variable-regular`],
                                layoutDependency: T,
                                layoutId: `Ubc3pLhZh`,
                                style: {
                                  "--extracted-r6o4lv": `rgb(101, 105, 115)`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            h(j, {
                              __fromCanvasComponent: !0,
                              children: h(C, {
                                children: h(E.p, {
                                  style: {
                                    "--font-selector": `R0Y7QUJDIEZhdm9yaXQgVmFyaWFibGUtcmVndWxhcg==`,
                                    "--framer-font-family": `"ABC Favorit Variable", "ABC Favorit Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-line-height": `150%`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(101, 105, 115))`,
                                  },
                                  children: `440 N Barranca Ave #7171, Covina, CA 91723, USA. EIN: 320502699`,
                                }),
                              }),
                              className: `framer-kxu54x`,
                              "data-framer-name": `440 N Barranca Ave #7171, Covina, CA 91723, USA. EIN: 320502699`,
                              fonts: [`GF;ABC Favorit Variable-regular`],
                              layoutDependency: T,
                              layoutId: `NM_ENEL3i`,
                              style: {
                                "--extracted-r6o4lv": `rgb(101, 105, 115)`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `center`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Nt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-qalEx.framer-9se9vx, .framer-qalEx .framer-9se9vx { display: block; }`,
        `.framer-qalEx.framer-14hfzvl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 32px 0px; position: relative; width: 1200px; }`,
        `.framer-qalEx .framer-1f8pwx8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 1024px; }`,
        `.framer-qalEx .framer-1sniu86 { flex: none; gap: 0px; height: 32px; overflow: hidden; position: relative; text-decoration: none; width: 149px; }`,
        `.framer-qalEx .framer-bgeyb9 { flex: none; height: 30px; left: 0px; position: absolute; top: 1px; width: 149px; }`,
        `.framer-qalEx .framer-znt0e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-qalEx .framer-15ebxq7, .framer-qalEx .framer-n1j5qy, .framer-qalEx .framer-kwqyji, .framer-qalEx .framer-12slw2y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-qalEx .framer-16adz2i { flex: none; height: 20px; position: relative; width: 20px; }`,
        `.framer-qalEx .framer-1hsh9yo { flex: none; height: 17px; position: relative; width: 16px; }`,
        `.framer-qalEx .framer-1vbsbuz { flex: none; height: 19px; position: relative; width: 19px; }`,
        `.framer-qalEx .framer-1niapoi { flex: none; height: 15px; position: relative; width: 20px; }`,
        `.framer-qalEx .framer-5938ak { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 1024px; }`,
        `.framer-qalEx .framer-9jjd8e, .framer-qalEx .framer-uga373 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-qalEx .framer-9zg9nz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 107px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-qalEx .framer-dcrsya, .framer-qalEx .framer-56shmk, .framer-qalEx .framer-8hsnfs, .framer-qalEx .framer-177g9gy, .framer-qalEx .framer-pr0t6u, .framer-qalEx .framer-1j6pilp, .framer-qalEx .framer-kxu54x { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-qalEx .framer-70lmo4, .framer-qalEx .framer-115ite7, .framer-qalEx .framer-19908jt, .framer-qalEx .framer-a1fg1w, .framer-qalEx .framer-1a3vf1m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-qalEx .framer-1akm2w1-container, .framer-qalEx .framer-1wgfloz-container, .framer-qalEx .framer-ajb7dd-container, .framer-qalEx .framer-109aj6v-container, .framer-qalEx .framer-15knw4v-container, .framer-qalEx .framer-rjxzey-container, .framer-qalEx .framer-1o8e2y4-container, .framer-qalEx .framer-12ound6-container, .framer-qalEx .framer-1g1h0f-container, .framer-qalEx .framer-1mm9v56-container, .framer-qalEx .framer-rhi3ti-container, .framer-qalEx .framer-13kiilc-container, .framer-qalEx .framer-azov7x-container, .framer-qalEx .framer-fei3rx-container, .framer-qalEx .framer-1vkhcko-container, .framer-qalEx .framer-8soua7-container, .framer-qalEx .framer-1s1c9kk-container, .framer-qalEx .framer-113yoc6-container, .framer-qalEx .framer-1it3vkd-container, .framer-qalEx .framer-bax0jz-container, .framer-qalEx .framer-1byroc6-container, .framer-qalEx .framer-13adhhv-container, .framer-qalEx .framer-f13wsu-container, .framer-qalEx .framer-qpd2jw-container, .framer-qalEx .framer-1xlojl0-container, .framer-qalEx .framer-1fhfr0d-container, .framer-qalEx .framer-3spfn5-container, .framer-qalEx .framer-1awjd2v-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-qalEx .framer-1uev25e, .framer-qalEx .framer-hfz2lj, .framer-qalEx .framer-s3u41l, .framer-qalEx .framer-vo2cyy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-qalEx .framer-1p6sj6j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 403px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-qalEx .framer-ez9wz0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-qalEx .framer-1ppgko6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-qalEx .framer-1uef5p7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
        `.framer-qalEx .framer-cfoqii { flex: none; height: 59px; position: relative; width: 60px; }`,
        `.framer-qalEx .framer-jcns31 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 60px); overflow: visible; position: relative; text-decoration: none; width: 60px; }`,
        `.framer-qalEx .framer-zch4mo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-qalEx .framer-1vvdrl5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-qalEx.framer-v-mnkd8i.framer-14hfzvl { padding: 32px 40px 32px 40px; width: 810px; }`,
        `.framer-qalEx.framer-v-mnkd8i .framer-5938ak { align-content: unset; align-items: unset; display: grid; gap: 64px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); justify-content: center; max-width: unset; width: 100%; }`,
        `.framer-qalEx.framer-v-mnkd8i .framer-9jjd8e, .framer-qalEx.framer-v-mnkd8i .framer-uga373, .framer-qalEx.framer-v-mnkd8i .framer-hfz2lj, .framer-qalEx.framer-v-mnkd8i .framer-vo2cyy { align-self: start; justify-self: start; width: 100%; }`,
        `.framer-qalEx.framer-v-17n4ldq.framer-14hfzvl { padding: 32px 30px 32px 30px; width: 390px; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-15ebxq7 { gap: 16px; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-5938ak { flex-direction: column; gap: 64px; justify-content: flex-start; max-width: unset; width: 100%; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-9jjd8e { order: 0; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-uga373 { order: 1; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-1p6sj6j { height: min-content; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-hfz2lj { order: 2; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-vo2cyy { order: 3; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-1vvdrl5 { width: 100%; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-1j6pilp { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-qalEx.framer-v-17n4ldq .framer-kxu54x { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-qalEx[data-border="true"]::after, .framer-qalEx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (q = Ae(Mt, Nt, `framer-qalEx`)),
      (Pt = q),
      (q.displayName = `2025/Footer`),
      (q.defaultProps = { height: 733, width: 1200 }),
      me(q, {
        variant: {
          options: [`VLH_EfjEd`, `Zt2kSiUz7`, `gJXMtPbfA`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: O.Enum,
        },
      }),
      pe(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `ABC Favorit Bold`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/W8a3dfvGM3NpHDSLEUaoVi842zk.woff2`,
              },
              {
                family: `ABC Favorit Regular`,
                source: `custom`,
                url: `https://framerusercontent.com/assets/YWayyt1Iml0BqgKTFrny98dORY.otf`,
              },
            ],
          },
          ...Ye,
          ...xt,
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  J,
  Ut,
  Y,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  X,
  Zt,
  Qt = e(() => {
    u(),
      I(),
      T(),
      d(),
      Ft(),
      (It = he(Pt)),
      (Lt = {
        BhdxmsARu: `(min-width: 810px) and (max-width: 1199px)`,
        nvCJlEwPs: `(max-width: 809px)`,
        SHW8V5ncF: `(min-width: 1200px)`,
      }),
      (Rt = `framer-gjxWX`),
      (zt = {
        BhdxmsARu: `framer-v-yo7rze`,
        nvCJlEwPs: `framer-v-36f94i`,
        SHW8V5ncF: `framer-v-s3izw3`,
      }),
      (Bt = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Vt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
          ? { src: e }
          : void 0),
      (Ht = (e) => {
        if (Number.isFinite(e) && e >= 0) return e;
        if (typeof e != `string`) return 0;
        let t = e.split(` `)[0],
          n = parseFloat(t);
        return Number.isFinite(n) && n >= 0 ? n : 0;
      }),
      (J = {}),
      (Ut = Object.keys(J)),
      (Y = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-gjxWX.framer-1703e0y, .framer-gjxWX .framer-1703e0y { display: block; }`,
        `.framer-gjxWX.framer-s3izw3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: var(--alvwck); height: min-content; justify-content: flex-start; overflow: var(--df0ze5); padding: 0px; position: relative; width: 100%; }`,
        `.framer-gjxWX .framer-131ozdb { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: var(--1358nvr); position: relative; width: 0px; }`,
        `.framer-gjxWX .framer-4czs9w-container { flex: none; height: auto; order: 1001; position: relative; width: 100%; z-index: 3; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: var(--1358nvr); }`,
      ]),
      (Wt = {
        BhdxmsARu: `(min-width: 810px) and (max-width: 1199px)`,
        nvCJlEwPs: `(max-width: 809px)`,
        SHW8V5ncF: `(min-width: 1200px)`,
      }),
      (Gt = ({ value: e }) => {
        let t = De();
        return t
          ? null
          : h(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            });
      }),
      (Kt = { Hidden: `hidden`, Scroll: `auto`, Visible: `visible` }),
      (qt = { Desktop: `SHW8V5ncF`, Phone: `nvCJlEwPs`, Tablet: `BhdxmsARu` }),
      (Jt = ({
        backgroundImage: e,
        gap: t,
        height: n,
        id: r,
        overflow: i,
        width: a,
        ...o
      }) => ({
        ...o,
        CKDMwRuy7: e ??
          o.CKDMwRuy7 ?? {
            pixelHeight: 4244,
            pixelWidth: 1440,
            positionX: `50.2%`,
            positionY: `0%`,
            src: `https://framerusercontent.com/images/IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg?scale-down-to=2048`,
            srcSet: `https://framerusercontent.com/images/IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg?scale-down-to=2048 694w,https://framerusercontent.com/images/IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg?scale-down-to=4096 1389w,https://framerusercontent.com/images/IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg 1440w`,
          },
        ifmcMgxQT: Kt[i] ?? i ?? o.ifmcMgxQT ?? `hidden`,
        variant: qt[o.variant] ?? o.variant ?? `SHW8V5ncF`,
        yWkcVCkKG: t ?? o.yWkcVCkKG,
      })),
      (Yt = a(function (e, t) {
        let n = g(null),
          r = t ?? n,
          i = s(),
          { activeLocale: a, setLocale: o } = R(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            yWkcVCkKG: f,
            ifmcMgxQT: p,
            CKDMwRuy7: m,
            children: _,
            ...v
          } = Jt(e),
          [y, b] = Ee(d, Lt, !1),
          ee,
          S = [],
          C = P(Rt, ...S);
        return (
          Te({}),
          h(ae.Provider, {
            value: {
              isLayoutTemplate: !0,
              primaryVariantId: `SHW8V5ncF`,
              variantClassNames: zt,
            },
            children: x(ne, {
              id: u ?? i,
              children: [
                h(Gt, { value: `:root body { background: none; }` }),
                x(oe, {
                  ...v,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    loading: F(0),
                    sizes: `100vw`,
                    ...Vt(m),
                  },
                  className: P(C, `framer-s3izw3`, l),
                  "data-layout-template": !0,
                  ref: r,
                  style: {
                    "--1358nvr": `-${Ht(f)}px`,
                    "--alvwck": Bt(f),
                    "--df0ze5": p,
                    ...c,
                  },
                  children: [
                    _,
                    h(`div`, { className: `framer-131ozdb` }),
                    h(D, {
                      height: 733,
                      width: `100vw`,
                      y: 1e3,
                      children: h(re, {
                        className: `framer-4czs9w-container`,
                        nodeId: `gjJR2jL9a`,
                        scopeId: `mBi68ZMDN`,
                        children: h(de, {
                          breakpoint: y,
                          overrides: {
                            BhdxmsARu: { variant: `Zt2kSiUz7` },
                            nvCJlEwPs: { variant: `gJXMtPbfA` },
                          },
                          children: h(Pt, {
                            height: `100%`,
                            id: `gjJR2jL9a`,
                            layoutId: `gjJR2jL9a`,
                            style: { width: `100%` },
                            variant: `VLH_EfjEd`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                h(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Xt = (e) => {
        let t = e === fe.canvas || e === fe.export;
        return t
          ? [
              ...Y,
              ...Ut.flatMap((e) => {
                let t = J[e];
                return J[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [
              ...Y,
              ...Ut.map((e) => {
                let t = Wt[e];
                return `@media ${t} { ${J[e].join(` `)} }`;
              }),
            ];
      }),
      (X = Ae(Yt, Xt, `framer-gjxWX`)),
      (Zt = X),
      (X.displayName = `Footer`),
      (X.defaultProps = { height: 898, width: 1200 }),
      me(X, {
        yWkcVCkKG: { defaultValue: 0, min: 0, title: `Gap`, type: O.Number },
        ifmcMgxQT: {
          defaultValue: `hidden`,
          options: [`hidden`, `visible`, `auto`],
          optionTitles: [`Hidden`, `Visible`, `Scroll`],
          title: `Overflow`,
          type: O.Enum,
        },
        CKDMwRuy7: {
          __defaultAssetReference: `data:framer/asset-reference,IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg?originalFilename=background+%281%29.svg&preferredSize=auto`,
          __vekterDefault: {
            assetReference: `data:framer/asset-reference,IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg?originalFilename=background+%281%29.svg&preferredSize=auto`,
            positionX: `50.2%`,
            positionY: `0%`,
          },
          title: `Background image`,
          type: O.ResponsiveImage,
        },
      }),
      pe(X, [{ explicitInter: !0, fonts: [] }, ...It], {
        supportsExplicitInterCodegen: !0,
      });
  });
function $t({ routeId: e, children: t, style: r, ...i }) {
  let a = { ifmcMgxQT: `visible`, yWkcVCkKG: 0 },
    o = { ...a, ifmcMgxQT: `hidden` },
    s = {
      ...a,
      CKDMwRuy7: on(
        {
          pixelHeight: 4244,
          pixelWidth: 1440,
          positionX: `91.3%`,
          positionY: `2.1%`,
          src: `https://framerusercontent.com/images/IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg`,
          srcSet: `https://framerusercontent.com/images/IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg?scale-down-to=2048 694w,https://framerusercontent.com/images/IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg?scale-down-to=4096 1389w,https://framerusercontent.com/images/IzXUGCZLLqlmQ5hcs5LDyaBPVBk.svg 1440w`,
        },
        ``
      ),
      ifmcMgxQT: `hidden`,
    },
    c = {
      ABzzm0cM2: o,
      ALARqk1u8: o,
      arIipk7Ib: o,
      BenVzo70l: o,
      BIK4JFLgS: o,
      BP6UT_yY4: o,
      BUlpfdGWy: a,
      cIBffXL4v: o,
      CtsIaGDQX: o,
      dSPYlRFJZ: a,
      DWOQDZ_0K: s,
      F32oQjlbZ: o,
      G9z51JAdl: a,
      gTCBcdcRL: o,
      H158aI4fd: o,
      Img1aPiaN: o,
      IyDLnvQ5n: o,
      K8TUpi7SY: o,
      kStOojbm2: o,
      LdltU0X1v: o,
      MCHiERLyG: o,
      ndAjlx15U: o,
      Of3bNXSiZ: o,
      pghYT3WLA: a,
      rRdraXJT_: a,
      siaJjNlJo: s,
      UMBrHRs1N: a,
      vIFMHMfF9: o,
      vx2qwJUoS: o,
      xiYeD9Jd1: s,
      xUr8UwV1z: o,
      YixgKe4Do: a,
      z3VHfa2TI: o,
      zOEBcwzEd: o,
      ZyGCvUf2K: o,
    },
    l = c[e] ?? {};
  switch (e) {
    case `G9z51JAdl`:
    case `F32oQjlbZ`:
    case `Img1aPiaN`:
    case `vIFMHMfF9`:
    case `ndAjlx15U`:
    case `siaJjNlJo`:
    case `DWOQDZ_0K`:
    case `CtsIaGDQX`:
    case `ZyGCvUf2K`:
    case `zOEBcwzEd`:
    case `IyDLnvQ5n`:
    case `z3VHfa2TI`:
    case `kStOojbm2`:
    case `K8TUpi7SY`:
    case `MCHiERLyG`:
    case `ALARqk1u8`:
    case `ABzzm0cM2`:
    case `BIK4JFLgS`:
    case `pghYT3WLA`:
    case `BUlpfdGWy`:
    case `xiYeD9Jd1`:
    case `BenVzo70l`:
    case `dSPYlRFJZ`:
    case `YixgKe4Do`:
    case `LdltU0X1v`:
    case `UMBrHRs1N`:
    case `gTCBcdcRL`:
    case `vx2qwJUoS`:
    case `arIipk7Ib`:
    case `xUr8UwV1z`:
    case `rRdraXJT_`:
    case `Of3bNXSiZ`:
    case `cIBffXL4v`:
    case `BP6UT_yY4`:
    case `H158aI4fd`:
      return n(Zt, { ...l, key: `Footer`, routeId: e, style: r }, t(!0));
    default:
      return t(!1);
  }
}
function en(e) {
  switch (e) {
    case `G9z51JAdl`:
    case `F32oQjlbZ`:
    case `Img1aPiaN`:
    case `vIFMHMfF9`:
    case `ndAjlx15U`:
    case `siaJjNlJo`:
    case `DWOQDZ_0K`:
    case `CtsIaGDQX`:
    case `ZyGCvUf2K`:
    case `zOEBcwzEd`:
    case `IyDLnvQ5n`:
    case `z3VHfa2TI`:
    case `kStOojbm2`:
    case `K8TUpi7SY`:
    case `MCHiERLyG`:
    case `ALARqk1u8`:
    case `ABzzm0cM2`:
    case `BIK4JFLgS`:
    case `pghYT3WLA`:
    case `BUlpfdGWy`:
    case `xiYeD9Jd1`:
    case `BenVzo70l`:
    case `dSPYlRFJZ`:
    case `YixgKe4Do`:
    case `LdltU0X1v`:
    case `UMBrHRs1N`:
    case `gTCBcdcRL`:
    case `vx2qwJUoS`:
    case `arIipk7Ib`:
    case `xUr8UwV1z`:
    case `rRdraXJT_`:
    case `Of3bNXSiZ`:
    case `cIBffXL4v`:
    case `BP6UT_yY4`:
    case `H158aI4fd`:
      return [
        { hash: `s3izw3`, mediaQuery: `(min-width: 1200px)` },
        {
          hash: `yo7rze`,
          mediaQuery: `(min-width: 810px) and (max-width: 1199px)`,
        },
        { hash: `36f94i`, mediaQuery: `(max-width: 809px)` },
      ];
    default:
      return;
  }
}
async function tn({ routeId: e, pathVariables: t, localeId: a }) {
  let o = Z[e].page.preload(),
    s = n(ue, {
      isWebsite: !0,
      routeId: e,
      pathVariables: t,
      routes: Z,
      collectionUtils: $,
      framerSiteId: an,
      notFoundPage: L(() =>
        import(`./DI3BWZr-IMutf6phiXjT41tVX6fpw0fWsNm8yDvz9uw.DVwMZLsJ.mjs`)
      ),
      isReducedMotion: void 0,
      localeId: a,
      locales: Q,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://www.gitbook.com`,
      EditorBar:
        S === void 0
          ? void 0
          : (() => {
              let e =
                /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
                  m.userAgent
                );
              if (!e)
                return L(async () => {
                  let e = {
                    __version: 1,
                    framer: {
                      useCurrentRoute: we,
                      useLocaleInfo: R,
                      useRouter: Oe,
                    },
                    react: {
                      createElement: n,
                      memo: i,
                      useCallback: b,
                      useEffect: ee,
                      useRef: g,
                      useState: te,
                    },
                    "react-dom": { createPortal: r },
                  };
                  S.__framer_editorBarDependencies = e;
                  let { createEditorBar: t } = await import(
                    `https://edit.framer.com/init.mjs`
                  );
                  return { default: t({ dependencies: e }) };
                });
            })(),
      LayoutTemplate: $t,
    }),
    c = n(se, {
      children: s,
      value: {
        editorBarDisableFrameAncestorsSecurity: !1,
        editorBarOnPageEditing: !1,
        editorBarSendEmails: !1,
        motionDivToDiv: !1,
        motionDivToDivBackgroundImage: !0,
        pauseOffscreen: !0,
        replaceNestedLinks: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1,
      },
    }),
    l = n(k, { children: c }),
    u = n(le, {
      children: l,
      value: {
        global: {
          enter: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.2,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return await o, u;
}
function nn() {
  sn && S.__framer_events.push(arguments);
}
async function rn(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || S.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`,
        e,
        r
      );
    nn(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
          ? e.stack
          : null,
      }
    );
  }
  try {
    let r, i, a, s;
    if (e) {
      let e = JSON.parse(t.dataset.framerHydrateV2);
      (r = e.routeId),
        (i = e.localeId),
        (a = e.pathVariables),
        (s = e.breakpoints),
        (r = ye(Z, r));
    } else {
      ye(Z, void 0);
      let e = ge(Z, decodeURIComponent(location.pathname), !0, Q);
      (r = e.routeId), (i = e.localeId), (a = e.pathVariables);
    }
    let l = tn({ routeId: r, localeId: i, pathVariables: a });
    S !== void 0 &&
      (async () => {
        let e = Z[r],
          t = `default`,
          n = Q.find(({ id: e }) => (i ? e === i : e === t)).code,
          o = null;
        if (e?.collectionId && $) {
          let t = await $[e.collectionId]?.(),
            [r] = Object.values(a);
          t &&
            typeof r == `string` &&
            (o = (await t.getRecordIdBySlug(r, n || void 0)) ?? null);
        }
        let s = Intl.DateTimeFormat().resolvedOptions(),
          c = s.timeZone,
          l = s.locale;
        await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          S.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: an ?? null,
              routePath: e?.path || `/`,
              collectionItemId: o,
              framerLocale: n || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: S.location.href,
              hostname: S.location.hostname || null,
              pathname: S.location.pathname || null,
              hash: S.location.hash || null,
              search: S.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await Me({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: n || null },
            })
          );
      })();
    let u = await l;
    if (e) {
      je(`framer-rewrite-breakpoints`, () => {
        be(s), S.__framer_onRewriteBreakpoints?.(s);
      });
      let e = o;
      e(() => {
        ve(), xe(), c(t, u, { onRecoverableError: n });
      });
    } else _(t, { onRecoverableError: n }).render(u);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Z,
  Q,
  $,
  an,
  on,
  sn,
  cn = e(() => {
    if (
      (p(),
      I(),
      d(),
      f(),
      l(),
      Qt(),
      (Z = {
        G9z51JAdl: {
          elements: {
            bFZnRhwx1: `integrate`,
            CKMeGDP9t: `box3`,
            dKVIFYiDf: `animation-publish`,
            dvF1j9L2Y: `animation-blocks`,
            EUTx5aHqX: `animation-adaptive`,
            GnqXdWDD2: `animation-insights`,
            GrO6CKThx: `collaborate-1`,
            H_nQilvso: `scroll-start`,
            J8_Yi2DLl: `process-cards`,
            m72S7k52o: `box2`,
            NiTGATdXX: `nav-scroll`,
            RhGH6oKw3: `analytics`,
            VCu4wMIdQ: `animation-stats`,
            W8Ev3FCwx: `collaborate`,
            WVpqtMSNU: `animation-collab`,
            X_Hv8ihmn: `publish`,
            xZoSUbzsV: `preview`,
            yPvOXpIQL: `analytics-1`,
          },
          page: L(() =>
            import(`./jvnEPfYNqvMBJxu_06wPjQIwU_hitrECMK5b9l2r2a4.Bz4VpDA_.mjs`)
          ),
          path: `/`,
        },
        F32oQjlbZ: {
          elements: {
            F2JijKNwV: `git-sync`,
            HlUl5fhBP: `visitor-authentication`,
            IH9GhL4oJ: `pre-installed`,
            JvkTzxaPd: `explore-integrations`,
            KNU4UXxdH: `support`,
            pozGJjzcX: `nav-scroll`,
            s2S73eNy6: `interactive`,
            U6aB5vVYy: `analytics`,
          },
          page: L(() =>
            import(`./C0kDwIJ5u-YqQqy7Izpu82DDnsjjJCw0xvIp1fZvztU.r944mSxR.mjs`)
          ),
          path: `/integrations`,
        },
        Img1aPiaN: {
          elements: {
            Fvp993_E0: `explore-integrations`,
            toDk7eFaJ: `nav-scroll`,
          },
          page: L(() =>
            import(`./Di7p-v2riv1P7UtB2nwRZkJ6WetsOXHZmwxE_U98Ooo.TR3Y3_Mc.mjs`)
          ),
          path: `/solutions/public-docs`,
        },
        vIFMHMfF9: {
          elements: { E4SIDntmd: `integrations`, jaK41gMAx: `nav-scroll` },
          page: L(() =>
            import(`./vu2fCapsIj4vQVuopq6AEqXEUCfuJRHe2cGOuZEdDvE.CS5OvAcy.mjs`)
          ),
          path: `/solutions/authenticated-access`,
        },
        ndAjlx15U: {
          elements: { BAK91vJwp: `nav-scroll` },
          page: L(() =>
            import(`./YqacaSXvazCyAFtNRruHF7c1eVYNrwKv2cLnezIT3G4.Do3-ym88.mjs`)
          ),
          path: `/solutions/git-sync`,
        },
        siaJjNlJo: {
          elements: { O8hPCfUku: `nav-scroll` },
          page: L(() =>
            import(`./Gvv6-0jnOshMlJgCYxPEfz8SPAg3sjDLMeVWQK3B5jc.pBxbFYVC.mjs`)
          ),
          path: `/solutions/api`,
        },
        DWOQDZ_0K: {
          elements: {
            HbJ7KXyxa: `nav-scroll`,
            UlLJyFOt0: `auto-translate-waitlist`,
            yBZg6uRGI: `alpha`,
          },
          page: L(() =>
            import(`./MiMccxyYvB8ksgzZboKQgH1wpGJUYhVR9YFRGJJ2tb8.CKXBv8XO.mjs`)
          ),
          path: `/new/ai`,
        },
        CtsIaGDQX: {
          elements: { x1RdOl4Gw: `nav-scroll` },
          page: L(() =>
            import(`./5g6igxcIaOg8lDh_9O0QZ2WTLWNKxsn8ruuNoaWymNQ.6oVpm0j4.mjs`)
          ),
          path: `/solutions/internal-knowledge-base`,
        },
        ZyGCvUf2K: {
          elements: {
            B3DMJcV64: `nav-scroll`,
            htccr9vtP: `compare-core-plans`,
            lPSvpiLjy: `fund-your-project`,
            og_xJJLap: `apply`,
            szwz9WuFS: `register`,
            xsXA3Bq3O: `docs-site-plans`,
          },
          page: L(() =>
            import(`./pMiHAECK7G7o-uMDuP0Uc2f6vf706hVQMUvb2A8XxbI.DhFwZW0U.mjs`)
          ),
          path: `/solutions/open-source`,
        },
        zOEBcwzEd: {
          elements: {
            hYPPsKDMf: `alpha`,
            JLo_VdrJu: `nav-scroll`,
            pE6i121l6: `auto-translate-waitlist`,
          },
          page: L(() =>
            import(`./Obhaa_kMOg_4dmryOeFnd-HB6FgSM07MuNFaS4o1p2U.Dcixuzgc.mjs`)
          ),
          path: `/solutions/ai`,
        },
        IyDLnvQ5n: {
          elements: { RYK_OVi2O: `open-roles`, wZx6CN7hL: `nav-scroll` },
          page: L(() =>
            import(`./puadJwdPB7V4mQRIYuQKvtd_5wZ6YTBWrhMGLNqFKQ8.CYR-dEAB.mjs`)
          ),
          path: `/about`,
        },
        z3VHfa2TI: {
          elements: { TJHAjEdvg: `nav-scroll` },
          page: L(() =>
            import(`./p6mjj8wRtPh2mC-TbDlpXRnUcbQEBSJALXKEcnTH43Y.CLgkuV6h.mjs`)
          ),
          path: `/contact`,
        },
        kStOojbm2: {
          elements: { LC44w8cc5: `nav-scroll` },
          page: L(() =>
            import(`./CoPlpLAd7wWZjyp5ynzjL6ef0w9Ajdi5XohnCdpj-JA.BKjwdWQ0.mjs`)
          ),
          path: `/blog`,
        },
        K8TUpi7SY: {
          elements: { ZP0NynzfV: `nav-scroll` },
          page: L(() =>
            import(`./8T4EclEHFAry2RbV2dkSGUT1hT_QpTapDq6oSvD46oA.DJOS7eWY.mjs`)
          ),
          path: `/events`,
        },
        MCHiERLyG: {
          elements: { UDaKiJh8V: `nav-scroll` },
          page: L(() =>
            import(`./yVCwJEVMCjZTrG5eFw5WOE8W701E0rQuzQqWBpVID38.CtFp-aiy.mjs`)
          ),
          path: `/newsletter`,
        },
        ALARqk1u8: {
          elements: { kuIToobQX: `nav-scroll` },
          page: L(() =>
            import(`./DI3BWZr-IMutf6phiXjT41tVX6fpw0fWsNm8yDvz9uw.DVwMZLsJ.mjs`)
          ),
          path: `/404`,
        },
        ABzzm0cM2: {
          elements: { QJKxDct4e: `nav-scroll` },
          page: L(() =>
            import(`./A4g_oxl0pVfHsIJImiRYBAgYVaHoYUtbJp4Rz54dEqI.azEPPBDW.mjs`)
          ),
          path: `/preview`,
        },
        BIK4JFLgS: {
          elements: { Gp7p9iEHU: `nav-scroll` },
          page: L(() =>
            import(`./OSFoaQIo2szdsSnhR8MIIqWyECh1ZRKmP939ue7Am-4.Cz5OFFhq.mjs`)
          ),
          path: `/videos`,
        },
        pghYT3WLA: {
          elements: {
            CA6yvzYhl: `preview`,
            dnIOJIH5U: `integrate`,
            E6vYXHSKa: `analytics-1`,
            hqqs_aV4V: `video`,
            JY8beSufs: `box3`,
            Mi5sUdDT4: `publish`,
            pxDT887JA: `box2`,
            RhOLQO4xp: `collaborate`,
            SGgHkwLh1: `animation-stats`,
            tdbCRmkhe: `analytics`,
            veYUcMO0A: `animation-stats-1`,
            YvqhRjlnh: `nav-scroll`,
          },
          page: L(() =>
            import(`./wJe5bMzA5hEMoRPIpAXaNhHFl0lG8gMuuXZ3y-5SPgA.C4kwJq7t.mjs`)
          ),
          path: `/new/home`,
        },
        BUlpfdGWy: {
          elements: { l52z4lCLH: `nav-scroll`, tgHL6TyJR: `publish` },
          page: L(() =>
            import(`./GKOjBZ2ZQoMH9fWkfuE9meuB8Cia6ruTAcPaMBrzlfw.5ChftjUU.mjs`)
          ),
          path: `/test`,
        },
        sskntLBkz: {
          elements: {},
          page: L(() =>
            import(`./8Ozce_Sm3IS20Sw5zGifriGnz9yB_mXM4mLYQuLUHX8.H1fqACmu.mjs`)
          ),
          path: `/comparison/gitbook-vs-archbee`,
        },
        RfSndwMPb: {
          elements: {
            Arr_plDSf: `trigger-3`,
            iMrohbPeP: `color-fade-wrapper`,
            kN4J2QtIR: `trigger-5`,
            pFjVKVS_j: `visitor-authentication`,
            VjezcTIjS: `public-docs`,
            wB9cMBAaN: `git-sync`,
          },
          page: L(() =>
            import(`./Z_9L-qAwNVlUsIBbtyL6G9pAP180mpQEzFhvTVVI21k.DvYJIlIt.mjs`)
          ),
          path: `/campaigns/product-docs-enterprise`,
        },
        x1AwGyJ_d: {
          elements: {
            MxgSd4joN: `public-docs`,
            nWPDY4BDB: `color-fade-wrapper`,
            obt63sBI8: `trigger-3`,
            oVyE4RoFY: `visitor-authentication`,
            qM7ncIgD4: `git-sync`,
            V2SRcO4Dy: `trigger-5`,
          },
          page: L(() =>
            import(`./b3fxixdFB1Yui25vAzAOHBDQBVW5Ipmdsde3LASHI_o.DH96JYM_.mjs`)
          ),
          path: `/campaigns/product-docs`,
        },
        ukHRsvU25: {
          elements: {
            H0wENbwCG: `trigger-5`,
            lhSU7zXei: `color-fade-wrapper`,
            OHQW_2Bxu: `trigger-3`,
            p8FaFz0sM: `public-docs`,
            RTOZNB47Q: `git-sync`,
            vKa8Iu9uy: `visitor-authentication`,
          },
          page: L(() =>
            import(`./zNSQGPfzYY0JmVcq0wJZy93DdTA1vvHS5STPWuMiclQ.fYMIZEN6.mjs`)
          ),
          path: `/campaigns/api-docs`,
        },
        fqEVmduz3: {
          elements: {
            FbBpQULI0: `git-sync`,
            IgIIO8zRC: `color-fade-wrapper`,
            mJvHFCJqq: `visitor-authentication`,
            OmTmIOveD: `trigger-3`,
            onwZWqGHG: `public-docs`,
            V53VHx6g_: `trigger-5`,
          },
          page: L(() =>
            import(`./cyOtFVlR406Q-G6IKaLrHZaS0DZOczfbMU_MH1Brh18.Dm8bYkIE.mjs`)
          ),
          path: `/campaigns/git-sync`,
        },
        BenVzo70l: {
          elements: { GKfo1jbZt: `nav-scroll` },
          page: L(() =>
            import(`./zWJvK3V9dFGfz0ERAGh7D_SBZIqHginsqyVzoW4wNjc.namUi8xf.mjs`)
          ),
          path: `/enterprise`,
        },
        TXPP98KzY: {
          elements: {
            a11ksKqyK: `visitor-authentication`,
            Fxxr1QvjJ: `public-docs`,
            kgDmFCCAm: `git-sync`,
            qskSDrJMy: `color-fade-wrapper`,
            sIBGEig3p: `trigger-3`,
            uN46y8xwJ: `trigger-5`,
          },
          page: L(() =>
            import(`./TlSa9a2nLUCrFI6uxi2GM1tbsmvZwKZp-qsBGUv8YZc.DIa2bvO9.mjs`)
          ),
          path: `/campaigns/visitor-authentication`,
        },
        AERHBclYD: {
          elements: {},
          page: L(() =>
            import(`./z1rJF5P18m1Ci1hiBgtTJQ4oaXqg07PQFeK2VmWbzRU.DqwVu7zv.mjs`)
          ),
          path: `/comparison/gitbook-vs-document360`,
        },
        nJevtymn_: {
          elements: {},
          page: L(() =>
            import(`./_WOanLRHR4-EZT2nP1KjU1w-KyE-iEFnJudEMIdVUkU.DQf7yTZo.mjs`)
          ),
          path: `/comparison/gitbook-vs-confluence`,
        },
        yEs21W26z: {
          elements: {},
          page: L(() =>
            import(`./PCFeH3KGolIUkqhGeo9qrAlX-QlH7OCNArDfVhDd5Lc.CxTnaG-h.mjs`)
          ),
          path: `/comparison/gitbook-vs-swagger`,
        },
        fwxRpB6d9: {
          elements: {},
          page: L(() =>
            import(`./XA0Ok7w2PTBOTO2FK8MZ7BiP7B7bnFPp-2q5fIBv-Co.C7F4qIdj.mjs`)
          ),
          path: `/comparison/gitbook-vs-notion`,
        },
        V6wp9x1YI: {
          elements: {},
          page: L(() =>
            import(`./EF8AAqRBRoYW-uZo4jeM7z0iNNSX4WeYrjSu6QoRxX0.jKg7OGof.mjs`)
          ),
          path: `/comparison/gitbook-vs-read-the-docs`,
        },
        R49jBCrHT: {
          elements: {},
          page: L(() =>
            import(`./NYAPrbCURKmqFDdZ-hQRY31W4qG7NbviJ4AVJCIiyP8.CwgR5_I7.mjs`)
          ),
          path: `/comparison/gitbook-vs-docusaurus`,
        },
        IlkTuVoQd: {
          elements: {},
          page: L(() =>
            import(`./sBOL-uWMUr5o3Tgv0xu93r_wTZbcC5RK2U5gYUy-k0w.CHYPtXZn.mjs`)
          ),
          path: `/comparison/gitbook-vs-mintlify`,
        },
        dSPYlRFJZ: {
          elements: {
            aF_hfiULH: `calculator`,
            Cds5dG4aW: `compare-core-plans`,
            oAm6b4KbL: `compare-plans`,
            piVAh7TaO: `nav-scroll`,
            XA1d7AYyy: `collaborate`,
            Zh798psUu: `compare-core-plans-1`,
          },
          page: L(() =>
            import(`./LZme94AClAPSaVjhmNcaZ3En3v76faqSguNbMcsaHNM.BOV_-J7S.mjs`)
          ),
          path: `/pricing`,
        },
        YixgKe4Do: {
          elements: {
            gduCE141p: `compare-core-plans`,
            GgRMt1a4t: `calculator`,
            hmuiEFBay: `compare-plans`,
            mk0Hi4Q8Q: `nav-scroll`,
            qtsoURyxC: `compare-core-plans-1`,
            veXdFNnGz: `collaborate`,
          },
          page: L(() =>
            import(`./6AeWN-By0MApwKnHe66iXTPrG_5qSl-2tZ45uKmC4p0.CNt6V3oK.mjs`)
          ),
          path: `/new/pricing`,
        },
        LdltU0X1v: {
          elements: { UGkgkfKRJ: `nav-scroll` },
          page: L(() =>
            import(`./KpVThbxCI354_LnKOB_dpCJ1fjGGBrR7D9aQ87R-q2c.Df41k6qf.mjs`)
          ),
          path: `/product-tour`,
        },
        UMBrHRs1N: {
          elements: { buhKAmdck: `nav-scroll` },
          page: L(() =>
            import(`./8WnC8oT6Op2Mu9s40s51jXPuhJ22pUaK8itjgCrA69Q.9b3D2Zhm.mjs`)
          ),
          path: `/customer-showcase`,
        },
        vx2qwJUoS: {
          elements: { y4fn3_QTP: `nav-scroll` },
          page: L(() =>
            import(`./SdGjsjpXlPhM6IOYp8yDHP4uSdiitNoeDVWUNEnS41E.DdNaLXQR.mjs`)
          ),
          path: `/customers`,
        },
        arIipk7Ib: {
          elements: {},
          page: L(() =>
            import(`./pC_xDPB19XUpUGRPM9bkWh0HebAsUZXibHm3OYF_ekE.wJxbkhVh.mjs`)
          ),
          path: `/testing`,
        },
        FXjycqjXe: {
          elements: { bUbLABSKk: `video` },
          page: L(() =>
            import(`./qqJ7gcvQQM12h1zVmRtFlXqtQAbvQQbkNAd2aE6Qt_4.DZv_QqIr.mjs`)
          ),
          path: `/new/landing-v1`,
        },
        vP4pPtCT7: {
          elements: { dPeqDq44D: `video` },
          page: L(() =>
            import(`./L2kt1xwzyDZpn36cJ0fuERBURm7xfiB8qeDCH76xIeo.B3Duadja.mjs`)
          ),
          path: `/new/landing-v3`,
        },
        dm9zyiLgZ: {
          elements: {},
          page: L(() =>
            import(`./v67wog9IEYUMrAGRf6ZvGK1c7hdwOXUVktKd2HuZmdc.jT1aqoea.mjs`)
          ),
          path: `/new/landing-v4`,
        },
        Y7rl9hdn6: {
          elements: {},
          page: L(() =>
            import(`./re93IuoNzEtOI9mmhBwWckjyWJXoT8h_kM9ggNABY2Q.BALUFuIm.mjs`)
          ),
          path: `/new/landing-v2`,
        },
        hQcvYFSXC: {
          elements: { FqJOOT8dB: `video` },
          page: L(() =>
            import(`./5S5vqSBMcskOZD3tZ9khfwhC9uGxW10ovF8ldr67T00.CwjqMh1l.mjs`)
          ),
          path: `/new/landing-v5`,
        },
        xUr8UwV1z: {
          collectionId: `b2l1I2FVd`,
          elements: { M43OOOJeX: `nav-scroll` },
          page: L(() =>
            import(`./rAFoeZVdLEN8tdLmmCJrEEBsPFNH2WklkW_RvnkxHt4.QiScJQvy.mjs`)
          ),
          path: `/integrations/:GkO9DERez`,
        },
        rRdraXJT_: {
          collectionId: `Cel7eV4rM`,
          elements: { lNn7Xe5m0: `nav-scroll` },
          page: L(() =>
            import(`./3OYyKOoLlIkpebt0yokMLiNIJ-HGNVGbLhJZ5xBRWew.CBPR2KcA.mjs`)
          ),
          path: `/customers/:ifhqdtEM6`,
        },
        Of3bNXSiZ: {
          collectionId: `CRhxlzgu3`,
          elements: { aFjc40pxl: `nav-scroll`, v1H_REOfe: `open-roles` },
          page: L(() =>
            import(`./fVdPxOw4QsnKKAF7SjvfIkSJiXWNfrw-EQcUeLLvRFw.CIU7a89o.mjs`)
          ),
          path: `/blog/:HlVCJJ1xe`,
        },
        cIBffXL4v: {
          collectionId: `WMhzr4ad4`,
          elements: { d8wdHMxVS: `nav-scroll` },
          page: L(() =>
            import(`./g_MfQL0Vj4dSFOROeIZe_Z-YI8vmvGqcHndLDR3Np9o.BipAELao.mjs`)
          ),
          path: `/authors/:HtTWmj9rQ`,
        },
        BP6UT_yY4: {
          collectionId: `JlUdeVlvg`,
          elements: { aiP_l_229: `nav-scroll` },
          page: L(() =>
            import(`./pbQfycGPbFbajv8NC0Z8pxR5a8GZ_lyp4hOV0NOLWG4.D5KPQpAo.mjs`)
          ),
          path: `/events/:lo9cZ1ehk`,
        },
        H158aI4fd: {
          collectionId: `cNVdedR2a`,
          elements: { sWOUsWbWE: `nav-scroll` },
          page: L(() =>
            import(`./zjPESiv4r3FgVoIBbJLj-7UkSeX4l1fy62E16Yp9y6c.DcgMYTvA.mjs`)
          ),
          path: `/videos/:JQkBowurF`,
        },
        V2pAmDXcI: { page: L(() => import(`./V2pAmDXcI.BsFQR1oC.mjs`)) },
        u7pGQXIyb: { page: L(() => import(`./u7pGQXIyb.3dOi67zf.mjs`)) },
        pqXUC8s8w: { page: L(() => import(`./pqXUC8s8w.Bape6HUN.mjs`)) },
      }),
      (Q = [{ code: `en-US`, id: `default`, name: `English`, slug: `` }]),
      ($ = {
        b2l1I2FVd: async () =>
          (
            await import(
              `./GMqWzTxGo-FnwOUiIrQyNjW7Z_6-chVsoY6UEzRcEJg.DP10vkRl.mjs`
            )
          )?.utils,
        Cel7eV4rM: async () =>
          (
            await import(
              `./QgNk8wtlwfvgGz1g3L3W-k7c7O_xH3xaMbkQlLoPGJk.C0S8x3YJ.mjs`
            )
          )?.utils,
        cNVdedR2a: async () =>
          (
            await import(
              `./Xhw7YAnGZVkievNe3h1S4l7E4akD_mAQsMdb-eR_4ZQ.BoQ-Wasg.mjs`
            )
          )?.utils,
        CRhxlzgu3: async () =>
          (
            await import(
              `./n4Ol19np5t0ndwWCn1iA2FAjjn_NrmMItiJWL3YfKQs.BjS4F9Q8.mjs`
            )
          )?.utils,
        JlUdeVlvg: async () =>
          (
            await import(
              `./Hdi7u1H4KGLT2rPYaVvU-Vw18NjqE0ziUVi2IAZeCJw.DHr2GBY0.mjs`
            )
          )?.utils,
        WMhzr4ad4: async () =>
          (
            await import(
              `./T8-C0oKVW4Xf7yoSHZ6yzDEF2pdX4-E-2xfHz4DbeJ8.BVCfFeFQ.mjs`
            )
          )?.utils,
      }),
      (an = `a46e0411cf68b37bf1e218d5e0a2bf66b262e7d4f03dd173ccc100f4ef05e139`),
      (on = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (sn = typeof document < `u`),
      sn)
    ) {
      (S.__framer_importFromPackage = (e, t) => () =>
        n(ie, {
          error: `Package component not supported: "` + t + `" in "` + e + `"`,
        })),
        (S.process = {
          ...S.process,
          env: {
            ...(S.process ? S.process.env : void 0),
            NODE_ENV: `production`,
          },
        }),
        (S.__framer_events = S.__framer_events || []),
        _e();
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? rn(!0, e) : rn(!1, e);
    }
  });
cn();
export { en as getLayoutTemplateBreakpoints, tn as getPageRoot };
//# sourceMappingURL=script_main.D7qQe198.mjs.map
