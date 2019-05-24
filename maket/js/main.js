$(document).ready(function(){
  
  let owl = $(".owl-carousel"),
  url = null,
  prev = $("#leftarrow"),
  next = $("#rightarrow");
  
  $("#research-slider").owlCarousel({
      
      items: 1,
      lazyLoad: true,
      autoplay: 3000,
      autoplayHoverPause: true,
      loop: true,
      margin: 10,
      dots: false,
      navContainer: '#NavContainero2',
      navClass: ['prev', 'next'],
      navText:['',''],
  });

  
  /*next.on("click", ()=>{
    owl.trigger("next.owl.carousel")
  })

  prev.on("click", ()=>{
    owl.trigger("prev.owl.carousel")
  })*/
})  
  
  
$(document).ready(function(){  
 let owl = $("#main-slider"),
 url = null;
 owl.owlCarousel( {
      items: 1,
      lazyLoad: true,
      autoplay: 8000,
      loop: true,
      margin: 0,
      dots: false,
      nav: true,
      navContainer: '#NavContainero',
      navClass: ['Prev', 'Next'],

  });

})  
  




