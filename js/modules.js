/* actvivity */

$(function () {
    $('.activity_menu .icon').click(function () {
        if ($('.activity_block').css('display') == 'none') {
            showActivity();
        } else {
            closeActivity();
        }
    });
    $(document).click(function (event) {
        if ($(event.target).closest(".activity_menu").length) return;
        closeActivity();
        event.stopPropagation();
    });
});

function showActivity() {
    $(".activity_block").removeClass('slideOutUp').addClass('animated slideInDown').css({
        display: 'block'
    });
}

function closeActivity() {
    $(".activity_block").removeClass('slideInDown').addClass('animated slideOutUp').delay(200).fadeOut();
}
