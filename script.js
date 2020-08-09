$(document).ready(function () {
  $(".hide").click(function () {
    // задаем функцию при нажатиии на элемент с классом hide
    $(".filter-window").fadeOut(200); // скрывыаем все элементы <p>
  });
  $(".show").click(function () {
    // задаем функцию при нажатиии на элемент с классом show
    $(".filter-window").fadeIn(200); // отображаем все элементы <p>
  });
});

var count = 0;

new Vue({
  el: "#app",
  data: {
    images: [
      {
        src: "img/image/Rectangle%20Copy%202.png",
      },
      {
        src: "img/image/Rectangle%20Copy%203.png",
      },
      {
        src: "img/image/Rectangle%20Copy%204.png",
      },
      {
        src: "img/image/Rectangle%20Copy%205.png",
      },
      {
        src: "img/image/Rectangle%20Copy%206.png",
      },
      {
        src: "img/image/Rectangle%20Copy%207.png",
      },
      {
        src: "img/image/Rectangle%20Copy%208.png",
      },
      {
        src: "img/image/Rectangle%20Copy%209.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2010.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2011.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2012.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2013.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2014.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2015.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2016.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2017.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2018.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2019.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2020.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2021.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2022.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2023.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2024.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2025.png",
      },
      {
        src: "img/image/Rectangle%20Copy%2026.png",
      },
    ],
  },
  methods: {
    loadMore: function () {
      $.ajax("pictures.json").done((data) => {
        console.log(data);
        this.images = this.images.concat(data);
      });
    },
  },
});
