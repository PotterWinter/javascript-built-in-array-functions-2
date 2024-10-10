function isPalindrome(string) {
  // Start coding here
  const reversString = string.split("").reverse().join("");

  return string === reversString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false

console.log(isPalindrome("civic"));
console.log(isPalindrome("level"));
console.log(isPalindrome("godog"));
