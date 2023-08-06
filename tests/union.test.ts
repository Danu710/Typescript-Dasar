describe("Data type", function () {
  it("should be declare", function () {
    let sample: number | string | boolean = "danu";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should be declare", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 1;
      } else {
        return value;
      }
    }

    expect(process("string")).toBe("STRING");
    expect(process(100)).toBe(101);
    expect(process(true)).toBe(true);
  });
});
