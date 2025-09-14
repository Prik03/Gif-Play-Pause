$(document).ready(function () {
  $("#stopGif").on("click", function () {
    const $image = $("#image");
    const $this = $(this);

    if ($image.data("state") === "playing") {
      // Pause
      $image.attr("src", $image.data("still"));
      $image.data("state", "paused");
      $image.attr('alt','Static illustration of two paper boats on waves with a sunset.');
      $this.attr('aria-label','Play Gif');
      $this.text('▶');
    } else {
      // Play (restart gif)
      $image.attr("src", $image.data("gif") + "?t=" + new Date().getTime());
      $image.data("state", "playing");
      $image.attr('alt','Animated illustration of two paper boats floating on waves with a sunset.');
      $this.attr('aria-label','Pause Gif');
      $this.text('⏸');
    }
  });
});
