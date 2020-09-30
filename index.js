module.exports = (inputNumber, optionalSuffixes) => {
    let number = +inputNumber;

    if (Number.isNaN(number)) {
        throw new Error("Not a number");
    }

    let sign = "";
    if(number < 0) {
        sign = "-";
        number = Math.abs(number);
    }

    const [
        wholeNumber,
    ] = number.toLocaleString("fullwide", {useGrouping: false}).split(".");
    const length = wholeNumber.length;
    const remainder = length % 3;
    const quotient = (length - remainder) / 3;

    const suffixes = optionalSuffixes && optionalSuffixes.length
        ? [...optionalSuffixes]
        : [
            "K",
            "M",
            "B",
            "T",
            "Qa",
            "Qi",
            "Sx",
            "Sp",
            "Oc",
            "No",
            "Dc",
            "Ud",
            "Dd",
            "Td",
            "Qad",
            "Qid",
            "Sxd",
            "Spd",
            "Ocd",
            "Nod",
            "Vg",
            "Uvg",
        ];
    suffixes.unshift("");

    const suffixIndex = remainder ? quotient : quotient - 1;
    if(suffixIndex > suffixes.length-1) {
        throw new Error("Insufficient suffix");
    }

    const leftLength = remainder || 3;
    const wholeNumberResult = wholeNumber.substring(0, leftLength);
    const decimal = wholeNumber.substring(leftLength, leftLength + 2);
    const decimalResult = +decimal ? `.${decimal.toString().padEnd(2, "0")}` : "";

    return `${sign}${wholeNumberResult}${decimalResult}${suffixes[suffixIndex]}`;
};
