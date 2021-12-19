function moveNavbar(){
  let windowInnerWidth = window.innerWidth;
  let navbar = $("#navbar");
  if(windowInnerWidth <= 993) {
      navbar.addClass("fixed-bottom");
      navbar.addClass("bg-dark");
      $(".video-bck").remove();
  }
  if(windowInnerWidth >= 993){
      navbar.removeClass("fixed-bottom");
      navbar.removeClass("bg-dark");
  }
}

function showDropdown(navbarDropdown, list){
  $(navbarDropdown).addClass("show");
  $(navbarDropdown).prop("aria-expanded", true);
  $(list).addClass("show");
}

function hideDropdown(navbarDropdown, list){
  let windowInnerWidth = window.innerWidth;
  if(windowInnerWidth >= 993) {
      $(navbarDropdown).removeClass("show");
      $(navbarDropdown).prop("aria-expanded", false);
      $(list).removeClass("show");
  }
}

$(document).ready(function () {
  moveNavbar();
    $(window).resize((event)=>{
        moveNavbar();
    });
  $(".navbar-toggler").click(event => {
        showDropdown('#navbarDropdown-1','#list-1');
        showDropdown('#navbarDropdown-2','#list-2');
    });
  
  $(".PartnersSlider1").slick({
    adaptiveHeight: false,
    mobileFirst: true,
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding:"20%",
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            centerPadding:"10%",
          }
        },
     ]
}
);
$(".PartnersSlider2").slick({
    adaptiveHeight: false,
    mobileFirst: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding:"40%",
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            centerPadding:"2%",
          }
        },
     ]
}); 
});
