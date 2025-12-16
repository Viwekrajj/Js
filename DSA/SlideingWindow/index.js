// Count Occurences of Anagrams

// Given a word pat and a text txt. Return the count of the occurrences of anagrams of the word in the text.

// Example 1:

// Input: txt = "forxxorfxdofr", pat = "for"
// Output: 3
// Explanation: for, orf and ofr appears in the txt, hence answer is 3.
// Example 2:

// Input: txt = "aabaabaa", pat = "aaba"
// Output: 4
// Explanation: aaba is present 4 times in txt.

const txt = "aabaabaa",
      pat = "aaba";

const n = txt.length;
const m = pat.length;
let left = 0;

const map = new Map();
const arr = new Array(26).fill(0);

let count = 0;

// Count frequency of pattern characters
for (let i = 0; i < m; i++) {
  arr[pat.charCodeAt(i) - 'a'.charCodeAt(0)]++;
}

// Sliding window
for (let right = 0; right < n; right++) {
  const ch = txt[right];
  map.set(ch, (map.get(ch) || 0) + 1);

  // Shrink window if size > m
  while (right - left + 1 > m) {
    const leftChar = txt[left];
    map.set(leftChar, map.get(leftChar) - 1);
    if (map.get(leftChar) === 0) map.delete(leftChar);
    left++;
  }

  // Check for anagram
  if (map.size === arr.filter(x => x > 0).length) {
    let check = true;
    for (const [key, value] of map) {
      if (value !== arr[key.charCodeAt(0) - 'a'.charCodeAt(0)]) {
        check = false;
        break;
      }
    }
    if (check) count++;
  }
}

console.log(count);
