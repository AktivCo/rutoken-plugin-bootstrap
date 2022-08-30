import rutoken from '@aktivco/rutoken-plugin';
import BrowserCompatibility from './browserCompatibility';
import bindMethods from './bindMethods';
import bindAlgorithms from './bindAlgorithms';


import { NoInstalledPluginError } from './supportError';

class Plugin {
    init(locale = null) {
        const browserCompatibility = new BrowserCompatibility();

        return rutoken.ready
            .then(() => browserCompatibility.isCurrentBrowserSupported())
            .then(() => browserCompatibility.needToCheckInstalledExtension())
            .then((result) => (result ? rutoken.isExtensionInstalled() : true))
            .then((result) => {
                if (result) {
                    return rutoken.isPluginInstalled();
                }
                throw new NoInstalledPluginError(browserCompatibility.browser, browserCompatibility.os);
            })
            .then((result) => {
                if (result) {
                    return rutoken.loadPlugin();
                }

                throw new NoInstalledPluginError(browserCompatibility.browser, browserCompatibility.os, false);
            })
            .then((pluginObject) => {
                browserCompatibility.getSupportedBrowsersByPluginVersion(pluginObject.version);

                bindMethods.bind(this)(pluginObject);
                bindAlgorithms.bind(this)(pluginObject);
                this.setLocale(locale);

                return Promise.resolve(this);
            })
            .catch((err) => {
                throw err;
            });
    }

    setLocale(locale) {
        this.locale = locale;
    }
    
    getPlatformType() {
        const browserCompatibility = this.getBrowserCompatibility();

        return browserCompatibility.platform.type;
    }

    getBrowserCompatibility() {
        const browserCompatibility = new BrowserCompatibility();

        // detect ios safari with userAgent as desctop setting
        // https://stackoverflow.com/a/58064481/9811165
        if (window.navigator.maxTouchPoints > 0 && browserCompatibility.os.name === 'macOS') {
            //max mobile Ios width (iPhone 12 Pro) 1170px
            browserCompatibility.platform.type = window.screen.width <= 1170 ? "mobile" : "tablet";
        }

        return browserCompatibility;
    }
}

export default new Plugin();
