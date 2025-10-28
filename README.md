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

    /* NEW: Hollywood / Linux-style falling binary CSS (only for binary effect) */
    .binary-canvas{
      position:absolute;
      left:12px;
      top:12px;
      right:60px;
      bottom:12px;
      pointer-events:none;
      overflow:hidden;
    }
    .column {
      position:absolute;
      bottom:100%;
      white-space:nowrap;
      will-change:transform;
      color:var(--green);
      text-shadow:0 0 6px rgba(57,255,20,0.6);
      font-weight:600;
      letter-spacing:2px;
      font-size:12px;
      line-height:14px;
      opacity:0.95;
    }
    .column .lead {
      display:block;
      color:#bfffdc;
      text-shadow:0 0 10px rgba(0,255,180,0.8);
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
      .binary-canvas{right:12px;} /* ensure fit on small screens */
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
            <a href="https://www.instagram.com/dcyberx.1" target="_blank">Instagram</a>
            <a href="https://github.com/Dcyberx" target="_blank">GitHub</a>
            <a href="https://discord.gg/833GaF3R" target="_blank">CyberTech_discord_chat</a>
            <a href="https://megoodworld.gumroad.com/" target="_blank">Gumroad</a>
            
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
          <!-- preserved inner wrapper coordinates; script will populate .binary-canvas -->
          <div class="binary-canvas" id="binaryCanvas"></div>

          <div class="binary-scroll">
            <pre id="binscroll"></pre>
          </div>
        </div>

        <div style="margin-top:12px" class="logo-ascii card" aria-hidden="false">
<pre>  
  
  ⠀⠠⠠⢄⢤⣠⣀⣄⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣉⣉⣉⣙⣛⣳⣶⣤⠀⠀⠀⠀"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠠⠖⠚⠚⠛⠋⠉⠉⠉⣉⣩⣭⣭⣿⢿⡀⠀⢀"⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣀⡤⠶⠚⠋⠉⠁⠀⠀⠀⣨⣿⣷⣶⣶⣬⣗⡦⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⠁⠀⠀⠀⠈⠉⠛⢿⣧⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠈⠙⠷⠆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣦⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠿⣶⣶⢦⣤⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣌⠻⣦⠀⠀
⠀⠀⠀               ⠀Dcyberx⠀ ⠀⠹⣦⠈⢇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡆⠀⠀
⠀⠀  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠞⠛⠛⠛⠶⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡤⠖⠒⠒⢤⡀⠀⠀⠀⢠⠞⠁⠀⠀⠀⠀⠀⠀⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⢠⡟⠀⠀⠀⠀⠀⠈⢢⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⢠⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⢹⠇⠀⠀⠀⠀⠀⠀⠀⢠⣿⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢻⡄   I love you ⠀⠀ ⣴⣿⠏⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⡀⠀⠀⠀⠀⠀⠀⣠⣾⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⢄⠀⠀⠀⣴⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</pre>                 
        </div>           
      </div>         
    </aside>
  </div>

  <script>
    // -----------------------
    // HOLLYWOOD / LINUX BINARY STREAM
    // Replaces the old line-based animation with vertical falling columns.
    // -----------------------

    (function(){
      const canvas = document.getElementById('binaryCanvas');
      const binscroll = document.getElementById('binscroll');

      // Parameters — tuned for Hollywood-style effect
      const COLUMN_COUNT = 18;          // how many vertical streams
      const MIN_SPEED = 40;            // px per second (min)
      const MAX_SPEED = 220;           // px per second (max)
      const MIN_LENGTH = 6;            // minimum chars in a stream
      const MAX_LENGTH = 28;           // maximum chars in a stream
      const CHAR_SET = ['0','1'];      // binary characters
      const REFRESH_INTERVAL = 50;     // ms for creating new head char
      const FONT_SIZE = 12;            // matches page font-size
      const PADDING_LEFT = 12;         // same as CSS to align

      // Ensure canvas size matches container computed area
      function computeArea(){
        const rect = canvas.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
      }

      // create columns
      const cols = [];
      function initColumns(){
        const area = computeArea();
        cols.length = 0;
        for(let i=0;i<COLUMN_COUNT;i++){
          const x = Math.floor((area.width / COLUMN_COUNT) * i + (Math.random()*8));
          const speed = MIN_SPEED + Math.random()*(MAX_SPEED - MIN_SPEED);
          const length = Math.floor(MIN_LENGTH + Math.random()*(MAX_LENGTH - MIN_LENGTH));
          const delay = Math.random()*2000;
          const el = document.createElement('div');
          el.className = 'column';
          el.style.left = x + 'px';
          el.style.fontSize = FONT_SIZE + 'px';
          el.style.opacity = (0.6 + Math.random()*0.45).toString();
          canvas.appendChild(el);
          cols.push({ el, x, speed, length, chars: [], y: -Math.random()*area.height - 20, lastUpdate: performance.now(), delay });
        }
      }

      // generate random binary string of length n
      function randBin(n){
        let s='';
        for(let i=0;i<n;i++) s += CHAR_SET[Math.random()>.5 ? 0 : 1];
        return s;
      }

      // update columns positions & contents
      function update(now){
        const area = computeArea();
        for(const c of cols){
          if(now < (c.delay + c.lastUpdate)) {
            // still in delay period; small flicker
            continue;
          }
          const dt = (now - c.lastUpdate)/1000;
          c.lastUpdate = now;
          c.y += c.speed * dt;
          // Occasionally vary speed slightly
          if(Math.random() < 0.02) c.speed *= (0.95 + Math.random()*0.1);

          // If column off bottom, reset to top with new params
          if(c.y - (c.length*FONT_SIZE) > area.height){
            c.y = -Math.random()*100;
            c.length = Math.floor(MIN_LENGTH + Math.random()*(MAX_LENGTH - MIN_LENGTH));
            c.speed = MIN_SPEED + Math.random()*(MAX_SPEED - MIN_SPEED);
            c.el.style.opacity = (0.6 + Math.random()*0.45).toString();
          }

          // Build visual: head brighter, tail dimmer
          const headIndex = Math.floor(c.y / FONT_SIZE);
          const chars = [];
          for(let i=0;i<c.length;i++){
            const ch = CHAR_SET[Math.random()>.5 ? 0 : 1];
            // head element
            if(i === c.length-1){
              chars.push(`<span class="lead">${ch}</span>`);
            } else {
              const shade = Math.max(0.15, (i / c.length) * 0.9);
              chars.push(`<span style="opacity:${shade}">${ch}</span>`);
            }
          }
          c.el.innerHTML = chars.join('');
          c.el.style.transform = `translateY(${c.y}px)`;
        }
        requestAnimationFrame(update);
      }

      // Keep right-hand small scroll column for compatibility (old binscroll behavior)
      function refreshBinscroll(){
        const width = 6;
        let scroll='';
        for(let r=0;r<80;r++) {
          for(let k=0;k<width;k++) scroll += CHAR_SET[Math.random()>.5 ? 0 : 1];
          scroll += '\n';
        }
        binscroll.textContent = scroll;
      }

      // init
      function start(){
        // clean canvas
        canvas.innerHTML = '';
        initColumns();
        refreshBinscroll();
        requestAnimationFrame(ts => { cols.forEach(c=>c.lastUpdate=ts); update(ts); });
        // refresh the small scroll occasionally
        setInterval(refreshBinscroll, 1200);
        // handle resize
        window.addEventListener('resize', () => {
          // remove existing columns and recreate to fit new width
          canvas.innerHTML = '';
          initColumns();
        });
      }

      start();
    })();

    // -----------------------
    // existing Web Speech API (unchanged)
    // (keeps the voice greeting you already had)
    // -----------------------
    window.addEventListener('load', () => {
      try {
        const msg = new SpeechSynthesisUtterance("Welcome to Cybertech, where code meets innovation, meet Dcyberx");
        msg.rate = 1.55;
        msg.pitch = 0.65;
        msg.volume = 1;
        // pick a male voice if available
        speechSynthesis.onvoiceschanged = () => {
          const voices = speechSynthesis.getVoices();
          const prefer = voices.find(v => /David|Male|Google UK English Male|British Male/i.test(v.name));
          if(prefer) msg.voice = prefer;
          speechSynthesis.speak(msg);
        };
        // fallback if voiceschanged doesn't fire
        if(speechSynthesis.getVoices().length) {
          const voices = speechSynthesis.getVoices();
          const prefer = voices.find(v => /David|Male|Google UK English Male|British Male/i.test(v.name));
          if(prefer) msg.voice = prefer;
          speechSynthesis.speak(msg);
        }
      } catch (e) {
        // silent fail if browser blocks autoplay
      }
    });
  </script>
</body>
</html>
