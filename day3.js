function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return "";

  // Take the first string as reference
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    // Compare characters one by one
    while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
      j++;
    }
    // Update prefix to the common part
    prefix = prefix.substring(0, j);
    if (prefix === "") return "";
  }

  return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
