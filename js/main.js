//jQuery
$(document).ready(function() {
    $('#16x16').on('click', function() {
        for (var i = 0; i < 15; i++) {
            if(i%2 != 0) {
                $('.board').append('<div class="dot"></div>');
            } else {
                $('.board').append('<div class="ndot"></div>');
            }

        }

    });

});
