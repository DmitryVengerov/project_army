var Circle = function (sel) {
  var circles = document.querySelectorAll(sel);
  [].forEach.call(circles, function (el) {
    var valEl = parseFloat(el.innerHTML)
    valEl = valEl * 408 / 100
    el.innerHTML = '<svg width="70" height="70"><circle transform="rotate(-90)" r="30" cx="-35" cy="35" /><circle transform="rotate(-90)" style="stroke-dasharray:' + valEl + 'px 408px;" r="30" cx="-35" cy="35" /></svg>'
  })
}
Circle('.circle')

function f () {
  this.a = 1
  return function () {
    console.log(this.a)
  }
}
(new f())()
