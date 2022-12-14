// Sum Zero
// time complexity O(n log(n))
function addToZero(nums) {
    while (nums.length > 0) {
        const num = nums.pop()
        for (let i = 0; i < nums.length; i++) {
            const sum = nums[i] + num
            if (sum === 0){
                return true
            }
        }
    }
    return false
}
// console.log(addToZero([1, 0]))
// console.log(addToZero([0, 1, 0]))
// console.log(addToZero([1, 0, 2, 8, 18, 9, 20, 1, 9]))

// Unique Characters
// time complexity O(n log(n))
function hasUniqueChars(str) {
    const chars = str.split("")
    while (chars.length > 0) {
        const char = chars.pop()
        for (let i = 0; i < chars.length; i++) {
            if (char === chars[i]) {
                return false
            }
        }
    }
    return true
}
// console.log(hasUniqueChars('sweet'))
// console.log(hasUniqueChars('charasmatic'))
// console.log(hasUniqueChars('Analyst'))


// Pangram Sentence
// time complexity O(n) or linear
function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let removeWhite = /\s/g
    let lowerNoWhite = str.toLowerCase().replace(removeWhite, "")

    for(let i = 0; i < alphabet.length; i++) {
        if(lowerNoWhite.indexOf(alphabet[i]) === -1) {
            return false
        }
    }
    return true
}
// console.log(isPangram(
//     'The quick brown fox jumps over the lazy dog.'
//     ))
// console.log(isPangram(
//     'It was the best of times, it was the worst of times.'
//     ))

// Longest Word
// time complexity O(n) or linear
function findLongestWord(arr) {
    let longestWord = 0

    for(let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const stringLength = str.length
        if(stringLength > longestWord){
            longestWord = stringLength
        }
    }
    return longestWord
}
// console.log(findLongestWord([
//     'so', 'super', 'greatest', 'Tyler'
// ]))
// console.log(findLongestWord([
//     'cool', 'awesome', 'greatest', 'that',
//     'that', 'maximum', 'tremendous'
// ]))