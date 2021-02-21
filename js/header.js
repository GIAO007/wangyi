
var lo_ul = document.querySelector('.lo_ul')
var lo_li = document.querySelectorAll('.lo_li')
var li5 = document.querySelector('#li5')
var li6 = document.querySelector('#li6')
var li7 = document.querySelector('#li7')
var lo_ol1 = document.querySelector('.lo_ol1')
var lo_ol2 = document.querySelector('.lo_ol2')
var down = document.querySelector('.down')
var lo_a = document.querySelector('.lo_a')

// 登录状态
if(localStorage.getItem('succ') == 1){
    lo_a.innerText = localStorage.getItem('user')
}

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



// 购物车数量
var shop1_i2 = document.querySelector(".shop1_i2")
shop1_i2.innerText = Number(localStorage.getItem('shopnum'))

var shop = document.querySelector(".shop")
shop.onclick = function (){
    if(!localStorage.getItem("succ")){
        location.href = 'login.html'
    }else{
        location.href = 'shopcat.html'
    }
}