import { Seller } from "../src/seller";
import { Employee } from "../src/employee";
import { Manager } from "../src/employee";
import { Person } from "../src/person";
describe("enum", function () {
  it("should be declare", function () {
    const seller: Seller = {
      id: 1,
      name: "Awliyaa",
      nib: "123",
      npwp: "12345",
    };

    seller.name = "danu ganteng";

    console.info(seller);
  });

  it("should be declare", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(1, 2)).toBe(3);
    //console.info(add(1, 2));
  });

  it("should be declare", function () {
    interface StringArray {
      [index: number]: string;
    }

    const name: StringArray = ["Ramadhanu", "Kadir", "Rachono"];

    console.info([name[0], name[1]]);
  });

  it("should be declare", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "danu",
      address: "Bogor",
    };

    expect(dictionary.name).toBe("danu");
    expect(dictionary.address).toBe("Bogor");
  });

  it("should be declare", function () {
    const employee: Employee = {
      id: 1,
      name: "Ramadhanu",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: 2,
      name: "Danu",
      division: "IT",
      numberOfEmployees: 2,
    };

    console.info(manager);
  });

  it("should be declare", function () {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Ramadhanu",
      sayHello: function (name: string): string {
        return `Hello ${name}`;
      },
    };

    console.info(person.sayHello("eko"));
  });

  it("should support intersection types", function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "123",
      name: "Ramadhanu",
    };

    expect(domain.id).toBe("123");
    expect(domain.name).toBe("Ramadhanu");
  });

  it("should support type aserction", function () {
    const person: any = {
      name: "kadir",
      age: 20,
    };

    const person2: Person = person as Person;

    console.info(person2);
  });
});
