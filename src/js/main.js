import $ from "./lib/lib";

$("button").on("click", function () {
  $(".img").addAttribute("alt", "photo");
});
$("#active").on("click", function () {
  $(".img").removeAttribute("alt");
});
// $(".active").click(sayHello);
