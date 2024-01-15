import { timesTable } from "./03timesTable.js";

test("timesTable (x5)", () => {
    expect(timesTable(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});
