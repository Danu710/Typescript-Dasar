describe("Object", function () {
  it("should be declare", function () {
    const person: { id: string; name: string } = {
      id: "123",
      name: "Ramadhanu Kadir Rachono",
    };

    console.info(person);

    person.name = "awliya";
    console.info(person);
  });
});
