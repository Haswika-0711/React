const filterByTerm= require('../filtered.js')

describe("Filter function", () => {
    it("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.com" },
            { id: 2, url: "https://www.url2.com" },
            { id: 3, url: "https://www.link3.com" }
        ];

        const output = [{ id: 3, url: "https://www.link3.com" }];

        expect(filterByTerm(input, "link")).toEqual(output);

        expect(filterByTerm(input, "LINK")).toEqual(output);
    });
});






//import jest from 'jest-cli'


// jest.unmock('../sum.js')

// describe('Example of jest', () => {
//     it('Sum Equality', () => {
//         const sum = require('../sum');
//         expect(sum(1, 2)).toBe(3);
       
//     });
// })

// const calc = require('../math')
// describe('Math calculation check', () => {
//     test("Adding 1 + 1 equals 2", () => {
//         expect(calc.sum(1, 1)).toBe(2)
//     })
//     test("Multiplying 1 * 1 equals 1", () => {
//         expect(calc.mul(1, 1)).toBe(1)
//     })
//     test("Subtracting 1 - 1 equals 0", () => {
//         expect(calc.sub(1, 1)).toBe(0)
//     })
//     test("Dividing 1 / 1 equals 1", () => {
//         expect(calc.div(1, 1)).toBe(1)
//     })

// });
