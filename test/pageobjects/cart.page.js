module.exports = class Cart {
    get shippingNoticeModal() { return $('#gtm__modal') }
    get shippingNoticeModalUnderstandButton() { return $('#gtm__modal-btn-close') }
    get checkoutButton() { return $('//button[@data-testid="qa-cart-checkout"]') }
    get productName() { return $('//div[@data-testid="qa-product-name"]/span')}
    get productSalePrice() { return $('//div[contains(@class, "sale-price")]')}

}  