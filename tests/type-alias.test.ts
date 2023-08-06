import { Category, Product } from "../src/type-alias";
describe("Data type", function () {
  it("should be declare", function () {
    const category: Category = {
      id: "123",
      name: "Ramadhanu Kadir Rachono",
    };

    const product: Product = {
      id: "123",
      name: "Ramadhanu Kadir Rachono",
      price: 1000000,
      category: category,
    };

    const person: { id: string; name: string; hobbies?: string } = {
      id: "123",
      name: "Ramadhanu Kadir Rachono",
    };

    console.info(person);

    console.info(category);
    console.info(product);
  });
});
