// Revela os blocos .reveal quando entram na tela
(function(){
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)){
    els.forEach(function(el){ el.classList.add('in'); });
    return;
  }
  var rev = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); rev.unobserve(e.target); } });
  }, {threshold:.12});
  els.forEach(function(el){ rev.observe(el); });
})();
