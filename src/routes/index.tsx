import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import frameUrls from "@/assets/frames/manifest.json";
import {
  Sun,
  Moon,
  ArrowRight,
  Code2,
  Palette,
  Database,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KENZIONhq — Web Development & AI Engineering Studio" },
      {
        name: "description",
        content:
          "KENZIONhq is a premium digital studio building web experiences, brand identities, and full-stack systems for brands that refuse to be ordinary.",
      },
      { property: "og:title", content: "KENZIONhq — Digital Studio" },
      {
        property: "og:description",
        content: "Premium web design, brand identity, and full-stack development.",
      },
    ],
  }),
  component: Index,
});

const CSS = `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}

.kz {
  /* Common typography and settings */
  --mono: 'JetBrains Mono', monospace;
  --disp: 'Space Grotesk', sans-serif;
  --body: 'Inter', sans-serif;
  --radius: 24px;
  
  font-family: var(--body);
  background: var(--bg);
  color: var(--ink);
  overflow-x: clip;
  transition: background 0.4s ease, color 0.4s ease;
}

@media(min-width:1100px){.kz{cursor:none}}
.kz a, .kz button{color:inherit; cursor: pointer; outline: none; border: none; background: none;}
html{scroll-behavior:smooth}
@media(max-width:1099px),(hover:none){.kz #cur,.kz #cur2{display:none}}

/* Theme: Dark (Default) */
.kz.dark-theme {
  --bg: #04040a;
  --bg2: #08080f;
  --surface: rgba(255, 255, 255, 0.03);
  --surface-hover: rgba(255, 255, 255, 0.07);
  --surface2: rgba(255, 255, 255, 0.05);
  --ink: #ffffff;
  --ink2: #a5a5b5;
  --ink3: #5c5c6c;
  --accent: #00ffe0;
  --accent-soft: rgba(0, 255, 224, 0.08);
  --accent2: #7b2fff;
  --accent2-soft: rgba(123, 47, 255, 0.08);
  --accent3: #ff2d55;
  --accent3-soft: rgba(255, 45, 85, 0.08);
  --line: rgba(255, 255, 255, 0.08);
  --line-soft: rgba(255, 255, 255, 0.04);
  --shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 24px 48px -20px rgba(0, 0, 0, 0.6);
  --term-bg: #100f1a;
  --term-border: rgba(255, 255, 255, 0.06);
  --term-title: rgba(255, 255, 255, 0.4);
  --term-prompt: #00ffe0;
  --term-accent: #7b2fff;
  --term-out: rgba(255, 255, 255, 0.8);
  --nav-bg: rgba(4, 4, 10, 0.72);
}

/* Theme: Light */
.kz.light-theme {
  --bg: #FAFAF9;
  --bg2: #F4F3FB;
  --surface: #FFFFFF;
  --surface-hover: #F8F8FA;
  --surface2: #EEECFF;
  --ink: #0E0E16;
  --ink2: #52515E;
  --ink3: #8E8D98;
  --accent: #5B4FFF;
  --accent-soft: #EEECFF;
  --accent2: #FF6B4A;
  --accent2-soft: #FFEDE7;
  --accent3: #FF6B4A;
  --accent3-soft: #FFEDE7;
  --line: rgba(14, 14, 22, 0.08);
  --line-soft: rgba(14, 14, 22, 0.04);
  --shadow: 0 1px 2px rgba(20,20,40,.04), 0 1px 1px rgba(20,20,40,.03);
  --shadow-lg: 0 24px 48px -20px rgba(20,20,40,0.18), 0 4px 12px -4px rgba(20,20,40,.08);
  --term-bg: rgba(255, 255, 255, 0.8);
  --term-border: rgba(14, 14, 22, 0.08);
  --term-title: rgba(14, 14, 22, 0.4);
  --term-prompt: #5B4FFF;
  --term-accent: #FF6B4A;
  --term-out: #0E0E16;
  --nav-bg: rgba(250, 250, 249, 0.72);
}

/* GRADIENT ORBS */
.orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.35;
  transition: background 0.8s ease;
}
.orb1 {
  width: 560px;
  height: 560px;
  background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
  top: -180px;
  right: -120px;
  animation: drift1 22s ease-in-out infinite;
}
.orb2 {
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, var(--accent2) 0%, transparent 70%);
  top: 60vh;
  left: -160px;
  opacity: 0.25;
  animation: drift2 26s ease-in-out infinite;
}
.orb3 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, var(--accent3-soft) 0%, transparent 70%);
  top: 160vh;
  right: -100px;
  opacity: 0.2;
  animation: drift1 30s ease-in-out infinite reverse;
}
@keyframes drift1{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,50px)}}
@keyframes drift2{0%,100%{transform:translate(0,0)}50%{transform:translate(50px,-40px)}}

.grain {
  position: fixed;
  inset: 0;
  z-index: 1;
  opacity: 0.015;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E");
}

section, nav, footer, header {
  position: relative;
  z-index: 2;
}

/* CURSORS */
.kz #cur{position:fixed;width:8px;height:8px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);mix-blend-mode:difference;transition:width 0.2s, height 0.2s;}
.kz #cur2{position:fixed;width:40px;height:40px;border:1px solid var(--accent);opacity:0.4;border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:width .3s,height .3s,border-color 0.4s;}
.kz #rain{position:fixed;inset:0;z-index:0;opacity:0.04;pointer-events:none;transition:opacity 0.5s ease;}

/* NAV */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 56px;
  background: var(--nav-bg);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, background 0.4s;
  gap: 24px;
}
nav.scrolled {
  border-color: var(--line);
}
.nlogo {
  font-family: var(--disp);
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--ink);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.nlogo .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent);
  transition: background 0.4s, box-shadow 0.4s;
}
.nlinks {
  display: flex;
  gap: 36px;
  list-style: none;
}
.nlinks a {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--ink2);
  text-decoration: none;
  letter-spacing: -0.1px;
  transition: color 0.25s;
  position: relative;
  font-family: var(--body);
}
.nlinks a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--accent);
  transition: width 0.25s ease;
}
.nlinks a:hover {
  color: var(--ink);
}
.nlinks a:hover::after {
  width: 100%;
}
.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
.theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink2);
  transition: all 0.25s;
  background: var(--surface);
}
.theme-toggle:hover {
  color: var(--ink);
  border-color: var(--accent);
  transform: rotate(15deg);
}
.ncta {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bg);
  background: var(--ink);
  padding: 12px 24px;
  text-decoration: none;
  transition: all 0.3s;
  clip-path: polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);
  white-space: nowrap;
  flex-shrink: 0;
}
.ncta:hover {
  background: var(--accent2);
  color: #fff;
  transform: translateY(-1px);
}

/* HERO */
#hero {
  padding: 160px 56px 80px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 60px;
  align-items: center;
  min-height: 95vh;
  position: relative;
  overflow: hidden;
}
.heyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 6px 14px 6px 10px;
  border-radius: 999px;
  margin-bottom: 24px;
  opacity: 0;
  animation: kzup 0.8s 0.2s forwards;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.heyebrow .pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: kzpulse-dot 1.6s infinite;
}
@keyframes kzpulse-dot {0%,100%{opacity:1}50%{opacity:.3}}
.htitle {
  font-family: var(--disp);
  font-size: clamp(38px, 4.4vw, 64px);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.05;
  margin-bottom: 24px;
  opacity: 0;
  animation: kzup 0.8s 0.35s forwards;
}
.htitle .grad {
  background: linear-gradient(100deg, var(--accent), var(--accent2) 60%, var(--accent3));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hsub {
  font-size: 16.5px;
  color: var(--ink2);
  max-width: 520px;
  line-height: 1.75;
  margin-bottom: 36px;
  opacity: 0;
  animation: kzup 0.8s 0.5s forwards;
}
.hactions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 48px;
  opacity: 0;
  animation: kzup 0.8s 0.65s forwards;
}
.btn-primary {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bg);
  background: var(--ink);
  padding: 16px 36px;
  text-decoration: none;
  transition: all 0.3s;
  clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-primary:hover {
  background: var(--accent);
  color: var(--bg);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
.btn-ghost {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  transition: gap 0.25s, color 0.25s;
}
.btn-ghost:hover {
  gap: 12px;
  color: var(--accent);
}
.hstack {
  display: flex;
  align-items: center;
  gap: 18px;
  opacity: 0;
  animation: kzup 0.8s 0.8s forwards;
}
.hstack-label {
  font-family: var(--mono);
  font-size: 9px;
  color: var(--ink3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}
.stackchips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.chip {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink2);
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 5px 12px;
  border-radius: 999px;
  transition: border-color 0.3s, background 0.3s;
}
.chip:hover {
  border-color: var(--accent);
  background: var(--surface-hover);
}

/* TERMINAL */
.term-wrap {
  opacity: 0;
  animation: kzup 0.9s 0.5s forwards;
  position: relative;
}
.term {
  background: var(--term-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--term-border);
  transition: background 0.4s, border-color 0.4s;
}
.term-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--term-border);
}
.term-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.term-dot:nth-child(1){background:#FF5F57}
.term-dot:nth-child(2){background:#FEBC2E}
.term-dot:nth-child(3){background:#28C840}
.term-title {
  margin-left: 8px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--term-title);
}
.term-body {
  padding: 24px;
  font-family: var(--mono);
  font-size: 12.5px;
  line-height: 1.85;
  min-height: 245px;
}
.term-line {
  color: var(--term-out);
  margin-bottom: 4px;
}
.term-prompt {
  color: var(--term-prompt);
}
.term-out {
  color: var(--term-out);
}
.term-accent {
  color: var(--term-accent);
}
.cursor-blink {
  display: inline-block;
  width: 6px;
  height: 13px;
  background: var(--term-prompt);
  margin-left: 2px;
  animation: kzblink 1s infinite;
  vertical-align: middle;
}
@keyframes kzblink {0%,100%{opacity:1}50%{opacity:0}}
.term-float {
  position: absolute;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: var(--shadow-lg);
  font-family: var(--mono);
  font-size: 11.5px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--ink);
  backdrop-filter: blur(12px);
  transition: background 0.4s, border-color 0.4s;
}
.term-float.f1 {
  top: -20px;
  right: -24px;
  animation: kzfloaty 4s ease-in-out infinite;
}
.term-float.f2 {
  bottom: -18px;
  left: -28px;
  animation: kzfloaty 4.5s ease-in-out infinite 1s;
}
@keyframes kzfloaty {0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.fcheck {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  transition: background 0.4s, color 0.4s;
}

/* SECTION SHARED */
.stag {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--accent);
  letter-spacing: .2em;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.stag::before {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--accent);
}
.stitle {
  font-family: var(--disp);
  font-size: clamp(32px, 3.8vw, 60px);
  font-weight: 700;
  letter-spacing: -1.6px;
  line-height: 1.05;
  margin-bottom: 32px;
}
.stitle em {
  color: transparent;
  -webkit-text-stroke: 1px var(--ink2);
  font-style: normal;
}
.sbody {
  font-size: 16px;
  color: var(--ink2);
  line-height: 1.85;
  margin-bottom: 16px;
}

/* GLITCH LINE */
.glitch-line {
  height: 1px;
  background: linear-gradient(to right, transparent, var(--line), transparent);
  position: relative;
  overflow: hidden;
}
.glitch-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent, var(--accent2), transparent);
  animation: kzglitchLine 4s infinite;
}
@keyframes kzglitchLine{0%,100%{transform:translateX(-100%)}50%{transform:translateX(100%)}}

/* MARQUEE */
.mwrap {
  padding: 20px 0;
  overflow: hidden;
  background: var(--accent-soft);
  border-top: 1px solid var(--line-soft);
  border-bottom: 1px solid var(--line-soft);
  transition: background 0.4s;
}
.mtrack {
  display: flex;
  animation: kzmarquee 25s linear infinite;
  width: max-content;
}
.mitem {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--ink2);
  letter-spacing: .2em;
  text-transform: uppercase;
  padding: 0 48px;
  display: flex;
  align-items: center;
  gap: 48px;
  white-space: nowrap;
  border-right: 1px solid var(--line-soft);
}
.mitem b {
  color: var(--accent);
  font-weight: 400;
}
@keyframes kzmarquee{to{transform:translateX(-50%)}}

/* ABOUT */
#about {
  padding: 140px 56px;
  position: relative;
  z-index: 1;
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: start;
}
.founder {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 40px;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%);
  margin-top: 36px;
  box-shadow: var(--shadow);
  transition: background 0.4s, border-color 0.4s;
}
.favatop {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
}
.favatar {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--disp);
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}
.fname {
  font-family: var(--disp);
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: var(--ink);
}
.ftitle {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--accent);
  letter-spacing: .15em;
  text-transform: uppercase;
  margin-top: 4px;
  font-weight: 700;
}
.fbio {
  font-size: 14px;
  color: var(--ink2);
  line-height: 1.85;
  border-top: 1px solid var(--line-soft);
  padding-top: 24px;
}

.beliefs {
  display: flex;
  flex-direction: column;
}
.belief {
  display: flex;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid var(--line-soft);
  transition: padding-left 0.3s;
}
.belief:hover {
  padding-left: 12px;
}
.belief:first-child {
  padding-top: 0;
}
.bicon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--surface2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  transition: background 0.4s;
}
.btitle {
  font-weight: 700;
  font-size: 16.5px;
  margin-bottom: 5px;
  color: var(--ink);
}
.btext {
  font-size: 13.5px;
  color: var(--ink2);
  line-height: 1.75;
}

/* SERVICES — Bento layout */
#services {
  padding: 0 56px 140px;
  position: relative;
  z-index: 1;
}
.sh {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 64px;
}
.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.bcard {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 40px;
  transition: all 0.35s cubic-bezier(.2,.8,.2,1);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);
}
.bcard:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent);
}
.bcard-glow {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-soft), transparent);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}
.bcard:hover .bcard-glow {
  opacity: 1;
}
.bicon-lg {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
  transition: all 0.4s;
}
.bcard:nth-child(2) .bicon-lg {
  background: var(--accent2-soft);
  color: var(--accent2);
}
.bcard:nth-child(3) .bicon-lg {
  background: var(--surface2);
  color: var(--ink);
}
.bname {
  font-family: var(--disp);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.4px;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
}
.bdesc {
  font-size: 14px;
  color: var(--ink2);
  line-height: 1.8;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}
.btags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;
  z-index: 1;
}
.btag {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--ink2);
  background: var(--surface2);
  padding: 5px 12px;
  border-radius: 999px;
  transition: background 0.4s;
}
.bcard:hover .btag {
  background: var(--accent-soft);
  color: var(--accent);
}

/* VIDEO STICKY SCRUBBER */
.scrollvid {
  height: 1600vh;
  position: relative;
  z-index: 1;
}
.scrollvid-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background: #000;
}
.scrollvid-sticky video, .scrollvid-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  opacity: 0.95;
}
.scrollvid-loader {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  z-index: 5;
  font-family: var(--mono);
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
  letter-spacing: .25em;
  text-transform: uppercase;
  gap: 14px;
  transition: opacity 0.5s ease;
}
.scrollvid-loader.gone {
  opacity: 0;
  pointer-events: none;
}
.scrollvid-loader .lbar {
  width: 220px;
  height: 2px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
.scrollvid-loader .lbar i {
  display: block;
  height: 100%;
  background: linear-gradient(to right, var(--accent), var(--accent2));
  transition: width .15s linear;
}
.vid-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(0,255,224,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,224,.03) 1px,transparent 1px);
  background-size: 80px 80px;
  -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 50%,black,transparent);
  mask-image: radial-gradient(ellipse 70% 80% at 50% 50%,black,transparent);
  pointer-events: none;
}
.vid-edge-fade {
  position: absolute;
  left: 0;
  right: 0;
  height: 140px;
  pointer-events: none;
  z-index: 3;
}
.vid-edge-fade.top {
  top: 0;
  background: linear-gradient(to bottom, var(--bg), transparent);
}
.vid-edge-fade.bottom {
  bottom: 0;
  background: linear-gradient(to top, var(--bg), transparent);
}
.scrollvid-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  z-index: 4;
}
.scrollvid-progress .bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(to right, var(--accent), var(--accent2));
  transition: width .1s linear;
}
.scrollvid-tag {
  position: absolute;
  top: 48px;
  left: 64px;
  font-family: var(--mono);
  font-size: 9px;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: .2em;
  text-transform: uppercase;
  z-index: 4;
}

/* ============ MISSION CONTROL HUD ============ */
.hud-overlay {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  font-family: var(--mono);
  color: rgba(0, 255, 224, 0.85);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.hud-corner {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 18px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(0, 255, 224, 0.25);
  backdrop-filter: blur(8px);
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
}
.hud-corner.tl { top: 48px; right: 64px; align-items: flex-end; }
.hud-corner.bl { bottom: 28px; left: 64px; }
.hud-corner.br { bottom: 28px; right: 64px; align-items: flex-end; }
.hud-corner span.lbl { color: rgba(255,255,255,0.4); font-size: 8.5px; }
.hud-corner span.val { color: #00ffe0; font-size: 13px; letter-spacing: 0.1em; }
.hud-ring {
  position: absolute;
  top: 50%; left: 50%;
  width: 320px; height: 320px;
  margin: -160px 0 0 -160px;
  border: 1px solid rgba(0, 255, 224, 0.12);
  border-radius: 50%;
}
.hud-ring::before, .hud-ring::after {
  content: '';
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  border: 1px dashed rgba(0,255,224,0.08);
  animation: hud-rot 40s linear infinite;
}
.hud-ring::after { inset: 30px; border-style: dotted; animation-duration: 60s; animation-direction: reverse; }
@keyframes hud-rot { to { transform: rotate(360deg); } }
.hud-crosshair {
  position: absolute;
  top: 50%; left: 50%;
  width: 60px; height: 60px;
  margin: -30px 0 0 -30px;
  pointer-events: none;
}
.hud-crosshair::before, .hud-crosshair::after {
  content: '';
  position: absolute;
  background: rgba(0,255,224,0.5);
}
.hud-crosshair::before { left: 50%; top: 0; width: 1px; height: 100%; }
.hud-crosshair::after { top: 50%; left: 0; height: 1px; width: 100%; }
.hud-ticks {
  position: absolute;
  top: 0; bottom: 0; left: 28px;
  width: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0;
}
.hud-ticks i {
  display: block;
  width: 14px;
  height: 1px;
  background: rgba(0,255,224,0.3);
}
.hud-ticks i.major { width: 24px; background: rgba(0,255,224,0.7); }

/* ============ TOP TELEMETRY STRIP (page-wide) ============ */
.telemetry-strip {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 400;
  display: flex;
  gap: 0;
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: rgba(4, 4, 10, 0.78);
  border-top: 1px solid rgba(0, 255, 224, 0.18);
  backdrop-filter: blur(12px);
  pointer-events: none;
  color: rgba(255,255,255,0.55);
}
.kz.light-theme .telemetry-strip {
  background: rgba(250, 250, 249, 0.85);
  border-top-color: rgba(91, 79, 255, 0.2);
  color: rgba(14,14,22,0.55);
}
.telemetry-strip .cell {
  padding: 8px 18px;
  border-right: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}
.telemetry-strip .cell:last-child { border-right: none; margin-left: auto; }
.telemetry-strip .cell b {
  color: var(--accent);
  font-weight: 500;
  letter-spacing: 0.1em;
}
.telemetry-strip .led {
  width: 6px; height: 6px; border-radius: 50%;
  background: #00ff88;
  box-shadow: 0 0 8px #00ff88;
  animation: led-pulse 2.4s ease-in-out infinite;
}
@keyframes led-pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
@media(max-width:900px) {
  .telemetry-strip { font-size: 8.5px; overflow-x: auto; }
  .telemetry-strip .cell { padding: 7px 12px; }
  .hud-corner.tl { top: 96px; right: 24px; padding: 10px 12px; }
  .hud-corner.bl { left: 24px; bottom: 56px; padding: 10px 12px; }
  .hud-corner.br { right: 24px; bottom: 56px; padding: 10px 12px; }
  .hud-ring { width: 200px; height: 200px; margin: -100px 0 0 -100px; }
}

#work {
  padding: 140px 56px;
  z-index: 1;
  position: relative;
}
.wgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 56px;
}
.wcard {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: none;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: var(--bg2);
}
.wcard-bg {
  position: absolute;
  inset: 0;
  transition: transform .7s cubic-bezier(.16,1,.3,1);
}
.wcard:hover .wcard-bg {
  transform: scale(1.06);
}
.wcard:nth-child(1) .wcard-bg { background: linear-gradient(135deg, #EEECFF, #C7C0FF); }
.wcard:nth-child(2) .wcard-bg { background: linear-gradient(135deg, #FFEDE7, #FFAF98); }
.wcard:nth-child(3) .wcard-bg { background: linear-gradient(135deg, #E7F6EE, #A5E4BE); }
.wcard:nth-child(4) .wcard-bg { background: linear-gradient(135deg, #FFF3D6, #FFDB8F); }
.wpat {
  position: absolute;
  inset: 0;
  opacity: .12;
  transition: opacity .5s;
}
.wcard:hover .wpat {
  opacity: .24;
}
.wcard:nth-child(1) .wpat {
  background: repeating-conic-gradient(rgba(91, 79, 255, 0.15) 0%, transparent 0.3%, transparent 25%);
  background-size: 40px 40px;
}
.wcard:nth-child(2) .wpat {
  background: repeating-linear-gradient(60deg, transparent, transparent 18px, rgba(255, 107, 74, 0.18) 18px, rgba(255, 107, 74, 0.18) 19px);
}
.wcard:nth-child(3) .wpat {
  background: radial-gradient(circle, rgba(52, 199, 89, 0.18) 1px, transparent 1px);
  background-size: 24px 24px;
}
.wcard:nth-child(4) .wpat {
  background: repeating-linear-gradient(-60deg, transparent, transparent 18px, rgba(255, 186, 0, 0.18) 18px, rgba(255, 186, 0, 0.18) 19px);
}
.wover {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(14, 14, 22, 0.88) 0%, rgba(14, 14, 22, 0.25) 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.wcard:hover .wover {
  opacity: 1;
}
.winfo {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  transform: translateY(20px);
  transition: transform .4s;
  color: #fff;
  opacity: 0;
}
.wcard:hover .winfo {
  transform: translateY(0);
  opacity: 1;
}
.wcat {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--accent);
  letter-spacing: .2em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.wcard:nth-child(2) .wcat { color: #FFAF98; }
.wcard:nth-child(3) .wcat { color: #A5E4BE; }
.wcard:nth-child(4) .wcat { color: #FFDB8F; }

.wtitle {
  font-family: var(--disp);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin-bottom: 6px;
}
.wdesc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(10px);
  transition: all .4s .05s;
  line-height: 1.6;
}
.wcard:hover .wdesc {
  opacity: 1;
  transform: translateY(0);
}
.widx {
  position: absolute;
  top: 32px;
  right: 32px;
  font-family: var(--disp);
  font-size: 60px;
  font-weight: 700;
  color: var(--ink);
  opacity: 0.05;
  letter-spacing: 2px;
  transition: opacity .4s, color .4s;
}
.wcard:hover .widx {
  opacity: 0.12;
  color: #fff;
}
.wlink {
  position: absolute;
  top: 32px;
  left: 32px;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  transform: rotate(-45deg) scale(0);
  transition: all .4s;
  clip-path: polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
}
.wcard:hover .wlink {
  transform: rotate(0) scale(1);
  border-color: var(--accent);
  color: var(--accent);
}

/* WHY */
#why {
  padding: 0 56px 140px;
  position: relative;
  z-index: 1;
}
.wh-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 56px;
}
.whcard {
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 56px 48px;
  position: relative;
  overflow: hidden;
  transition: all .4s;
  cursor: none;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.whcard::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-soft), transparent);
  transition: transform .5s;
  pointer-events: none;
}
.whcard:hover {
  background: var(--surface-hover);
  border-color: var(--accent);
  transform: translateY(-4px);
}
.whcard:hover::before {
  transform: scale(2);
}
.whcard:nth-child(2)::before { background: radial-gradient(circle, var(--accent2-soft), transparent); }
.whcard:nth-child(3)::before { background: radial-gradient(circle, var(--accent3-soft), transparent); }
.whcard:nth-child(4)::before { background: radial-gradient(circle, var(--accent-soft), transparent); }

.whn {
  font-family: var(--disp);
  font-size: 80px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px var(--line);
  margin-bottom: 24px;
  line-height: 1;
  transition: -webkit-text-stroke 0.4s;
}
.whcard:hover .whn {
  -webkit-text-stroke: 1px var(--accent);
}
.whtitle {
  font-family: var(--disp);
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 14px;
  color: var(--ink);
}
.whdesc {
  font-size: 14px;
  color: var(--ink2);
  line-height: 1.85;
}

/* PROCESS roadmap */
#process {
  padding: 0 56px 140px;
  position: relative;
  z-index: 1;
}
.plist {
  margin-top: 60px;
  position: relative;
}
.plist::before {
  content: '';
  position: absolute;
  top: 28px;
  left: 28px;
  right: 28px;
  height: 1px;
  background: var(--line);
  z-index: 0;
}
.steps-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  position: relative;
  z-index: 1;
}
.pstep {
  display: flex;
  flex-direction: column;
  gap: 18px;
  cursor: none;
}
.pstep-dot {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--surface);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--disp);
  font-size: 18px;
  font-weight: 700;
  color: var(--ink2);
  transition: all 0.3s;
  box-shadow: var(--shadow);
}
.pstep:hover .pstep-dot {
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
  transform: scale(1.05);
}
.pname {
  font-family: var(--disp);
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
}
.pdesc {
  font-size: 13.5px;
  color: var(--ink2);
  line-height: 1.7;
}

/* CONTACT CTA CARD */
#contact {
  padding: 0 56px 120px;
  position: relative;
  z-index: 1;
}
.cbox {
  background: var(--bg2);
  border: 1px solid var(--line);
  border-radius: 36px;
  padding: 90px 40px;
  position: relative;
  overflow: hidden;
  text-align: center;
  box-shadow: var(--shadow-lg);
  transition: background 0.4s, border-color 0.4s;
}
.cbox::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
  opacity: 0.55;
  filter: blur(40px);
  pointer-events: none;
}
.ctitle {
  font-family: var(--disp);
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -2px;
  color: var(--ink);
  margin-bottom: 20px;
  position: relative;
  line-height: 1.05;
}
.ctitle .grad {
  background: linear-gradient(100deg, var(--accent), var(--accent2) 60%, var(--accent3));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.csub {
  font-size: 16.5px;
  color: var(--ink2);
  margin-bottom: 40px;
  position: relative;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}
.cemail {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--ink);
  color: var(--bg);
  font-weight: 600;
  font-size: 14.5px;
  padding: 16px 36px;
  border-radius: 999px;
  text-decoration: none;
  margin-bottom: 48px;
  position: relative;
  transition: transform .25s, background .25s, box-shadow .25s;
  box-shadow: var(--shadow);
}
.cemail:hover {
  transform: translateY(-2px);
  background: var(--accent);
  color: var(--bg);
  box-shadow: var(--shadow-lg);
}
.csocials {
  display: flex;
  justify-content: center;
  gap: 28px;
  position: relative;
  flex-wrap: wrap;
}
.csoc {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink3);
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  transition: color .25s, transform .25s;
}
.csoc:hover {
  color: var(--accent);
  transform: translateY(-1px);
}

/* FOOTER */
footer {
  padding: 36px 64px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 20px;
  flex-wrap: wrap;
  transition: border-color 0.4s;
}
.flogo {
  font-family: var(--disp);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--ink);
}
.flogo em {
  color: var(--accent);
  font-style: normal;
}
.fcopy {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--ink3);
  letter-spacing: 0.05em;
}
.fstatus {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 10px;
  color: var(--ink2);
  letter-spacing: .08em;
  text-transform: uppercase;
  font-weight: 600;
}
.fdot {
  width: 6px;
  height: 6px;
  background: #34C759;
  border-radius: 50%;
  animation: kzpulse 2s infinite;
}
@keyframes kzpulse{0%,100%{box-shadow:0 0 0 0 rgba(52,199,89,.45)}50%{box-shadow:0 0 0 6px rgba(52,199,89,0)}}

/* RESPONSIVE BREAKPOINTS */
@media(max-width:1100px){
  nav { padding: 20px 28px; }
  .nlinks { display: none; }
  #hero { grid-template-columns: 1fr; padding-top: 130px; gap: 48px; }
  .term-float { display: none; }
  .about-grid { grid-template-columns: 1fr; gap: 64px; }
  .sh { grid-template-columns: 1fr; gap: 20px; }
  .bento { grid-template-columns: 1fr; }
  .wh-grid { grid-template-columns: 1fr; }
  .steps-row { grid-template-columns: 1fr; gap: 32px; }
  .plist::before { display: none; }
  .wgrid { grid-template-columns: 1fr; }
  .scrollvid { height: 1100vh; }
  .scrollvid-tag { left: 24px; top: 96px; }
}

@media(max-width:768px){
  #hero, #about, #services, #work, #why, #process, #contact { padding-left: 24px; padding-right: 24px; }
  #about, #work, #contact { padding-top: 100px; padding-bottom: 100px; }
  #services, #why, #process { padding-bottom: 100px; }
  .cbox { padding: 60px 24px; }
  nav { padding: 18px 20px; }
  .ncta { padding: 10px 18px; font-size: 9px; }
  .nlogo { font-size: 19px; }
  footer { padding: 28px 24px; flex-direction: column; text-align: center; }
}
`;

function Index() {
  const rainRef = useRef<HTMLCanvasElement | null>(null);
  const curRef = useRef<HTMLDivElement | null>(null);
  const cur2Ref = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastIdxRef = useRef<number>(-1);
  const vidWrapRef = useRef<HTMLElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const bgTextRef = useRef<HTMLDivElement | null>(null);
  const hudFrameRef = useRef<HTMLSpanElement | null>(null);
  const hudPctRef = useRef<HTMLSpanElement | null>(null);
  const hudCoordRef = useRef<HTMLSpanElement | null>(null);
  const telScrollRef = useRef<HTMLElement | null>(null);
  const telFpsRef = useRef<HTMLElement | null>(null);
  const telTimeRef = useRef<HTMLElement | null>(null);
  const telCoordRef = useRef<HTMLElement | null>(null);
  const telViewRef = useRef<HTMLElement | null>(null);

  const [loadedFrames, setLoadedFrames] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const totalFrames = frameUrls.length;

  // React state for terminal typing animation
  const lines = [
    { p: "$ ", t: "kenzionhq init --brand", cls: "term-prompt" },
    { p: "", t: "→ analyzing market position...", cls: "term-out" },
    { p: "", t: "→ engineering visual system...", cls: "term-out" },
    { p: "", t: "→ writing production code...", cls: "term-out" },
    { p: "$ ", t: "deploy --env production", cls: "term-prompt" },
    { p: "", t: "✓ brand shipped successfully.", cls: "term-accent" },
  ];

  const [termLines, setTermLines] = useState<
    Array<{ p: string; t: string; cls: string; typed: string }>
  >(lines.map((l) => ({ ...l, typed: "" })));
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);

  // Nav scroll state handler
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Terminal Typing Animation Logic
  useEffect(() => {
    if (currentLineIdx >= termLines.length) {
      const resetTimer = setTimeout(() => {
        setTermLines(lines.map((l) => ({ ...l, typed: "" })));
        setCurrentLineIdx(0);
        setCurrentCharIdx(0);
      }, 3500);
      return () => clearTimeout(resetTimer);
    }

    const currentLine = lines[currentLineIdx];
    if (currentCharIdx < currentLine.t.length) {
      const charTimer = setTimeout(() => {
        setTermLines((curr) => {
          const updated = [...curr];
          updated[currentLineIdx] = {
            ...updated[currentLineIdx],
            typed: updated[currentLineIdx].typed + currentLine.t[currentCharIdx],
          };
          return updated;
        });
        setCurrentCharIdx((prev) => prev + 1);
      }, 15 + Math.random() * 25);
      return () => clearTimeout(charTimer);
    } else {
      const delayTimer = setTimeout(() => {
        setCurrentLineIdx((prev) => prev + 1);
        setCurrentCharIdx(0);
      }, 350);
      return () => clearTimeout(delayTimer);
    }
  }, [currentLineIdx, currentCharIdx, termLines.length]);

  // Matrix rain effect (disabled in light mode to save resources)
  useEffect(() => {
    if (theme === "light") {
      const canvas = rainRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }

    const canvas = rainRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars =
      "{}[]()<>/\\;:=+-*&01ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ".split("");
    const fs = 14;
    const cols = Math.floor(canvas.width / fs);
    const drops = Array.from({ length: cols }, () => Math.random() * -80);

    const intervalId = window.setInterval(() => {
      ctx.fillStyle = "rgba(4,4,10,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fs;
        const y = drops[i] * fs;
        const g = ctx.createLinearGradient(x, y - fs * 6, x, y);
        g.addColorStop(0, "rgba(0,255,224,0)");
        g.addColorStop(0.7, "rgba(0,255,224,0.5)");
        g.addColorStop(1, "rgba(0,255,224,1)");
        ctx.fillStyle = g;
        ctx.font = `${fs}px JetBrains Mono,monospace`;
        ctx.fillText(ch, x, y);
        if (y > canvas.height && Math.random() > 0.978) drops[i] = 0;
        drops[i] += 0.4;
      }
    }, 55);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  // Custom cursor logic
  useEffect(() => {
    const cur = curRef.current;
    const cur2 = cur2Ref.current;
    if (!cur || !cur2) return;
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + "px";
      cur.style.top = my + "px";
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cur2.style.left = rx + "px";
      cur2.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", move);
    loop();

    const enter = () => {
      cur.style.width = "16px";
      cur.style.height = "16px";
      cur2.style.width = "72px";
      cur2.style.height = "72px";
      cur2.style.borderColor = "var(--accent2)";
    };

    const leave = () => {
      cur.style.width = "8px";
      cur.style.height = "8px";
      cur2.style.width = "40px";
      cur2.style.height = "40px";
      cur2.style.borderColor = "var(--accent)";
    };

    const els = document.querySelectorAll(
      ".kz a, .kz button, .kz .bcard, .kz .wcard, .kz .whcard, .kz .pstep, .kz .cemail",
    );
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [theme]);

  // Reveal on scroll logic
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".kz .reveal"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add("on");
      else obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Preload scroll animation frame images
  useEffect(() => {
    let cancelled = false;
    frameUrls.forEach((url, i) => {
      const img = new Image();
      img.decoding = "async";
      img.crossOrigin = "anonymous";
      const done = () => {
        if (cancelled) return;
        framesRef.current[i] = img;
        setLoadedFrames((n) => n + 1);
        if (i === 0) requestAnimationFrame(() => drawFrame(0));
      };
      img.onload = done;
      img.onerror = () => {
        if (cancelled) return;
        setLoadedFrames((n) => n + 1);
      };
      img.src = url;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Canvas frame draw handler (cover behavior, DPR-aware)
  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = framesRef.current[idx];
    if (!img) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const cssW = rect.width;
    const cssH = rect.height;
    if (cssW === 0 || cssH === 0) return;

    const pxW = Math.floor(cssW * dpr);
    const pxH = Math.floor(cssH * dpr);
    if (canvas.width !== pxW || canvas.height !== pxH) {
      canvas.width = pxW;
      canvas.height = pxH;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cssW / iw, cssH / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cssW - dw) / 2;
    const dy = (cssH - dh) / 2;
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // Scroll-driven frame scrubbing — smoothed via lerp loop for cinematic feel
  useEffect(() => {
    const wrap = vidWrapRef.current;
    const bar = barRef.current;
    const bg = bgTextRef.current;
    if (!wrap || !bar) return;

    let rafId = 0;
    let targetProgress = 0;
    let smoothProgress = 0;
    const EASE = 0.085; // lower = slower / silkier

    const measure = () => {
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const scrolledVal = Math.min(Math.max(-rect.top, 0), total);
      targetProgress = total > 0 ? scrolledVal / total : 0;
    };

    const tick = () => {
      smoothProgress += (targetProgress - smoothProgress) * EASE;
      if (Math.abs(targetProgress - smoothProgress) < 0.00005) {
        smoothProgress = targetProgress;
      }

      bar.style.width = smoothProgress * 100 + "%";

      const n = framesRef.current.length;
      if (n > 0) {
        let idx = Math.round(smoothProgress * (totalFrames - 1));
        if (idx < 0) idx = 0;
        if (idx > totalFrames - 1) idx = totalFrames - 1;

        let probe = idx;
        while (probe >= 0 && !framesRef.current[probe]) probe--;
        if (probe < 0) {
          probe = idx;
          while (probe < totalFrames && !framesRef.current[probe]) probe++;
        }

        if (probe >= 0 && probe < totalFrames && probe !== lastIdxRef.current) {
          lastIdxRef.current = probe;
          drawFrame(probe);
        }

        // HUD updates
        if (hudFrameRef.current) {
          hudFrameRef.current.textContent =
            String(probe + 1).padStart(3, "0") + " / " + String(totalFrames).padStart(3, "0");
        }
        if (hudPctRef.current) {
          hudPctRef.current.textContent = (smoothProgress * 100).toFixed(1) + "%";
        }
      }

      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.2}px)`;

      rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => measure();
    const onResize = () => {
      if (lastIdxRef.current >= 0) drawFrame(lastIdxRef.current);
      measure();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(() => {
      if (lastIdxRef.current >= 0) drawFrame(lastIdxRef.current);
    });
    if (canvasRef.current) ro.observe(canvasRef.current);

    measure();
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [totalFrames]);

  // Live telemetry HUD (page-wide bottom strip + frame HUD coords)
  useEffect(() => {
    let raf = 0;
    let frames = 0;
    let lastFpsT = performance.now();
    let fps = 60;
    let mx = 0, my = 0;
    const startT = performance.now();

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const fmt = (n: number, w = 2) => String(Math.floor(n)).padStart(w, "0");

    const loop = () => {
      frames++;
      const now = performance.now();
      if (now - lastFpsT >= 500) {
        fps = Math.round((frames * 1000) / (now - lastFpsT));
        frames = 0;
        lastFpsT = now;
      }
      const doc = document.documentElement;
      const scrollPct =
        doc.scrollHeight > window.innerHeight
          ? (window.scrollY / (doc.scrollHeight - window.innerHeight)) * 100
          : 0;
      const elapsed = (now - startT) / 1000;
      const mm = Math.floor(elapsed / 60);
      const ss = Math.floor(elapsed % 60);
      const ms = Math.floor((elapsed * 100) % 100);

      if (telScrollRef.current) telScrollRef.current.textContent = scrollPct.toFixed(1) + "%";
      if (telFpsRef.current) telFpsRef.current.textContent = fps + " fps";
      if (telTimeRef.current)
        telTimeRef.current.textContent = `T+${fmt(mm)}:${fmt(ss)}.${fmt(ms)}`;
      if (telCoordRef.current)
        telCoordRef.current.textContent = `${fmt(mx, 4)} · ${fmt(my, 4)}`;
      if (telViewRef.current)
        telViewRef.current.textContent = `${window.innerWidth}×${window.innerHeight}`;
      if (hudCoordRef.current)
        hudCoordRef.current.textContent = `LAT ${fmt(mx % 90, 2)}.${fmt((mx * 13) % 100, 2)}  LON ${fmt(my % 180, 3)}.${fmt((my * 7) % 100, 2)}`;

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`kz ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Dynamic Background Elements */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="grain" />
      <canvas id="rain" ref={rainRef} />

      {/* Custom lagging cursors */}
      <div id="cur" ref={curRef} />
      <div id="cur2" ref={cur2Ref} />

      {/* Navigation */}
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nlogo">
          <span className="dot" />
          KENZION<em>hq</em>
        </a>
        <ul className="nlinks">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
        </ul>
        <div className="nav-actions">
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="theme-toggle"
            aria-label="Toggle visual theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#contact" className="ncta">
            Start Project →
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <div>
          <div className="heyebrow">
            <span className="pulse" />
            Web Development × AI Engineering
          </div>
          <h1 className="htitle">
            We engineer brands
            <br />
            for the <span className="grad">AI-native web.</span>
          </h1>
          <p className="hsub">
            KENZIONhq is a studio led by a builder with 5+ years across
            full-stack development, product design, and applied AI — turning
            ideas into fast, intelligent, beautifully engineered digital
            products.
          </p>
          <div className="hactions">
            <a href="#work" className="btn-primary">
              See Our Work →
            </a>
            <a href="#services" className="btn-ghost">
              What We Do ↓
            </a>
          </div>
          <div className="hstack">
            <span className="hstack-label">Built with</span>
            <div className="stackchips">
              <span className="chip">React</span>
              <span className="chip">Node.js</span>
              <span className="chip">Claude / GPT</span>
              <span className="chip">Figma</span>
              <span className="chip">Python</span>
              <span className="chip">TypeScript</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Terminal */}
        <div className="term-wrap">
          <div className="term">
            <div className="term-bar">
              <div className="term-dot" />
              <div className="term-dot" />
              <div className="term-dot" />
              <span className="term-title">kenzionhq — build.sh</span>
            </div>
            <div className="term-body">
              {termLines.map((line, idx) => (
                <div className="term-line" key={idx}>
                  {idx <= currentLineIdx && (
                    <>
                      <span className="term-prompt">{line.p}</span>
                      <span className={line.cls}>{line.typed}</span>
                      {idx === currentLineIdx &&
                        currentCharIdx < line.t.length && (
                          <span className="cursor-blink" />
                        )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="term-float f1">
            <span className="fcheck">✓</span> Deployed in 2.1s
          </div>
          <div className="term-float f2">
            <span className="fcheck">✓</span> 100% Client Retention
          </div>
        </div>
      </section>

      <div className="glitch-line" />

      {/* Marquee Ticker */}
      <div className="mwrap">
        <div className="mtrack">
          {[0, 1, 2].map((i) => (
            <div className="mitem" key={i}>
              Web Design <b>//</b> Brand Identity <b>//</b> Full Stack Dev{" "}
              <b>//</b> Site Maintenance <b>//</b> UI/UX Design <b>//</b> Digital
              Experiences
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about">
        <div className="about-grid">
          <div className="reveal">
            <div className="stag">Who We Are</div>
            <h2 className="stitle">
              Built by an engineer who designs, and a designer who ships.
            </h2>
            <p className="sbody">
              KENZIONhq exists because most studios pick a lane — design or
              development, creativity or precision. We don't. Every project
              moves through one mind, from strategy to shipped code, which means
              nothing gets lost in translation.
            </p>
            <p className="sbody">
              We operate at the intersection of engineering precision and visual
              artistry. The result is work that doesn't just look different —
              it performs differently.
            </p>
            <div className="founder">
              <div className="favatop">
                <div className="favatar">OK</div>
                <div>
                  <div className="fname">Ogunfowora Kehinde</div>
                  <div className="ftitle">Founder · Web Developer · AI Engineer</div>
                </div>
              </div>
              <p className="fbio">
                Kehinde founded KENZIONhq on the belief that the best digital
                work today sits at the intersection of solid engineering and
                applied AI. Five years of building products, prompts, and
                brands — now channeled into every client engagement.
              </p>
            </div>
          </div>
          <div className="reveal reveal-d1">
            <div className="stag">Our Beliefs</div>
            <div className="beliefs">
              {[
                {
                  icon: "⚙️",
                  title: "Engineering-First Design",
                  text: "Every visual decision respects how it'll actually be built and how it'll perform.",
                },
                {
                  icon: "🤖",
                  title: "AI as a Force Multiplier",
                  text: "We use AI tools to move faster without cutting corners on craft or quality.",
                },
                {
                  icon: "📐",
                  title: "Systems Over One-Offs",
                  text: "We build reusable design systems and clean codebases, not throwaway pages.",
                },
                {
                  icon: "🚀",
                  title: "Shipped Beats Perfect",
                  text: "We move fast, launch, measure, and refine — momentum is the strategy.",
                },
              ].map((b, idx) => (
                <div className="belief" key={idx}>
                  <div className="bicon">{b.icon}</div>
                  <div>
                    <div className="btitle">{b.title}</div>
                    <div className="btext">{b.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="sh reveal">
          <div>
            <div className="stag">What We Do</div>
            <h2 className="stitle">
              Three disciplines.
              <br />
              One studio.
            </h2>
          </div>
          <p
            style={{
              fontSize: 14.5,
              color: "var(--ink2)",
              maxWidth: 340,
              lineHeight: 1.85,
              alignSelf: "end",
            }}
          >
            End-to-end digital execution. No hand-offs, no middlemen. Just clean
            craft and modern engineering directly to launch.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="bento reveal reveal-d1">
          {[
            {
              icon: <Code2 size={20} />,
              name: "Web Design & Development",
              desc: "Custom-built websites and web apps — fast, accessible, and engineered to convert, not just to look good in a screenshot.",
              tags: ["Landing Pages", "Web Apps", "E-Commerce", "Next.js"],
            },
            {
              icon: <Sparkles size={20} />,
              name: "Brand Identity & Design",
              desc: "Visual systems — logo, color, type, and guidelines — built with the same logical rigor we bring to coding.",
              tags: ["Logo Systems", "UI/UX", "Guidelines", "Figma"],
            },
            {
              icon: <Database size={20} />,
              name: "Full Stack & Maintenance",
              desc: "Reliable back-end architecture and ongoing support so your product keeps working, and keeps improving.",
              tags: ["Backend Dev", "Databases", "Hosting & DevOps", "Support"],
            },
          ].map((card, i) => (
            <div className="bcard" key={i}>
              <div className="bcard-glow" />
              <div className="bicon-lg">{card.icon}</div>
              <div className="bname">{card.name}</div>
              <div className="bdesc">{card.desc}</div>
              <div className="btags">
                {card.tags.map((t) => (
                  <span className="btag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Sticky Section */}
      <section
        className="scrollvid"
        id="scrollvid"
        ref={vidWrapRef as React.RefObject<HTMLElement>}
      >
        <div className="scrollvid-sticky">
          <div className="scrollvid-tag">// kenzionhq.reel · sequence_01</div>
          <canvas ref={canvasRef} className="scrollvid-canvas" />
          <div className="vid-grid" />
          <div className="vid-edge-fade top" />
          <div className="vid-edge-fade bottom" />

          {/* NASA-style mission control HUD */}
          <div className="hud-overlay" aria-hidden="true">
            <div className="hud-ring" />
            <div className="hud-crosshair" />
            <div className="hud-ticks">
              {Array.from({ length: 11 }).map((_, i) => (
                <i key={i} className={i % 5 === 0 ? "major" : ""} />
              ))}
            </div>
            <div className="hud-corner tl">
              <span className="lbl">FRAME</span>
              <span className="val" ref={hudFrameRef}>001 / {String(totalFrames).padStart(3, "0")}</span>
              <span className="lbl">SCRUB</span>
              <span className="val" ref={hudPctRef}>0.0%</span>
            </div>
            <div className="hud-corner bl">
              <span className="lbl">SIGNAL · NOMINAL</span>
              <span className="val">UPLINK · STABLE</span>
            </div>
            <div className="hud-corner br">
              <span className="lbl">TRACKING</span>
              <span className="val" ref={hudCoordRef}>LAT 00.00 LON 000.00</span>
            </div>
          </div>

          <div className="scrollvid-progress">
            <div className="bar" ref={barRef} />
          </div>
          {totalFrames > 0 && (
            <div
              className={`scrollvid-loader${loadedFrames >= totalFrames ? " gone" : ""}`}
            >
              <div>
                Loading frames {loadedFrames} / {totalFrames}
              </div>
              <div className="lbar">
                <i
                  style={{
                    width: `${(loadedFrames / totalFrames) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Work Portfolio Section */}
      <section id="work">
        <div className="reveal">
          <div className="stag">Portfolio</div>
          <h2 className="stitle">
            Selected
            <br />
            <em>Work.</em>
          </h2>
        </div>
        <div className="wgrid reveal reveal-d1">
          {[
            {
              cat: "Web Design · Development",
              title: "E-Commerce Platform",
              desc: "Full custom store built from zero to launch.",
              idx: "01",
            },
            {
              cat: "Brand Identity",
              title: "Brand System Redesign",
              desc: "Complete visual overhaul for a growing brand.",
              idx: "02",
            },
            {
              cat: "Full Stack Development",
              title: "SaaS Dashboard",
              desc: "Complex web app, built to scale from day one.",
              idx: "03",
            },
            {
              cat: "Web Design",
              title: "Agency Landing Page",
              desc: "High-converting page with cinematic motion.",
              idx: "04",
            },
          ].map((item) => (
            <div className="wcard" key={item.idx}>
              <div className="wcard-bg" />
              <div className="wpat" />
              <div className="wover" />
              <div className="widx">{item.idx}</div>
              <div className="wlink">↗</div>
              <div className="winfo">
                <div className="wcat">{item.cat}</div>
                <div className="wtitle">{item.title}</div>
                <div className="wdesc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section id="why">
        <div className="reveal">
          <div className="stag">Why KENZIONhq</div>
          <h2 className="stitle">
            The Standard
            <br />
            <em>Is Different Here.</em>
          </h2>
        </div>
        <div className="wh-grid reveal reveal-d1">
          {[
            {
              n: "01",
              t: "No Mediocre Work. Ever.",
              d: "If it doesn't represent the best of what we can do, it doesn't leave our studio.",
            },
            {
              n: "02",
              t: "End-to-End Ownership",
              d: "Strategy, design, development, and launch — all under one roof.",
            },
            {
              n: "03",
              t: "Built to Perform",
              d: "Every decision is tied to an outcome, not just a decorative aesthetic.",
            },
            {
              n: "04",
              t: "We Grow With You",
              d: "Scalable systems and a studio that stays in your corner long after launch.",
            },
          ].map((card) => (
            <div className="whcard" key={card.n}>
              <div className="whn">{card.n}</div>
              <div className="whtitle">{card.t}</div>
              <div className="whdesc">{card.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process">
        <div className="reveal">
          <div className="stag">How We Work</div>
          <h2 className="stitle">
            The Process
            <br />
            <em>Behind the Work.</em>
          </h2>
        </div>
        <div className="plist reveal reveal-d1">
          <div className="steps-row">
            {[
              {
                n: "01",
                name: "Discovery",
                d: "We get inside your brand, your goals, and your market. No assumptions, no templates.",
              },
              {
                n: "02",
                name: "Strategy",
                d: "Architecture, user flow, visual direction, and scope locked in before a pixel moves.",
              },
              {
                n: "03",
                name: "Design",
                d: "High-fidelity designs built with intention. Nothing decorative, everything communicates.",
              },
              {
                n: "04",
                name: "Build",
                d: "Clean, optimized, production-grade code. Fast, accessible, and built to scale.",
              },
              {
                n: "05",
                name: "Launch",
                d: "We don't disappear after launch. Ongoing maintenance and strategic support.",
              },
            ].map((step) => (
              <div className="pstep" key={step.n}>
                <div className="pstep-dot">{step.n}</div>
                <div className="pname">{step.name}</div>
                <div className="pdesc">{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="cbox reveal">
          <div className="heyebrow" style={{ color: "var(--accent2)" }}>
            Start a Conversation
          </div>
          <h2 className="ctitle">
            Ready to build
            <br />
            something <span className="grad">smart?</span>
          </h2>
          <p className="csub">
            Tell us about your project. We'll take it from there.
          </p>
          <a href="mailto:hello@kenzionhq.com" className="cemail">
            hello@kenzionhq.com <ArrowRight size={16} />
          </a>
          <div className="csocials">
            {["Twitter", "Instagram", "LinkedIn", "GitHub"].map((s) => (
              <a href="#" className="csoc" key={s}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="flogo">
          KENZION<em>hq</em>
        </div>
        <div className="fcopy">
          © 2024 KENZIONhq · Founded by Ogunfowora Kehinde
        </div>
        <div className="fstatus">
          <div className="fdot" /> Available for projects
        </div>
      </footer>

      {/* Mission-control telemetry strip — fixed to viewport bottom */}
      <div className="telemetry-strip" aria-hidden="true">
        <div className="cell"><span className="led" /> <span>SYS · ONLINE</span></div>
        <div className="cell">SCROLL <b ref={telScrollRef as React.RefObject<HTMLElement>}>0.0%</b></div>
        <div className="cell">FPS <b ref={telFpsRef as React.RefObject<HTMLElement>}>60</b></div>
        <div className="cell">VIEW <b ref={telViewRef as React.RefObject<HTMLElement>}>0×0</b></div>
        <div className="cell">CURSOR <b ref={telCoordRef as React.RefObject<HTMLElement>}>0000 · 0000</b></div>
        <div className="cell">UPTIME <b ref={telTimeRef as React.RefObject<HTMLElement>}>T+00:00.00</b></div>
        <div className="cell">BUILD <b>2025.11 · ION-CYAN</b></div>
      </div>
    </div>
  );
}
