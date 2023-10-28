let goTop = document.getElementById('goTop')
document.addEventListener('scroll',(e)=>{

    document.documentElement.scrollTop>450? goTop.style.opacity="1" : goTop.style.opacity="0";

})