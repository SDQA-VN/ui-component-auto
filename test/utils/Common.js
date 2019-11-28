const Login = require('../pageObject/credentials/Login');
const Logout = require('../pageObject/credentials/Logout');
const ReturnElement = require('../utils/ReturnElement');
const CONFIG = require('../config.json');
const CONSTANT = require('../constant');

logInSlash = () => {
    console.log('!!! Login !!!');
    browser.url(CONSTANT.PATH.APP_INDEX);
    browser.windowHandleFullscreen();
    Login.submitLoginFormWithValidCred(CONFIG.credentials.username, CONFIG.credentials.password);
    return ReturnElement.waitForURLCorrect(CONSTANT.PATH.APP_INDEX);
};

logOutSlash = () => {
    console.log('!!! Logout !!!');
    Logout.navigateToLoginPage();
    return this;
};

module.exports = {
    logInSlash: logInSlash,
    logOutSlash: logOutSlash,
} 
