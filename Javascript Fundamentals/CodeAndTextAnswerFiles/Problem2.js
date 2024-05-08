function matchRegex(pattern, str) {

    const regex = new RegExp(pattern);

    return regex.test(str);
}


console.log(matchRegex(/\d/, "Hello")); // Output: false
console.log(matchRegex(/\d/, "Hello123")); // Output: true