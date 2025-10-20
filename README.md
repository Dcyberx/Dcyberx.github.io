.logo-ascii {
  font-family:"Fira Code", monospace;
  color:var(--green);
  white-space:pre;
  overflow:hidden;              /* hide scrollbars */
  max-height:220px;
  text-align:center;
  font-size:11px;
  position:relative;
}

.logo-ascii pre {
  position:absolute;
  top:100%;
  width:100%;
  animation:scrollUp 20s linear infinite;
  margin:0;
}

@keyframes scrollUp {
  0% { top: 100%; }
  100% { top: -100%; }
}

/* extra scrollbar hiding for safety */
.logo-ascii::-webkit-scrollbar { display: none; }
.logo-ascii { -ms-overflow-style: none; scrollbar-width: none; }
