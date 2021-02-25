// 商品详情
var details = document.querySelector(".details")
let item

ajax({
  url:'data/shopdetails.json',
        type:'get',
        dataType:'json',
        success:function (obj){
          item = {}
          let id = localStorage.getItem('tmpGoodsId')

          obj.forEach(i => {
            if (i.id === id) {
              item = i
            }
          })

          details.innerHTML = `
          <div class="details_head">
          <span>
              <a href="index.html">
                  首页
              </a>
          </span>
          <span>></span>
          <a href="shoplist.html">
          <span>全部商品</span>
          </a>
          <span>></span>
          <span>${item.imgname}</span> 
            
       </div>

       <div class="details_bot">
           <div class="details_img">
               <div class="img_tops">
                   <img src="${item.imgurl}" alt="">
                   <div class="mask"></div>
               </div>
               <div class="img_big">
                  <img src="${item.imgurl}" alt="">
              </div>
               <div class="img_bots">
                   <div class="bots_img">
                       <img src="${item.imgurl}" alt="">
                   </div>
                   <div class="bots_img">
                       <img src="${item.imgurl1}" alt="">
                   </div>
                   <div class="bots_img">
                      <img src="${item.imgurl2}" alt="">
                   </div>
                   <div class="bots_img">
                      <img src="${item.imgurl3}" alt="">
                   </div>
                   <div class="bots_img">
                      <img src="${item.imgurl4}" alt="">
                   </div>
               </div>

               
           </div>

           <div class="details_name">
               <div class="detailsna">
                   <h2>${item.imgname}</h2>
                   <a href="">
                       <p>99.6%</p>
                       <p>好评率 ></p>
                   </a>
               </div>

               <div class="details_pr">
                   <div class="details_pr1">
                       <span>价格</span>
                       <span>￥</span>
                       <span>${item.price}</span>
                   </div>

                   <div class="details_pr2">
                      <span>促销</span>
                      <span>全场换购</span>
                      <span>低至9.9元超值换购</span>
                   </div>

                   <div class="details_pr3">
                      <span>购物返</span>
                      <span>最高返</span>
                      <span>${parseInt(item.price/10)}积分</span>
                   </div>

                   <div class="details_pr4">
                      <span>邮费</span>
                      <span>满99元包邮</span>
                   </div>

                   <div class="details_pr5">
                      <span>配送</span>
                      <span>至</span>
                      <span>丹东市振兴区站前街道</span>
                   </div>

                   <hr>

                   <div class="details_pr6">
                      <span>服务</span>
                      <span>· 网易自营品牌</span>
                      <span>· 30天无忧退还 </span>
                      <span>· 不可用券</span>
                      <span>· 国内部分地区不可配送</span>
                   </div>

                   <div class="details_pr6">
                      <span>规则</span>
                      <span>· 成功购买商品</span>
                      <span>· 红包到账(系统返还) </span>
                   </div>
               </div>
           </div>

           <div class="details_num">
               <span>数量</span>
               <span class="details_reduce"><i></i></span>
               <span class="details_nums">1</span>
               <span class="details_add">+</span>
           </div>

           <div class="details_shopcat">
               <p>加入购物车</p>
           </div>

       </div>
          `
          
          // 放大镜
var img_tops = $1('.img_tops')
var mask = $1('.mask')
var img_big= $1('.img_big')
var maxImg= $1('.img_big img')
img_tops.onmouseenter = function (){
  mask.style.display = 'block'
  img_big.style.display = 'block'
}
img_tops.onmouseleave = function (){
  mask.style.display = 'none'
  img_big.style.display = 'none'
}


img_tops.onmousemove = function (e){
  
  var mask_left = e.pageX - offset(img_tops).left - mask.clientWidth/2
  var mask_top = e.pageY - offset(img_tops).top - mask.clientHeight/2
  // 临界值判断
  if (mask_left <= 0){
    mask_left = 0
  }
  if (mask_left >= (img_tops.clientWidth - mask.clientWidth)){
    mask_left = (img_tops.clientWidth - mask.clientWidth)
  }
  if (mask_top <= 0){
    mask_top = 0
  }
  if (mask_top >= (img_tops.clientHeight - mask.clientHeight)){
    mask_top = (img_tops.clientHeight - mask.clientHeight)
  }
  // 赋值，改变遮罩层定位
  mask.style.left = mask_left + 'px'
  mask.style.top = mask_top + 'px'

  // 移动比例
  var scaleX = mask_left/(img_tops.clientWidth - mask.clientWidth)
  var scaleY = mask_top/(img_tops.clientHeight - mask.clientHeight)
  // 根据比例计算出大图的定位
  var img_left = (maxImg.clientWidth - img_big.clientWidth)*scaleX
  var img_top = (maxImg.clientHeight - img_big.clientHeight)*scaleY
  // 赋值，改变大图定位，反向运动
  maxImg.style.left = -img_left + 'px'
  maxImg.style.top = -img_top + 'px'
} 


// 点击切换显示图片
var bots_img = document.querySelectorAll(".bots_img")
var show_img = document.querySelector(".img_tops img")

for(var i = 0; i < bots_img.length; i++){
    bots_img[i].onclick = function (){
        show_img.src = this.childNodes[1].src
        maxImg.src = this.childNodes[1].src
    }
}




// 加入购物车数量
var details_reduce = document.querySelector(".details_reduce")
var details_add = document.querySelector(".details_add")
var details_nums = document.querySelector(".details_nums")

// 购物车数量
var shop1_i2 = document.querySelector(".shop1_i2")
shop1_i2.innerText = Number(localStorage.getItem('shopnum'))

// 加入购物车
var details_shopcat = document.querySelector(".details_shopcat")


var shopNum = details_nums.innerText

details_reduce.onclick = function (){
    shopNum--
    if(shopNum<1){
        shopNum = 1
    }
    details_nums.innerText = shopNum
}

details_add.onclick = function (){
    shopNum++
    details_nums.innerText = shopNum
}

details_shopcat.onclick = function (){
    
    if(!localStorage.getItem('succ')){
        alert("用户未登录，请先登录")
        location.href = 'login.html'
    }else{
        alert("加入购物车成功")
        localStorage.setItem('shopnum',Number(localStorage.getItem('shopnum')) + Number(shopNum))

        shop1_i2.innerText = localStorage.getItem('shopnum')

        if (!item) return ;
        var cnt = parseInt(document.querySelector(".details_nums").innerText)

        if (isNaN(cnt) || cnt <= 0) return ;
        if (!localStorage.getItem('shopcar')) {
            localStorage.setItem('shopcar', '[]')
        }
        
        item.count = cnt
        let shopcar = JSON.parse(localStorage.getItem('shopcar'))

        if (!shopcar) shopcar = []
        shopcar.push(item)
        localStorage.setItem('shopcar', JSON.stringify(shopcar))
    }
}
        }
})


