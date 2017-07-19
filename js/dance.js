$(function () {
    $(document).on('click', '.dance__songs .block_element', function () {
        $('div').removeClass('dance__songs_selected');
        $(this).addClass('dance__songs_selected');

    });

    $.getJSON('https://fandance.ru/music/events.php?do=getSongs', function (json) {
        if (json) {
            $('.dance__songs').html(' ');
            for (var i = json.length - 1; i >= 0; i--) {
                music = '<div class="block_element" data-song-id="' + json[i].id + '">';
                music += '<div class="block__separator dance__track">' + json[i].author + ' - ' + json[i].name + '</div>';
                music += '<div class="block__separator dance__bpm">' + json[i].bpm + ' BPM</div>';
                music += '<div class="block__separator dance__time">' + json[i].length + '</div>';
                music += '</div>';
                $('.dance__songs').append(music);
            }
        }
    });
});
