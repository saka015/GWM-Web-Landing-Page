document.querySelector('#show-login').addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
    document.querySelector('.content').style.display = 'none';

})
document.querySelector('.popup .close-btn').addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector('.content').style.display = 'block';

})