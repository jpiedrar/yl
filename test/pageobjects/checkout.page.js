module.exports = class Checkout {
    get continueButton() { return $('//button[@data-testid="qa-referral-code-continue"]') }
    get continueWithoutReferralButton() { return $('//button[@data-testid="qa-confirm-yes"]') }
    get firstNameInput() { return $('#firstName]') }
    get lastNameInput() { return $('#lastName') }
    get address1Input() { return $('#addressLine1') }
    get address2Input() { return $('#addressLine2') }
    get cityInput() { return $('#city') }
    get stateDropdown() { return $('#stateList') }
    get zipcodeInput() { return $('#zip') }
    get continueShippingButton() { return $('//button[@data-testid="qa-ship-continue"]') }
    get continueShippingMethodButton() { return $('//button[@data-testid="qa-ship-methods-continue"]') }
    get creditCardFirstName() { return $('#cardFirstName') }
    get creditCardLastName() { return $('#cardLastName') }
    get creditCardCardNumber() { return $('#cardNumber') }
    get creditCardMonth() { return $('#expiryMonth') }
    get creditCardYear() { return $('#expiryYear') }
    get creditCardCcv() { return $('#cardCVV') }
}  