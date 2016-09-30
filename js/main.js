//Reseting the game board
//while elements in .board > 0
//remove .gameSqm (paintable dots in the game)
boardSize = 512;
boardWidth = 16;
var generateBoard = function(boardWidth) {
    eleNumber = $(".board").length;

    var clearBoard = function() {
        while (eleNumber > 1) {
            $(".board").remove(".gameSqm");
        }
    }

    clearBoard();

    rows = 512/boardWidth;

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < rows; j++) {
            $(".board").append("<div class='gameSqm'></div>");
        };
    };

}

generateBoard(4);
