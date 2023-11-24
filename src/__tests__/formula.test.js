import serie from "../Formula/index.js"

describe("Should solve the given serie(10 n's)", () => {
  it("should get 0 with n=-10", () => {
    expect(serie(-10)).toBe(0);
  });
  it("should get 0 with n=0", () => {
    expect(serie(0)).toBe(0);
  });
  it("should get 0 with n=1", () => {
    expect(serie(1)).toBe(0);
  });
  it("should get 2 with n=0", () => {
    expect(serie(2)).toBe(0);
  });
  it("should get 13 with n=0", () => {
    expect(serie(3)).toBe(13);
  });
  it("should get 18 with n=4", () => {
    expect(serie(4)).toBe(18);
  });
  it("should get 24 with n=5", () => {
    expect(serie(5)).toBe(24);
  });
  it("should get 27 with n=6", () => {
    expect(serie(6)).toBe(27);
  });
  it("should get 33 with n=7", () => {
    expect(serie(7)).toBe(33);
  });
  it("should get 29 with n=8", () => {
    expect(serie(8)).toBe(29);
  });
});