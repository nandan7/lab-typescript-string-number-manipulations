"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(1));
        console.log(word.concat("Hello"));
        console.log(word.slice(1, 4));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log((str.match(/[aeiou]/gi) || []).length);
    };
    return StringManipulations;
}());
var string = new StringManipulations();
string.print("prograd");
string.printWithSpace("prograd");
string.findVowel("prograd");
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        if (num % 2 == 0) {
            console.log(num + " " + "is a not prime number");
        }
        else {
            console.log(num + " " + "is a prime number");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var sum = 0;
        var i;
        for (i = 0; i < num; i++) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (num == 1) {
            console.log(num + " " + "is a Magic Number");
        }
        else
            console.log(num + " " + "It is not a Magic Number");
    };
    return NumbersManipulations;
}());
var obj1 = new NumbersManipulations();
obj1.findPrime(3);
obj1.findMagic(199);
