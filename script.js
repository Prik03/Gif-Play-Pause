$(document).ready(function () {
  $("#stopGif").on("click", function () {
    const $image = $("#image");
    const $this = $(this);

    if ($image.data("state") === "playing") {
      // Pause
      $image.attr("src", $image.data("still"));
      $image.data("state", "paused");
      $this.attr('aria-pressed','true');
    } else {
      // Play (restart gif)
      $image.attr("src", $image.data("gif") + "?t=" + new Date().getTime());
      $image.data("state", "playing");
      $this.attr('aria-pressed','false');
    }
  });
});
