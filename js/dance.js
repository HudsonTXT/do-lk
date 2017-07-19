$(function () {
    $(document).on('click', '.dance__songs .block_element', function () {
        $('div').removeClass('dance__songs_selected');
        $(this).addClass('dance__songs_selected');

    })
});
