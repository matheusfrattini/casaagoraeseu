// Aberto agora / Fechado agora, no horário de Campinas, e destaque do dia na tabela
(function(){
  var hours = {0:null, 1:null, 2:[9,17], 3:[9,17], 4:[9,17], 5:[9,17], 6:[8,13]};
  try {
    var parts = new Intl.DateTimeFormat('en-US', {timeZone:'America/Sao_Paulo', weekday:'short', hour:'numeric', minute:'numeric', hour12:false}).formatToParts(new Date());
    var get = function(t){ return parts.filter(function(p){ return p.type === t; })[0].value; };
    var day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(get('weekday'));
    var h = (parseInt(get('hour'), 10) % 24) + parseInt(get('minute'), 10) / 60;
    var today = hours[day];
    var status = document.getElementById('status'), text = document.getElementById('status-text');
    if (today && h >= today[0] && h < today[1]){
      status.classList.add('open');
      text.innerHTML = '<b>Aberto agora</b> · até ' + today[1] + 'h';
    } else {
      text.innerHTML = '<b>Fechado agora</b> · Ter a sex 9h–17h · Sáb 8h–13h';
    }
    document.querySelectorAll('.hours li').forEach(function(li){
      if (li.dataset.days.split(',').indexOf(String(day)) !== -1) li.classList.add('today');
    });
  } catch(e){}
})();
