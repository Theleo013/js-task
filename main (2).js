function palindrome(test) {
  const resultPal = test.split("").reverse().join("");
  return test === resultPal;
}
console.log(palindrome("ata"));
