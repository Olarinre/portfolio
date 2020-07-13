// menu bar toggle finctionality
const menubtn = document.querySelector(".sidebar-toggle");
const closebtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".menuhide");


menubtn.addEventListener('click', function(){
    sidebar.classList.toggle("showmenu")

});

closebtn.addEventListener('click', function(){
    sidebar.classList.remove("showmenu");
});



