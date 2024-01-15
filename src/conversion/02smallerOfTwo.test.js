import { smallerOfTwo } from "./02smallerOfTwo.js";

test("smallerOfTwo", () => {
    expect(smallerOfTwo(6, -99)).toEqual(-99);
});
