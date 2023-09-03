const obscure_credit_card = require('./obscure_credit_card')

describe('obscure_credit_card function tests', () => {
    test('should obscure valid credit card number', () => {
        expect(obscure_credit_card("123456784863")).toBe("********4863");
    });

    test('should obscure valid credit card number with dashes', () => {
        expect(obscure_credit_card("1234-5678-9012-3457")).toBe("************3457");
    });

    test('should obscure valid credit card number with spaces', () => {
        expect(obscure_credit_card("1234 5678 9012 7641")).toBe("************7641");
    });

    test('should obscure valid credit card number with dashes', () => {
        const actual = obscure_credit_card("1234-5678-9012-9842");
        expect(actual).toBe("************9842");
    });
    
    test('should obscure valid credit card number with spaces', () => {
        const actual = obscure_credit_card("1234 5678 9012 8642");
        expect(actual).toBe("************8642");
    });
});

describe('obscure_credit_card function negative tests', () => {
    test('should return "Invalid Credit Card" for short credit card number', () => {
      expect(obscure_credit_card("12345")).toBe("Invalid Credit Card");
    });
  
    test('should return "Invalid Credit Card" for long credit card number', () => {
      expect(obscure_credit_card("1564834685679546103")).toBe("Invalid Credit Card");
    });
  
    test('should return "Invalid Credit Card" for invalid credit card number format', () => {
      expect(obscure_credit_card("12-34 56_789-01,23_4-56")).toBe("Invalid Credit Card");
    });
  });
