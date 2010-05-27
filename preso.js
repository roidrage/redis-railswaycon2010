$(function() {
  setTimeout(function() {
  $('div.scalarium').each(function() {
    console.log(this);
    $('<img/>').attr("src", "/file/scalarium_logo_small.png").css("position", "absolute").css("top", "-20px").css("left", "100px").css("z-index", "-10").insertBefore($(this));
  });
  }, 1000);
});
