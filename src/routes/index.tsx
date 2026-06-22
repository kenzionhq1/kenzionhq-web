import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import frameUrls from "@/assets/frames/manifest.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KENZIONhq — Digital Studio" },
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
.kz{
  --bg:#04040a;--bg2:#08080f;
  --c:#00ffe0;--c2:#7b2fff;--c3:#ff2d55;
  --w:#ffffff;--g:#888899;
  --mono:'JetBrains Mono',monospace;
  --disp:'Bebas Neue',sans-serif;
  --body:'Syne',sans-serif;
  background:var(--bg);color:var(--w);font-family:var(--body);overflow-x:hidden;
}
@media(min-width:1100px){.kz{cursor:none}}
.kz a,.kz button{color:inherit}
html{scroll-behavior:smooth}
@media(max-width:1099px),(hover:none){.kz #cur,.kz #cur2{display:none}}

.kz #cur{position:fixed;width:8px;height:8px;background:var(--c);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);mix-blend-mode:screen}
.kz #cur2{position:fixed;width:40px;height:40px;border:1px solid rgba(0,255,224,.3);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:width .3s,height .3s}
.kz #rain{position:fixed;inset:0;z-index:0;opacity:.04;pointer-events:none}

.kz nav{position:fixed;top:0;left:0;right:0;z-index:500;display:flex;align-items:center;justify-content:space-between;padding:24px 48px;gap:24px}
.kz nav::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,rgba(4,4,10,.92),transparent);z-index:-1}
.kz .nlogo{font-family:var(--disp);font-size:24px;letter-spacing:3px;color:var(--w);text-decoration:none;flex-shrink:0}
.kz .nlogo em{color:var(--c);font-style:normal}
.kz .nlinks{display:flex;gap:40px;list-style:none}
.kz .nlinks a{font-family:var(--mono);font-size:10px;color:var(--g);text-decoration:none;letter-spacing:.15em;text-transform:uppercase;position:relative}
.kz .nlinks a::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:1px;background:var(--c);transition:width .3s}
.kz .nlinks a:hover{color:var(--c)}
.kz .nlinks a:hover::after{width:100%}
.kz .ncta{font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--bg);background:var(--c);padding:12px 24px;text-decoration:none;transition:all .3s;clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);white-space:nowrap;flex-shrink:0}
.kz .ncta:hover{background:var(--c2);color:var(--w)}

.kz #hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:140px 48px 56px;position:relative;overflow:hidden;gap:56px}
.kz .bgtext{position:absolute;bottom:-20px;left:-10px;font-family:var(--disp);font-size:clamp(160px,22vw,360px);color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.03);letter-spacing:5px;pointer-events:none;user-select:none;z-index:1;white-space:nowrap}
.kz .hero-main{display:flex;flex-direction:column;position:relative;z-index:2}
.kz .htag{font-family:var(--mono);font-size:10px;color:var(--c);letter-spacing:.25em;text-transform:uppercase;margin-bottom:24px;display:flex;align-items:center;gap:16px;opacity:0;animation:kzup .8s .4s forwards;flex-wrap:wrap}
.kz .htag::before{content:'';width:32px;height:1px;background:var(--c)}
.kz .htag span{color:var(--g)}
.kz .htitle{font-family:var(--disp);line-height:.9;letter-spacing:2px}
.kz .hl1,.kz .hl2,.kz .hl3{font-size:clamp(64px,11vw,170px);display:block;opacity:0}
.kz .hl1{animation:kzup .9s .5s forwards}
.kz .hl2{color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.2);animation:kzup .9s .65s forwards}
.kz .hl3{animation:kzup .9s .8s forwards}
.kz .hl3 .glow{color:var(--c);text-shadow:0 0 80px rgba(0,255,224,.4),0 0 120px rgba(0,255,224,.2)}
.kz .hero-bottom{display:grid;grid-template-columns:1fr auto 1fr;align-items:end;position:relative;z-index:2;opacity:0;animation:kzup .8s 1.1s forwards;gap:40px}
.kz .hsub{font-size:14px;color:rgba(255,255,255,.45);line-height:1.8;max-width:320px}
.kz .hcta-wrap{display:flex;flex-direction:column;align-items:center;gap:14px}
.kz .hcta{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--bg);background:var(--c);padding:18px 44px;text-decoration:none;transition:all .4s;text-align:center;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}
.kz .hcta:hover{background:var(--c2);color:var(--w);transform:translateY(-3px)}
.kz .hcta-sub{font-family:var(--mono);font-size:9px;color:var(--g);letter-spacing:.2em;text-transform:uppercase}
.kz .hstats{display:flex;flex-direction:column;align-items:flex-end;gap:18px}
.kz .hstat-n{font-family:var(--disp);font-size:40px;color:var(--c);letter-spacing:1px;line-height:1}
.kz .hstat-l{font-family:var(--mono);font-size:9px;color:var(--g);letter-spacing:.15em;text-transform:uppercase}

.kz .glitch-line{height:1px;background:linear-gradient(to right,transparent,var(--c),transparent);position:relative;overflow:hidden}
.kz .glitch-line::after{content:'';position:absolute;inset:0;background:linear-gradient(to right,transparent,var(--c2),transparent);animation:kzglitchLine 4s infinite}
@keyframes kzglitchLine{0%,100%{transform:translateX(-100%)}50%{transform:translateX(100%)}}

.kz .mwrap{padding:18px 0;overflow:hidden;background:rgba(0,255,224,.03);border-top:1px solid rgba(0,255,224,.08);border-bottom:1px solid rgba(0,255,224,.08)}
.kz .mtrack{display:flex;animation:kzmarquee 25s linear infinite;width:max-content}
.kz .mitem{font-family:var(--mono);font-size:10px;color:var(--g);letter-spacing:.2em;text-transform:uppercase;padding:0 48px;display:flex;align-items:center;gap:48px;white-space:nowrap;border-right:1px solid rgba(255,255,255,.06)}
.kz .mitem b{color:var(--c);font-weight:400}

.kz #about{padding:140px 48px;position:relative;z-index:1}
.kz .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:120px;align-items:start}
.kz .stag{font-family:var(--mono);font-size:10px;color:var(--c);letter-spacing:.2em;text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:12px}
.kz .stag::before{content:'';width:24px;height:1px;background:var(--c)}
.kz .stitle{font-family:var(--disp);font-size:clamp(48px,5vw,72px);letter-spacing:1px;line-height:.95;margin-bottom:36px}
.kz .stitle em{color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.25);font-style:normal}
.kz .sbody{font-size:15px;color:rgba(255,255,255,.45);line-height:1.9;margin-bottom:16px}

.kz .founder{background:linear-gradient(135deg,rgba(0,255,224,.04),rgba(123,47,255,.04));border:1px solid rgba(0,255,224,.1);padding:48px;position:relative;clip-path:polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,0 100%);margin-top:32px}
.kz .favatop{display:flex;align-items:center;gap:20px;margin-bottom:28px}
.kz .favatar{width:64px;height:64px;background:linear-gradient(135deg,var(--c),var(--c2));clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);display:flex;align-items:center;justify-content:center;font-family:var(--disp);font-size:20px;color:var(--bg);flex-shrink:0}
.kz .fname{font-family:var(--disp);font-size:22px;letter-spacing:1px}
.kz .ftitle{font-family:var(--mono);font-size:10px;color:var(--c);letter-spacing:.15em;text-transform:uppercase;margin-top:4px}
.kz .fbio{font-size:14px;color:rgba(255,255,255,.4);line-height:1.9;border-top:1px solid rgba(255,255,255,.06);padding-top:24px}

.kz .vals{display:flex;flex-direction:column}
.kz .val{padding:28px 0;border-bottom:1px solid rgba(255,255,255,.06);display:grid;grid-template-columns:40px 1fr;gap:20px;transition:padding-left .3s}
.kz .val:hover{padding-left:12px}
.kz .val:first-child{border-top:1px solid rgba(255,255,255,.06)}
.kz .vn{font-family:var(--mono);font-size:10px;color:var(--c);padding-top:5px}
.kz .vt{font-weight:700;font-size:17px;margin-bottom:6px}
.kz .vd{font-size:13px;color:var(--g);line-height:1.7}

.kz #services{padding:0 48px 140px;position:relative;z-index:1}
.kz .sh{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;margin-bottom:80px}
.kz .slist{display:flex;flex-direction:column;gap:2px}
.kz .scard{background:rgba(255,255,255,.018);border:1px solid rgba(255,255,255,.06);padding:48px;display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;transition:all .4s;position:relative;overflow:hidden;cursor:none}
.kz .scard::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(to bottom,var(--c),var(--c2));transform:scaleY(0);transform-origin:top;transition:transform .4s}
.kz .scard:hover{border-color:rgba(0,255,224,.2);transform:translateX(8px)}
.kz .scard:hover::before{transform:scaleY(1)}
.kz .sicon{font-family:var(--mono);font-size:11px;color:var(--c);letter-spacing:.15em;text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:10px}
.kz .sicon::before{content:'';width:20px;height:1px;background:var(--c)}
.kz .sname{font-family:var(--disp);font-size:40px;letter-spacing:1px;margin-bottom:12px;line-height:1}
.kz .sdesc{font-size:13px;color:rgba(255,255,255,.4);line-height:1.8;max-width:460px}
.kz .stags{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
.kz .stag2{font-family:var(--mono);font-size:9px;color:rgba(0,255,224,.7);border:1px solid rgba(0,255,224,.15);padding:5px 12px;letter-spacing:.08em}
.kz .sarrow{font-size:24px;color:rgba(0,255,224,.3);transition:all .4s}
.kz .scard:hover .sarrow{color:var(--c);transform:translateX(8px)}

.kz .scrollvid{height:400vh;position:relative;z-index:1}
.kz .scrollvid-sticky{position:sticky;top:0;height:100vh;overflow:hidden;background:#000}
.kz .scrollvid-sticky video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.85}
.kz .vid-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(0,255,224,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,224,.04) 1px,transparent 1px);background-size:80px 80px;-webkit-mask-image:radial-gradient(ellipse 70% 80% at 50% 50%,black,transparent);mask-image:radial-gradient(ellipse 70% 80% at 50% 50%,black,transparent)}
.kz .scrollvid-overlay{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;z-index:3;pointer-events:none;background:linear-gradient(to bottom,rgba(4,4,10,.3),transparent 30%,transparent 70%,rgba(4,4,10,.5))}
.kz .vid-label{font-family:var(--mono);font-size:10px;color:var(--c);letter-spacing:.3em;text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:20px}
.kz .vid-label::before,.kz .vid-label::after{content:'';width:60px;height:1px;background:linear-gradient(to right,transparent,var(--c))}
.kz .vid-label::after{background:linear-gradient(to left,transparent,var(--c))}
.kz .vid-title{font-family:var(--disp);font-size:clamp(60px,9vw,130px);letter-spacing:3px;line-height:.9}
.kz .vid-title em{color:var(--c);font-style:normal;text-shadow:0 0 60px rgba(0,255,224,.4)}
.kz .scrollvid-progress{position:absolute;bottom:0;left:0;right:0;height:2px;background:rgba(255,255,255,.06);z-index:4}
.kz .scrollvid-progress .bar{height:100%;width:0%;background:linear-gradient(to right,var(--c),var(--c2));transition:width .1s linear}
.kz .scrollvid-tag{position:absolute;top:48px;left:64px;font-family:var(--mono);font-size:9px;color:rgba(255,255,255,.3);letter-spacing:.2em;text-transform:uppercase;z-index:4}

.kz #work{padding:140px 48px;z-index:1;position:relative}
.kz .wgrid{display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:80px}
.kz .wcard{position:relative;overflow:hidden;aspect-ratio:4/3;cursor:none;background:#08080f}
.kz .wcard-bg{position:absolute;inset:0;transition:transform .7s cubic-bezier(.16,1,.3,1)}
.kz .wcard:hover .wcard-bg{transform:scale(1.08)}
.kz .wcard:nth-child(1) .wcard-bg{background:linear-gradient(135deg,#000814,#001d3d)}
.kz .wcard:nth-child(2) .wcard-bg{background:linear-gradient(135deg,#10002b,#240046)}
.kz .wcard:nth-child(3) .wcard-bg{background:linear-gradient(135deg,#1b4332,#081c15)}
.kz .wcard:nth-child(4) .wcard-bg{background:linear-gradient(135deg,#370617,#6a040f)}
.kz .wpat{position:absolute;inset:0;opacity:.1;transition:opacity .5s}
.kz .wcard:hover .wpat{opacity:.25}
.kz .wcard:nth-child(1) .wpat{background:repeating-conic-gradient(rgba(0,255,224,.15) 0%,transparent .3%,transparent 25%);background-size:40px 40px}
.kz .wcard:nth-child(2) .wpat{background:repeating-linear-gradient(60deg,transparent,transparent 18px,rgba(123,47,255,.3) 18px,rgba(123,47,255,.3) 19px)}
.kz .wcard:nth-child(3) .wpat{background:radial-gradient(circle,rgba(0,255,100,.2) 1px,transparent 1px);background-size:24px 24px}
.kz .wcard:nth-child(4) .wpat{background:repeating-linear-gradient(-60deg,transparent,transparent 18px,rgba(255,45,85,.2) 18px,rgba(255,45,85,.2) 19px)}
.kz .wover{position:absolute;inset:0;background:linear-gradient(to top,rgba(4,4,10,.97) 0%,rgba(4,4,10,.3) 50%,transparent 100%)}
.kz .winfo{position:absolute;bottom:0;left:0;right:0;padding:40px;transform:translateY(20px);transition:transform .4s}
.kz .wcard:hover .winfo{transform:translateY(0)}
.kz .wcat{font-family:var(--mono);font-size:9px;color:var(--c);letter-spacing:.2em;text-transform:uppercase;margin-bottom:8px}
.kz .wtitle{font-family:var(--disp);font-size:32px;letter-spacing:1px;margin-bottom:6px}
.kz .wdesc{font-size:12px;color:rgba(255,255,255,.4);opacity:0;transform:translateY(10px);transition:all .4s .05s}
.kz .wcard:hover .wdesc{opacity:1;transform:translateY(0)}
.kz .widx{position:absolute;top:32px;right:32px;font-family:var(--disp);font-size:60px;color:rgba(255,255,255,.04);letter-spacing:2px;transition:color .4s}
.kz .wcard:hover .widx{color:rgba(0,255,224,.08)}
.kz .wlink{position:absolute;top:32px;left:32px;width:40px;height:40px;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.2);font-size:16px;transform:rotate(-45deg) scale(0);transition:all .4s;clip-path:polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)}
.kz .wcard:hover .wlink{transform:rotate(0) scale(1);border-color:var(--c);color:var(--c)}

.kz #why{padding:0 48px 140px;position:relative;z-index:1}
.kz .wh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:3px;margin-top:80px}
.kz .whcard{background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);padding:56px 48px;position:relative;overflow:hidden;transition:all .4s;cursor:none}
.kz .whcard::before{content:'';position:absolute;top:-60px;right:-60px;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle,rgba(0,255,224,.06),transparent);transition:transform .5s}
.kz .whcard:hover{background:rgba(0,255,224,.04);border-color:rgba(0,255,224,.2)}
.kz .whcard:hover::before{transform:scale(2)}
.kz .whcard:nth-child(2)::before{background:radial-gradient(circle,rgba(123,47,255,.06),transparent)}
.kz .whcard:nth-child(3)::before{background:radial-gradient(circle,rgba(255,45,85,.06),transparent)}
.kz .whcard:nth-child(4)::before{background:radial-gradient(circle,rgba(79,142,247,.06),transparent)}
.kz .whn{font-family:var(--disp);font-size:80px;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.06);margin-bottom:28px;line-height:1}
.kz .whcard:hover .whn{-webkit-text-stroke:1px rgba(0,255,224,.2)}
.kz .whtitle{font-family:var(--disp);font-size:28px;letter-spacing:.5px;margin-bottom:14px}
.kz .whdesc{font-size:13px;color:rgba(255,255,255,.4);line-height:1.9}

.kz #process{padding:0 48px 140px;position:relative;z-index:1}
.kz .plist{margin-top:80px}
.kz .pstep{display:grid;grid-template-columns:120px 1fr 1fr;border-bottom:1px solid rgba(255,255,255,.06);transition:all .4s;cursor:none;position:relative;overflow:hidden}
.kz .pstep::after{content:'';position:absolute;inset:0;background:rgba(0,255,224,.02);transform:scaleX(0);transform-origin:left;transition:transform .5s;z-index:0}
.kz .pstep:hover::after{transform:scaleX(1)}
.kz .pstep:first-child{border-top:1px solid rgba(255,255,255,.06)}
.kz .pstep>*{padding:44px 40px;position:relative;z-index:1}
.kz .pn{font-family:var(--disp);font-size:72px;color:transparent;-webkit-text-stroke:1px rgba(0,255,224,.15);line-height:1;display:flex;align-items:center}
.kz .pstep:hover .pn{-webkit-text-stroke:1px rgba(0,255,224,.5)}
.kz .pname{font-family:var(--disp);font-size:42px;letter-spacing:1px;display:flex;align-items:center;border-left:1px solid rgba(255,255,255,.06)}
.kz .pdesc{font-size:13px;color:rgba(255,255,255,.4);line-height:1.9;display:flex;align-items:center;border-left:1px solid rgba(255,255,255,.06)}

.kz #contact{padding:140px 48px;text-align:center;position:relative;z-index:1;overflow:hidden}
.kz .ctop::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:700px;background:radial-gradient(circle,rgba(0,255,224,.04) 0%,transparent 70%);pointer-events:none}
.kz .ctitle{font-family:var(--disp);font-size:clamp(60px,10vw,150px);letter-spacing:3px;line-height:.9;margin-bottom:32px;position:relative;z-index:1}
.kz .ctitle em{color:var(--c);font-style:normal;display:block;text-shadow:0 0 60px rgba(0,255,224,.2)}
.kz .csub{font-size:15px;color:rgba(255,255,255,.35);margin-bottom:56px;position:relative;z-index:1}
.kz .cemail{display:inline-block;font-family:var(--mono);font-size:clamp(14px,2vw,20px);color:var(--c);text-decoration:none;letter-spacing:.05em;margin-bottom:64px;position:relative;z-index:1}
.kz .cemail::after{content:'';position:absolute;bottom:-6px;left:0;right:0;height:1px;background:var(--c);transform:scaleX(0);transition:transform .4s}
.kz .cemail:hover::after{transform:scaleX(1)}
.kz .csocials{display:flex;justify-content:center;gap:3px;position:relative;z-index:1;flex-wrap:wrap}
.kz .csoc{font-family:var(--mono);font-size:10px;color:var(--g);text-decoration:none;letter-spacing:.15em;text-transform:uppercase;padding:14px 28px;border:1px solid rgba(255,255,255,.06);transition:all .3s;clip-path:polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)}
.kz .csoc:hover{color:var(--c);border-color:rgba(0,255,224,.3);background:rgba(0,255,224,.04)}

.kz footer{padding:28px 64px;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;align-items:center;position:relative;z-index:1;gap:16px;flex-wrap:wrap}
.kz .flogo{font-family:var(--disp);font-size:18px;letter-spacing:3px;color:rgba(255,255,255,.2)}
.kz .flogo em{color:var(--c);font-style:normal}
.kz .fcopy{font-family:var(--mono);font-size:9px;color:rgba(255,255,255,.2);letter-spacing:.1em}
.kz .fstatus{display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:9px;color:var(--g);letter-spacing:.1em}
.kz .fdot{width:6px;height:6px;background:#00ff88;border-radius:50%;animation:kzpulse 2s infinite}
@keyframes kzpulse{0%,100%{box-shadow:0 0 0 0 rgba(0,255,136,.4)}50%{box-shadow:0 0 0 6px rgba(0,255,136,0)}}

@keyframes kzup{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes kzmarquee{to{transform:translateX(-50%)}}
.kz .reveal{opacity:0;transform:translateY(50px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1)}
.kz .reveal.on{opacity:1;transform:none}
.kz .reveal-d1{transition-delay:.1s}

@media(max-width:1100px){
  .kz nav{padding:20px 28px}
  .kz .nlinks{display:none}
  .kz .about-grid{grid-template-columns:1fr;gap:80px}
  .kz .sh{grid-template-columns:1fr;gap:24px}
  .kz .hero-bottom{grid-template-columns:1fr;gap:40px}
  .kz .hsub{max-width:100%}
  .kz .hcta-wrap{align-items:flex-start}
  .kz .hstats{flex-direction:row;align-items:flex-start;gap:48px}
}
@media(max-width:768px){
  .kz #hero{padding:120px 24px 48px}
  .kz #about,.kz #services,.kz #work,.kz #why,.kz #process,.kz #contact{padding-left:24px;padding-right:24px}
  .kz #about,.kz #work,.kz #contact{padding-top:100px;padding-bottom:100px}
  .kz #services,.kz #why,.kz #process{padding-bottom:100px}
  .kz .wh-grid,.kz .pstep{grid-template-columns:1fr}
  .kz .wgrid{grid-template-columns:1fr}
  .kz .pstep{grid-template-columns:60px 1fr}
  .kz .pdesc{grid-column:2;border-left:none;padding-top:0;border-top:1px solid rgba(255,255,255,.06)}
  .kz .scrollvid{height:300vh}
  .kz .scrollvid-tag{left:24px;top:96px}
  .kz .scard{padding:32px;grid-template-columns:1fr;gap:24px}
  .kz .scard .sarrow{justify-self:end}
  .kz .founder{padding:32px}
  .kz .whcard{padding:40px 32px}
  .kz .pstep>*{padding:28px 20px}
  .kz .pn{font-size:48px}
  .kz .pname{font-size:32px}
  .kz nav{padding:18px 20px}
  .kz .ncta{padding:10px 18px;font-size:9px}
  .kz .nlogo{font-size:20px}
  .kz footer{padding:24px;flex-direction:column;text-align:center}
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
  const [loadedFrames, setLoadedFrames] = useState(0);
  const totalFrames = frameUrls.length;

  // Matrix rain
  useEffect(() => {
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
    const id = window.setInterval(() => {
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
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Custom cursor
  useEffect(() => {
    const cur = curRef.current;
    const cur2 = cur2Ref.current;
    if (!cur || !cur2) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + "px";
      cur.style.top = my + "px";
    };
    const loop = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      cur2.style.left = rx + "px";
      cur2.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    document.addEventListener("mousemove", move);
    loop();
    const enter = () => {
      cur.style.width = "16px"; cur.style.height = "16px";
      cur2.style.width = "70px"; cur2.style.height = "70px";
    };
    const leave = () => {
      cur.style.width = "8px"; cur.style.height = "8px";
      cur2.style.width = "40px"; cur2.style.height = "40px";
    };
    const els = document.querySelectorAll(
      ".kz a,.kz .scard,.kz .wcard,.kz .whcard,.kz .pstep"
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
  }, []);

  // Reveal on scroll
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
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add("on");
      else obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Preload frame images
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
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Canvas frame draw (cover behavior, DPR-aware)
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

  // Scroll-driven frame scrubbing
  useEffect(() => {
    const wrap = vidWrapRef.current;
    const bar = barRef.current;
    const bg = bgTextRef.current;
    if (!wrap || !bar) return;

    let rafId = 0;
    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;
      bar.style.width = progress * 100 + "%";
      const n = framesRef.current.length;
      if (n > 0) {
        let idx = Math.round(progress * (totalFrames - 1));
        if (idx < 0) idx = 0;
        if (idx > totalFrames - 1) idx = totalFrames - 1;
        // clamp to nearest loaded frame
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
      }
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(update);
      }
    };
    const onResize = () => {
      if (lastIdxRef.current >= 0) drawFrame(lastIdxRef.current);
      update();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(() => {
      if (lastIdxRef.current >= 0) drawFrame(lastIdxRef.current);
    });
    if (canvasRef.current) ro.observe(canvasRef.current);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [totalFrames]);

  return (
    <div className="kz">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <canvas id="rain" ref={rainRef} />
      <div id="cur" ref={curRef} />
      <div id="cur2" ref={cur2Ref} />

      <nav>
        <a href="#" className="nlogo">KENZION<em>hq</em></a>
        <ul className="nlinks">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
        </ul>
        <a href="#contact" className="ncta">Start Project</a>
      </nav>

      <section id="hero">
        <div className="bgtext" ref={bgTextRef}>KENZION</div>
        <div className="hero-main">
          <div className="htag">Digital Studio <span>·</span> Est. 2024 <span>·</span> Lagos, Nigeria</div>
          <h1 className="htitle">
            <span className="hl1">WE DON'T</span>
            <span className="hl2">MAKE WEBSITES</span>
            <span className="hl3">WE MAKE <span className="glow">IMPACT.</span></span>
          </h1>
        </div>
        <div className="hero-bottom">
          <p className="hsub">KENZIONhq is a premium digital studio building web experiences, brand identities, and full-stack systems for brands that refuse to be ordinary.</p>
          <div className="hcta-wrap">
            <a href="#work" className="hcta">View Our Work</a>
            <span className="hcta-sub">↓ Scroll to explore</span>
          </div>
          <div className="hstats">
            <div><div className="hstat-n">50+</div><div className="hstat-l">Projects Shipped</div></div>
            <div><div className="hstat-n">100%</div><div className="hstat-l">Client Retention</div></div>
          </div>
        </div>
      </section>

      <div className="glitch-line" />

      <div className="mwrap">
        <div className="mtrack">
          {[0, 1, 2].map((i) => (
            <div className="mitem" key={i}>
              Web Design <b>//</b> Brand Identity <b>//</b> Full Stack Dev <b>//</b> Site Maintenance <b>//</b> UI/UX Design <b>//</b> Digital Experiences
            </div>
          ))}
        </div>
      </div>

      <section id="about">
        <div className="about-grid">
          <div className="reveal">
            <div className="stag">Who We Are</div>
            <h2 className="stitle">Studio Built<br />On <em>Obsession.</em></h2>
            <p className="sbody">KENZIONhq wasn't built to be another agency. It was built because most digital work is forgettable — and we refused to accept that. Every brand we touch gets our full creative obsession.</p>
            <p className="sbody">We operate at the intersection of engineering precision and visual artistry. The result is work that doesn't just look different — it performs differently.</p>
            <div className="founder">
              <div className="favatop">
                <div className="favatar">OK</div>
                <div>
                  <div className="fname">Ogunfowora Kehinde</div>
                  <div className="ftitle">Founder & Creative Director</div>
                </div>
              </div>
              <p className="fbio">A designer, developer, and digital strategist who built KENZIONhq from the ground up. Kehinde leads every project with the conviction that world-class digital craft should be accessible to any brand bold enough to demand it.</p>
            </div>
          </div>
          <div className="reveal reveal-d1">
            <div className="stag" style={{ marginBottom: 32 }}>Our Beliefs</div>
            <div className="vals">
              {[
                ["01", "Craft Over Speed", "We move with urgency but never sacrifice quality. Every detail is deliberate."],
                ["02", "Results Over Aesthetics", "Beautiful work that also performs. Design in service of business outcomes."],
                ["03", "Specificity Over Generality", "We don't build for everyone. We build for brands with a point of view."],
                ["04", "Long-Term Over Transactional", "We invest in relationships. Our best clients are the ones who grow with us."],
              ].map(([n, t, d]) => (
                <div className="val" key={n}>
                  <div className="vn">{n}</div>
                  <div><div className="vt">{t}</div><div className="vd">{d}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="sh reveal">
          <div>
            <div className="stag">What We Do</div>
            <h2 className="stitle">Three Core<br /><em>Disciplines.</em></h2>
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.35)", maxWidth: 300, lineHeight: 1.9, alignSelf: "end" }}>End-to-end digital execution. No hand-offs, no middlemen. Just us and the work.</p>
        </div>
        <div className="slist reveal reveal-d1">
          {[
            ["01 — Web", "Web Design &", "Development", "Custom websites engineered for performance and built to convert. From concept to launch — every pixel, every line of code, handled in-house.", ["Landing Pages", "E-Commerce", "Web Apps", "CMS Integration"]],
            ["02 — Brand", "Brand Identity", "& Design", "Visual identities that command attention and hold it. Logo systems, color languages, typography, and brand guidelines built to last.", ["Logo Systems", "Brand Guidelines", "UI/UX Design"]],
            ["03 — Stack", "Full Stack &", "Maintenance", "Robust back-end architecture and ongoing care so your digital presence stays sharp, secure, and ready to scale.", ["Backend Dev", "Databases", "Hosting & DevOps", "Support"]],
          ].map(([icon, l1, l2, desc, tags], i) => (
            <div className="scard" key={i}>
              <div>
                <div className="sicon">{icon as string}</div>
                <div className="sname">{l1 as string}<br />{l2 as string}</div>
                <div className="sdesc">{desc as string}</div>
                <div className="stags">
                  {(tags as string[]).map((t) => <span className="stag2" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="sarrow">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="scrollvid" id="scrollvid" ref={vidWrapRef as React.RefObject<HTMLElement>}>
        <div className="scrollvid-sticky">
          <div className="scrollvid-tag">// kenzionhq.reel</div>
          <video ref={videoRef} muted playsInline preload="auto" src={videoAsset.url} />
          <div className="vid-grid" />
          <div className="scrollvid-overlay">
            <div className="vid-label">Experience KENZIONhq</div>
            <div className="vid-title">Digital.<br /><em>Elevated.</em></div>
          </div>
          <div className="scrollvid-progress"><div className="bar" ref={barRef} /></div>
        </div>
      </section>

      <section id="work">
        <div className="reveal">
          <div className="stag">Portfolio</div>
          <h2 className="stitle">Selected<br /><em>Work.</em></h2>
        </div>
        <div className="wgrid reveal reveal-d1">
          {[
            ["Web Design · Development", "E-Commerce Platform", "Full custom store built from zero to launch.", "01"],
            ["Brand Identity", "Brand System Redesign", "Complete visual overhaul for a growing brand.", "02"],
            ["Full Stack Development", "SaaS Dashboard", "Complex web app, built to scale from day one.", "03"],
            ["Web Design", "Agency Landing Page", "High-converting page with cinematic motion.", "04"],
          ].map(([cat, title, desc, idx]) => (
            <div className="wcard" key={idx}>
              <div className="wcard-bg" /><div className="wpat" /><div className="wover" />
              <div className="widx">{idx}</div>
              <div className="wlink">↗</div>
              <div className="winfo">
                <div className="wcat">{cat}</div>
                <div className="wtitle">{title}</div>
                <div className="wdesc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why">
        <div className="reveal">
          <div className="stag">Why KENZIONhq</div>
          <h2 className="stitle">The Standard<br /><em>Is Different Here.</em></h2>
        </div>
        <div className="wh-grid reveal reveal-d1">
          {[
            ["01", "No Mediocre Work. Ever.", "If it doesn't represent the best of what we can do, it doesn't leave our studio."],
            ["02", "End-to-End Ownership", "Strategy, design, development, and launch — all under one roof."],
            ["03", "Built to Perform", "Every decision is tied to an outcome, not just an aesthetic."],
            ["04", "We Grow With You", "Scalable systems and a studio that stays in your corner after launch."],
          ].map(([n, t, d]) => (
            <div className="whcard" key={n}>
              <div className="whn">{n}</div>
              <div className="whtitle">{t}</div>
              <div className="whdesc">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="process">
        <div className="reveal">
          <div className="stag">How We Work</div>
          <h2 className="stitle">The Process<br /><em>Behind the Work.</em></h2>
        </div>
        <div className="plist reveal reveal-d1">
          {[
            ["01", "Discovery", "We get inside your brand, your goals, and your market. No assumptions, no templates."],
            ["02", "Strategy", "Architecture, user flow, visual direction, and scope locked in before a pixel moves."],
            ["03", "Design", "High-fidelity designs built with intention. Nothing decorative, everything communicates."],
            ["04", "Build", "Clean, optimized, production-grade code. Fast, accessible, and built to scale."],
            ["05", "Launch & Support", "We don't disappear after launch. Ongoing maintenance and strategic support."],
          ].map(([n, name, d]) => (
            <div className="pstep" key={n}>
              <div className="pn">{n}</div>
              <div className="pname">{name}</div>
              <div className="pdesc">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="ctop reveal">
          <div className="stag" style={{ justifyContent: "center" }}>Start a Conversation</div>
          <h2 className="ctitle">Ready To<br /><em>Build?</em></h2>
          <p className="csub">Tell us about your project. We'll take it from there.</p>
          <a href="mailto:hello@kenzionhq.com" className="cemail">hello@kenzionhq.com</a>
          <div className="csocials">
            {["Twitter", "Instagram", "LinkedIn", "Behance"].map((s) => (
              <a href="#" className="csoc" key={s}>{s}</a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="flogo">KENZION<em>hq</em></div>
        <div className="fcopy">© 2024 KENZIONhq · Founded by Ogunfowora Kehinde · All rights reserved</div>
        <div className="fstatus"><div className="fdot" /> Available for projects</div>
      </footer>
    </div>
  );
}
