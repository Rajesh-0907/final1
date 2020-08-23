var stri = window.localStorage.getItem("name");
$("#nam").text("welcome ");

$("#restart").click(function () {
  location.reload();
});

$("#circle").click(function () {
  $(".color").css("border-radius", 100);
});

$("#normal").click(function () {
  $(".color").css("border-radius", 10);
});
var clear = window.setInterval(comp, 1000);
var sum = 0;
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var sum6 = 0;
var sum7 = 0;
var color = ["red", "blue", "green", "yellow", "orange"];
var color1 = [
  "cornflowerblue",
  "green",
  "deepskyblue",
  "fuchsia",
  "springgreen",
];
var color2 = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "cornflowerblue",
  "deepskyblue",
  "fuchsia",
  "springgreen",
];
var c1 = 0;
var c2 = 1;
var c3 = 2;
var c4 = 3;
var c5 = 4;
var c6 = 0;
var c7 = 1;
var c8 = 2;
var c9 = 3;
var c10 = 4;
function change() {
  $("body").css("background-color", color2[sum4]);
  $("#game").css("background-color", color2[sum4]);

  ++sum4;
  if (sum4 > 8) {
    sum4 = 0;
  }
  window.clearInterval(clear);
}
$("#red").click(function () {
  if (sum == 3) {
    sum = 0;
  }
  ++sum;
  switch (sum) {
    case 1:
      $("#green").css("background-color", color[c4]);
      $("body").css("background-color", color[c4]);
      ++c4;

      if (c4 > 4) {
        c4 = 0;
      }
      break;

    case 2:
      $("#orange").css("background-color", color[c1]);
      $("body").css("background-color", color[c1]);
      ++c1;
      if (c1 > 4) {
        c1 = 0;
      }
      break;

    case 3:
      $("#red").css("background-color", color[c2]);
      $("body").css("background-color", color[c2]);
      ++c2;
      if (c2 > 4) {
        c2 = 0;
      }
      break;
  }
});

$("#blue").click(function () {
  if (sum1 == 2) {
    sum1 = 0;
  }
  ++sum1;
  switch (sum1) {
    case 1:
      $("#yellow").css("background-color", color[c5]);
      $("body").css("background-color", color[c5]);
      ++c5;
      if (c5 > 4) {
        c5 = 0;
      }
      break;

    case 2:
      $("#blue").css("background-color", color[c3]);
      $("body").css("background-color", color[c3]);
      ++c3;
      if (c3 > 4) {
        c3 = 0;
      }
      break;
  }
});

$("#green").click(function () {
  if (sum2 == 2) {
    sum2 = 0;
  }
  ++sum2;
  switch (sum2) {
    case 1:
      $("#orange").css("background-color", color[c1]);
      $("body").css("background-color", color[c1]);
      ++c1;
      if (c1 > 4) {
        c1 = 0;
      }
      break;

    case 2:
      $("#green").css("background-color", color[c4]);
      $("body").css("background-color", color[c4]);
      ++c4;
      if (c4 > 4) {
        c4 = 0;
      }
      break;
  }
});

$("#yellow").click(function () {
  $("#yellow").css("background-color", color[c5]);
  $("body").css("background-color", color[c5]);
  ++c5;
  if (c5 > 4) {
    c5 = 0;
  }
});

$("#orange").click(function () {
  if (sum3 == 2) {
    sum3 = 0;
  }
  ++sum3;
  switch (sum3) {
    case 1:
      $("#green").css("background-color", color[c4]);
      $("body").css("background-color", color[c4]);
      ++c4;
      if (c4 > 4) {
        c4 = 0;
      }
      break;

    case 2:
      $("#orange").css("background-color", color[c1]);
      $("body").css("background-color", color[c1]);
      ++c1;
      if (c1 > 4) {
        c1 = 0;
      }
      break;
  }
});

$("#d").click(function () {
  if (sum5 == 3) {
    sum5 = 0;
  }
  ++sum5;
  switch (sum5) {
    case 1:
      $("#a").css("background-color", color1[c9]);
      $("body").css("background-color", color1[c9]);
      ++c9;
      if (c9 > 4) {
        c9 = 0;
      }
      break;

    case 2:
      $("#b").css("background-color", color1[c10]);
      $("body").css("background-color", color1[c10]);
      ++c10;
      if (c10 > 4) {
        c10 = 0;
      }
      break;

    case 3:
      $("#d").css("background-color", color1[c7]);
      $("body").css("background-color", color1[c7]);
      ++c7;
      if (c7 > 4) {
        c7 = 0;
      }
      break;
  }
});

$("#c").click(function () {
  if (sum6 == 2) {
    sum6 = 0;
  }
  ++sum6;
  switch (sum6) {
    case 1:
      $("#a").css("background-color", color1[c9]);
      $("body").css("background-color", color1[c9]);
      ++c9;
      if (c9 > 4) {
        c9 = 0;
      }
      break;

    case 2:
      $("#c").css("background-color", color1[c6]);
      $("body").css("background-color", color1[c6]);
      ++c6;
      if (c6 > 4) {
        c6 = 0;
      }
      break;
  }
});

$("#b").click(function () {
  $("#b").css("background-color", color1[c10]);
  $("body").css("background-color", color1[c10]);
  ++c10;
  if (c10 > 4) {
    c10 = 0;
  }
});
$("#a").click(function () {
  if (sum7 == 2) {
    sum7 = 0;
  }
  ++sum7;

  switch (sum7) {
    case 1:
      $("#b").css("background-color", color1[c10]);
      $("body").css("background-color", color1[c10]);
      ++c10;
      if (c10 > 4) {
        c10 = 0;
      }
      break;

    case 2:
      $("#a").css("background-color", color1[c9]);
      $("body").css("background-color", color1[c9]);
      ++c9;
      if (c9 > 4) {
        c9 = 0;
      }
      break;
  }
  console.log(c6);
  console.log(c7);
  console.log(c9);
  console.log(c10);
});

function comp() {
  if (
    c1 == 3 &&
    c2 == 3 &&
    c3 == 3 &&
    c4 == 3 &&
    c5 == 3 &&
    c6 == 2 &&
    c7 == 2 &&
    c9 == 2 &&
    c10 == 2
  ) {
    $("#orange").css("background-color", "black");
    $("#red").css("background-color", "black");
    $("#blue").css("background-color", "black");
    $("#green").css("background-color", "black");
    $("#yellow").css("background-color", "black");
    $("#a").css("background-color", "black");
    $("#b").css("background-color", "black");
    $("#c").css("background-color", "black");
    $("#d").css("background-color", "black");
    window.setInterval(change, 3000);
  }
}
