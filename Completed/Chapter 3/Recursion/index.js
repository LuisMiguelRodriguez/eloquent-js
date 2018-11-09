// ## Recursion

// Define a recursive function isEven corresponding to
// - Zero is even
// - One is odd
// - For any number N, its evenness is the same as N -2.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix it.


// const functions = {
//     isEven : function (num) {

//         if( num == 0){
//             return true;
//         } else if ( num == 1){
//             return false;
//         } else {
//             return isEven(num - 2);
//         }

//     }
// }

// module.exports = functions;

function isEven(num) {

    if (num == 0) {
        return true;
    } else if (num == 1 ) {
        return false;
    } else if ( num < 0 ){
        return isEven(num * -1);
    } 
    else {
        return isEven(num - 2);
    }

}

module.exports = isEven;
