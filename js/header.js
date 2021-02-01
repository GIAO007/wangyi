var lo_li5 = document.querySelector('.lo_ul .lo_li5')
var lo_li6 = document.querySelector('.lo_ul .lo_li6')
var lo_li7 = document.querySelector('.lo_ul .lo_li7')

var lo_ol1 = document.querySelector('.lo_ol1')
var lo_ol2 = document.querySelector('.lo_ol2')
var down = document.querySelector('.down')

lo_li5.onmouseover = function (){
    lo_ol1.style.display = 'block'
}
lo_li5.onmouseout = function (){
    lo_ol1.style.display = 'none'
}
lo_li6.onmouseover = function (){
    lo_ol2.style.display = 'block'
}
lo_li6.onmouseout = function (){
    lo_ol2.style.display = 'none'
}
lo_li7.onmouseover = function (){
    down.style.display = 'block'
}
lo_li7.onmouseout = function (){
    down.style.display = 'none'
}