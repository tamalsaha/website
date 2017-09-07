$(document).ready(function () {
  $('body').on('click', function (e) {
    $('.tip_wrap').removeClass('active');
    if ($(e.target).hasClass('tip_wrap')) {  // click on tip_wrap
      $(e.target).addClass('active');
    } else if ($(e.target).closest('.tip_wrap')) { // click inner of tip_wrap
      $(e.target).closest('.tip_wrap').addClass('active');
    }
  })
});
