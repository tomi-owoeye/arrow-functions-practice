import { sayHello } from "./06sayHello.js";
import { jest } from "@jest/globals";

test("sayHello", () => {
    //Checking if a function has been called is a little tricky:
    const logSpy = jest.spyOn(console, "log");
    sayHello("Grace");
    expect(logSpy).toHaveBeenCalledWith("Hello, Grace!");
});
