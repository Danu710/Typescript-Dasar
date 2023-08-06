describe("Array", function () {
  it("should be declare", function () {
    const name: string[] = ["Ramadhanu", "Kadir", "Rachono"];
    const number: number[] = [1, 2, 3];

    console.info(name, number);
  });

  it("should be declare", function () {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];

    console.info(hobbies);

    //hobbies[0] = "Membaca";
  });

  it("should be declare", function () {
    const person: readonly [string, string, number] = ["Ramadhanu", "Kadir", 1];
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
