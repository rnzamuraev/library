import $ from "./lib/lib";

$("button").on("click", function () {
  $("div").eq("1").toggleClass("active");
});
$("#active").on("click", function () {
  $(".img").removeAttribute("alt");
});
// $(".active").click(sayHello);

// console.log($("div").find(".more"));
console.log($(".more").closest(".findme").addClass("dej"));
console.log($(".text").eq("0").siblings());
