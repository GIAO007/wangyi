// 购物车
var shopcat_list = document.querySelector(".shopcat_list")
ajax({
    url:'data/shopdetails.json',
    type:'get',
    dataType:'json',
    success:function (obj){
        let item = {}
          let id = localStorage.getItem('tmpGoodsId')

          obj.forEach(i => {
            if (i.id === id) {
              item = i
            }
          })

          shopcat_list.innerHTML = `
          <li>
                <input type="checkbox" class="check1">
                <img src="${item.imgurl}" alt="">
                <h3>${item.imgname}</h3>
                <p class="pri">${item.price}</p>
                <span class="reduce">-</span>
                <span class="number">1</span>
                <span class="add">+</span>
                <span class="sum">${item.price}</span>
                <em>删除</em>
            </li>
          `

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