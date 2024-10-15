function firstNonRepeatedChar(str) {
	const charCount = new Map();

    for (let i = 0; i < str.length; i++){
        const char = str[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let i = 0; i < str.length; i++){
        if (charCount.get(str[i]) === 1){
            return str[i];
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
