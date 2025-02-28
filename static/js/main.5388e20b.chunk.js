(this["webpackJsonpcritic-augen-3-d-model"] =
  this["webpackJsonpcritic-augen-3-d-model"] || []).push([
  [0],
  {
    48: function (n, e, t) {},
    56: function (n, e, t) {
      "use strict";
      t.r(e);
      var a,
        i,
        r,
        s,
        p = t(11),
        o = t(33),
        l = (t(48), t(21)),
        c = t(34),
        x = t(22),
        d = t(14);
      function h() {
        return Object(d.jsxs)(f, {
          children: [
            Object(d.jsx)(c.a, {
              className: "spline",
              scene:
                "https://criticaugen.github.io/spline-portfolio/static/scene.splinecode",
            }),
            Object(d.jsxs)(m, {
              children: [
                Object(d.jsxs)(b, {
                  children: [
                    Object(d.jsx)("li", {
                      children: Object(d.jsx)("a", {
                        href: "https://www.hackerrank.com/criticaugen",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "Hackerrank",
                      }),
                    }),
                    Object(d.jsx)("li", {
                      children: Object(d.jsx)("a", {
                        href: "https://auth.geeksforgeeks.org/user/criticaugen",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "GFG",
                      }),
                    }),
                    Object(d.jsx)("li", {
                      children: Object(d.jsx)("a", {
                        href: "https://github.com/CriticAugen",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "Github",
                      }),
                    }),
                  ],
                }),
                Object(d.jsx)("h1", { children: "Hi, I am Roshan Srivastava" }),
                Object(d.jsx)("p", {
                  children:
                    "A Civil Engineer who switched his career in Software Development. Currently working in Automation Testing, also passionate to learn 3D Web Development. Want to know more about me? just contact me on LinkedIn. Press the button below. I will surely reply within some hours. Let's connect.",
                }),
                Object(d.jsx)("a", {
                  href: "https://www.linkedin.com/in/criticaugen/",
                  target: "_blank",
                  rel: "noreferrer noopener",
                  class: "button1",
                  children: "LETS CONNECT",
                }),
              ],
            }),
            Object(d.jsx)(g, { children: Object(d.jsx)("div", {}) }),
          ],
        });
      }
      var f = x.a.div(
          a ||
            (a = Object(l.a)([
              '\n  font-family: "Spline Sans Mono", monospace;\n  font-size: 16px;\n  color: white;\n  position: relative;\n\n  .spline {\n    position: absolute;\n    margin: 0;\n    top: 0;\n    right: 0;\n\n    @media (max-width: 1920px) {\n      transform: scale(1) translateX(0px) translateY(40px);\n    }\n\n    @media (max-width: 1400px) {\n      transform: scale(0.9) translateX(0px) translateY(35px);\n    }\n\n    @media (max-width: 1024px) {\n      transform: scale(0.9) translateX(-20px) translateY(30px);\n    }\n    @media (max-width: 800px) {\n      transform: scale(0.7) translateX(150px) translateY(0px);\n    }\n    @media (max-width: 600px) {\n      transform: scale(0.63) translateX(120px) translateY(20px);\n      right: auto;\n      left: 50%;\n      margin-left: -600px;\n    }\n    @media (max-width: 375px) {\n      transform: scale(0.35) translateX(50px);\n    }\n  }\n',
            ]))
        ),
        m = x.a.div(
          i ||
            (i = Object(l.a)([
              '\n  position: absolute;\n  top: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n\n  h1 {\n    font-family: "Edu VIC WA NT Beginner", cursive;\n    font-weight: bold;\n    font-size: 50px;\n    margin: 0;\n    max-width: 300px;\n\n    @media (max-width: 800px) {\n      font-size: 40px;\n      max-width: 200px;\n    }\n\n    @media (max-width: 600px) {\n      padding-top: 25px;\n    }\n  }\n\n  p {\n    font-family: "Allura", cursive;\n    font-weight: normal;\n    font-size: 24px;\n    line-height: 125%;\n    max-width: 300px;\n  }\n\n  .button1,\n  .button1:after {\n    width: 200px;\n    height: 76px;\n    line-height: 78px;\n    font-size: 20px;\n    font-family: "Bebas Neue", sans-serif;\n    background: linear-gradient(45deg, transparent 5%, #ff013c 5%);\n    border: 0;\n    color: #fff;\n    letter-spacing: 3px;\n    box-shadow: 6px 0px 0px #00e6f6;\n    outline: transparent;\n    position: relative;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n  }\n\n  .button1:after {\n    --slice-0: inset(50% 50% 50% 50%);\n    --slice-1: inset(80% -6px 0 0);\n    --slice-2: inset(50% -6px 30% 0);\n    --slice-3: inset(10% -6px 85% 0);\n    --slice-4: inset(40% -6px 43% 0);\n    --slice-5: inset(80% -6px 5% 0);\n\n    content: "ALTERNATE TEXT";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(\n      45deg,\n      transparent 3%,\n      #00e6f6 3%,\n      #00e6f6 5%,\n      #ff013c 5%\n    );\n    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;\n    clip-path: var(--slice-0);\n  }\n\n  .button1:hover:after {\n    animation: 1s glitch;\n    animation-timing-function: steps(2, end);\n  }\n\n  @keyframes glitch {\n    0% {\n      clip-path: var(--slice-1);\n      transform: translate(-20px, -10px);\n    }\n    10% {\n      clip-path: var(--slice-3);\n      transform: translate(10px, 10px);\n    }\n    20% {\n      clip-path: var(--slice-1);\n      transform: translate(-10px, 10px);\n    }\n    30% {\n      clip-path: var(--slice-3);\n      transform: translate(0px, 5px);\n    }\n    40% {\n      clip-path: var(--slice-2);\n      transform: translate(-5px, 0px);\n    }\n    50% {\n      clip-path: var(--slice-3);\n      transform: translate(5px, 0px);\n    }\n    60% {\n      clip-path: var(--slice-4);\n      transform: translate(5px, 10px);\n    }\n    70% {\n      clip-path: var(--slice-2);\n      transform: translate(-10px, 10px);\n    }\n    80% {\n      clip-path: var(--slice-5);\n      transform: translate(20px, -10px);\n    }\n    90% {\n      clip-path: var(--slice-1);\n      transform: translate(-10px, 0px);\n    }\n    100% {\n      clip-path: var(--slice-1);\n      transform: translate(0);\n    }\n  }\n\n  @media (min-width: 100%) {\n    .button1,\n    .button1:after {\n      width: 100%;\n      height: 86px;\n      line-height: 88px;\n    }\n  }\n\n  a.button1 {\n    text-align: center;\n    text-decoration: none;\n  }\n\n  h1,\n  p,\n  a.button1 {\n    margin: 0 30px 0 100px;\n  }\n',
            ]))
        ),
        b = x.a.ul(
          r ||
            (r = Object(l.a)([
              "\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin: 0 30px 0 100px;\n  padding: 0;\n\n  li {\n    list-style: none;\n    margin: 0;\n\n    a {\n      text-decoration: none;\n      color: white;\n      padding: 8px 15px;\n      border: 1px solid rgba(255, 255, 255, 0);\n      transition: 0.5s;\n      border-radius: 14px;\n\n      :hover {\n        border: 1px solid rgba(255, 255, 255, 1);\n      }\n    }\n  }\n",
            ]))
        ),
        g = x.a.div(
          s ||
            (s = Object(l.a)([
              "\n  position: absolute;\n  top: 40px;\n  left: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  align-items: center;\n\n  div {\n    width: 1px;\n    height: 650px;\n    background: linear-gradient(\n      180deg,\n      #08b6f9 0%,\n      #6c56ef 33.57%,\n      #1306dd 65.86%,\n      #aa0eb2 100%\n    );\n  }\n",
            ]))
        ),
        u = document.getElementById("root");
      Object(o.createRoot)(u).render(
        Object(d.jsx)(p.StrictMode, { children: Object(d.jsx)(h, {}) })
      );
    },
  },
  [[56, 1, 2]],
]);
//# sourceMappingURL=main.5388e20b.chunk.js.map
