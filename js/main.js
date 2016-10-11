$(document).ready(function() {

    function generateBoard(uinput) {

        var defDiv = '<div class="dot"></div>';
        var pasteStr = "";
        var board = 512;
        var dotSize = board/uinput + "px";

        $('.board').empty(); //removes previous divs inside the board

        for (i = 0; i < uinput ; i++) {
            pasteStr = pasteStr + defDiv;
            //generates a string with a 'row' of divs
        }

        for (j = 0; j < uinput; j++) {
            $('.board').append(pasteStr);
            //pastes it n times
        }

        $('.dot').css({"width" : dotSize, "height" : dotSize}); //Sizes each dot accordingly

        $('.dot').on('mouseenter', function() {
            $(this).css("background-color", "black");
        });

    }


    $('#defButton').on('click', function() {
        generateBoard(16);
    });

    $('#x32').on('click', function() {
        generateBoard(32);
    });

    $('#clearBoard').on('click', function() {
        $('.dot').css("background-color", "");
    });

    $('#custom').on('click', function() {
        var uinput = prompt('Width of the desired board?');
        while (uinput < 1) {
            var uinput = prompt('Enter a number bigger than 1');
        }
        generateBoard(uinput);
    });


});
