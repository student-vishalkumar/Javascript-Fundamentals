// Function to search for specific character classes in a given string and return the matches
function searchCharacterClasses(str) {
    const digitPattern = /\d/g; // Matches any digit character
    const uppercasePattern = /[A-Z]/g; // Matches any uppercase letter
    const lowercasePattern = /[a-z]/g; // Matches any lowercase letter
    const specialCharPattern = /[^a-zA-Z0-9\s]/g; // Matches any special character (non-alphanumeric, non-space)

    const digits = str.match(digitPattern);
    const uppercaseLetters = str.match(uppercasePattern);
    const lowercaseLetters = str.match(lowercasePattern);
    const specialCharacters = str.match(specialCharPattern);

    return {
        digits: digits ? digits : [],
        uppercaseLetters: uppercaseLetters ? uppercaseLetters : [],
        lowercaseLetters: lowercaseLetters ? lowercaseLetters : [],
        specialCharacters: specialCharacters ? specialCharacters : []
    };
}

const sampleString = "Hello123! How are you today?";
const matches = searchCharacterClasses(sampleString);

console.log("Digits:", matches.digits); // Output: Digits: [ '1', '2', '3' ]
console.log("Uppercase Letters:", matches.uppercaseLetters); // Output: Uppercase Letters: [ 'H' ]
console.log("Lowercase Letters:", matches.lowercaseLetters); // Output: Lowercase Letters: [ 'e', 'l', 'l', 'o', 'o', 'w', 'a', 'r', 'e', 'y', 'o', 'u', 't', 'o', 'd', 'a', 'y' ]
console.log("Special Characters:", matches.specialCharacters); // Output: Special Characters: [ '!', '?' ]
