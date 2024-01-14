function hasTargetSum(array, target) {
  // Pseudocode:
  // Create an empty set to store encountered numbers
  // Iterate through each number in the array
  // Calculate the difference between the target and the current number
  // Check if the difference is in the set, if yes, return true
  // Otherwise, add the current number to the set
  // If the loop completes without finding a pair, return false

  const numSet = new Set();

  for (let num of array) {
    const complement = target - num;

    if (numSet.has(complement)) {
      return true;
    }

    numSet.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n) - where n is the length of the input array
*/

/* 
  Add your pseudocode here
  Create an empty set
  For each number in the array:
    Calculate the complement (target - current number)
    If complement is in the set, return true
    Otherwise, add the current number to the set
  If no pair is found, return false
*/

/*
  Add written explanation of your solution here
  The function uses a set to keep track of encountered numbers as it iterates through the array.
  For each number, it calculates the complement needed to reach the target sum.
  If the complement is found in the set, it means a pair exists, and the function returns true.
  If the loop completes without finding a pair, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
