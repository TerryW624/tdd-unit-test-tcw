function capFirstLetter(string) {
    // This will capitalize the fLetter of "string"
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function catTwoStrings(string1, string2) {
    // This will concatenate two strings
    return string1 + " " + string2;
}

function secWord(sentenceString) {
    //This will return the second word in a sentence string
    let secWordBeginning = sentenceString.indexOf(" ");
    let secWordEnding = sentenceString.indexOf(" ", secWordBeginning + 1);
    return sentenceString.substring(secWordBeginning + 1, secWordEnding);
}

export {capFirstLetter, catTwoStrings, secWord};