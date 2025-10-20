<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Hollywood Binary + ASCII Auto Scroll</title>
<style>
:root{
  --bg:#050606;
  --panel:#071012;
  --green:#00bfff;         /* blue binary */
  --muted:#7db9ff;
}

body{
  background:var(--bg);
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  color:var(--muted);
  font-family:monospace;
}

.container{
  width:400px;
  background:var(--panel);
  border-radius:8px;
  padding:10px;
  box-shadow:0 0 20px rgba(0,191,255,0.2);
}

.binary-box{
  width:100%;
  height:140px;
  background:rgba(0,0,0,0.3);
  border-radius:8px;
  padding:12px;
  overflow:hidden;
  border:1px solid rgba(0,191,255,0.3);
  box-shadow:inset 0 0 20px rgba(0,191,255,0.2);
  display:flex;
}

.column{
  display:flex;
  flex-direction:column;
  font-size:14px;
  color:var(--green);
  white-space:nowrap;
  margin-right:5px;
  animation:fall 3s linear infinite;
}

.column .lead{
  display:block;
  color:#aee4ff;
  text-shadow:0 0 10px rgba(0,191,255,0.8);
}

@keyframes fall{
  0%{transform:translateY(-100%);}
  100%{transform:translateY(100%);}
}

.ascii-box{
  width:100%;
  height:140px; /* unchanged size */
  overflow:hidden; /* hide scrollbars */
  position:relative;
  background:transparent;
  margin-top:10px;
}

.ascii-content{
  position:absolute;
  top:100%;
  width:100%;
  white-space:pre;
  animation:scrollUp 15s linear infinite;
}

@keyframes scrollUp{
  0%{top:100%;}
  100%{top:-100%;}
}

/* scrollbar hide */
.ascii-box::-webkit-scrollbar{display:none;}
.ascii-box{-ms-overflow-style:none;scrollbar-width:none;}
</style>
</head>
<body>
<div class="container">

  <!-- Binary Box -->
  <div class="binary-box" id="binaryBox"></div>

  <!-- ASCII Box -->
  <div class="ascii-box">
    <div class="ascii-content">
⠀⠀⠀⠀⠀⠀  ::::::
    :::   .   ::: 
           :    :::
            "     :::
             ::      :::
           ::         :::
         ::         :::
       ::         :::
    ::         :::
  :   :  .    ::::
:   :      .   :::
:  :         .  :::
: 
KALI LINUX DRAGON LOGO
    </div>
  </div>

</div>

<script>
const binaryBox = document.getElementById('binaryBox');
const columns = 40; // number of binary columns
const rows = 20;    // digits per column

for(let i=0;i<columns;i++){
  const col=document.createElement('div');
  col.className='column';
  const lead=document.createElement('span');
  lead.className='lead';
  lead.textContent=Math.round(Math.random());
  col.appendChild(lead);
  for(let j=0;j<rows;j++){
    const bit=document.createElement('span');
    bit.textContent=Math.round(Math.random());
    col.appendChild(bit);
  }
  binaryBox.appendChild(col);
}
</script>
</body>
</html>
