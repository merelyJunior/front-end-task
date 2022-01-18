$(document).ready(function () {
  $("#scrollTo").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: false,
    updateURL: false,
    responsiveFallback: 450,
  });
  var bars = document.getElementById("nav-action");
  var nav = document.getElementById("navResponsive");

  bars.addEventListener("click", barClicked, false);

  function barClicked() {
    bars.classList.toggle("active");
    nav.classList.toggle("active");
  }

  function cloudShow() {
    $(".cloud").addClass("cloud-v");
  }
  setTimeout(cloudShow, 3000);

  $(function () {
    var tab = $("#tabs .tabs-item");

    $("#tabs .tabs-nav a")
      .click(function () {
        tab.hide();
        tab.filter(this.hash).fadeIn(1000);
        $("#tabs .tabs-nav a").parent().removeClass("active");
        $(this).parent().addClass("active");
        return false;
      })
      .filter(":first")
      .click();
  });
  $(function () {
    $("select").selectric({ disableOnMobile: false, nativeOnMobile: false });
  });
  $('.nav__item a[href^="#"]').click(function () {
    var scroll_el = $(this).attr("href");
    if ($(scroll_el).length != 0) {
      $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 500);
      $("body").removeClass("lock");
      $(".nav-responsive ").removeClass("active");
      $(".bars").removeClass("active");
    }
    return false;
  });
});
