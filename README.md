# Euler-solving-library
A number of functions that will help you solve project Euler problems

This is a small and incomplete library which will help you solve some Project Euler problems.
I plan to expand on this library in the future, but for now it only has a handful of functions.

1. primeSieve ##Generates all primes below a target number
2. sumOfAllSquares ##squares every number in a list before giving you the sum
3. squareSumOfArray ## gets the sum of every number in the list then squares the result.
4. sumOfArray ## get the sum of all numbers in a list.

In order to use this Library. I would reccomend you first, clone the ts file into whatever repository you are using.
Then, you can either write your logic in the same file, or you can import the library to another typescript file using the following syntax.

```import { eullersLibrary } from "./eullersLibrary";

let math = new eullersLibrary

math.primeSieve(2000000); // => Array of primess```

If it gives you a file read error, you will need to copy the path of the ts file you cloned and put it at this location 

```from "([path to Euler-solving-library file])";```
