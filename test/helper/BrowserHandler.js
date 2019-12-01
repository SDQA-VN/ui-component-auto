class BrowserHandling {
    /**
   * @param {string} url    url for navigate
   */
    navigate(url) {
        browser.windowHandleMaximize();
        browser.url(url);
        this.waitForPageReady();
    }

    /**
   * @returns {string}
   * @private
   */
    _getDocumentState() {
        const readyState = browser.execute(() => {
            return document.readyState;
        });

        return readyState;
    }

    /**
   * @param {int=} timeout    timeout in ms (default: 30000)
   * @param {int=} interval   interval between condition checks (default: 500)
   * @returns {BrowserHandling}
   */
    waitForPageReady(timeout = 5000, interval = 500) {
        browser.pause(1000);
        browser.waitUntil(
            () => {
                return (
                    this._getDocumentState().value === 'complete'
                );
            },
            timeout,
            'Page load timeout!',
            interval
        );
    }

    /**
   * @param {int=} window    window to focus
   */
    switchWindow(title) {
        // Handle 'Redirecting' window
        browser.pause(3000);
        
        var windows = browser.getTabIds();
        for (var i = 0; i <= windows.length; i++) {
            browser.switchTab(windows[i]);
            if (browser.getTitle().includes(title)) {
                break;
            }
        }
        this.waitForPageReady();
    }
}
module.exports = new BrowserHandling();