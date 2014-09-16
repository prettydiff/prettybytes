var prettybyte = function (an_integer) {
        "use strict";

        //find the string length of input and divide into triplets
        var len   = Math.floor((an_integer.toString().length - 1) / 3) - 1,
            //each triplet is worth an exponent of 1024 (2 ^ 10)
            power = (function () {
                var a = len,
                    b = 1024;
                if (len === 0) {
                    return 0;
                }
                if (len === 1) {
                    return 1024;
                }
                do {
                    b = b * 1024;
                    a -= 1;
                } while (a > 0);
                return b;
            }()),
            //kilobytes, megabytes, and so forth...
            unit  = [
                'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'
            ]
            output = "";

        if (typeof an_integer !== "number" || isNaN(an_integer) === true || an_integer < 0 || an_integer % 1 > 0) {
            //input not a positive integer
            output = "0.00B";
        } else if (len === 0) {
            //input less than 1000
            output = an_integer + "B";
        } else {
            //for input greater than 999
            ouptut = (Math.floor((an_integer / power) * 100) / 100).toFixed(2) + unit[len];
        }
        //for Node.js compatibility return a method
        if (typeof exports === "object" || typeof exports === "function") {
            exports.size = function () {
                return output
            };
        } else {
            //for vanilla JS just return the answer directly
            return output;
        }
    };