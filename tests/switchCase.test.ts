import { sayHello } from "../src/say-hello";
describe("Function Type", function () {
  it("should be declare", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "Danu":
          return "Hi Danu";
        case "Kadir":
          return "Hi Kadir";
        default:
          return "Hi";
      }
    }

    console.info(sayHello("Danu"));
    sayHello("Ramadhanu");
  });
});
