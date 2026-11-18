// Botão de copiar (icon button): troca o ícone por um ✓ e mostra "Copiado" na dica
(function(){
  document.querySelectorAll('[data-copy]').forEach(function(btn){
    var tip = btn.getAttribute('data-tip') || 'Copiar';
    var aria = btn.getAttribute('aria-label') || tip;
    function say(t){ btn.setAttribute('data-tip', t); btn.setAttribute('aria-label', t); }
    btn.addEventListener('click', function(){
      var el = document.getElementById(btn.dataset.copy);
      var text = el.textContent.trim();
      function done(){
        btn.classList.add('done'); say('Copiado');
        setTimeout(function(){ btn.classList.remove('done'); btn.setAttribute('data-tip', tip); btn.setAttribute('aria-label', aria); }, 1800);
      }
      function fallback(){
        var r = document.createRange(); r.selectNodeContents(el);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        say('Selecionado');
      }
      try { navigator.clipboard.writeText(text).then(done, fallback); } catch(e){ fallback(); }
    });
  });
})();
