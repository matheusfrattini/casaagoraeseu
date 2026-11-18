// Efeito blob dos botões: cria o filtro SVG "goo" uma vez e as quatro gotas dentro de cada .btn
(function(){
  var ns = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('width', '0'); svg.setAttribute('height', '0'); svg.setAttribute('aria-hidden', 'true');
  svg.style.position = 'absolute';
  svg.innerHTML =
    '<defs><filter id="goo">' +
      '<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>' +
      '<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo"/>' +
      '<feBlend in="SourceGraphic" in2="goo"/>' +
    '</filter></defs>';
  document.body.appendChild(svg);

  document.querySelectorAll('.btn').forEach(function(btn){
    var wrap = document.createElement('span');
    wrap.className = 'blob-wrap'; wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = '<span class="blobs"><span class="blob"></span><span class="blob"></span><span class="blob"></span><span class="blob"></span></span>';
    btn.appendChild(wrap);
  });
})();
