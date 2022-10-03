let menuBtn = document.querySelector('.burg_menu');
let menu = document.querySelector('.menu');
document.addEventListener('click', function (e) {
  if(menuBtn.contains(e.target)){
    menu.classList.add('active');
  } else if(!menu.contains(e.target)){
    menu.classList.remove('active');
  }
});
