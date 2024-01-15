import { isLessThan10 } from "./07isLessThan10.js";

test("isLessThan10", () => {
    expect(isLessThan10(8)).toBe(true);
    expect(isLessThan10(80)).toBe(false);
});
