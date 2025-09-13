//............................hamberger menu and remove id from url............................................
 $(function(){
    $('#menu').slicknav({
        prependTo:'.nav-list'
    });
    //making x on click
     $('.slicknav_menu').on('click', function () {
        $(this).toggleClass('active');
    });
    // removing hash id from urls
    $('.nav-icons').click(function() {                           
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-92
    },5);
     return false;
    });
 });

//............................hamberger menu End................................
// ......................Testinomial section slider............................. 
$(function() {
    if ($(window).width() <= 1024 && $(window).width() > 650) {
        $('.slidercontainer .testimonial-slider').bxSlider({
            slideWidth: 1000,
            slideMargin:20,
            responsive: true,
            touchEnabled:false,   
        });
    } 
    else if ($(window).width() <=650 && $(window).width() >568) {
        $('.slidercontainer .testimonial-slider').bxSlider({
            slideWidth: 600,
            slideMargin:30,
            responsive: true,
            touchEnabled:false,
        });
    } 
    else if ($(window).width() < 568 && $(window).width() >= 480) {
        $('.slidercontainer .testimonial-slider').bxSlider({
            slideWidth: 450,
            slideMargin:30,
            responsive: true,
            touchEnabled:false,
        });
    } 
    else if ($(window).width() <= 414 && $(window).width() > 390) {
        $('.slidercontainer .testimonial-slider').bxSlider({
            slideWidth: 400,
            slideMargin:30,
            responsive: true,
            touchEnabled:false,     
        });
    } 
    else if ($(window).width() <= 390 && $(window).width() > 375) {
        $('.slidercontainer .testimonial-slider').bxSlider({
            slideWidth: 370,
            slideMargin:30,
            responsive: true,
            touchEnabled:false,    
        });
    } 
    else if ($(window).width() <= 375 && $(window).width() >= 320) {
        $('.slidercontainer .testimonial-slider').bxSlider({
            slideWidth: 360,
            slideMargin:30,
            responsive: true,
            touchEnabled:false, 
        });
    } 
    else {
        $('.slidercontainer .testimonial-slider').bxSlider({
            slideWidth: 525,
            responsive: true,
            touchEnabled:false,
        });
    }
});
// .........................slider end ........................................................

//.......................... choose us section counter.......................................
$(document).ready(function(){
    var counted = 0;
    $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
          duration: 1000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
            });
        });
        counted = 1;
      }
    });
});

//.......................... choose us section counter end.......................................

//.............................image gallery counter..................................... 
 $('.image-gallery').bxSlider({
  minSlides: 9,
  maxSlides: 9,
  slideWidth: 420,
  slideMargin: 29,
  ticker: true,
  speed: 25000,
});
//.............................image gallery counter end..................................... 

 //......................... fancy box images...............................................
 Fancybox.bind("[data-fancybox]", {
    Carousel: {
    transition: "slide",
  },
}); 
//......................... fancy box images end...............................................

//.......................... header sticky.......................................
window.onscroll = function() {
    myFunction()
};
var header = document.getElementById("myHeader");
var navLogo=document.getElementById("navLogo");
var navList=document.getElementById("navList");
var enquiryBtn=document.getElementById("enquiryBtn ");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    navLogo.classList.add("sticky-logo");
    navList.classList.add("sticky-nav-list");
    enquiryBtn.classList.add("navEnquirybtn");
  } 
  else {
    header.classList.remove("sticky");
    navLogo .classList.remove("sticky-logo");
    navList.classList.remove("sticky-nav-list");
    enquiryBtn.classList.remove("navEnquirybtn");
  }
}
//.......................... header sticky end.......................................
//............................form validation..........................................
    document.getElementById('myForm').addEventListener('submit', function(event) { 
    document.getElementById('nameError').innerText = ''; 
    document.getElementById('emailError').innerText = ''; 
    document.getElementById('messageError').innerText = '';
    document.getElementById('dropdownError').innerText = '';
 
    let hasErrors = false; 
 
    // Validate Name 
    const nameInput = document.getElementById('name').value.trim(); 
    if (nameInput === '') { 
        document.getElementById('nameError').innerText = 'Name is required.'; 
        hasErrors = true; 
    } 
  
    // Validate Email 
    const emailInput = document.getElementById('email').value.trim(); 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex 
    if (emailInput === '') { 
        document.getElementById('emailError').innerText = 'Email is required.'; 
        hasErrors = true; 
    } else if (!emailPattern.test(emailInput)) { 
        document.getElementById('emailError').innerText = 'Invalid email format.'; 
        hasErrors = true; 
    } 

     const dropdownInput=document.getElementById('dropdown');
    if(dropdownInput.value===''){
         document.getElementById('dropdownError').innerText = 'please give atleast one instrument'; 
        hasErrors = true; 
    }

    // vallidate massage 
    const messageInput = document.getElementById('message').value.trim(); 
    if (messageInput === '') { 
        document.getElementById('messageError').innerText = 'please provide some message.'; 
        hasErrors = true; 
    } 
 
    // Prevent form submission if there are errors 
    if (hasErrors) { 
        event.preventDefault(); 
    } 
}); 
//............................form validation End.........................................
//.............................footer email form validation............................. 
document.getElementById('footerEmail').addEventListener('submit', function(event) { 
document.getElementById('footerEmailError').innerText = ''; 

    let hasErrors = false;

    // Validate Email 
    const emailInput = document.getElementById('footeremail').value.trim(); 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex 
    if (emailInput === '') { 
        document.getElementById('footerEmailError').innerText = 'Email is required.'; 
        hasErrors = true; 
    } else if (!emailPattern.test(emailInput)) { 
        document.getElementById('footerEmailError').innerText = 'Invalid email format.'; 
        hasErrors = true; 
    } 

    // Prevent form submission if there are errors 
    if (hasErrors) { 
        event.preventDefault(); 
        console.log("589")
    } 

}); 
//.............................footet email form validation............................. 

//........................... copyright year....................................... 

const date = new Date();
document.getElementById("copyright-year").innerHTML = date.getFullYear();

//........................... copyright year End.......................................
//............................ animation javascript wow library........................ 
wow = new WOW(
  {
  boxClass:'wow',     
  animateClass:'animated',
  offset:300,          
  mobile:true,      
  live:true      
})
wow.init();
//............................ animation javascript wow library........................ 
//............................package card slider on responsive........................ 
 $(document).ready(function(){
    if($(window).width() <= 768){
        $('.package-card-slider').bxSlider({
          slideWidth: 412,
          minSlides: 1,
          maxSlides: 1,
          slideMargin: 10,
          touchEnabled:false
        });
    }
  });
//............................package card slider on responsive End........................
// ...........................courses card slider on responsive........................
$(document).ready(function(){
    if($(window).width() <= 768){
        $('.courses-cards-slider').bxSlider({
          slideWidth: 387,
          minSlides: 1,
          maxSlides: 1,
          slideMargin: 50,
          touchEnabled:false
        });
    }
  });
// ...........................courses card slider on responsive End.......................
