describe("Data type", function () {
  it("should be declare", function () {
    const person: any = {
      name: "Ramadhanu Kadir Rachono",
      balance: 1000000,
      isMale: true,
    };

    person.balance = 1000;

    console.info(person);
  });
});
