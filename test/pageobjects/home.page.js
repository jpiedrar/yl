module.exports = class Home {
    get loginButton() { return $('//p[text()="Sign In"]') }
    get searchInput() { return $('#searchInput') }
    get addProductToCartButton() { return $('//button[text()="Add to Cart"]') }
    get searchProductDiscountPrice() { return $('//span[@data-testid="qa-product-sale-price"]/div/span[2]') }
    get searchName() { return $('//span[@data-testid="qa-product-name"') }
    get shoppingCartModalTitle() { return $('#minicart-title') }
    get shoppingCartViewCartButton() { return $('//button[@data-testid="qa-cartcheckout"]')}
}  