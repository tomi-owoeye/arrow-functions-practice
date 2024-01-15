import { randomNumber } from "./05randomNumber.js";

test("randomNumber", () => {
    const n = randomNumber();

    expect(n).toBeGreaterThan(0);
    expect(n).toBeLessThan(11);
});
