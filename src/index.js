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
        const browserCompatibility = new BrowserCompatibility();
        return browserCompatibility.platform.type;
    }
}

export default new Plugin();
