$(document).ready(function() {
    board = 512;

    $('#defButton').on('click', function() {

        var defDiv = '<div class="dot"></div>';
        var pasteStr = ""
        $('.board').empty(); //resets the board

        for (i = 0; i < 16; i++) {
            pasteStr = pasteStr + defDiv;
            //generates a string with a 'row' of divs
        }
        for (j = 0; j < 16; j++) {
            $('.board').append(pasteStr);
            //pastes it 16 times
        }

    });

});
