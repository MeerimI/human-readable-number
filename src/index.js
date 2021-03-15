module.exports = function toReadable(number) {

    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const a = 'hundred';
    let result = '';
    if (number == 0) {
        return 'zero';
    }
    if (number > 99) { result += `${digits[Math.floor(number / 100)]} ${a}` };
    if (number % 100 > 19) {
        result += ` ${tens[Math.floor(number % 100 / 10) - 2]}`
        if (number % 10 !== 0) {
            result += ` ${digits[Math.floor(number % 10)]}`;
        }
    }
    if (number % 100 <= 19 && number % 100 > 0) result += ` ${digits[Math.floor(number % 100)]}`;
    if ((number + '').length < 3) result = result.slice(1);
    return result;
}