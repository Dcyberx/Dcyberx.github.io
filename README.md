<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dcyberx — CyberTech</title>

  <!-- Hacker font -->
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg:#050606;
      --panel:#071012;
      --green:#39ff14;
      --muted:#9bdc9b;
    }
    html,body{height:100%;}
    body{
      margin:0;
      font-family:"Fira Code", monospace;
      background:radial-gradient(ellipse at top left, #041014 0%, var(--bg) 50%);
      color:var(--green);
      -webkit-font-smoothing:antialiased;
    }
    .container{
      max-width:1000px;
      margin:40px auto;
      padding:28px;
      display:grid;
      grid-template-columns: 1fr 320px;
      gap:28px;
    }
    header{display:flex;gap:16px;align-items:center}
    .avatar{
      width:88px;height:88px;border-radius:12px;overflow:hidden;
      border:2px solid rgba(57,255,20,0.3);
      background:linear-gradient(180deg, rgba(57,255,20,0.1), rgba(57,255,20,0.05));
    }
    .avatar img{width:100%;height:100%;object-fit:cover;display:block}
    h1{margin:0;font-size:28px;letter-spacing:0.4px}
    p.lead{margin:4px 0 0;color:var(--muted);font-size:13px}
    .card{
      background:rgba(255,255,255,0.02);
      border:1px solid rgba(57,255,20,0.1);
      padding:18px;
      border-radius:10px;
      box-shadow:0 6px 18px rgba(0,0,0,0.6)
    }
    .contact{display:flex;flex-direction:column;gap:8px;margin-top:12px}
    .contact a{color:var(--green);text-decoration:none;font-weight:600}
    .meta{margin-top:12px;color:var(--muted);font-size:14px}
    .right-col{position:relative}
    .binary-box{
      width:100%;height:140px;background:#000;
      border-radius:8px;padding:12px;overflow:hidden;
      border:1px solid rgba(57,255,20,0.2);
      box-shadow:inset 0 0 20px rgba(57,255,20,0.15);
      font-family:"Fira Code", monospace;
      color:var(--green);font-size:12px;line-height:14px;
      position:relative;
    }
    .binary-scroll{position:absolute;right:12px;top:12px;bottom:12px;width:40px;overflow:hidden}
    .binary-scroll pre{animation:scrollbin 4s linear infinite;margin:0}
    @keyframes scrollbin{from{transform:translateY(0)} to{transform:translateY(-100%)}}
    .socials{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
    .socials a{
      display:inline-flex;align-items:center;gap:8px;padding:8px 10px;
      border-radius:8px;background:rgba(255,255,255,0.01);
      border:1px solid rgba(57,255,20,0.08);
      color:var(--green);text-decoration:none;font-weight:600;font-size:13px
    }
    .sections{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}
    .hobbies li{margin-bottom:6px}
    .logo-ascii{font-family:"Fira Code", monospace;color:var(--green);white-space:pre;overflow:auto;max-height:220px;text-align:center;font-size:11px}
    footer{margin-top:18px;color:var(--muted);font-size:13px}
    @media(max-width:880px){
      .container{grid-template-columns:1fr;}
      .binary-scroll{display:none}
    }
  </style>
</head>
<body>

  <div class="container">
    <main>
      <header>
        <div class="avatar card"><img src="me.png" alt="Dcyberx"></div>
        <div>
          <h1>CyberTech <small style="color:var(--muted);font-weight:600">— where code meets innovation</small></h1>
          <p class="lead">Software engineering career. Love cats & eagles. Hobbies: camping, badminton, volleyball, horse riding.</p>
          <div class="contact">
            <a href="mailto:Dcyberx@proton.me">Dcyberx@proton.me</a>
            <a href="tel:+256763753544">+256 763 753 544</a>
          </div>
        </div>
      </header>

      <section class="card meta">
        <strong>About me</strong>
        <p style="margin:8px 0 0;color:var(--muted)">I build software with security and scale in mind. Best colour: green. Profile image: <code>me.png</code>. Logo file: <code>cyber.png</code></p>
        <div class="sections">
          <div>
            <h4 style="margin:6px 0">Hobbies</h4>
            <ul class="hobbies" style="color:var(--muted)">
              <li>Camping</li>
              <li>Badminton</li>
              <li>Volleyball</li>
              <li>Horse riding</li>
            </ul>
          </div>
          <div>
            <h4 style="margin:6px 0">Career</h4>
            <p style="margin:6px 0;color:var(--muted)">Software engineering career. Passion for secure systems, embedded devices and creative tooling.</p>
          </div>
        </div>

        <div style="margin-top:10px">
          <strong>Socials</strong>
          <div class="socials">
            <a href="https://www.tiktok.com/@Dcyberx" target="_blank">TikTok</a>
            <a href="https://www.instagram.com/Dcyberx" target="_blank">Instagram</a>
            <a href="https://github.com/Dcyberx" target="_blank">GitHub</a>
            <a href="https://x.com/Dcyberx" target="_blank">X</a>
            <a href="https://www.google.com/search?q=Dcyberx" target="_blank">Google</a>
            <a href="https://www.tinkercad.com/users/Dcyberx" target="_blank">Tinkercad</a>
          </div>
        </div>
      </section>

      <footer>
        <small>Contact: Dcyberx@proton.me · +256 763 753 544</small>
      </footer>
    </main>

    <aside class="right-col">
      <div class="card">
        <div class="binary-box">
          <div style="position:absolute;left:12px;top:12px;right:60px;bottom:12px;overflow:hidden">
            <pre id="binlines" style="margin:0;opacity:0.95"></pre>
          </div>
          <div class="binary-scroll">
            <pre id="binscroll"></pre>
          </div>
        </div>

        <div style="margin-top:12px" class="logo-ascii card" aria-hidden="true">
<pre>  
  ⠀⠠⠠⢄⢤⣠⣀⣄⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣉⣉⣉⣙⣛⣳⣶⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠠⠖⠚⠚⠛⠋⠉⠉⠉⣉⣩⣭⣭⣿⢿⡀⠀⢀⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣀⡤⠶⠚⠋⠉⠁⠀⠀⠀⣨⣿⣷⣶⣶⣬⣗⡦⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⠁⠀⠀⠀⠈⠉⠛⢿⣧⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠈⠙⠷⠆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣦⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠿⣶⣶⢦⣤⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣌⠻⣦⠀⠀
⠀⠀⠀               ⠀Dcyberx⠀ ⠀⠹⣦⠈⢇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡆⠀⠀
⠀⠀  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</pre>                 
        </div>           
      </div>         
    </aside>
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

    // ✅ Web Speech API: Speak message on load
    window.addEventListener('load', () => {
      const msg = new SpeechSynthesisUtterance("Welcome to Cybertech, where code meets innovation");
      msg.rate = 1.6;
      msg.pitch = 0.6;
      msg.volume = 1;
      speechSynthesis.speak(msg);
    });
  </script>
</body>
</html>



