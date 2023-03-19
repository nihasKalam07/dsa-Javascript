validAnagram("anagram", "nagaram"); // true
validAnagram("anagram", "nagaramm"); // false

function validAnagram(str1, str2) {
  // check if the length of str1 and str2. If they are not equal, return false.
  if (str1.length !== str2.length) {
    console.log("It's an invalid Anagram");
    return false;
  }

  //iterate over str1 and put each and char and its count in an object called
  //frequenctCounter1
  let frequenctCounter1 = {};

  for (val of str1) {
    frequenctCounter1[val] = (frequenctCounter1[val] || 0) + 1;
  }

  //iterate over str2 and put each and char and its count in an object called
  //frequenctCounter2
  frequenctCounter2 = {};

  for (val of str2) {
    frequenctCounter2[val] = (frequenctCounter2[val] || 0) + 1;
  }

  // loop through the frequenctCounter1 and check if each element is available
  //in the frequenctCounter2. Also check the counts of each elemets are same
  // in both the objects. If not, return false.

  for (key in frequenctCounter1) {
    if (!(key in frequenctCounter2)) {
      console.log("It's an invalid Anagram");
      return false;
    }

    if (frequenctCounter1[key] !== frequenctCounter2[key]) {
      console.log("It's an invalid Anagram");
      return false;
    }
  }
  console.log("It's a valid Anagram");
  return true;

  // If all the checks pass, return true and print the result.
}
