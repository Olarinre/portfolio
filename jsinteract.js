// menu bar toggle finctionality
const menubtn = document.querySelector(".sidebar-toggle");
const closebtn = document.querySelector(".close-btn");
const sidebar = document.querySelector('.menu');


menubtn.addEventListener('click', function(){
    if (sidebar.classList.contains("menu")){
        sidebar.classList.remove("menu");
    }
    else{
        sidebar.classList.add("menu");
    }

});

//closebtn.addEventListener('click', function(){
  //  if (sidebar.classList.contains("menu")){
  //      sidebar.classList.remonve("menu");
  //  }

//});




