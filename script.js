if ($('#ssml-text').length === 0) {
    $('body').append('<div id="ssml-text"></div');
    $('#ssml-text').text(window.ace.edit('ssml').getValue());
}
$('.ace_text-input').on('keyup', function(e) {
    $('#ssml-text').text(window.ace.edit('ssml').getValue());
});