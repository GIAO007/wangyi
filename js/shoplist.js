window.onload = function (){
// 数据生成商品列表页
var listwp_by = document.querySelector(".listwp_by")
ajax({
    url:'data/list.json',
        type:'get',
        dataType:'json',
        success:function (obj){
            
            for(let i = 0; i < obj.length; i++){
                var divs = document.createElement('div')
                divs.className = 'by_box'
                divs.innerHTML = `
                        <a href="shopdetails.html">
                            <img src="${obj[i].imgurl}" alt="">
                        </a>
                        <div class="by_name">
                            <div class="by_txt">
                                <span>${obj[i].discount1}</span>
                            </div>
                            <div class="by_txt">
                                <span>${obj[i].discount2}</span>
                            </div>
                            <a href="shopdetails.html">
                                <p>${obj[i].imgname}</p>
                            </a>
                            <p>${obj[i].price}</p>
                        </div>
                `
                listwp_by.appendChild(divs)

                divs.addEventListener('click', function (e) {
                    // e.preventDefault()

                    if (e.target.parentNode.tagName === 'A') {
                        localStorage.setItem('tmpGoodsId', obj[i].id)

                        console.log(localStorage.getItem('tmpGoodsId'))
                    }
                })
            }
        }
})
}