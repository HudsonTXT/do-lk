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

/* Selecatble song */
$(document).on('click', '.dance__songs .block_element', function () {
    $('div').removeClass('dance__songs_selected');
    $(this).addClass('dance__songs_selected');
    $('.godance').slideDown()
    songId = $(this).attr('data-song-id');
});

$(document).on('click', '.godance', function () {
    if (songId != 0) {
        location.href = 'https://fandance.ru/music/dance.php?type=0&song_id=' + songId;
    } else {
        alert('Пожалуйста, выберите трек!');
    }

});
