import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
  it("hello", function (): void {
    expect(sayHello("Danu")).toBe("Hello Danu");
  });
});
