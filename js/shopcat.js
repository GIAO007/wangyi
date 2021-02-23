// 购物车
var shopcat_list = document.querySelector(".shopcat_list")
ajax({
    url:'data/shopdetails.json',
    type:'get',
    dataType:'json',
    success:function (obj){
        let shopcar = JSON.parse(localStorage.getItem('shopcar'))
        
        if (!shopcar) shopcar = []

        for (let item of shopcar) {
          let li = document.createElement('li')
          li.innerHTML = `
          <input type="checkbox" class="check1">
          <img src="${item.imgurl}" alt="">
          <h3>${item.imgname}</h3>
          <p class="pri">${item.price}</p>
          <span class="reduce">-</span>
          <span class="number">${item.count}</span>
          <span class="add">+</span>
          <span class="sum">${item.price*item.count}</span>
          <em>删除</em>
          `

          shopcat_list.appendChild(li)
        }
    // 删除
    $('.shopcat_list').on('click','em',function (){
      let index = $(this).parents('li').eq(0).index()

      let nums = shopcar[index].count
      localStorage.setItem('shopnum', localStorage.getItem('shopnum') - nums)
      $('.shop1_i2').text(localStorage.getItem('shopnum'))

      shopcar.splice(index, 1)
      $(this).parents('li').eq(0).remove()

      localStorage.setItem('shopcar', JSON.stringify(shopcar))
    })

    // 增加商品数量
    
    $('.shopcat_list').on('click','.add',function (){
      let indexs = $(this).parents('li').eq(0).index()
      let nums1 = ++shopcar[indexs].count
      $(".number")[indexs].innerText = nums1
      $(".sum")[indexs].innerText = $(".pri")[indexs].innerText*nums1
      localStorage.setItem('shopnum', parseInt(localStorage.getItem('shopnum')) + 1)
      $('.shop1_i2').text(localStorage.getItem('shopnum'))
    })


    // 减少商品数量
    $('.shopcat_list').on('click','.reduce',function (){
      let indexs1 = $(this).parents('li').eq(0).index()
      let nums2 = --shopcar[indexs1].count
      if(shopcar[indexs1].count < 0){
        shopcar[indexs1].count = 0
        nums2 = 0
        localStorage.setItem('shopnum', parseInt(localStorage.getItem('shopnum')))
      }else{
        localStorage.setItem('shopnum', parseInt(localStorage.getItem('shopnum')) - 1)
      }
      $(".number")[indexs1].innerText = nums2
      $(".sum")[indexs1].innerText = $(".pri")[indexs1].innerText*nums2
      
      $('.shop1_i2').text(localStorage.getItem('shopnum'))
    })
    

          // 全选按钮
    $('.shopcat_head').on('click','.check',function (){
        // 判断是否要全选
       if($(this)[0].checked){
        $('.shopcat_list li input').each(function (index,ele){
          $(ele)[0].checked = true
        })
       }else{
        $('.shopcat_list li input').each(function (index,ele){
          $(ele)[0].checked = false
        })
       }
        priAll()
    })

    // 商品选中
    $('.shopcat_list').on('click','li .check1',function (){
        // 判断是否要全选
        $('.shopcat_list li input').each(function (index,ele){
          if (!$(ele).attr('checked')) {//未选中
            $('.shopcat_head .check')[0].checked = false
            return false//结束each循环
          }else{
            $('.shopcat_head .check')[0].checked = true
          }
        })
        priAll()
    })


    // 计算总价
    function priAll(){
      var num = 0
      $('.shopcat_list li input').each(function (index,ele){
          if($(ele).prop('checked')){
            num += parseFloat($(ele).parent().find('.sum').html())
          }
          $('.shopcat_priAll span').html(num)
      })
    }
    }
})