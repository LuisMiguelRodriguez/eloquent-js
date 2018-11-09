# Chapter 3

## Minimum

Write a function min that takes 2 arguments and returns there minium.

## Recursion

We've seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it's divisible by two. Heres another way to define whether a positive whole number is even or odd.

- Zero is even
- One is odd
- For any number N, its evenness is the same as N -2.

Define a recursive function isEven corresponding to this definition.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix it.

## Bean Counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N), similiar to how
you get this "s".length. The returned valuewill be a string containing only one character (for example, "b"_. The first character has position zero, which causes the last one to be found at positin string.length -1. In other words, a two-chracter string has length 2, and its characters have position 0 and 1.).

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string.

Next, write a function called countChar that behave like countBs, except it takes a second argument that indicates the character that is to be
counted ( rather than counting only uppercase "B" character). Rewrite  countBs to make use of this new function.
