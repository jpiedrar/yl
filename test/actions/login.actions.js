const loginSelectors = require('../pageobjects/login.page')

module.exports = class LoginSelectors extends loginSelectors {
    async fillLoginForm(username, password){
        await ( await this.emailInput).setValue(username)
        await ( await this.continueButton).click()
        await ( await this.passwordInput).setValue(password)
        await ( await this.loginButton).click()
    }
}