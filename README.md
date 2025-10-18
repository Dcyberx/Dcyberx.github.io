<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>CyberTech — where code meets innovation</title>

  <!-- Hacker mono font -->
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
      font-family: "Fira Code", ui-sans-serif,system-ui,"Segoe UI",Roboto,Arial,monospace;
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
      box-shadow:0 6px 18px rgba(0,0
