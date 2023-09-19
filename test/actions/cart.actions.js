const cartSelectors = require('../pageobjects/cart.page')

module.exports = class CartSelectors extends cartSelectors {
    async isShippingNoticeModalDisplayed(){
        return await this.shippingNoticeModal.isDisplayed()
    }

    async closeShippingNotice(){
        await ( await this.shippingNoticeModalUnderstandButton).click()
    }

    async clickCheckoutButton(){
        await (await this.checkoutButton).click()
    }

    async getProductName(){
        return await (await this.productName).getText()
    }

    async getProductSalePrice(){
        return await (await this.productSalePrice).getText()
    }
}