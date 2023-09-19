const checkoutSelectors = require('../pageobjects/checkout.page')

module.exports = class CheckoutSelectors extends checkoutSelectors {
    async clickContinueButton(){
        await (await this.continueButton).click()
    }

    async clickContinueWithoutReferralButton(){
        await (await this.continueWithoutReferralButton).click()
    }

    async fillShippingAddressForm(firstName, lastName, address1, address2, city, state, zipcode){
        await (await this.firstNameInput).setValue(firstName)
        await (await this.lastNameInput).setValue(lastName)
        await (await this.address1Input).setValue(address1)
        await (await this.address2Input).setValue(address2)
        await (await this.cityInput).setValue(city)
        await (await this.stateDropdown).setValue(state)
        await (await this.zipcodeInput).setValue(zipcode)
    }

    async clickContinueShippingMethodButton(){
        await (await this.clickContinueShippingMethodButton).click()
    }

    async fillCreditCardForm(firstName, lastName, cardNumber, month, year, ccv){
        await (await this.creditCardFirstName).setValue(firstName)
        await (await this.creditCardLastName).setValue(lastName)
        await (await this.creditCardCardNumber).setValue(cardNumber)
        await (await this.creditCardMonth).setValue(month)
        await (await this.creditCardYear).setValue(year)
        await (await this.creditCardCcv).setValue(ccv)
    }
}