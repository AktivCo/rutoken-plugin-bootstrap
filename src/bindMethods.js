import getErrorCodesRussian from './errorCodes/ru';
import getErrorCodesEnglish from './errorCodes/en';
import PluginError from './pluginError';

/* eslint-disable prefer-rest-params */
function bindMethods(plugin) {
    const ru = getErrorCodesRussian(plugin.errorCodes);
    const en = getErrorCodesEnglish(plugin.errorCodes);

    const getCurrentErrorCodes = () => (this.locale === 'en'
        ? en
        : ru);

    Object.keys(plugin).forEach((key) => {
        if (plugin[key].prototype !== undefined) {
            /* eslint func-names: ["error", "never"] */
            this[key] = function () {
                return Promise.resolve().then(() => plugin[key].apply(this, arguments))
                    .catch((err) => {
                        throw new PluginError(err, key, getCurrentErrorCodes());
                    });
            };
        } else {
            this[key] = plugin[key];
        }
    });

    this.translateErrorByCode = (code) => {
        const locale = getCurrentErrorCodes();

        return locale[code];
    };
}

export default bindMethods;
