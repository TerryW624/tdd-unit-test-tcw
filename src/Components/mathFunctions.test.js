import { addTwoNumbers, divTwoNumbers, multTwoNumbers, diffTwoNumbers } from "./mathFunctions";

describe("two plus two is four", () =>{
    test("2 + 2 = 4", () => {
        expect(addTwoNumbers(2, 2)).toBe(4);
    })
    test("2 + 2 != 3", () => {
        expect(addTwoNumbers(2, 2)).not.toBe(3);
    })
})

describe("four divided by two is two", () =>{
    test("4/2 = 2", () => {
        expect(divTwoNumbers(4, 2)).toBe(2);
    })
    test("for num1 === 2; 4/2 = 2", () => {
        expect(divTwoNumbers(2, 4)).toBe(2);
    })
    test("4/2 != 3", () => {
        expect(divTwoNumbers(4, 2)).not.toBe(3);
    })
    test("for num1 === 2; 4/2 != 2/4", () => {
        let notTrue = 2/4;
        expect(divTwoNumbers(2, 4)).not.toBe(notTrue); 
    })
})


describe("two multiplied by two is four", () =>{
    test("2 * 2 = 4", () => {
        expect(multTwoNumbers(2, 2)).toBe(4);
    })
    test("2 * 2 != 3", () => {
        expect(multTwoNumbers(2, 2)).not.toBe(3)
    })
})

describe("four minus two is two", () =>{
    test("4 - 2 = 2", () => {
        expect(divTwoNumbers(4, 2)).toBe(2);
    })
    test("for num1 === 2; 4 - 2 = 2", () => {
        expect(divTwoNumbers(2, 4)).toBe(2);
    })
    test("4 - 2 = 2", () => {
        expect(divTwoNumbers(4, 2)).not.toBe(3);
    })
    test("for num1 === 2; 4 - 2 = 2", () => {
        let notTrue = 2 - 4;
        expect(divTwoNumbers(2, 4)).not.toBe(notTrue);
    })
})