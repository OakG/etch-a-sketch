//jQuery
$(document).ready(function() {
    $('#16x16').on('click', function() {
        for (var i = 0; i < 15; i++) {
                $('.board').append('<div class="dot"></div>');
        } // Only makes a line

    });

});
