/* global $ */

console.log("hi");

$("h1").click(function () {
  $("h1").css("color", "green");
  $("h1").text("Ready to Code");
});

$(".search-button").click(function () {
  let userInput = $(".search-term").val();
  console.log(userInput)
  let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${userInput}`;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let length = Math.floor(Math.random() * 1);
      let ranNum = Math.floor(Math.random() * length);

      let limit = 7;
      let x = data.items.slice(0, limit);
      console.log(x);
      data.items.slice(0, limit).forEach(function (item) {
        console.log(item);
        if (item.volumeInfo) {
          $(".placeholder").append(`<li>${item.volumeInfo.title}</li>`);
          $(".placeholder").append(`<li>${item.volumeInfo.authors}</li>`);
          $(".placeholder").append(`<li>${item.volumeInfo.publishedDate}</li>`);
          $(".placeholder").append(`<li>${item.volumeInfo.description}</li>`);
          console.log(JSON.stringify(item, undefined, 2));
        }
      });
    });
});
$(".reset").click(function () {
  $(".placeholder").empty();
});