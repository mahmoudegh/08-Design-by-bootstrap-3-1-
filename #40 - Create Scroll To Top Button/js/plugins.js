// To Make Time For Each Slide 6 Seconds
$(document).ready(function(){
  $('.carousel').carousel({
    interval:6000
  });



  // Show Color Option Div When Click On The Gear
  $(".gear-check").click(function()
  {
    $(".color-option").fadeToggle();
  });

  // Change Theme Color On Click
  var colorLi = $(".color-option ul li");

  colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#009AFF").end()
    .eq(3).css("backgroundColor","#FFD500");

  colorLi.click(function()
  {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  });

  // Caching The Scroll Top Element
  var scrollButton = $("#scroll-top");

  $(window).scroll(function()
  {
    $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
  });

  // Click On Button To Scroll Top
  scrollButton.click(function()
  {
    $("html,body").animate({scrollTop : 0}, 600);
  });

});


// Laoding Screen
$(window).load(function()
{
  // Loading Elements
  $(".loading-overlay .spinner").fadeOut(2000,
  function()
  {
    $(this).parent().fadeOut(2000,
    function()
    {
      // Show The Scroll
      $("body").css("overflow","auto");

      $(this).remove();
    });
  });
});
