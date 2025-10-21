<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Kali Linux — Dcyberx</title>

  <!-- Hacker font -->
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg:#05080a;
      --glow:#00fff7;
      --glow2:#00aaff;
    }
    html,body{
      height:100%;
      margin:0;
      background:radial-gradient(circle at center, #020608 0%, #000000 100%);
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      font-family:"Fira Code", monospace;
      color:var(--glow);
    }
    .logo-box{
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
    }
    svg{
      width:300px;
      height:300px;
      filter:drop-shadow(0 0 15px var(--glow))
             drop-shadow(0 0 30px var(--glow2))
             drop-shadow(0 0 50px var(--glow));
      animation: pulse 3s ease-in-out infinite;
    }
    @keyframes pulse{
      0%,100%{filter:drop-shadow(0 0 15px var(--glow)) drop-shadow(0 0 30px var(--glow2)) drop-shadow(0 0 50px var(--glow));}
      50%{filter:drop-shadow(0 0 25px var(--glow)) drop-shadow(0 0 50px var(--glow2)) drop-shadow(0 0 80px var(--glow));}
    }
    h1{
      font-family:"Fira Code", monospace;
      color:var(--glow);
      font-size:1.6rem;
      text-transform:uppercase;
      letter-spacing:2px;
      margin-top:15px;
      text-shadow:0 0 10px var(--glow),0 0 20px var(--glow2);
    }
    .binary-box{
      margin-top:20px;
      width:320px;
      height:150px;
      background:rgba(0,0,0,0.6);
      border:1px solid var(--glow2);
      box-shadow:inset 0 0 20px var(--glow2), 0 0 10px var(--glow);
      border-radius:10px;
      padding:12px;
      overflow:hidden;
      position:relative;
      color:var(--glow);
      font-size:12px;
      line-height:14px;
    }
    .binary-scroll{
      position:absolute;
      right:12px;
      top:12px;
      bottom:12px;
      width:40px;
      overflow:hidden;
    }
    .binary-scroll pre{
      animation: scrollbin 4s linear infinite;
      margin:0;
    }
    @keyframes scrollbin{
      from{transform:translateY(0);}
      to{transform:translateY(-100%);}
    }
    pre#binlines{margin:0;opacity:0.95;white-space:pre;}
  </style>
</head>
<body>
  <div class="logo-box">
    <!-- Glowing Kali-like dragon SVG -->
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glowGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#00fff7"/>
          <stop offset="100%" stop-color="#00aaff"/>
        </linearGradient>
      </defs>

      <circle cx="250" cy="250" r="220" fill="none" stroke="url(#glowGrad)" stroke-width="2" opacity="0.2"/>

      <path d="M95 300
               C95 300 170 160 260 140
               C360 120 420 200 395 270
               C372 335 310 360 240 360
               C180 360 120 340 95 300 Z"
            fill="url(#glowGrad)" opacity="0.95"/>

      <circle cx="312" cy="160" r="6" fill="#ffffff"/>
    </svg>
    <h1>KALI LINUX</h1>

    <div class="binary-box">
      <div style="position:absolute;left:12px;top:12px;right:60px;bottom:12px;overflow:hidden">
        <pre id="binlines"></pre>
      </div>
      <div class="binary-scroll">
        <pre id="binscroll"></pre>
      </div>
    </div>
  </div>

  <script>
    function randomBinLine(width){
      let s='';
      for(let i=0;i<width;i++) s += Math.random()>.5 ? '1' : '0';
      return s;
    }
    const bin = document.getElementById('binlines');
    const binscroll = document.getElementById('binscroll');

    function refresh(){
      const lines=[];
      for(let i=0;i<25;i++) lines.push(randomBinLine(48));
      bin.textContent = lines.join('\n');
      let scroll='';
      for(let r=0;r<80;r++) scroll += randomBinLine(6)+'\n';
      binscroll.textContent = scroll;
    }
    refresh();
    setInterval(()=>{
      bin.style.opacity=0;
      setTimeout(()=>{refresh();bin.style.opacity=1},80);
    },500);
  </script>
</body>
</html>
