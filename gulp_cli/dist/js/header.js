
var lo_ul = document.querySelector('.lo_ul')
var lo_li = document.querySelectorAll('.lo_li')
var li5 = document.querySelector('#li5')
var li6 = document.querySelector('#li6')
var li7 = document.querySelector('#li7')
var lo_ol1 = document.querySelector('.lo_ol1')
var lo_ol2 = document.querySelector('.lo_ol2')
var down = document.querySelector('.down')

on(lo_ul,'mouseover','#li5',function (){
    lo_ol1.style.display = 'block'
    li5.onmouseleave = function (){
        lo_ol1.style.display = 'none'
    }
})

on(lo_ul,'mouseover','#li6',function (){
    lo_ol2.style.display = 'block'
    li6.onmouseleave = function (){
        lo_ol2.style.display = 'none'
    }
})

on(lo_ul,'mouseover','#li7',function (){
    down.style.display = 'block'
    li7.onmouseleave = function (){
        down.style.display = 'none'
    }
})



// 导航栏
var nav_ul = document.querySelector('.nav_ul')

var nav_li = document.querySelectorAll(".nav_li")

var nav_hide = document.querySelectorAll(".nav_hide")

for(var i = 1; i < 9; i++){
    nav_li[i].onmouseenter = function (){
        this.children[1].style.display = 'block'
    }
    nav_li[i].onmouseleave = function (){
        this.children[1].style.display = 'none'
    }
}
