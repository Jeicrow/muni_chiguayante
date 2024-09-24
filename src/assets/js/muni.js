window.onscroll = function () {
  var scrollText = document.getElementById("scroll-text");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // Si el usuario ha bajado más de 50 píxeles, muestra el texto
    scrollText.style.display = "block";
  } else {
    // Si el usuario vuelve a la parte superior, oculta el texto
    scrollText.style.display = "none";
  }
};

$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// noticias
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".actual",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1,
    },
  }),
    $(".filters a").click(function () {
      $(".filters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
      return (
        t.isotope({
          filter: i,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1,
          },
        }),
        !1
      );
    });
});
