// menu bar toggle finctionality
const menubtn = document.querySelector(".sidebar-toggle");
const closebtn = document.querySelector(".close-btn");
const sidebar = document.querySelector('.menuhide');


menubtn.addEventListener('click', function(){
    if (sidebar.classList.contains("menuhide")){
        sidebar.classList.remove("menuhide");
    }


});

closebtn.addEventListener('click', function(){
    sidebar.classList.remove("showmenu");
});



