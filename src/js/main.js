import $ from "./lib/lib";

$("#first").on("click", () => {
  $("div").eq(1).fadeToggle(800);
});
$('[data-count="second"]').on("click", () => {
  $("div").eq(2).toggleClass("active");
});
$("button")
  .eq(2)
  .on("click", () => {
    $(".w-50").fadeToggle(800);
  });

$("#trigger").click(() =>
  $("#trigger").createModal({
    text: {
      title: "Modal title",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!",
    },
    btns: {
      count: 2,
      settings: [
        ["Close", ["btn-danger", "mr-10"], true],
        [
          "Save change",
          ["btn-success"],
          false,
          () => {
            alert("Данные сохранены");
          },
        ],
      ],
    },
  })
);
