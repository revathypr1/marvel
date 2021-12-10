var icon=document.getElementById("icon");

icon.onclick =function(){
    document.body.classList.toggle("dark_theme")
    console.log("darkomode");

}

let menuicon = document.getElementById("menu-icon");
let menu = document.getElementById("mobile-menu");
let closeto = document.querySelector(".close");
let overlayto = document.querySelector(".overlay");
let container = document.getElementById("container");

menuicon.addEventListener("click", function () {
    menu.classList.toggle("active");
    closeto.classList.toggle("active");
    overlayto.classList.toggle("active");
    container.classList.toggle("active");
});
closeto.addEventListener("click", function () {
    menu.classList.toggle("active");
    closeto.classList.toggle("active");
    overlayto.classList.toggle("active");
    container.classList.toggle("active");

});
overlayto.addEventListener("click", function () {
    menu.classList.toggle("active");
    closeto.classList.toggle("active");
    overlayto.classList.toggle("active");
    container.classList.toggle("active");

});

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    margin: 10,
});




    








