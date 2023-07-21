import { capFirstLetter, catTwoStrings, secWord } from "./stringFunctions";

describe("capitalize the first letter of a word", () =>{
    test("takes letter of word[0] and capitalizes it", () => {
        expect(capFirstLetter("dog")).toBe("Dog");
    })
    test("takes letter of word[0] and does not capitalize", () => {
        expect(capFirstLetter("dog")).not.toBe("dog")
    })
})

describe("takes two strings and concatenates them", () =>{
    test("string1 + ' ' + string2 = 'string1 string2' ", () => {
        expect(catTwoStrings("bark", "bark")).toBe("bark bark");
    })
    test("string1 + ' ' + string2 = string1", () => {
        expect(catTwoStrings("bark", "bark")).not.toBe("bark");
    })
})

describe("takes the displays the second word in a sentence string", () =>{
    test("'My dog ate my homework' = 'dog'", () => {
        expect(secWord("My dog ate my homework")).toBe("dog");
    })
    test("'My dog ate my homework' = 'My'", () => {
        expect(secWord("My dog ate my homework")).not.toBe("My")
    })
})