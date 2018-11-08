const functions = {

    chessBoard1() {

        var chessBoard = '';
        // Outer loop for 
        for (var i = 0; i <= 7; i++) {

            for (var j = 0; j <= 4; j++) {

                // only if even
                if (i % 2 == 0) {

                    if (j == 4) {
                        if (i !== 7) {
                            chessBoard += '\n'
                        }
                    } else {

                        chessBoard += '# ';

                    }

                    // only for odd
                } else {
                    if (j == 4) {
                        if (i !== 7) {
                            chessBoard += '\n'
                        }
                    } else {
                        chessBoard += ' #';
                    }
                }
            }

        }

        console.log(chessBoard);
    },
    chessBoard2(x) {

        var chessBoard = "";

        for (var i = 0; i <= x - 1; i++) {

            for (var j = 0; j <= x; j++) {

                if (i % 2 == 0) {

                    if (j == x) {
                        if( i != x-1)
                            chessBoard += "\n";
                    } else {
                        if (j % 2 == 0) {
                            chessBoard += "#";
                        } else {
                            chessBoard += " ";
                        }
                    }
                } else {

                    if (j == x) {
                        if( i != x-1)
                            chessBoard += "\n";
                    } else {
                        if (j % 2 == 0) {
                            chessBoard += " ";
                        } else {
                            chessBoard += "#";
                        }
                    }
                }

            }
        }
        console.log(chessBoard);
    }
};

module.exports = functions;