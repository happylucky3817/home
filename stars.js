// 바탕 별: 열 때마다 위치·크기·속도가 달라진다. 별 모양 18개 + 작은 점 12개.
// 제자리에서 위아래로 천천히 오르내린다(두둥실). 모양은 theme.css 의 #stars.
(function(){
  var box = document.createElement('div'), html = '';
  box.id = 'stars'; box.setAttribute('aria-hidden', 'true');
  function r(a, b){ return a + Math.random() * (b - a); }
  for (var i = 0; i < 30; i++) {
    var dot = i >= 18, s = dot ? r(4, 8) : r(12, 28);
    html += '<i class="' + (dot ? 'dot' : '') + '" style="left:' + r(1, 97).toFixed(1) + '%;top:' + r(1, 97).toFixed(1) + '%;' +
      'width:' + s.toFixed(0) + 'px;height:' + s.toFixed(0) + 'px;' +
      '--t:' + r(4, 8).toFixed(1) + 's;--m:' + r(5, 8).toFixed(1) + 's;--d:-' + r(0, 8).toFixed(1) + 's;' +
      '--x:' + r(-3, 3).toFixed(0) + 'px;--y:-' + r(8, 14).toFixed(0) + 'px"></i>';
  }
  box.innerHTML = html;
  document.body.insertBefore(box, document.body.firstChild);
})();
