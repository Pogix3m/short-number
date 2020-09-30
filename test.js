const assert = require("assert");
const shortNumber = require("./index");

describe("Short Numbers", () => {
    it("Positive Numbers", () => {
        assert.strictEqual(shortNumber(1), "1");
        assert.strictEqual(shortNumber(12), "12");
        assert.strictEqual(shortNumber(123), "123");

        assert.strictEqual(shortNumber(1000), "1K");
        assert.strictEqual(shortNumber(1234), "1.23K");
        assert.strictEqual(shortNumber(1756), "1.75K");
        assert.strictEqual(shortNumber(28728), "28.72K");

        assert.strictEqual(shortNumber(9_876_543), "9.87M");
        assert.strictEqual(shortNumber(48_342_147), "48.34M");
        assert.strictEqual(shortNumber(756_159_852), "756.15M");

        assert.strictEqual(shortNumber(1.93), "1");
        assert.strictEqual(shortNumber(52.7534), "52");
        assert.strictEqual(shortNumber(752.750), "752");
        assert.strictEqual(shortNumber(75243.13), "75.24K");
        assert.strictEqual(shortNumber(6248645.13), "6.24M");

        assert.strictEqual(shortNumber((154).toString().padEnd(69, "0")), "154Uvg");
    });

    it("Negative Numbers", () => {
        assert.strictEqual(shortNumber(-1), "-1");
        assert.strictEqual(shortNumber(-12), "-12");
        assert.strictEqual(shortNumber(-123), "-123");

        assert.strictEqual(shortNumber(-1000), "-1K");
        assert.strictEqual(shortNumber(-1234), "-1.23K");
        assert.strictEqual(shortNumber(-1756), "-1.75K");
        assert.strictEqual(shortNumber(-28728), "-28.72K");

        assert.strictEqual(shortNumber(-9_876_543), "-9.87M");
        assert.strictEqual(shortNumber(-48_342_147), "-48.34M");
        assert.strictEqual(shortNumber(-756_159_852), "-756.15M");

        assert.strictEqual(shortNumber((-154).toString().padEnd(70, "0")), "-154Uvg");

        assert.strictEqual(shortNumber(-1.93), "-1");
        assert.strictEqual(shortNumber(-52.7534), "-52");
        assert.strictEqual(shortNumber(-752.750), "-752");
        assert.strictEqual(shortNumber(-75243.13), "-75.24K");
        assert.strictEqual(shortNumber(-6248645.13), "-6.24M");
    });

    it("String", () => {
        assert.strictEqual(shortNumber("1"), "1");
        assert.strictEqual(shortNumber("12"), "12");
        assert.strictEqual(shortNumber("123"), "123");

        assert.strictEqual(shortNumber("1000"), "1K");
        assert.strictEqual(shortNumber("1234"), "1.23K");
        assert.strictEqual(shortNumber("1756"), "1.75K");
        assert.strictEqual(shortNumber("28728"), "28.72K");
        assert.strictEqual(shortNumber("3e66"), "3Uvg");

        assert.strictEqual(shortNumber("-1.93"), "-1");
        assert.strictEqual(shortNumber("-52.7534"), "-52");
        assert.strictEqual(shortNumber("-752.750"), "-752");
        assert.strictEqual(shortNumber("-75243.13"), "-75.24K");
        assert.strictEqual(shortNumber("-6248645.13"), "-6.24M");
    });


    it("Defined Suffix", () => {
        const suffix = [
            "Thousand",
            "Million",
            "Billion",
            "Trillion",
            "Quadrillion"
        ];
        assert.strictEqual(shortNumber(1, suffix), "1");
        assert.strictEqual(shortNumber(12, suffix), "12");
        assert.strictEqual(shortNumber(123, suffix), "123");

        assert.strictEqual(shortNumber(1000, suffix), "1Thousand");
        assert.strictEqual(shortNumber(1234, suffix), "1.23Thousand");
        assert.strictEqual(shortNumber(1756, suffix), "1.75Thousand");
        assert.strictEqual(shortNumber(28728, suffix), "28.72Thousand");

        assert.strictEqual(shortNumber(-9_876_543, suffix), "-9.87Million");
        assert.strictEqual(shortNumber(-48_342_147, suffix), "-48.34Million");
        assert.strictEqual(shortNumber(-756_159_852, suffix), "-756.15Million");
    });

    it("Errors", () => {
        const suffix = [
            "a",
            "b",
            "c",
            "d",
            "e"
        ];

        assert.throws(
            () => shortNumber("A"),
            {
                message: "Not a number"
            }
        );

        assert.throws(
            () => shortNumber((1).toString().padEnd(70, "0")),
            {
                message: "Insufficient suffix"
            }
        );

        assert.throws(
            () => shortNumber((1).toString().padEnd(19, "0"), suffix),
            {
                message: "Insufficient suffix"
            }
        );
    });
});
