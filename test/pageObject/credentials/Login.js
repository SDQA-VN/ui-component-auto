const XPATH_USERNAME = '//*[@id="username-:0-text"]';
const XPATH_PASSWORD = '//*[@id="password-:1-text"]';
const XPATH_LOGIN_BTN = '//*[@id="login-form-outer"]/form/div[4]/div[2]/input';

class Login {
    setUsername(username) {
        $(XPATH_USERNAME).setValue(username);
        return this;
    }
    setPassword(password) {
        $(XPATH_PASSWORD).setValue(password);
        return this;
    }
    submitLoginFormWithValidCred(username, password) {
        this.setUsername(username);
        this.setPassword(password);
        $(XPATH_LOGIN_BTN).click();
        return this;
    }
}
module.exports = new Login();