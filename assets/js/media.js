// Vídeos da galeria: tocam só quando aparecem na tela e ficam parados para quem pede menos movimento
(function(){
  var videos = document.querySelectorAll('video');
  if (!videos.length) return;
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  videos.forEach(function(v){
    v.muted = true;
    if (still){ v.removeAttribute('autoplay'); v.pause(); v.controls = true; }
  });
  if (still || !('IntersectionObserver' in window)) return;

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){ var p = e.target.play(); if (p && p.catch) p.catch(function(){}); }
      else e.target.pause();
    });
  }, {threshold:.25});
  videos.forEach(function(v){ io.observe(v); });
})();
