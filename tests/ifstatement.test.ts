describe("ifstatement", function () {
  it("should be declare", function () {
    const examValue = 78;

    if (examValue > 90) {
      console.info("good");
    } else if (examValue > 60) {
      console.info("standard");
    } else {
      console.info("try again");
    }
  });
});
