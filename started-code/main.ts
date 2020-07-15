import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service";
class StringManipulations implements StringManipulationService {
  print(word: string): void {
    console.log(word);
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());
    console.log(word.charAt(1));
    console.log(word.concat("Hello"));
    console.log(word.slice(1, 4));
    console.log(word.length);
  }

  printWithSpace(sentence: string): void {
    console.log(sentence.split("").join(" "));
  }
  findVowel(str: string): void {
    console.log((str.match(/[aeiou]/gi) || []).length);
  }
}
let string = new StringManipulations();
string.print("prograd");
string.printWithSpace("prograd");
string.findVowel("prograd");

class NumbersManipulations implements NumberManipulationService {
  findPrime(num: number) {
    if (num % 2 == 0) {
      console.log(num + " " + "is a not prime number");
    } else {
      console.log(num + " " + "is a prime number");
    }
  }
  findMagic(num: number) {
    let sum: number = 0;
    let i: number;
    for (i = 0; i < num; i++) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (num == 1) {
      console.log(num + " " + "is a Magic Number");
    } else console.log(num + " " + "It is not a Magic Number");
  }
}

let obj1 = new NumbersManipulations();
obj1.findPrime(3);
obj1.findMagic(199);
