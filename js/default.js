var fixe1 = document.querySelector(".fixe1")
var fixe2 = document.querySelector(".fixe2")
var back = document.querySelector('.fixe2_hdb')
var doc = document.documentElement
var fixe2_hdb = document.querySelector(".fixe2_hdb")

document.onmousewheel = function (e){
    if(doc.scrollTop>330){
        fixe1.style.position = 'fixed'
        fixe1.style.top = '20px'
        fixe2.style.position = 'fixed'
        fixe2.style.top = '20px'
    }
    
    if(doc.scrollTop < 650){
        fixe1.style.position = 'absolute'
        fixe1.style.top = '445px'
        fixe2.style.position = 'absolute'
        fixe2.style.top = '445px'
    }

    if(doc.scrollTop < 200){
        fixe2_hdb.style.display = 'none'
    }else{
        fixe2_hdb.style.display = 'block' 
    }

}

back.onclick = function (){
    doc.scrollTop = 0
    fixe1.style.position = 'absolute'
    fixe1.style.top = '445px'
    fixe2.style.position = 'absolute'
    fixe2.style.top = '445px'
}



    
