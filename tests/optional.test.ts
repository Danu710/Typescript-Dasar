//import { sayHello } from '../src/say-hello';

describe("Optional Parameter", function () {
  it("should be declare", function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }

    sayHello("Ramadhanu");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
