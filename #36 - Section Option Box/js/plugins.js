// To Make Time For Each Slide 6 Seconds
$(document).ready(function(){
  $('.carousel').carousel({
    interval:6000
  });

  // Show Color Option Div When Click On The Gear
  $(".gear-check").click(function()
  {
    $(".color-option").fadeToggle();
  })
});
