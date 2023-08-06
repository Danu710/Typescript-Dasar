describe("ternaryOperator", () => {
  it("should be declare", () => {
    const examValue = 90;

    const say =
      examValue >= 90 ? "good" : examValue >= 60 ? "standard" : "try again";

    console.info(say);
  });
});
