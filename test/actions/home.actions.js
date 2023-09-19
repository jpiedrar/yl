const homeSelectors = require('../pageobjects/home.page')

module.exports = class HomeSelectors extends homeSelectors {
    async navigate(){
        browser.url('https://www.youngliving.com/us/en')
        browser.maximizeWindow()
    }

    async clickLoginButton(){
        await (await this.loginButton).click()
    }

    async clickShoppingCartViewCartButton(){
        await (await this.shoppingCartViewCartButton).click()
    }

    async search(criteria){
        await (await this.searchInput).setValue(criteria)
        await browser.keys("\uE007")
    }

    async addProductToCartFromQuickSearch(){
        await (await this.addProductToCartButton).click()
    }

    async getFirstProductName(){
        return await (await this.firstProductName).getText()
    }

    async getFirstProductDiscountPrince(){
        return await (await this.searchProductDiscountPrice).getText()
    }
}