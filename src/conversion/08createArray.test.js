import { createArray } from "./08createArray";

test("createArray", () => {
    expect(createArray("one", "two")).toEqual(["one", "two"]);
});
