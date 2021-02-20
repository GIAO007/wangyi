var register = document.querySelector('.register')
var ipts = document.querySelectorAll('.register input')
var tips = document.querySelectorAll('.register span')
var sub = document.querySelector(".sub")
var arr = []
ipts[0].onblur = function (){
  var val = this.value.replace(/\s+/g,'')
  var reg = /^\w{8,18}$/
  if (reg.test(val)) {
    tips[0].style.display = 'none'
    localStorage.setItem('user',val)
    arr[0] = 1
  } else {
    arr[0] = 0
    tips[0].style.display = 'inline-block'
  }
}

ipts[1].onblur = function (){
    var val = this.value.replace(/\s+/g,'')
    var reg = /^\w{8,18}$/
    if (reg.test(val)) {
      tips[1].style.display = 'none'
      localStorage.setItem('pass',val)
      arr[1] = 1
    } else {
      arr[1] = 0
      tips[1].style.display = 'inline-block'
    }
  }
 

ipts[2].onblur = function (){
  var val = this.value.replace(/\s+/g,'')
  var reg = /^1[3456789]\d{9}$/
  if (reg.test(val)) {
    tips[2].style.display = 'none'
    arr[2] = 1
  } else {
    arr[2] = 0
    tips[2].style.display = 'inline-block'
  }
}

ipts[3].onblur = function (){
  var val = this.value.replace(/\s+/g,'')
  var reg = /^(男|女)$/
  if (reg.test(val)) {
    tips[3].style.display = 'none'
    arr[3] = 1
  } else {
    arr[3] = 0
    tips[3].style.display = 'inline-block'
  }
}

sub.onclick = function (){
    if(arr.length === 0){
      alert("输入为空")
      return false
    }

  for (var i = 0, len = arr.length; i < len; i++){
    if (arr[i] === 0) {
      alert('请正确输入')
      return false
    }
  }

  alert("注册成功")

}
