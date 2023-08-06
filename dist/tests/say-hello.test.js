import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
    it("hello", function () {
        expect(sayHello("Danu")).toBe("Hello Danu");
    });
});
