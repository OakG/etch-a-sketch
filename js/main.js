$(document).ready(function() {
    board = 512;

    $('#defButton').on('click', function() {

        var defDiv = $('<div class="dot"></div>');
        $('.board').empty(); //resets the board

        for (i = 0; i < 16; i++) {
            $('.board').append(defDiv);

        } //the hell, only generates 1 'dot'.


    });

});
