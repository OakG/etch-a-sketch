//jQuery
$(document).ready(function() {
    var board = 512;
    // Game board width,
    // board/nDots whereas nDots = rows
//    var nDots = 16;
    //First value
    var generateDots = function(nDots) {
        var nRows = board/nDots;
        var defDot = "<div class="edots"></div>";
        //var dotDiv = '<div class="pixel"></div>';
        for (var i = 0; i < nRows - 1; i++) {
            $('.board').append(defDot);
        }
    };

$('.wrapper').on('click', 'button', function() {
    generateDots(16);
});


});
