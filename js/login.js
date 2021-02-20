var user1 = document.querySelector(".user1")
var pass1 = document.querySelector(".pass1")
var sub = document.querySelector('.sub')

sub.onclick = function (){
    if(user1.value === localStorage.getItem('user') && pass1.value === localStorage.getItem('pass')){
        alert("登录成功")
        localStorage.setItem('succ',1)
        return true
    }else{
        alert("账号或密码错误")
        return false
    }
}