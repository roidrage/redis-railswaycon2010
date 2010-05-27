$(function() {
  setTimeout(function() {
  $('div.scalarium').each(function() {
    console.log(this);
    var link = $("<a>").attr("href", "http://www.scalarium.com").attr("target", "_blank");
    var logo = $('<img/>').attr("src", "/file/scalarium_logo_small.png").css("position", "absolute").css("top", "-20px").css("left", "100px").css("z-index", "-10");
    link.append(logo);
    link.insertBefore($(this));
  });
  }, 1000);
});
