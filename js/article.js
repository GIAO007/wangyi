// 数据生成轮播图
var newpl_img11 = document.querySelector(".newpl_img1")
    ajax({
        url:'data/newpl.json',
        type:'get',
        data:"?",
        dataType:'json',
        success:function (obj){
            for(var i = 0; i < 7; i++){
                var divs = document.createElement("div")
                divs.className = 'newpl_img2'
                divs.innerHTML = `
                                <div class="newpl_img3">
                                    <img src="${obj[i*4].imgurl}" alt="">
    
                                    <div class="img3_name">
                                        <p>${obj[i*4].imgname}</p>
                                        <p>${obj[i*4].price}</p>
                                    </div>
                                </div>
                                <div class="newpl_img3">
                                    <img src="${obj[i*4+1].imgurl}" alt="">
    
                                    <div class="img3_name">
                                        <p>${obj[i*4+1].imgname}</p>
                                        <p>${obj[i*4+1].price}</p>
                                    </div>
                                </div>
                                <div class="newpl_img3">
                                    <img src="${obj[i*4+2].imgurl}" alt="">
    
                                    <div class="img3_name">
                                        <p>${obj[i*4+2].imgname}</p>
                                        <p>${obj[i*4+2].price}</p>
                                    </div>
                                </div>
                                <div class="newpl_img3">
                                    <img src="${obj[i*4+3].imgurl}" alt="">
    
                                    <div class="img3_name">
                                        <p>${obj[i*4+3].imgname}</p>
                                        <p>${obj[i*4+3].price}</p>
                                    </div>
                                </div>
                `
                newpl_img11.appendChild(divs)
            }
            var divs1 = document.createElement("div")
            divs1.className = 'newpl_img2'
            divs1.innerHTML = `
                                <div class="newpl_img3">
                                    <img src="${obj[0].imgurl}" alt="">
    
                                    <div class="img3_name">
                                        <p>${obj[0].imgname}</p>
                                        <p>${obj[0].price}</p>
                                    </div>
                                </div>
                                <div class="newpl_img3">
                                    <img src="${obj[1].imgurl}" alt="">
    
                                    <div class="img3_name">
                                        <p>${obj[1].imgname}</p>
                                        <p>${obj[1].price}</p>
                                    </div>
                                </div>
                                <div class="newpl_img3">
                                    <img src="${obj[2].imgurl}" alt="">
    
                                    <div class="img3_name">
                                        <p>${obj[2].imgname}</p>
                                        <p>${obj[2].price}</p>
                                    </div>
                                </div>
                                <div class="newpl_img3">
                                    <img src="${obj[3].imgurl}" alt="">
    
                                    <div class="img3_name">
                                        <p>${obj[3].imgname}</p>
                                        <p>${obj[3].price}</p>
                                    </div>
                                </div>
                `
                newpl_img11.appendChild(divs1)
            
        }
    })


    window.onload = function (){
    
// 轮播图
// 外层容器
var newpl_imgs = document.querySelector(".newpl_imgs")
// 总容器大小
var newpl_img1 = document.querySelector(".newpl_img1").clientWidth
// 所有图片
var newpl_img2 = document.querySelectorAll(".newpl_img2")

// 一次移动的距离
var Imgwidths = newpl_img2[0].clientWidth

var img1_left = document.querySelector(".img1_left")
var img1_right = document.querySelector(".img1_right")

// 记录下标
var imgIndex = 0

// 下一张图片
function imgNext(){
    imgIndex++
    if(imgIndex >= newpl_img2.length){
        imgIndex = 1
        newpl_imgs.scrollLeft = 0
    }
    animate(newpl_imgs,{scrollLeft:Imgwidths*imgIndex})
}

// 上一张图片
function imgPrev(){
    imgIndex--
    if(imgIndex <= 0){
        newpl_imgs.scrollLeft = Imgwidths*newpl_img2.length
        imgIndex = newpl_img2.length-1
    }
    animate(newpl_imgs,{scrollLeft:Imgwidths*(imgIndex-1)})

}

img1_right.onclick = function (){
    imgNext()
}

img1_left.onclick = function (){
    imgPrev()
}



}

// 人气推荐切换列表
var show1 = document.getElementById("show1")
var show2 = document.getElementById("show2")
var probox = document.querySelectorAll(".poprec_box1")
show1.onclick = function (){
    show1.className = 'text_show'
    show2.className = ''
    probox[0].className = 'poprec_box1 pop_show'
    probox[1].className = 'poprec_box1'
}

show2.onclick = function (){
    show2.className = 'text_show'
    show1.className = ''
    probox[1].className = 'poprec_box1 pop_show'
    probox[0].className = 'poprec_box1'
}