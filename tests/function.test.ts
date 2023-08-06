import { sayHello } from "../src/say-hello";
describe("Function Type", function () {
  it("should be declare", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Danu")).toBe("Hello Danu");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Danuwww");
  });

  it("support default value", function () {
    function sayHello(name: string = "Danu"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Danu");
    expect(sayHello("Kadir")).toBe("Hello Kadir");
  });

  it("support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3)).toBe(6);
  });

  it("support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("Danu")).toBe("Hello Danu");
    expect(sayHello("Kadir", "Rachono")).toBe("Hello Kadir Rachono");
  });

  it("function Overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "number") {
        return value + 1;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      }
    }

    expect(callMe(1)).toBe(2);
    expect(callMe("Ramadhanu")).toBe("RAMADHANU");
  });

  it("function parameter", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    //expect(sayHello("Danu", toUpper)).toBe("Hello DANU");

    expect(sayHello("Danu", (name) => name.toUpperCase())).toBe("Hello DANU");
  });
});
