import { createObject } from "./09createObject";

test("createObject", () => {
    const expectedObject = {
        playerName: "Hermione",
        highScore: 100,
    };
    const actualObject = createObject("Hermione", 100);
    expect(actualObject).toEqual(expectedObject);
});
