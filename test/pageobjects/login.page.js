module.exports = class Login {
    get emailInput() { return $('#loginUsername') }
    get passwordInput() { return $('#loginPassword') }
    get continueButton() { return $('#continue-btn') }
    get loginButton() { return $('#login-btn') }
}  