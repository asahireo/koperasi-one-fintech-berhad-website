import{c as h,j as e,u as g,a as b,b as v,d,m as a,t as f,P as u,S as y,D as w,e as j}from"./index-DKqXHo8_.js";import{A as x}from"./arrow-right-DtUoRCeL.js";import{C as N}from"./circle-check-CA2lfwxK.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],I=h("wallet",k),Y=()=>{const s=`
    .loader {
      --duration: 3s;
      /* Glorious white cubes */
      --primary: rgba(255, 255, 255, 1);
      --primary-light: rgba(255, 255, 255, 0.8);
      --primary-rgba: rgba(255, 255, 255, 0);
      width: 200px;
      height: 320px;
      position: relative;
      transform-style: preserve-3d;
      margin: 0 auto;
    }
    @media (max-width: 480px) {
      .loader {
        zoom: 0.44;
      }
    }
    .loader .ground {
      position: absolute;
      left: -50px;
      bottom: -120px;
      transform-style: preserve-3d;
      transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
    }
    .loader .ground div {
      transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
      width: 200px;
      height: 200px;
      background: var(--primary);
      background: linear-gradient(45deg, var(--primary) 0%, var(--primary) 50%, var(--primary-light) 50%, var(--primary-light) 100%);
      transform-style: preserve-3d;
      animation: ground var(--duration) linear forwards infinite;
    }
    .loader .ground div:before, .loader .ground div:after {
      display: none;
    }
    .loader .box {
      --x: 0;
      --y: 0;
      position: absolute;
      animation: var(--duration) linear forwards infinite;
      transform: translate(var(--x), var(--y));
    }
    .loader .box div {
      background-color: var(--primary);
      width: 48px;
      height: 48px;
      position: relative;
      transform-style: preserve-3d;
      animation: var(--duration) ease forwards infinite;
      transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
    }
    .loader .box div:before, .loader .box div:after {
      --rx: 90deg;
      --ry: 0deg;
      --z: 24px;
      --y: -24px;
      --x: 0;
      content: "";
      position: absolute;
      background-color: inherit;
      width: inherit;
      height: inherit;
      transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
      filter: brightness(var(--b, 1.2));
    }
    .loader .box div:after {
      --rx: 0deg;
      --ry: 90deg;
      --x: 24px;
      --y: 0;
      --b: 1.4;
    }
    .loader .box.box0 { --x: -220px; --y: -120px; left: 58px; top: 108px; animation-name: box-move0; }
    .loader .box.box0 div { animation-name: box-scale0; }
    .loader .box.box1 { --x: -260px; --y: 120px; left: 25px; top: 120px; animation-name: box-move1; }
    .loader .box.box1 div { animation-name: box-scale1; }
    .loader .box.box2 { --x: 120px; --y: -190px; left: 58px; top: 64px; animation-name: box-move2; }
    .loader .box.box2 div { animation-name: box-scale2; }
    .loader .box.box3 { --x: 280px; --y: -40px; left: 91px; top: 120px; animation-name: box-move3; }
    .loader .box.box3 div { animation-name: box-scale3; }
    .loader .box.box4 { --x: 60px; --y: 200px; left: 58px; top: 132px; animation-name: box-move4; }
    .loader .box.box4 div { animation-name: box-scale4; }
    .loader .box.box5 { --x: -220px; --y: -120px; left: 25px; top: 76px; animation-name: box-move5; }
    .loader .box.box5 div { animation-name: box-scale5; }
    .loader .box.box6 { --x: -260px; --y: 120px; left: 91px; top: 76px; animation-name: box-move6; }
    .loader .box.box6 div { animation-name: box-scale6; }
    .loader .box.box7 { --x: -240px; --y: 200px; left: 58px; top: 87px; animation-name: box-move7; }
    .loader .box.box7 div { animation-name: box-scale7; }

    @keyframes box-move0 { 12% { transform: translate(var(--x), var(--y)); } 25%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90%, 100% { transform: translate(0, 188px); opacity: 0; } }
    @keyframes box-scale0 { 6% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 14%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move1 { 16% { transform: translate(var(--x), var(--y)); } 29%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90%, 100% { transform: translate(0, 188px); opacity: 0; } }
    @keyframes box-scale1 { 10% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 18%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move2 { 20% { transform: translate(var(--x), var(--y)); } 33%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90%, 100% { transform: translate(0, 188px); opacity: 0; } }
    @keyframes box-scale2 { 14% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 22%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move3 { 24% { transform: translate(var(--x), var(--y)); } 37%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90%, 100% { transform: translate(0, 188px); opacity: 0; } }
    @keyframes box-scale3 { 18% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 26%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move4 { 28% { transform: translate(var(--x), var(--y)); } 41%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90%, 100% { transform: translate(0, 188px); opacity: 0; } }
    @keyframes box-scale4 { 22% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 30%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move5 { 32% { transform: translate(var(--x), var(--y)); } 45%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90%, 100% { transform: translate(0, 188px); opacity: 0; } }
    @keyframes box-scale5 { 26% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 34%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move6 { 36% { transform: translate(var(--x), var(--y)); } 49%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90%, 100% { transform: translate(0, 188px); opacity: 0; } }
    @keyframes box-scale6 { 30% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 38%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    @keyframes box-move7 { 40% { transform: translate(var(--x), var(--y)); } 53%, 52% { transform: translate(0, 0); } 80% { transform: translate(0, -32px); opacity: 1; } 83% { opacity: 1; } 84% { opacity: 0; } 90%, 100% { transform: translate(0, 188px); opacity: 0; } }
    @keyframes box-scale7 { 34% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0); } 42%, 100% { transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1); } }
    
    @keyframes ground { 0%, 65% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0); } 75%, 90% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1); } 100% { transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0); } }
  `,o=[...Array(8).keys()];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:s}),e.jsxs("div",{className:"loader",children:[o.map(t=>e.jsx("div",{className:`box box${t}`,children:e.jsx("div",{})},t)),e.jsx("div",{className:"ground",children:e.jsx("div",{})})]})]})},P=()=>{const s=g(),{language:o}=b(),t=f[o],{scrollY:n}=v();d(n,[0,500],[0,200]),d(n,[0,500],[0,-150]),d(n,[0,500],[0,10]);const c={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},l={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.22,1,.36,1]}}};return e.jsxs("div",{className:"",children:[e.jsx("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left",children:[e.jsxs(a.div,{variants:c,initial:"hidden",animate:"visible",className:"flex flex-col items-center lg:items-start lg:w-[55%]",children:[e.jsx(a.div,{variants:l,className:"inline-block mb-6 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-md shadow-sm ",children:e.jsx("span",{className:"text-sky-500 font-rajdhani font-bold text-sm tracking-widest uppercase",children:"The Future of AI-Driven Finance"})}),e.jsx(a.h1,{variants:l,className:"text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none drop-shadow-lg ",children:t.hero.headline}),e.jsx(a.p,{variants:l,className:"text-xl md:text-2xl text-white/80 font-rajdhani max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md",children:t.hero.subheadline}),e.jsxs(a.div,{variants:l,className:"flex flex-col sm:flex-row gap-6 justify-center items-center",children:[e.jsxs(a.button,{onClick:()=>{var r;return(r=document.getElementById("solutions"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.05,boxShadow:"0 0 25px rgba(0, 242, 255, 0.5)"},whileTap:{scale:.95},className:"group px-10 py-4 bg-sky-600 text-white font-bold text-lg rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-3",children:[t.hero.btnSolution," ",e.jsx(x,{className:"group-hover:translate-x-1 transition-transform"})]}),e.jsx(a.button,{onClick:()=>s("/smart-partner"),whileHover:{scale:1.05,borderColor:"rgba(189, 0, 255, 0.5)"},whileTap:{scale:.95},className:"px-10 py-4 bg-transparent border-2 border-kof-purple/30 text-slate-300 font-bold text-lg hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-lg backdrop-blur-md rounded-xl",children:t.hero.btnPartner})]})]}),e.jsx(a.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:.3,type:"spring"},className:"hidden lg:block lg:w-[45%] relative z-10",children:e.jsxs("div",{className:"relative w-full aspect-square max-w-lg mx-auto",children:[e.jsx("div",{className:"absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full mix-blend-screen scale-150 pointer-events-none"}),e.jsx("div",{className:"absolute inset-10 bg-slate-400/10 blur-[50px] rounded-full mix-blend-overlay pointer-events-none"}),e.jsx(Y,{})]})})]})}),e.jsx("section",{className:"py-10",children:e.jsx(a.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"max-w-5xl mx-auto px-4",children:e.jsxs("div",{className:"glass-panel rounded-2xl p-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 hover:shadow-2xl hover:shadow-black/20",children:[e.jsx("p",{className:"text-sm font-semibold text-white/60 uppercase tracking-widest",children:"Trusted By"}),e.jsxs("div",{className:"flex gap-12 items-center opacity-80 hover:opacity-100 transition-all duration-500",children:[e.jsx("a",{href:"https://tfp.com.my/",target:"_blank",rel:"noopener noreferrer",className:"text-xl font-bold text-white hover:text-red-400 transition-colors",children:"TFP Solutions Berhad"}),e.jsx("div",{className:"h-6 w-px bg-white/20 hidden md:block"}),e.jsx("a",{href:"https://www.mobilityone.com.my/v7/",target:"_blank",rel:"noopener noreferrer",className:"text-xl font-bold text-white hover:text-red-400 transition-colors",children:"MobilityOne Sdn Bhd"})]})]})})}),e.jsx("section",{className:"py-24",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg",children:t.painPoints.title}),e.jsx("div",{className:"h-1 w-24 bg-gradient-to-r from-kof-accent to-kof-purple mx-auto mb-6"}),e.jsx("p",{className:"mt-4 text-white/70 text-lg font-rajdhani tracking-wide",children:t.painPoints.subtitle})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:u.map((r,i)=>e.jsxs(a.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:i*.1,duration:.5},whileHover:{y:-10,scale:1.02,transition:{duration:.2}},className:"glass-card p-8 rounded-2xl group",children:[e.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm border border-white/10",children:e.jsx(r.icon,{size:28})}),e.jsx("h3",{className:"font-bold text-xl text-white mb-3",children:r.title[o]}),e.jsx("p",{className:"text-white/70 leading-relaxed",children:r.desc[o]})]},i))})]})}),e.jsx("section",{className:"py-24 relative",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs(a.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"text-center mb-20",children:[e.jsx("span",{className:"text-sky-500 font-bold tracking-widest text-xs uppercase bg-sky-500/10 border border-sky-500/20 px-4 py-2 rounded-xl shadow-sm ",children:"System Architecture"}),e.jsx("h2",{className:"text-5xl md:text-6xl font-black text-white mt-8 mb-4 drop-shadow-lg",children:t.solutions.title}),e.jsx("div",{className:"h-1 w-32 bg-gradient-to-r from-kof-purple to-kof-accent mx-auto mb-12"})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:Object.values(y).map((r,i)=>e.jsxs(a.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:i*.1,duration:.6},whileHover:{scale:1.02},className:"group relative glass-card rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-xl",children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white to-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"}),e.jsx("h3",{className:"text-3xl font-bold text-white mb-4",children:r.title}),e.jsx("p",{className:"text-white/80 mb-8 min-h-[3rem] text-lg",children:r.description[o]}),e.jsx("ul",{className:"space-y-4 mb-10",children:r.features[o].slice(0,3).map((m,p)=>e.jsxs("li",{className:"flex items-center text-white/90",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-white group-hover:text-red-900 transition-colors",children:e.jsx(N,{size:14,className:"text-white group-hover:text-red-900"})}),m]},p))}),e.jsxs("button",{onClick:()=>s(r.link),className:"w-full py-4 rounded-xl border border-sky-500/30 text-sky-500 font-bold group-hover:bg-sky-600 group-hover:text-white transition-all flex items-center justify-center gap-2",children:[t.solutions.learnMore," ",e.jsx(x,{size:16,className:"opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"})]})]},r.id))})]})}),e.jsxs("section",{className:"py-24 bg-black/20 text-white relative overflow-hidden rounded-t-[3rem] mt-20 border-t border-white/10",children:[e.jsx(a.div,{animate:{scale:[1,1.1,1],opacity:[.2,.4,.2]},transition:{duration:5,repeat:1/0},className:"absolute top-0 right-0 w-[600px] h-[600px] bg-slate-800 opacity-20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"}),e.jsx(a.div,{animate:{scale:[1,1.2,1],opacity:[.1,.3,.1]},transition:{duration:7,repeat:1/0,delay:1},className:"absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-600 opacity-10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-16 items-center",children:[e.jsxs(a.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-8 leading-tight drop-shadow-md",children:t.smartPartner.heroTitle}),e.jsx("p",{className:"text-white/80 text-xl mb-10 leading-relaxed",children:t.smartPartner.heroDesc}),e.jsxs("div",{className:"space-y-6 mb-10",children:[e.jsxs("div",{className:"flex items-start group",children:[e.jsx("div",{className:"p-3 bg-white/10 rounded-2xl mr-5 group-hover:bg-white group-hover:text-red-900 transition-colors",children:e.jsx(w,{className:"text-white group-hover:text-red-900 w-6 h-6"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-lg",children:t.smartPartner.passiveIncome}),e.jsx("p",{className:"text-white/60",children:t.smartPartner.passiveIncomeDesc})]})]}),e.jsxs("div",{className:"flex items-start group",children:[e.jsx("div",{className:"p-3 bg-white/10 rounded-2xl mr-5 group-hover:bg-white group-hover:text-red-900 transition-colors",children:e.jsx(I,{className:"text-white group-hover:text-red-900 w-6 h-6"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-lg",children:t.smartPartner.superApp}),e.jsx("p",{className:"text-white/60",children:t.smartPartner.superAppDesc})]})]})]}),e.jsx("button",{onClick:()=>s("/smart-partner"),className:"bg-sky-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all",children:t.smartPartner.joinBtn})]}),e.jsxs(a.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"relative w-full aspect-square max-w-lg mx-auto",children:[e.jsx("div",{className:"absolute inset-0 bg-sky-500/10 blur-[100px] rounded-full mix-blend-screen"}),e.jsx("img",{src:"/images/cloud_network.png",alt:"Cloud Network Visualization",className:"relative z-10 w-full h-full object-contain animate-float-slow drop-shadow-2xl"})]})]})]}),e.jsx("section",{className:"py-24",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-4 text-center",children:[e.jsx(a.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-4xl font-bold text-white mb-16 drop-shadow-md",children:t.pricing.title}),e.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-4 gap-6",children:j.map((r,i)=>e.jsxs(a.div,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:i*.1},whileHover:{y:-10,borderColor:"rgba(255, 255, 255, 0.3)"},className:"p-8 glass-card rounded-2xl hover:border-white/30 group cursor-default",children:[e.jsx("div",{className:"text-sm text-white/60 mb-4 min-h-[40px] flex items-center justify-center font-medium uppercase tracking-wide",children:r.label[o]}),e.jsx("div",{className:"text-3xl font-bold text-white group-hover:text-white transition-colors",children:r.value})]},i))}),e.jsx("div",{className:"mt-16",children:e.jsxs("button",{onClick:()=>s("/contact?type=quotation"),className:"inline-flex items-center text-white font-bold text-lg hover:underline decoration-2 underline-offset-4 group",children:[t.pricing.cta," ",e.jsx(x,{size:20,className:"ml-2 group-hover:translate-x-1 transition-transform"})]})})]})}),e.jsxs("section",{className:"py-32 text-center px-4 relative overflow-hidden bg-black/20 border-t border-white/10",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent to-black/40 -z-10"}),e.jsxs(a.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[e.jsx("h2",{className:"text-4xl md:text-6xl font-black text-white mb-8 max-w-3xl mx-auto leading-tight ",children:t.ctaFooter.title}),e.jsx("p",{className:"text-white/70 mb-12 max-w-xl mx-auto text-xl font-rajdhani tracking-wide",children:t.ctaFooter.desc}),e.jsx("button",{onClick:()=>s("/contact"),className:"bg-slate-800 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-slate-300 transition-all shadow-lg",children:t.ctaFooter.btn})]})]})]})};export{P as default};
