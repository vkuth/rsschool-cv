let menuBtn = document.querySelector('.burg_menu');
let back =document.querySelector('.background');
let menu = document.querySelector('.menu');
let close =document.querySelector('.close_btn');
document.addEventListener('click', function (e) {
  if(menuBtn.contains(e.target)){
    menu.classList.add('active');
    back.classList.add('active');
  } else if(!menu.contains(e.target)|| close.contains(e.target)){
    menu.classList.remove('active');
    back.classList.remove('active');
  }
});
