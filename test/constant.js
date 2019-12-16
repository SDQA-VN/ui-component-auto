const CONFIG = require('./config.json');
/**
 * Environment constants
 */
const constant = function () {
    return {
        PATH: {
            BASE_URL: `https://${CONFIG.domain}/`,
            LOGIN_URL: `https://${CONFIG.domain}/login`,
            LOGOUT_URL: `https://${CONFIG.domain}/logout`,
            APP_INDEX: `https://${CONFIG.domain}/k/${CONFIG.appId}/`,
            APP_SETTING_INDEX: `https://${CONFIG.domain}/k/admin/app/flow?app=${CONFIG.appId}#section=settings`,
            APP_SETTING_JS_CUSTOMIZE: `https://${CONFIG.domain}/k/admin/app/customize?app=${CONFIG.appId}`,
        }
    };
};

module.exports = constant();
