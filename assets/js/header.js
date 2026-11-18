// Cabeçalho: borda ao rolar, destaque da seção atual e indicador deslizante do menu
(function(){
  var header = document.getElementById('top');
  function onScroll(){ header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  var links = document.querySelectorAll('nav.menu a');
  var ind = document.querySelector('.menu-ind');

  function moveIndicator(){
    if (!ind) return;
    var active = document.querySelector('nav.menu a[aria-current="true"]');
    if (!active){ ind.classList.remove('on'); return; }
    ind.style.left = active.offsetLeft + 'px';
    ind.style.width = active.offsetWidth + 'px';
    ind.classList.add('on');
  }
  window.addEventListener('resize', moveIndicator);

  if (!('IntersectionObserver' in window)) return;
  var spy = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (!e.isIntersecting) return;
      links.forEach(function(a){
        if (a.getAttribute('href') === '#' + e.target.id) a.setAttribute('aria-current','true'); else a.removeAttribute('aria-current');
      });
      moveIndicator();
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  ['na-casa','ambiente','comprar','historia','visite'].forEach(function(id){ spy.observe(document.getElementById(id)); });

  // No topo da página nenhuma seção fica ativa
  var hero = document.getElementById('inicio');
  new IntersectionObserver(function(entries){
    if (entries[0].isIntersecting){
      links.forEach(function(a){ a.removeAttribute('aria-current'); });
      moveIndicator();
    }
  }, {rootMargin:'-45% 0px -50% 0px'}).observe(hero);
})();
