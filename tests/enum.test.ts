import { Customer, CustomerType } from "../src/enum";
describe("enum", function () {
  it("should be declare", function () {
    const customer: Customer = {
      id: "123",
      name: "Ramadhanu Kadir Rachono",
      type: CustomerType.GOLD,
    };

    console.log(customer);
  });
});
